"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/product-card";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function ProductsListContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");

  const searchQuery = searchParams.get("search")?.toLowerCase().trim() || "";
  const idsFromUrl = searchParams.get("ids");

  useEffect(() => {
    async function fetchData() {
      try {
        const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({ 
          docId: doc.id, 
          ...doc.data() 
        }));
        setProducts(data);
        
        const uniqueCats = ["All", ...Array.from(new Set(data.map((p: any) => p.category).filter(Boolean)))];
        setCategories(uniqueCats as string[]);
      } finally { setLoading(false); }
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter((p: any) => {
    if (searchQuery) return p.name?.toLowerCase().includes(searchQuery);
    if (idsFromUrl) {
      const idArray = idsFromUrl.toLowerCase().split(",").map(id => id.trim());
      // Firebase дээр хадгалагдсан 'id' (legacy id)-тай харьцуулна
      return p.id && idArray.includes(String(p.id).toLowerCase());
    }
    return activeCategory === "All" || p.category === activeCategory;
  });

  if (loading) return <div className="py-40 text-center font-black opacity-20 uppercase tracking-widest text-xs">Уншиж байна...</div>;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black uppercase italic tracking-tighter text-slate-900">
            {searchQuery ? `"${searchQuery}"` : idsFromUrl ? "Багц бүтээгдэхүүн" : "Shop"}
          </h1>
          {(searchQuery || idsFromUrl) && (
            <button onClick={() => window.location.href = '/products'} className="text-[#00CED1] text-[10px] font-black underline uppercase mt-2">Буцах</button>
          )}
        </div>
        
        {!idsFromUrl && !searchQuery && (
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? "bg-[#00CED1] text-white shadow-lg" : "bg-white border text-slate-500 hover:bg-slate-100"}`}>{cat}</button>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.docId} product={{ ...product, id: product.docId }} />
        ))}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return <div className="min-h-screen bg-slate-50"><Suspense><ProductsListContent /></Suspense></div>;
}