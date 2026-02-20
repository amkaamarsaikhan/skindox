import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* 1. Брэндийн мэдээлэл */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white p-1">
                <Image 
                  src="/logo.png" 
                  alt="SKINDOX Logo" 
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">
                SKINDOX
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Шинжлэх ухааны үндэслэлтэй арьс арчилгааны шийдэл. 
              Арьсны микробиом тэнцвэрт байдлыг хангах замаар 
              таны гоо сайхныг дотроос нь гэрэлтүүлнэ.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#00CED1] transition"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-[#00CED1] transition"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-[#00CED1] transition"><Mail size={20} /></Link>
            </div>
          </div>

          {/* 2. Түргэн холбоос */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Цэс</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/" className="hover:text-[#00CED1] transition">Нүүр</Link></li>
              <li><Link href="/products" className="hover:text-[#00CED1] transition">Дэлгүүр</Link></li>
              <li><Link href="/about" className="hover:text-[#00CED1] transition">Бидний тухай</Link></li>
              <li><Link href="/checkout" className="hover:text-[#00CED1] transition">Захиалга шалгах</Link></li>
            </ul>
          </div>

          {/* 3. Холбоо барих (Таны ирүүлсэн мэдээлэл) */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Холбоо барих</h4>
            
            <div className="flex items-start gap-4">
              <div className="bg-[#00CED1]/20 p-2 rounded-lg text-[#00CED1]">
                <MapPin size={20} />
              </div>
              <div className="text-sm leading-relaxed">
                <p className="font-bold text-white mb-1 uppercase">Төв оффисын хаяг:</p>
                <p>Сансарын И мартын зүүн хойд талд, БЗД 1-р хороо, Токио гудамж,</p>
                <p>Хятад ресторантай байрны урд хаалгаар ороод 5 давхарт.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#00CED1]/20 p-2 rounded-lg text-[#00CED1]">
                <Phone size={20} />
              </div>
              <div className="text-sm">
                <p className="font-bold text-white mb-1 uppercase">Утас:</p>
                <p className="flex gap-4 tracking-wider">
                  <span>88109705</span>
                  <span className="text-slate-600">|</span>
                  <span>7700-2223</span>
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Доод хэсэг */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
          <p>© 2024 SKINDOX MONGOLIA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition">Нууцлалын бодлого</Link>
            <Link href="/terms" className="hover:text-white transition">Үйлчилгээний нөхцөл</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}