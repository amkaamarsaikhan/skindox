"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore"; 
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();
  
  // Hydration алдаанаас сэргийлэх
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-gray-50" />; // Ачаалж байх үед хоосон харуулна
  }

  const subtotal = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-3xl font-black text-slate-900 tracking-tight">Таны сагс</h1>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Барааны жагсаалт */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between rounded-3xl bg-white p-6 shadow-sm border border-gray-100 transition-hover hover:shadow-md">
                  <div className="flex items-center gap-6 w-full">
                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl border border-gray-50 bg-gray-50">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-slate-800 leading-tight mb-1">{item.name}</h3>
                      <p className="text-[#00CED1] font-black text-lg">{item.price.toLocaleString()} ₮</p>
                      <p className="text-xs text-slate-400 mt-1 uppercase font-bold tracking-wider">{item.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between w-full sm:w-auto gap-8 mt-6 sm:mt-0 pt-4 sm:pt-0 border-t sm:border-t-0 border-gray-50">
                    <div className="flex items-center bg-slate-50 rounded-full p-1 border border-slate-100">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 font-bold text-slate-800">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-full transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="text-red-400 hover:text-red-600 transition p-2"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Төлбөрийн хураангуй */}
            <div className="rounded-[2.5rem] bg-white p-8 shadow-xl shadow-slate-200/50 border border-gray-100 h-fit sticky top-24">
              <h2 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tight">Захиалгын хэсэг</h2>
              <div className="space-y-4 border-b border-slate-50 pb-6">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Барааны нийт үнэ</span>
                  <span className="text-slate-900 font-bold">{subtotal.toLocaleString()} ₮</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Хүргэлт</span>
                  <span className="text-green-500 font-bold">Үнэгүй</span>
                </div>
              </div>
              <div className="flex justify-between py-6 text-2xl font-black text-slate-900">
                <span>Нийт:</span>
                <span className="text-[#00CED1]">{subtotal.toLocaleString()} ₮</span>
              </div>
              <Link href="/checkout">
                <button className="w-full rounded-full bg-slate-900 py-5 font-black text-white hover:bg-[#00CED1] transition-all shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                  ТӨЛБӨР ТӨЛӨХ
                </button>
              </Link>
              <div className="mt-6 flex flex-col items-center gap-3">
                 <div className="flex items-center gap-2 opacity-30 grayscale">
                    <Image src="/qpay-logo.png" alt="Qpay" width={50} height={15} />
                    <div className="w-[1px] h-3 bg-slate-400" />
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Secure Payment</span>
                 </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] shadow-sm border border-dashed border-slate-200">
            <div className="bg-slate-50 p-8 rounded-full mb-6 text-slate-300">
              <ShoppingBag size={64} />
            </div>
            <p className="text-2xl font-bold text-slate-400 mb-8">Таны сагс одоогоор хоосон байна.</p>
            <Link href="/products" className="rounded-full bg-slate-900 px-10 py-4 text-white font-black hover:bg-[#00CED1] transition-all hover:shadow-xl">
              ДЭЛГҮҮР ХЭСЭХ
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}