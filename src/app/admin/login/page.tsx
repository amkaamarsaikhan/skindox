"use client";

import { useState } from "react";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Амжилттай нэвтэрвэл админ хуудас руу шилжинэ
      router.push("/admin/add-product");
    } catch (error) {
      alert("Нэвтрэхэд алдаа гарлаа. Мэйл эсвэл нууц үг буруу байна.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F8F9FA]">
      <div className="w-full max-w-md px-6">
        <form 
          onSubmit={handleLogin} 
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100 space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black uppercase italic tracking-tighter text-slate-900">
              Admin Access
            </h1>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
              Skindox Management
            </p>
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase ml-4 text-slate-400">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full p-5 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#00CED1] transition-all font-medium"
                placeholder="admin@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase ml-4 text-slate-400">Password</label>
              <input 
                type="password" 
                required
                className="w-full p-5 bg-slate-50 rounded-2xl outline-none border border-transparent focus:border-[#00CED1] transition-all font-medium"
                placeholder="••••••••"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-6 bg-black text-white rounded-2xl font-black uppercase tracking-widest hover:bg-[#00CED1] hover:scale-[1.02] active:scale-95 transition-all shadow-xl disabled:opacity-50"
          >
            {loading ? "Checking..." : "Sign In"}
          </button>

          <div className="text-center">
            <button 
              type="button"
              onClick={() => router.push("/")}
              className="text-[10px] font-black uppercase text-slate-300 hover:text-slate-500 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}