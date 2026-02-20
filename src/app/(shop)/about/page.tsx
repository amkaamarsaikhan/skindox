import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative h-[40vh] w-full flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero-banner.png"
                    alt="SKINDOX Premium Skin Care"
                    fill
                    className="object-cover scale-105 animate-slow-zoom" // Зөөлөн zoom эффект
                    priority
                />
                <div className="absolute inset-0 bg-black/20" /> {/* Зургийг бага зэрэг бүрхэх эффект */}
                <div className="relative z-10 text-center text-white space-y-6 px-4">
                    <span className="text-[#00CED1] font-bold tracking-[0.3em] text-sm mb-3 block">EST. 2024</span>
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">БИДНИЙ ТУХАЙ</h1>

                    <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed">
                        Арьсны микробиом тэнцвэрт байдлыг хангах шинжлэх ухааны хамгийн сүүлийн үеийн шийдэл.
                    </p>
                    <div className="pt-8">
                        <Link href="/products" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-[#00CED1] hover:text-white transition-all duration-300 shadow-2xl">
                            ДЭЛГҮҮР ХЭСЭХ
                        </Link>
                    </div>
                </div>
            </section>

            {/* Bento Grid: Брэндийн онцлох технологиуд */}
            <section className="container mx-auto px-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[750px]">

                    {/* 1. Үндсэн технологи: Арьсны Микробиом (Main Image Card) */}
                    <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl">
                        <img
                            src="12.jpg"
                            alt="Skincare science"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
                            <span className="text-[#00CED1] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Innovation</span>
                            <h3 className="text-4xl font-extrabold italic mb-6 leading-tight">
                                Арьсны <br /> <span className="text-[#00CED1]">Микробиом</span>
                            </h3>
                            <p className="text-slate-200 text-lg leading-relaxed max-w-md mb-8">
                                Сүүний хүчлийн бактер болон папаяа жимсний энзим нь арьсны гүнд нэвчиж, бичил биетүүдийн тэнцвэрийг хангана.
                            </p>
                            <Link href="/products" className="bg-[#00CED1] text-white px-8 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform active:scale-95">
                                PRODUCTS
                            </Link>
                        </div>
                    </div>

                    {/* 2. Натурал чанар (Aesthetic Card) */}
                    <div className="md:col-span-2 relative rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl min-h-[350px]">
                        <img src="11.jpg" alt="Natural ingredients"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 text-white z-10">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="bg-[#00CED1] w-2 h-2 rounded-full shadow-[0_0_10px_#00CED1]"></span>
                                <span className="text-[#00CED1] font-bold text-xs uppercase tracking-widest">Natural Purity</span>
                            </div>

                            <h3 className="text-3xl font-extrabold italic mb-4 leading-tight">
                                100% Байгалийн гаралтай
                            </h3>

                            <p className="text-slate-300 text-base font-light leading-relaxed max-w-md mb-2">
                                Үнэр оруулагч, нөөшлөгч бодисгүй, химийн хүнд элемент агуулаагүй.
                                Дөнгөж төрсөн нярайгаас эхлэн бүх насныхан болон эмзэг харшилтай арьсанд хэрэглэхэд нэн тохиромжтой.
                            </p>
                        </div>
                    </div>

                    {/* 3. SPF Хамгаалалт (Yellow/Bright Product Card) */}
                    <div className="relative rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl min-h-[250px]">
                        <img src="10.png" alt="Sun Protection"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                            <div className="bg-[#00CED1]/20 p-3 rounded-2xl mb-4 backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CED1" strokeWidth="2.5">
                                    <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                                </svg>
                            </div>

                            <span className="text-5xl font-black italic tracking-tighter leading-none text-white block mb-2 group-hover:scale-110 transition-transform">
                                SPF46+
                            </span>

                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00CED1] border border-[#00CED1]/30 px-3 py-1 rounded-full backdrop-blur-md">
                                Sun Guard Gel
                            </span>
                        </div>
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00CED1]/20 rounded-full blur-3xl group-hover:bg-[#00CED1]/40 transition-all"></div>
                    </div>
                    {/* 4. Насны залуужилт (Clean Portrait Card) */}
                    <div className="relative rounded-[2.5rem] overflow-hidden group border border-slate-100 shadow-xl min-h-[250px]">
                        <img
                            src="24.jpg"
                            alt="Skin Cell Recovery"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 p-6">
                            <div className="bg-[#00CED1]/20 p-3 rounded-2xl mb-4 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00CED1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                </svg>
                            </div>
                            <span className="text-5xl font-black italic tracking-tighter leading-none text-white block mb-2 group-hover:scale-105 transition-transform">
                                23<span className="text-2xl text-[#00CED1]">yrs</span>
                            </span>
                            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#00CED1] border border-[#00CED1]/30 px-3 py-1 rounded-full backdrop-blur-md">
                                Skin Recovery
                            </span>
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00CED1]/15 rounded-full blur-3xl group-hover:bg-[#00CED1]/30 transition-all"></div>
                    </div>
                </div>
            </section>
        </div>
    );
}