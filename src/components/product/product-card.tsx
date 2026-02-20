"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";


interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
  };
}

// 1. 'export default'-ийг эндээс түр авч хаяад зүгээр л функц болгоё
function ProductCard({ product }: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 transition-all hover:shadow-xl">
      <Link href={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="mt-4 space-y-2">
        <p className="text-xs text-[#00CED1] font-medium uppercase tracking-wider">
          {product.category}
        </p>
        <h3 className="text-slate-800 font-semibold truncate">{product.name}</h3>
        <p className="text-lg font-bold text-slate-900">
          {product.price.toLocaleString()} ₮
        </p>
      </div>

      <button
        onClick={() => {
    addItem(product); // Зөвхөн product-ийг дамжуулна, Store өөрөө quantity-г нь шийднэ
    alert("Сагсанд нэмэгдлээ!");
}}
        className="w-full mt-4 py-2 bg-slate-50 text-slate-900 rounded-lg font-medium hover:bg-[#00CED1] hover:text-white transition-colors"
      >
        Сагсанд нэмэх
      </button>
    </div>
  );
}

// 2. Хамгийн доор нь заавал ингэж экспорт хийж өгөөрэй
export default ProductCard;