"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, deleteDoc, doc, orderBy, query, serverTimestamp } from "firebase/firestore";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<any[]>([]);

  const fetchProducts = async () => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    setProducts(querySnapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() })));
  };

  useEffect(() => { fetchProducts(); }, []);

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
        id: `custom-${Date.now()}`, 
        createdAt: serverTimestamp(),
      };
      await addDoc(collection(db, "products"), productData);
      alert("Амжилттай!");
      (document.getElementById("add-form") as HTMLFormElement).reset();
      fetchProducts();
    } finally { setLoading(false); }
  }

  const handleDelete = async (docId: string, name: string) => {
    if (confirm(`"${name}"-г устгах уу?`)) {
      await deleteDoc(doc(db, "products", docId));
      fetchProducts();
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-black mb-8 italic uppercase tracking-tighter">Admin / Inventory</h1>
      <form id="add-form" action={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 mb-12">
        <div className="space-y-4">
          <input name="name" placeholder="Барааны нэр" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          <div className="grid grid-cols-2 gap-4">
            <input name="price" type="number" placeholder="Үнэ" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
            <select name="category" className="w-full p-4 bg-slate-50 rounded-xl outline-none">
              <option value="Serum">Serum</option><option value="Cream">Cream</option><option value="Toner">Toner</option><option value="Mask">Mask</option><option value="Cleanser">Cleanser</option>
            </select>
          </div>
          <input name="pointValue" placeholder="PV (Жишээ: 39,000PV)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          <input name="bonusValue" placeholder="BV (Жишээ: 17,700BV)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
        </div>
        <div className="space-y-4">
          <input name="image" placeholder="Main Image URL" required className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          <input name="detailsImages" placeholder="Detail Images URLs (comma separated)" className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          <textarea name="description" placeholder="Тайлбар" rows={4} className="w-full p-4 bg-slate-50 rounded-xl outline-none" />
          <button type="submit" disabled={loading} className="w-full py-5 bg-black text-white rounded-xl font-black uppercase tracking-widest hover:bg-[#00CED1] transition-all">
            {loading ? "Saving..." : "ADD PRODUCT"}
          </button>
        </div>
      </form>

      <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
        <table className="w-full text-left">
          <tbody className="divide-y divide-slate-100">
            {products.map(p => (
              <tr key={p.docId} className="hover:bg-slate-50/50">
                <td className="p-4 flex items-center gap-4">
                  <img src={p.image} className="w-10 h-10 rounded-lg object-cover border" />
                  <div>
                    <div className="font-bold text-slate-700">{p.name}</div>
                    <div className="text-[9px] text-slate-400 font-mono">ID: {p.id}</div>
                  </div>
                </td>
                <td className="p-4 text-right">
                  <button onClick={() => handleDelete(p.docId, p.name)} className="text-red-500 font-black text-[10px] uppercase underline">Устгах</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}