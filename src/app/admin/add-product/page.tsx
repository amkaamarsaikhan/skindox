"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { 
  collection, 
  addDoc, 
  getDocs, 
  deleteDoc, 
  doc, 
  orderBy, 
  query, 
  serverTimestamp 
} from "firebase/firestore";
import AdminGuard from "@/components/admin/admin-guard"; // Хамгаалалтын компонент

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  // Firebase-ээс бараануудыг татах
  const fetchProducts = async () => {
    try {
      const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      setProducts(querySnapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => { 
    fetchProducts(); 
  }, []);

  // Форм илгээх функц
  async function handleSubmit(formData: FormData) {
    setLoading(true);
    try {
      const detailsImagesRaw = formData.get("detailsImages") as string;
      const productData = {
        name: formData.get("name") as string,
        price: Number(formData.get("price")),
        category: formData.get("category") as string,
        image: formData.get("image") as string,
        description: formData.get("description") as string,
        pointValue: formData.get("pointValue") as string,
        bonusValue: formData.get("bonusValue") as string,
        detailsImages: detailsImagesRaw ? detailsImagesRaw.split(",").map(i => i.trim()) : [],
        // Шинээр нэмж буй бараанд өвөрмөц ID оноох (Миграцийн биш тул)
        id: `custom-${Date.now()}`, 
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "products"), productData);
      alert("Бараа амжилттай нэмэгдлээ!");
      
      const form = document.getElementById("add-form") as HTMLFormElement;
      if (form) form.reset();
      
      fetchProducts();
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Алдаа гарлаа!");
    } finally {
      setLoading(false);
    }
  }

  // Бараа устгах функц
  const handleDelete = async (docId: string, name: string) => {
    if (confirm(`"${name}"-г устгах уу?`)) {
      try {
        await deleteDoc(doc(db, "products", docId));
        fetchProducts();
      } catch (error) {
        alert("Устгахад алдаа гарлаа.");
      }
    }
  };

  return (
    <AdminGuard>
      <div className="max-w-5xl mx-auto py-12 px-6">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-black italic uppercase tracking-tighter">Admin / Inventory</h1>
          <div className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-3 py-1 rounded-full uppercase">
            Authorized Access
          </div>
        </div>

        {/* Шинэ бараа нэмэх форм */}
        <form 
          id="add-form" 
          action={handleSubmit} 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 mb-12"
        >
          <div className="space-y-4">
            <input name="name" placeholder="Барааны нэр" required className="w-full p-4 bg-slate-50 rounded-xl outline-none border border-transparent focus:border-slate-200 transition-all" />
            <div className="grid grid-cols-2 gap-4">
              <input name="price" type="number" placeholder="Үнэ" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
              <select name="category" className="w-full p-4 bg-slate-50 rounded-xl outline-none appearance-none">
                <option value="Serum">Serum</option>
                <option value="Cream">Cream</option>
                <option value="Toner">Toner</option>
                <option value="Mask">Mask</option>
                <option value="Cleanser">Cleanser</option>
              </select>
            </div>
            <input name="pointValue" placeholder="PV (Жишээ: 39,000PV)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
            <input name="bonusValue" placeholder="BV (Жишээ: 17,700BV)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          </div>

          <div className="space-y-4">
            <input name="image" placeholder="Main Image URL" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
            <input name="detailsImages" placeholder="Detail Images URLs (таслалаар зааглах)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
            <textarea name="description" placeholder="Тайлбар" rows={4} className="w-full p-4 bg-slate-50 rounded-xl outline-none resize-none" />
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full py-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#00CED1] transition-all disabled:opacity-50"
            >
              {loading ? "Хадгалж байна..." : "БҮТЭЭГДЭХҮҮН НЭМЭХ"}
            </button>
          </div>
        </form>

        {/* Одоо байгаа бараануудын жагсаалт */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b">
              <tr>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400">Бүтээгдэхүүн</th>
                <th className="p-6 text-[10px] font-black uppercase text-slate-400 text-right">Үйлдэл</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {products.map(p => (
                <tr key={p.docId} className="hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border bg-white">
                      <img src={p.image} className="w-full h-full object-cover" alt="" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-700">{p.name}</div>
                      <div className="text-[9px] text-slate-400 font-mono uppercase">ID: {p.id}</div>
                    </div>
                  </td>
                  <td className="p-6 text-right">
                    <button 
                      onClick={() => handleDelete(p.docId, p.name)} 
                      className="text-red-500 font-black text-[10px] uppercase underline hover:text-red-700"
                    >
                      Устгах
                    </button>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={2} className="p-10 text-center text-slate-300 font-bold uppercase italic text-sm">
                    Бараа олдсонгүй
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminGuard>
  );
}