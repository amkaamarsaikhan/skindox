"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-slate-100">
      {/* Background Image */}
      <Image
        src="/hero-banner.png"
        alt="SKINDOX Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/10 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl font-bold text-white drop-shadow-md">
              Design Your Skin
            </h1>
            <p className="text-xl text-white/90 drop-shadow-sm font-medium">
              Hormesis технологиор баяжуулсан арьс арчилгааны шинэ эрин үе.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#00CED1] text-white px-8 py-4 rounded-full font-bold hover:bg-[#008b8b] transition-all shadow-lg hover:scale-105">
                Одоо худалдан авах
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white border border-white/40 px-8 py-4 rounded-full font-bold hover:bg-white/30 transition-all">
                Дэлгэрэнгүй
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;