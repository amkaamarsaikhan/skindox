export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Нууцлалын бодлого</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <p className="font-bold text-slate-900">Сүүлд шинэчилсэн: 2024 оны 10-р сар</p>
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Мэдээлэл цуглуулах</h2>
            <p>Бид таныг бүртгүүлэх, захиалга өгөх болон манай вэбсайтаар зочлох үед и-мэйл хаяг, утасны дугаар, хүргэлтийн хаяг зэрэг мэдээллийг цуглуулдаг.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Мэдээллийн ашиглалт</h2>
            <p>Таны мэдээллийг захиалга баталгаажуулах, хүргэлт хийх болон шинэ бүтээгдэхүүний мэдээлэл хүргэхэд ашиглана.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Мэдээллийн аюулгүй байдал</h2>
            <p>Бид таны хувийн мэдээллийг гуравдагч этгээдэд худалдахгүй бөгөөд Firebase-ийн аюулгүй байдлын стандартын дагуу хамгаалдаг.</p>
          </section>
        </div>
      </div>
    </div>
  );
}