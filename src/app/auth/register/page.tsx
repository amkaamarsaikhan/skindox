"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, Phone, ArrowRight, ChevronLeft } from "lucide-react";
// Firebase функцууд
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Firebase Auth дээр шинэ хэрэглэгч үүсгэх
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;

      // 2. Хэрэглэгчийн Display Name-ийг шинэчлэх
      await updateProfile(user, {
        displayName: formData.name,
      });

      // 3. Firestore-д хэрэглэгчийн нэмэлт мэдээллийг хадгалах (users collection)
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        createdAt: new Date().toISOString(),
      });

      // 4. Firestore-д тухайн хэрэглэгчийн хоосон сагс үүсгэж бэлдэх
      await setDoc(doc(db, "carts", user.uid), {
        items: [],
        updatedAt: new Date().toISOString(),
      });

      alert("Бүртгэл амжилттай үүслээ!");
      router.push("/"); // Нүүр хуудас руу шилжих

    } catch (error: any) {
      console.error("Registration error:", error.message);
      if (error.code === "auth/email-already-in-use") {
        alert("Энэ и-мэйл хаяг аль хэдийн бүртгэгдсэн байна.");
      } else {
        alert("Бүртгэл хийхэд алдаа гарлаа. Та дахин оролдоно уу.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/auth/login" className="flex items-center gap-2 justify-center mb-6 text-slate-400 hover:text-slate-900 transition font-medium">
          <ChevronLeft size={18} />
          <span className="text-sm">Нэвтрэх хэсэг рүү буцах</span>
        </Link>
        <h2 className="text-center text-4xl font-black text-slate-900 tracking-tighter uppercase">
          БҮРТГҮҮЛЭХ
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500 font-medium">
          SKINDOX-ийн гишүүн болж онцгой хөнгөлөлт эдлээрэй
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-10 px-6 shadow-2xl shadow-slate-200/50 rounded-[2.5rem] border border-slate-100 sm:px-10">
          <form className="space-y-4" onSubmit={handleRegister}>
            <div className="grid grid-cols-1 gap-4">
              {/* Нэр */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="text"
                  required
                  disabled={loading}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] focus:outline-none text-sm transition-all disabled:opacity-50"
                  placeholder="Таны нэр"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              {/* И-мэйл */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="email"
                  required
                  disabled={loading}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] focus:outline-none text-sm transition-all disabled:opacity-50"
                  placeholder="И-мэйл хаяг"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Утас */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="text"
                  required
                  disabled={loading}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] focus:outline-none text-sm transition-all disabled:opacity-50"
                  placeholder="Утасны дугаар"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              {/* Нууц үг */}
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input
                  type="password"
                  required
                  disabled={loading}
                  minLength={6}
                  className="w-full pl-11 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#00CED1] focus:outline-none text-sm transition-all disabled:opacity-50"
                  placeholder="Нууц үг (6-аас дээш тэмдэгт)"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center items-center py-4 rounded-full bg-slate-900 text-white font-black hover:bg-[#00CED1] transition-all shadow-lg group disabled:bg-slate-400"
              >
                {loading ? "Бүртгэж байна..." : "БҮРТГЭЛ ҮҮСГЭХ"}
                {!loading && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500 font-medium">
              Бүртгэлтэй юу?{" "}
              <Link href="/auth/login" className="font-black text-[#00CED1] hover:underline">
                НЭВТРЭХ
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}