export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">Үйлчилгээний нөхцөл</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">1. Ерөнхий заалт</h2>
            <p>Энэхүү вэбсайтаар үйлчлүүлснээр та манай үйлчилгээний нөхцөлийг хүлээн зөвшөөрч байна гэж үзнэ.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">2. Төлбөр тооцоо</h2>
            <p>Төлбөрийг Qpay болон бусад цахим хэлбэрээр гүйцэтгэх боломжтой. Төлбөр баталгаажсаны дараа захиалга хүргэлтэд шилжинэ.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-2">3. Буцаалт</h2>
            <p>Бүтээгдэхүүнийг хүлээн авснаас хойш 24 цагийн дотор үйлдвэрийн гэмтэлтэй тохиолдолд солих буюу буцаах боломжтой.</p>
          </section>
        </div>
      </div>
    </div>
  );
}