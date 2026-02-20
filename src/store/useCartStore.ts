import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { db, auth } from "@/lib/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { Product } from "@/constants/products";

interface CartItem extends Product {
  quantity: number;
}

interface PaymentData {
  invoiceId: string | null;
  qrText: string | null;
  qrImage: string | null;
  urls: any[] | null;
}

// Хүргэлтийн мэдээллийн бүтэц
interface ShippingAddress {
  phone: string;
  address: string;
  district: string;
  note: string;
}

interface CartState {
  items: CartItem[];
  paymentData: PaymentData;
  shippingAddress: ShippingAddress; // Шинээр нэмэгдсэн
  syncWithFirestore: (userId: string) => Promise<void>;
  addItem: (product: Product) => Promise<void>;
  updateQuantity: (id: string, quantity: number) => Promise<void>;
  removeItem: (id: string) => Promise<void>;
  clearCart: () => Promise<void>;
  setPaymentData: (data: any) => void;
  resetPayment: () => void;
  setShippingAddress: (address: Partial<ShippingAddress>) => void; // Шинээр нэмэгдсэн
  getTotalPrice: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      paymentData: {
        invoiceId: null,
        qrText: null,
        qrImage: null,
        urls: null,
      },
      // Хүргэлтийн анхны утга
      shippingAddress: {
        phone: "",
        address: "",
        district: "Баянзүрх",
        note: "",
      },

      setPaymentData: (data) => set({
        paymentData: {
          invoiceId: data.invoice_id,
          qrText: data.qr_text,
          qrImage: data.qr_image,
          urls: data.urls,
        }
      }),

      resetPayment: () => set({
        paymentData: { invoiceId: null, qrText: null, qrImage: null, urls: null }
      }),

      // Хүргэлтийн хаяг шинэчлэх функц
      setShippingAddress: (data) => set((state) => ({
        shippingAddress: { ...state.shippingAddress, ...data }
      })),

      syncWithFirestore: async (userId) => {
        if (!userId) return;
        try {
          const docRef = doc(db, "carts", userId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            set({ items: Array.isArray(data.items) ? data.items : [] });
          }
        } catch (error) {
          console.error("Firestore sync error:", error);
        }
      },

      addItem: async (product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === product.id);
        const newItems = existingItem
          ? currentItems.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...currentItems, { ...product, quantity: 1 }];

        set({ items: newItems });
        const user = auth.currentUser;
        if (user) {
          await setDoc(doc(db, "carts", user.uid), { items: newItems, updatedAt: new Date().toISOString() }, { merge: true });
        }
      },

      updateQuantity: async (id, quantity) => {
        const newItems = get().items.map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        set({ items: newItems });
        const user = auth.currentUser;
        if (user) {
          await updateDoc(doc(db, "carts", user.uid), { items: newItems });
        }
      },

      removeItem: async (id) => {
        const newItems = get().items.filter((item) => item.id !== id);
        set({ items: newItems });
        const user = auth.currentUser;
        if (user) {
          await updateDoc(doc(db, "carts", user.uid), { items: newItems });
        }
      },

      clearCart: async () => {
        set({ 
          items: [], 
          paymentData: { invoiceId: null, qrText: null, qrImage: null, urls: null } 
        });
        const user = auth.currentUser;
        if (user) {
          await updateDoc(doc(db, "carts", user.uid), { items: [] });
        }
      },

      getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
      getItemCount: () => get().items.reduce((total, item) => total + item.quantity, 0),
    }),
    {
      name: "skindox-cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);