"use client";

import { useState } from "react";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { Phone, MapPin, NotebookPen } from "lucide-react"; // Икон нэмэв

export default function CheckoutPage() {
  const { items, getTotalPrice, paymentData, setPaymentData, resetPayment, shippingAddress, setShippingAddress } = useCartStore();
  const [loading, setLoading] = useState(false);
  const totalPrice = getTotalPrice();

  const handlePayment = async () => {
    // 1. Форм бөглөсөн эсэхийг шалгах
    if (!shippingAddress.phone || !shippingAddress.address) {
      alert("Утасны дугаар болон хаягаа бүрэн оруулна уу!");
      return;
    }

    setLoading(true);
    try {
      // Ирээдүйд: Төлбөр үүсгэхдээ хаягийн мэдээллийг хамт илгээнэ
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setPaymentData({
        invoice_id: "SKIN-" + Math.floor(1000 + Math.random() * 9000),
        qr_image: "/images/dummy-qr.png",
      });
    } catch (error) {
      alert("Алдаа гарлаа.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <h1 className="text-3xl font-black text-slate-900 mb-10 text-center uppercase tracking-tighter italic">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 italic">
          
          {/* 1. Хүргэлтийн мэдээлэл (Зүүн тал) */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100">
              <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 uppercase italic">
                <MapPin size={22} className="text-[#00CED1]" /> Хүргэлтийн мэдээлэл
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 ml-2 uppercase tracking-widest">Утасны дугаар *</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input 
                      type="number" 
                      placeholder="8800****"
                      value={shippingAddress.phone}
                      onChange={(e) => setShippingAddress({ phone: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00CED1] outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 ml-2 uppercase tracking-widest">Дүүрэг *</label>
                  <select 
                    value={shippingAddress.district}
                    onChange={(e) => setShippingAddress({ district: e.target.value })}
                    className="w-full px-4 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00CED1] outline-none bg-white"
                  >
                    <option>Баянзүрх</option>
                    <option>Хан-Уул</option>
                    <option>Сүхбаатар</option>
                    <option>Чингэлтэй</option>
                    <option>Баянгол</option>
                    <option>Сонгинохайрхан</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-gray-400 ml-2 uppercase tracking-widest">Дэлгэрэнгүй хаяг (Байр, тоот) *</label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    <input 
                      type="text" 
                      placeholder="Жишээ: 13-р хороолол, 45-р байр, 100 тоот"
                      value={shippingAddress.address}
                      onChange={(e) => setShippingAddress({ address: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00CED1] outline-none"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-black text-gray-400 ml-2 uppercase tracking-widest">Нэмэлт тайлбар</label>
                  <div className="relative">
                    <NotebookPen className="absolute left-4 top-4 text-gray-300" size={18} />
                    <textarea 
                      rows={3}
                      placeholder="Орцны код, хүргэх цаг гэх мэт..."
                      value={shippingAddress.note}
                      onChange={(e) => setShippingAddress({ note: e.target.value })}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#00CED1] outline-none"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Бараанууд */}
            <section className="space-y-4">
              <h2 className="text-xl font-black text-slate-800 uppercase italic">Таны сагс</h2>
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <Image src={item.image} alt={item.name} width={60} height={60} className="rounded-xl object-cover" />
                    <div>
                      <p className="font-black text-sm">{item.name}</p>
                      <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-black">{(item.price * item.quantity).toLocaleString()} ₮</p>
                </div>
              ))}
            </section>
          </div>

          {/* 2. Төлбөр (Баруун тал) */}
          <div className="space-y-6">
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl sticky top-24">
              {!paymentData.invoiceId ? (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Төлөх нийт дүн</p>
                    <p className="text-4xl font-black text-[#00CED1]">{totalPrice.toLocaleString()} ₮</p>
                  </div>
                  <hr className="border-slate-800" />
                  <p className="text-xs text-slate-400 leading-relaxed font-bold">
                    * Төлбөр төлөгдсөний дараа хүргэлт 24-48 цагийн дотор хийгдэнэ.
                  </p>
                  <button
                    onClick={handlePayment}
                    disabled={loading || items.length === 0}
                    className="w-full bg-[#00CED1] text-white py-5 rounded-[2rem] font-black text-lg hover:scale-105 transition-transform disabled:bg-slate-700"
                  >
                    {loading ? "УНШИЖ БАЙНА..." : "ЗАХИАЛГА ӨГӨХ"}
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-6 animate-in fade-in zoom-in duration-300">
                  <h3 className="font-black text-lg uppercase italic tracking-tighter">Төлбөр төлөх</h3>
                  <div className="bg-white p-4 rounded-[2rem] mx-auto w-fit border-4 border-[#00CED1]">
                    <Image src={paymentData.qrImage || "/images/dummy-qr.png"} alt="QR" width={200} height={200} />
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Нэхэмжлэх №: {paymentData.invoiceId}</p>
                  <button onClick={resetPayment} className="text-xs font-black text-[#00CED1] underline uppercase">Буцах</button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}