"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ docId: docSnap.id, ...docSnap.data() });
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="font-black text-slate-300 uppercase tracking-[0.3em] animate-pulse">Уншиж байна...</p>
    </div>
  );

  if (!product) return (
    <div className="min-h-screen flex items-center justify-center font-black uppercase italic">
      Бүтээгдэхүүн олдсонгүй.
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Зүүн тал: Үндсэн зураг */}
          <div className="relative aspect-square rounded-[3rem] overflow-hidden bg-[#F8F9FA] border border-slate-100 shadow-2xl">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Баруун тал: Мэдээлэл */}
          <div className="flex flex-col space-y-10">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="px-4 py-1.5 bg-[#00CED1] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-[#00CED1]/30">
                  {product.category}
                </span>
                <span className="text-slate-300 font-mono text-xs">ID: {product.id}</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase italic">
                {product.name}
              </h1>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-5xl font-light text-slate-900">
                {product.price?.toLocaleString()} <span className="text-xl">₮</span>
              </div>
              <div className="flex flex-col gap-1 border-l-2 border-slate-100 pl-8 text-[11px] font-black uppercase tracking-wider">
                <span className="text-[#00CED1]">Point: {product.pointValue}</span>
                <span className="text-slate-400">Bonus: {product.bonusValue}</span>
              </div>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed font-medium max-w-xl">
              {product.description}
            </p>

            <button 
              onClick={() => {
                addItem({ ...product, id: product.docId });
                alert("Сагсанд амжилттай нэмэгдлээ!");
              }} 
              className="group relative w-full lg:w-max px-16 py-6 bg-slate-900 text-white rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="relative z-10 font-black text-xl uppercase tracking-widest">Сагсанд нэмэх</span>
              <div className="absolute inset-0 bg-[#00CED1] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>

        {/* Доод тал: Дэлгэрэнгүй зургууд */}
        {product.detailsImages && product.detailsImages.length > 0 && (
          <div className="mt-32 space-y-12">
            <div className="flex items-center gap-6">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-slate-300 italic whitespace-nowrap">
                Product Details
              </h2>
              <div className="h-px w-full bg-slate-100"></div>
            </div>
            
            {/* grid-cols-1 болгож зургуудыг бүтэн өргөнөөр нь дарааллуулбал илүү тохиромжтой */}
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
              {product.detailsImages.map((img: string, index: number) => (
                <div 
                  key={index} 
                  className="w-full rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-100 shadow-sm"
                >
                  <img 
                    src={img} 
                    alt={`${product.name} detail ${index + 1}`} 
                    className="w-full h-auto object-contain" // Зургийг бүтнээр нь харуулна
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}