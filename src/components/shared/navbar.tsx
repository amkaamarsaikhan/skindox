"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingCart, User, Search, LogOut, X } from "lucide-react"; // X икон нэмэв
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation"; // Router нэмэв

export default function Navbar() {
  const itemCount = useCartStore((state) => state.getItemCount());
  const syncWithFirestore = useCartStore((state) => state.syncWithFirestore);
  
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<any>(null);
  
  // Хайлтын state-үүд
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await syncWithFirestore(currentUser.uid);
      }
    });
    return () => unsubscribe();
  }, [syncWithFirestore]);

  // Хайлтын функц
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/products?search=${searchQuery}`); // Хайлтын үгтэй хамт бүтээгдэхүүн рүү үсэрнэ
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("skindox-cart-storage");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        
        {/* Logo - Хайлт нээлттэй үед MD-гээс бага дэлгэц дээр нуугдана */}
        <Link href="/" className={`flex items-center gap-2 ${isSearchOpen ? 'hidden md:flex' : 'flex'}`}>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border border-gray-100">
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">SKINDOX</span>
        </Link>

        {/* Хайлтын хэсэг */}
        <div className={`flex-1 max-w-md mx-8 transition-all duration-300 ${isSearchOpen ? 'block' : 'hidden md:none'}`}>
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="relative animate-in slide-in-from-right-4 duration-300">
              <input
                autoFocus
                type="text"
                placeholder="Бүтээгдэхүүн хайх..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-100 border-none rounded-full py-2 px-5 text-sm focus:ring-2 focus:ring-[#00CED1] outline-none"
              />
              <button type="button" onClick={() => setIsSearchOpen(false)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                <X size={16} />
              </button>
            </form>
          )}
        </div>

        {/* Menu Links - Хайлт нээлттэй үед нуугдана */}
        {!isSearchOpen && (
          <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-widest text-slate-600">
            <Link href="/" className="hover:text-[#00CED1] transition">Нүүр</Link>
            <Link href="/products" className="hover:text-[#00CED1] transition">Бүтээгдэхүүн</Link>
            <Link href="/about" className="hover:text-[#00CED1] transition">Бидний тухай</Link>
          </div>
        )}

        <div className="flex items-center gap-5 italic">
          {/* Search Toggle Button */}
          {!isSearchOpen && (
            <button onClick={() => setIsSearchOpen(true)} className="text-slate-600 hover:text-[#00CED1] transition">
              <Search size={22} />
            </button>
          )}
          
          {mounted && user ? (
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline text-[10px] font-black text-slate-900 uppercase bg-slate-100 px-3 py-1 rounded-full">
                {user.displayName || "Хэрэглэгч"}
              </span>
              <button onClick={handleLogout} className="text-slate-500 hover:text-red-500 transition">
                <LogOut size={22} />
              </button>
            </div>
          ) : (
            <Link href="/auth/login" className="text-slate-600 hover:text-[#00CED1]">
              <User size={22} />
            </Link>
          )}

          <Link href="/cart" className="relative group">
            <ShoppingCart size={22} className="text-slate-600 group-hover:text-[#00CED1]" />
            {mounted && itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#00CED1] text-[10px] font-bold text-white shadow-sm">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}