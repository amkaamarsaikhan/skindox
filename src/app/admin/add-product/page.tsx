"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    
    // Энэ хэсэгт бид Server Action эсвэл API дуудна
    // Одоогоор зүгээр л консол дээр харуулъя
    const data = {
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    console.log("Шинэ бараа:", data);
    
    // Түр зуур хүлээлт үүсгэх
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Бараа амжилттай нэмэгдлээ!");
    setLoading(false);
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Шинэ бүтээгдэхүүн нэмэх</h1>
      
      <form action={handleSubmit} className="space-y-6 bg-white p-8 border rounded-2xl shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-2">Барааны нэр</label>
          <input
            name="name"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00CED1] outline-none"
            placeholder="Жишээ: SKINDOX Serum"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Үнэ (₮)</label>
            <input
              name="price"
              type="number"
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00CED1] outline-none"
              placeholder="85000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Ангилал</label>
            <select
              name="category"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00CED1] outline-none"
            >
              <option value="Serum">Serum</option>
              <option value="Cream">Cream</option>
              <option value="Essence">Essence</option>
              <option value="Cleanser">Cleanser</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Зургийн URL</label>
          <input
            name="image"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00CED1] outline-none"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Тайлбар</label>
          <textarea
            name="description"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00CED1] outline-none"
            placeholder="Барааны тухай дэлгэрэнгүй..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
            loading ? "bg-gray-400" : "bg-black hover:bg-slate-800 shadow-lg"
          }`}
        >
          {loading ? "Түр хүлээнэ үү..." : "БАРААГ ХАДГАЛАХ"}
        </button>
      </form>
    </div>
  );
}