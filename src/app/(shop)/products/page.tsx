"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/product/product-card";
import { ALL_PRODUCTS, CATEGORIES } from "@/constants/products";

function ProductsListContent() {
  const searchParams = useSearchParams();
  
  // URL-аас параметрүүдийг унших
  const idsFromUrl = searchParams.get("ids"); // Багцаар шүүхэд ашиглана
  const searchQuery = searchParams.get("search")?.toLowerCase() || ""; // Navbar-аас хайхад ашиглана
  
  const [activeCategory, setActiveCategory] = useState("All");

  // --- ШҮҮХ ЛОГИК (Priority: Хайлт > Багц > Ангилал) ---
  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    // 1. Хэрэв Navbar-аас хайлт хийсэн бол
    if (searchQuery) {
      return (
        product.name.toLowerCase().includes(searchQuery) || 
        product.category.toLowerCase().includes(searchQuery)
      );
    }

    // 2. Хэрэв URL дээр ID-нууд байвал (Сонгосон багц)
    if (idsFromUrl) {
      const idArray = idsFromUrl.split(",");
      return idArray.includes(product.id);
    }

    // 3. Хэрэв хайлт болон ID байхгүй бол Ангиллаар шүүх
    if (activeCategory === "All") return true;
    return product.category === activeCategory;
  });

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6 italic">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">
            {searchQuery 
              ? `"${searchQuery}" хайлт` 
              : idsFromUrl 
              ? "Сонгосон багц" 
              : "Дэлгүүр"}
          </h1>
          <p className="text-slate-500 mt-2 font-medium">
            {searchQuery 
              ? `${filteredProducts.length} илэрц олдлоо` 
              : idsFromUrl 
              ? "Таны сонирхсон багцын бүтээгдэхүүнүүд" 
              : "SKINDOX-ийн шинжлэх ухааны үндэслэлтэй бүтээгдэхүүнүүд"}
          </p>
          
          {/* Хэрэв шүүгдсэн төлөвт (Хайлт эсвэл ID) байвал "Буцах" товч харуулах */}
          {(idsFromUrl || searchQuery) && (
            <button 
              onClick={() => window.location.href = '/products'} 
              className="mt-4 text-[#00CED1] text-[10px] font-black underline decoration-2 underline-offset-4 uppercase tracking-widest"
            >
              БҮХ БАРААГ ХАРАХ
            </button>
          )}
        </div>

        {/* Ангиллын товчлуурууд - Хайлт болон ID-аар шүүгээгүй үед л харагдана */}
        {!searchQuery && !idsFromUrl && (
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                  activeCategory === cat
                    ? "bg-[#00CED1] text-white shadow-lg shadow-[#00CED1]/30"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* БҮТЭЭГДЭХҮҮНИЙ GRID */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-slate-200">
          <p className="text-slate-400 font-black uppercase text-xs tracking-widest italic">
            Уучлаарай, илэрц олдсонгүй.
          </p>
          <button 
            onClick={() => window.location.href = '/products'} 
            className="mt-4 text-[#00CED1] text-xs font-bold underline uppercase tracking-tighter"
          >
            Бүх барааг харах
          </button>
        </div>
      )}
    </>
  );
}

// Next.js App Router-д useSearchParams ашиглахдаа заавал Suspense-оор орооно
export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container mx-auto px-4">
        <Suspense fallback={
          <div className="flex justify-center items-center py-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00CED1]"></div>
          </div>
        }>
          <ProductsListContent />
        </Suspense>
      </div>
    </div>
  );
}