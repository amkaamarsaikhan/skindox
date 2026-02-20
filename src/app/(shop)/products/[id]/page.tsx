"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { ALL_PRODUCTS } from "@/constants/products";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const addItem = useCartStore((state) => state.addItem);
  const product = ALL_PRODUCTS.find((p) => p.id === id);

  if (!product) return <div className="p-40 text-center font-bold">Бүтээгдэхүүн олдсонгүй.</div>;

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="container mx-auto px-4 pt-10 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Зүүн тал: Үндсэн зураг */}
          <div className="sticky top-24">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Баруун тал: Мэдээлэл */}
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-[#00CED1] font-black uppercase tracking-[0.2em] text-xs">
                {product.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
                {product.name}
              </h1>

              <div className="flex flex-col gap-4 pt-2">
                <div className="text-4xl font-light text-slate-900">
                  {product.price.toLocaleString()} ₮
                </div>

                <div className="flex gap-3">
                  {product.pointValue && (
                    <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Point Value</p>
                      <p className="text-sm font-black text-[#00CED1]">{product.pointValue}</p>
                    </div>
                  )}
                  {product.bonusValue && (
                    <div className="bg-slate-50 border border-slate-200 px-4 py-2 rounded-2xl">
                      <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Bonus Value</p>
                      <p className="text-sm font-black text-purple-600">{product.bonusValue}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Тайлбар хэсэг */}
            <div className="space-y-4 border-t border-slate-100 pt-8">
              <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Бүтээгдэхүүний тайлбар</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">
                {product.description}
              </p>
            </div>

            <button
              onClick={() => {
                addItem(product);
                alert("Сагсанд амжилттай нэмэгдлээ!");
              }}
              className="w-full py-6 bg-slate-900 text-white rounded-full font-black text-xl hover:bg-[#00CED1] transition-all shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              САГСАНД НЭМЭХ
            </button>
          </div>
        </div>

        {/* ШИНЭ: Дэлгэрэнгүй тайлбар зургууд (detailsImages) */}
        {product.detailsImages && product.detailsImages.length > 0 && (
          <div className="mt-16 space-y-6 max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
                Detailed Information
              </h2>
            </div>

            {product.detailsImages.map((imgUrl, index) => (
              <div key={index} className="relative w-full flex justify-center">
                <img
                  src={imgUrl}
                  alt={`${product.name} detail ${index + 1}`}
                  className="w-full h-auto object-contain rounded-xl shadow-sm border border-slate-50"
                />
              </div>
            ))}
          </div>
        )}

        {/* Доод хэсэг: Инфографик маягийн заавар */}
        <div className="mt-32 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Scientific Skin Solution
            </h2>
            <p className="text-slate-500 font-medium">
              SKINDOX-ийн бүтээгдэхүүнүүд нь арьсны микробиомыг хамгаалж, эсийн түвшинд нөхөн төлжүүлэх зорилготой.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-900 text-white rounded-[2.5rem] p-12 flex flex-col justify-center">
              <h4 className="text-2xl font-black mb-6 uppercase tracking-tight">Хэрэглэх заавар</h4>
              <ul className="space-y-4 text-slate-300 font-medium">
                <li className="flex gap-4">
                  <span className="text-[#00CED1] font-bold">01.</span> Арьсаа сайтар цэвэрлэнэ.
                </li>
                <li className="flex gap-4">
                  <span className="text-[#00CED1] font-bold">02.</span> Тохирох хэмжээгээр авч арьсандаа жигд түрхэнэ.
                </li>
                <li className="flex gap-4">
                  <span className="text-[#00CED1] font-bold">03.</span> Арьсны бүтэц дагуу зөөлөн иллэг хийж шингээнэ.
                </li>
              </ul>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/skincare-routine.jpg"
                alt="skincare routine"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}