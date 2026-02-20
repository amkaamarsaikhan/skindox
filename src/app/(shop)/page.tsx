import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center bg-slate-900 overflow-hidden">
        <Image
          src="/hero-banner.png"
          alt="SKINDOX Scientific Research"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-sm uppercase tracking-[0.3em] font-medium opacity-80">Next Generation Skin Care</h2>
          <h1 className="text-7xl md:text-9xl font-light tracking-wide text-slate-800">
            Design <span className="font-serif italic text-[#00CED1]">Your</span> Skin
          </h1>

          <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-200 leading-relaxed font-light">
            Бид арьс арчилгааны салбарт шинжлэх ухааны хамгийн сүүлийн үеийн ололт болох
            <span className="font-semibold text-[#00CED1]"> "Арьсны Микробиом"</span> тэнцвэрт байдлыг хангах замаар
            арьсыг эрүүлжүүлэх шинэ эрин үеийг эхлүүлж байна.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="container mx-auto px-4">
        <div className="py-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-5 mb-2">
                <div className="h-[1.5px] w-16 bg-[#00CED1]"></div>
                <span className="text-3xl md:text-4xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-600 to-[#00CED1]/90 uppercase leading-none">
                  Brand Concept
                </span>
              </div>
              <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium pt-2">
                SKINDOX нь зөвхөн гоо сайхан биш, таны арьсны эрүүл мэндэд оруулж буй <span className="text-slate-900 border-b-2 border-[#00CED1]">шинжлэх ухааны хөрөнгө оруулалт</span> юм.
              </p>
              <div className="border-t-2 border-slate-900 pt-4 mt-4 w-full max-w-sm">
                <p className="text-sm md:text-base font-bold tracking-[0.2em] text-slate-900 uppercase leading-none">
                  Арьсаа шинээр бүтээ
                </p>
                <p className="text-[10px] tracking-[0.1em] text-slate-500 font-medium mt-1">
                  SKINDOX Scientific Derma Solution
                </p>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Бидний уриа бол арьсаа зөвхөн гаднаас нь арчлах биш, дотор эсээс нь эрүүлжүүлж,
              <span className="font-bold text-slate-900"> "23 настай мэт" </span> залуу бүтцийг цогцлоох явдал юм.
            </p>
            <div className="p-5 bg-slate-50 border-l-2 border-[#00CED1] rounded-r-xl">
              <p className="text-sm text-slate-700 italic">
                SKINDOX-ийн бүтээгдэхүүн бүр Бичил биетийн эслэгийн уусмал болон Пептид-ээр баяжуулагдсан.
              </p>
            </div>
          </div>
          {/* Дөрвөлжин загвартай зураг */}
          <div className="relative aspect-square rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
            <Image src="/about.jpg" alt="SKINDOX Concept" fill className="object-cover object-center" />
          </div>
        </div>

        {/* 3. Values Section - Enhanced & Matched */}
        <section className="bg-white relative overflow-hidden mb-20">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 skew-x-[-15deg] translate-x-1/3 -z-10" />

          <div className="container mx-auto px-0 md:px-6">
            <div className="flex flex-col lg:flex-row items-stretch gap-16">

              {/* Зүүн тал: Текст болон Томруулсан Stat картууд */}
              <div className="w-full lg:w-5/12 flex flex-col justify-between space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-[2px] bg-[#00CED1]" />
                    <span className="text-[#00CED1] font-extrabold text-[10px] tracking-[0.4em] uppercase">
                      Skindox Philosophy
                    </span>
                  </div>
                  <h2 className="flex flex-col leading-[0.9] select-none">
                    <span className="text-6xl md:text-7xl lg:text-8xl font-extralight tracking-[0.2em] text-slate-900 uppercase">
                      Design
                    </span>
                    <div className="flex items-center mt-1">
                      <span className="text-5xl md:text-6xl lg:text-7xl font-black italic tracking-tighter text-slate-800 uppercase flex items-center">
                        YOUR SKIN
                        <span className="text-[#00CED1] font-normal not-italic ml-3 text-5xl md:text-7xl">—</span>
                      </span>
                    </div>
                  </h2>

                </div>

                {/* Томруулсан Stat картууд */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative p-8 bg-white border-2 border-slate-50 rounded-[2.5rem] shadow-sm group hover:border-[#00CED1]/30 hover:shadow-xl hover:shadow-[#00CED1]/5 transition-all duration-500 overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#00CED1]/5 rounded-full blur-2xl group-hover:bg-[#00CED1]/10 transition-colors" />
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-[#00CED1] text-[10px] font-black uppercase tracking-[0.2em] mb-4">Volume</span>
                      <div className="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-[#00CED1] transition-colors">
                        160<span className="text-xl ml-1 opacity-40">ml</span>
                      </div>
                      <div className="mt-4">
                        <h4 className="text-slate-900 font-extrabold text-[13px] uppercase tracking-tight">Daily Capacity</h4>
                        <div className="w-8 h-1 bg-[#00CED1] mt-2 rounded-full group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </div>

                  <div className="relative p-8 bg-white border-2 border-slate-50 rounded-[2.5rem] shadow-sm group hover:border-[#00CED1]/30 hover:shadow-xl hover:shadow-[#00CED1]/5 transition-all duration-500 overflow-hidden">
                    <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                    <div className="relative z-10">
                      <span className="inline-block px-3 py-1 rounded-full bg-slate-50 text-[#00CED1] text-[10px] font-black uppercase tracking-[0.2em] mb-4">Defense</span>
                      <div className="text-5xl font-black text-slate-900 tracking-tighter group-hover:text-[#00CED1] transition-colors">
                        SPF46
                      </div>
                      <div className="mt-4">
                        <h4 className="text-slate-900 font-extrabold text-[13px] uppercase tracking-tight">Sun Defense</h4>
                        <div className="w-8 h-1 bg-[#00CED1] mt-2 rounded-full group-hover:w-16 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Баруун тал: Үнэт зүйлсийн картууд */}
              <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { h: "100% Байгалийн", p: "Байгаль эхээс гаралтай цэвэр найрлага, ургамлын охь." },
                  { h: "Бүх насанд", p: "Нярайгаас эхлэн эмзэг арьстай хэн бүхэнд тохиромжтой." },
                  { h: "Химийн бодисгүй", p: "Үнэр оруулагч, нөөшлөгч, парабен огт агуулаагүй." },
                  { h: "Цогц арчилгаа", p: "Арьс цэвэрлэгээнээс эхлээд нарны хамгаалалт хүртэл." }
                ].map((val, i) => (
                  <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#00CED1]/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00CED1] to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <h4 className="text-slate-900 font-black text-sm mb-4 uppercase tracking-widest group-hover:text-[#00CED1] transition-colors">
                      {val.h}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {val.p}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* 4. Technology / Product Grid */}
        <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Change Up Card */}
          <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-square overflow-hidden bg-slate-50">
              <Image src="/change-up.png" alt="Change Up" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">Change Up</h3>
                  <p className="text-[10px] text-[#00CED1] font-bold uppercase tracking-widest">Microbiome Care</p>
                </div>
                <span className="text-2xl">🔬</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                Нүүрний арьсыг цочроохгүй тул цардуулаар баялаг тус бүтээгдэхүүн нь синтетик серфактант агуулаагүй тул хүүхдийн арьсанд ч хэрэглэж болно.
              </p>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-900 text-xs">Микробиом арьс арчилгаа</span>
                {/* Энд Link нэмсэн: c1 нь Change Up багцын эхний бүтээгдэхүүн */}
                <Link
                  href="/products?ids=c1,c2,c3,c4,c5"
                  className="text-[10px] font-bold text-[#00CED1] uppercase hover:opacity-80 transition-opacity"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Remozar Card */}
          <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-square overflow-hidden bg-slate-50">
              <Image src="/remozar.png" alt="Remozar" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">Remozar</h3>
                  <p className="text-[10px] text-orange-600 font-bold uppercase tracking-widest">Cell Recovery</p>
                </div>
                <span className="text-2xl">🧪</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                Арьсны гүн рүү нэвтэрч, дахин залуу эсийг сэргээнэ. Эсийн тэжээл өгч, үрчлээ багасган, арьсыг гүн чийгшүүлж хамгаална.
              </p>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-900 text-xs">Эсийн нөхөн төлжилт</span>
                {/* Энд Link нэмсэн: r1 нь Remozar багцын эхний бүтээгдэхүүн */}
                <Link
                  href="/products?ids=r1,r2,r3,r4,r5,r6,r7"
                  className="text-[10px] font-bold text-[#00CED1] uppercase hover:opacity-80 transition-opacity"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Aros Card */}
          <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-square overflow-hidden bg-slate-50">
              <Image src="/aros.png" alt="Aros" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black italic tracking-tighter text-slate-900 uppercase">Aros</h3>
                  <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">Premium Nutrition</p>
                </div>
                <span className="text-2xl">🍃</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                Гэрэлтсэн арьсаа хэвээр нь хадгалахад зориулагдсан. 5 төрлийн пептид агуулсан тул арьсны олон асуудлыг шийдэж, уян хатан байдлыг дэмжинэ.
              </p>
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="font-bold text-slate-900 text-xs">30, 40 насны арчилгаа</span>
                {/* Энд Link нэмсэн: a1 нь Aros багцын эхний бүтээгдэхүүн */}
                <Link
                  href="/products?ids=a1,a2,a3,a4,a5,a6"
                  className="text-[10px] font-bold text-[#00CED1] uppercase hover:opacity-80 transition-opacity"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}