import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { amount, description } = await req.json();

    // 1. Qpay-ээс Access Token авах (Жишээ утгууд - Qpay-ээсээ авна)
    // Энэ хэсэгт та өөрийн Qpay-ийн credential-ийг ашиглана
    
    // 2. Нэхэмжлэх үүсгэх хүсэлт илгээх
    // const response = await fetch('https://merchant.qpay.mn/v2/invoice', { ... });
    
    // Тест зорилгоор түр зуур хуурамч дата буцаая:
    const mockData = {
      invoice_id: "SKINDOX-" + Date.now(),
      qr_text: "qpay-qr-data-here",
      urls: [
        { name: "Khan Bank", link: "khanbank://..." },
        { name: "TDB", link: "tdbm://..." }
      ]
    };

    return NextResponse.json(mockData);
  } catch (error) {
    return NextResponse.json({ error: "Invoice үүсгэхэд алдаа гарлаа" }, { status: 500 });
  }
}