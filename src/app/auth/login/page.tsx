"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, ArrowRight, ChevronLeft } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useCartStore } from "@/store/useCartStore";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Firebase нэвтрэлт
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2. Сагсыг Firebase-ээс татаж ирэхийг хүлээнэ (Маш чухал)
      await useCartStore.getState().syncWithFirestore(user.uid);

      alert("Амжилттай нэвтэрлээ!");
      
      // 3. Хуудсыг шинээр ачаалж шилжүүлнэ (Zustand state reset хийгдэнэ)
      window.location.href = "/"; 
      
    } catch (error: any) {
      console.error(error.message);
      alert("И-мэйл эсвэл нууц үг буруу байна.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="flex items-center gap-2 justify-center mb-6 text-slate-400 hover:text-slate-900 transition font-bold">
          <ChevronLeft size={18} />
          <span>Буцах</span>
        </Link>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">SKINDOX</h2>
        <p className="mt-2 text-sm text-slate-500 font-medium">Нэвтрэх</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl rounded-[2.5rem] border border-slate-100 sm:px-10">
          <form className="space-y-5" onSubmit={handleLogin}>
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="email"
                  required
                  disabled={loading}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] outline-none text-sm disabled:opacity-50"
                  placeholder="И-мэйл"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="password"
                  required
                  disabled={loading}
                  className="block w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] outline-none text-sm disabled:opacity-50"
                  placeholder="Нууц үг"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center py-4 rounded-full bg-slate-900 text-white font-black hover:bg-[#00CED1] transition-all shadow-lg group disabled:bg-slate-400"
            >
              {loading ? "Уншиж байна..." : "НЭВТРЭХ"}
              {!loading && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}