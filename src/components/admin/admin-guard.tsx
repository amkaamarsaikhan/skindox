// src/components/admin/admin-guard.tsx

"use client";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

// ЭНД ӨӨРИЙН МЭЙЛЭЭ ЯГ ТАГ БИЧНЭ:
const ADMIN_EMAIL = "amkaamarsaikhan@gmail.com"; 

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Систем энд таныг amkaamarsaikhan@gmail.com мөн эсэхийг шалгаж байна
      if (user && user.email === ADMIN_EMAIL) {
        setIsAdmin(true);
      } else {
        // Хэрэв өөр хүн бол нүүр хуудас руу буцаана
        router.push("/"); 
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) return <div className="h-screen flex items-center justify-center font-black uppercase italic tracking-widest opacity-20">Checking Access...</div>;

  return isAdmin ? <>{children}</> : null;
}