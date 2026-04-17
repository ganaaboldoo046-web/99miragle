import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, ArrowDown, Layers, HelpCircle, AlertTriangle } from 'lucide-react';

const BotoxPage = ({ onBack }) => {

  const recommendations = [
    "Үрчлээтсэн ширүүн дүр төрхөөс илүү зөөлөн дүр төрхтэй болохыг хүссэн хүмүүст",
    "Инээх эсвэл үрчийх зэрэгт үүсдэг нүүрний хөдөлгөөний үрчлээнд санаа зовж буй хүмүүст",
    "V хэлбэрийн нүүрний хэлбэр хүсэж буй эсвэл эрүүний булчин ихтэй хүмүүст",
    "Үрчлээгээ багасгахын зэрэгцээ арьсныхаа уян хатан байдлыг сэргээхийг хүссэн хүмүүст"
  ];

  const precautions = [
    "Үйлчилгээ хийснээс хойш 4 цагийн турш хэвтэх болон доош харж болохгүй.",
    "Үйлчилгээний дараа 24 цагийн турш эрчимтэй дасгал сургуулилт, архи, саунд орохоос зайлсхий.",
    "Үйлчилгээ хийсэн хэсгийг үрж, хүчтэй дарж болохгүй.",
    "Хэвийн бус шинж тэмдэг илэрвэл эмнэлэгт хандаж эмчтэй зөвлөлдөөрэй."
  ];

  return (
    <div className="bg-slate-50 flex flex-col font-sans relative w-full max-w-[430px] mx-auto shadow-2xl overflow-x-hidden text-slate-800 min-h-screen">

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .shimmer-text {
          background: linear-gradient(90deg, #94a3b8 25%, #e2e8f0 50%, #94a3b8 75%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* Header */}
      <header className="px-5 py-5 absolute top-0 w-full z-50 flex justify-between items-center text-white mix-blend-difference animate-fade-in-up">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-all">
          <ChevronLeft size={28} />
        </button>
      </header>

      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full bg-slate-200 flex flex-col justify-end overflow-hidden group">
        <img
          src="/페이지 이미지/tai00300000343.jpg"
          alt="Botox Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Global Standard
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            БОТОКС ТАРИА
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Үрчлээ<br/>тэнийлгэх<br/>дэлхийн стандарт
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Булчингийн хөдөлгөөнийг багасган арьсыг толигор, уян хатан болгоно.
          </p>
          <ArrowDown size={28} className="text-slate-400 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 2. Overview Grid */}
      <section className="w-full bg-slate-50 flex flex-col">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-200 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-4 border border-slate-300 relative z-10 shadow-sm">
              <Zap size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 relative z-10">Үрчлээ<br/>тэнийлгэх</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed relative z-10">
              Нүүрний хөдөлгөөнөөс үүссэн (дух, хөмсөг хооронд, нүд) үрчлээг сайжруулна.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00400001221.jpg" alt="Wrinkle Care" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/td02220000864.jpg" alt="Muscle Reduction" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300 relative">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 text-slate-800">Булчин<br/>жижигрүүлэх</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Хэт хөгжсөн булчинг (эрүү, мөр, шилбэ) багасгаж хэлбэр засна.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Principle Info */}
      <section className="w-full bg-slate-50 py-12 px-5">
        <div className="animate-fade-in-up delay-200 px-2 mb-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Mechanism</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Ботоксын<br/>үйлчлэх зарчим
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 animate-scale-in delay-300 relative group flex flex-col mb-8">
          {/* Content Area */}
          <div className="p-7 bg-gradient-to-b from-white to-slate-50 relative">
            <div className="w-12 h-1 bg-slate-300 rounded-full mb-6"></div>
            
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600 mb-5">
              Ботоксын гол найрлага болох <strong className="text-slate-800">Ботулинум токсин (Botulinum toxin)</strong> нь булчингийн мэдрэл дамжуулалтыг хааж булчингийн хөдөлгөөнийг багасгадаг.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[13px] font-bold leading-[1.4] text-slate-700">
                  Нүүрний хөдөлгөөний үрчлээ<br/>
                  <span className="font-normal text-[12px] text-slate-500">Давтагдсан булчингийн хөдөлгөөнөөс үүссэн үрчлээг тэнийлгэнэ.</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[13px] font-bold leading-[1.4] text-slate-700">
                  Булчин жижигрүүлэх<br/>
                  <span className="font-normal text-[12px] text-slate-500">Хэт хөгжсөн булчинг багасгаж нүүрний хэлбэрийг нарийхан болгоно.</span>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck size={18} className="text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[13px] font-bold leading-[1.4] text-slate-700">
                  Арьс сайжруулах<br/>
                  <span className="font-normal text-[12px] text-slate-500">Арьсны гадаргуу толигор болж, уян хатан байдлыг сэргээнэ.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Process</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            БОТОКС ТАРИХ<br/>ҮЕ ШАТ
          </h2>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">1</div>
            <p className="text-[14px] font-bold text-slate-700">Зөвлөгөө болон оношилгоо</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">2</div>
            <p className="text-[14px] font-bold text-slate-700">Нүүр цэвэрлэгээ болон мэдээ алдуулалт (шаардлагатай бол)</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">3</div>
            <div className="flex flex-col">
              <p className="text-[14px] font-bold text-slate-700 mb-1">Ботокс тарих</p>
              <p className="text-[12px] text-slate-500 font-medium">Нарийн зүүгээр хүссэн булчиндаа тарих</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">4</div>
            <p className="text-[14px] font-bold text-slate-700">Тайвшруулах арчилгаа</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">5</div>
            <p className="text-[14px] font-bold text-slate-700">Тайвшруулах болон гам барих заавар өгөх</p>
          </div>
        </div>
      </section>

      {/* 5. Recommendations */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Recommendation</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            ИЙМ ХҮМҮҮСТ САНАЛ<br/>БОЛГОЖ БАЙНА
          </h2>
        </div>

        <div className="space-y-3">
          {recommendations.map((text, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default animate-fade-in-up"
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="w-7 h-7 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 size={14} className="text-slate-600" />
              </div>
              <p className="text-[13px] font-medium text-slate-700 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ & Precautions */}
      <section className="py-16 px-6 bg-slate-100 border-t border-slate-200">
        <div className="mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-2">Q&A</p>
          <h2 className="text-[24px] font-black text-slate-900 leading-tight">
            Түгээмэл асуултууд
          </h2>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Үр дүн хэзээнээс гарах вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6 mb-2">
               Ботокс нь булчинд мэдрэл дамжуулалтыг хаах үйл явц хэрэгтэй байдаг тул аажмаар үр дүн гардаг. 2-3 хоногийн дараагаас булчингийн хөдөлгөөн удаашрах бөгөөд 7-14 хоногийн хооронд хамгийн их үр дүн гарна.
             </p>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Нүүрний хөдөлгөөний үрчлээ (хөмсөг хооронд, дух) харьцангуй хурдан мэдэгдэх бөгөөд эрүү, мөрний булчин зэрэг булчин багасаж хэлбэр засагдахад 2-4 долоо хоног шаардлагатай.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Үр дүн хэр удаан хадгалагдах вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Ботоксын үр дүн хадгалагдах хугацаа нь тухайн хэсэг болон хувь хүний булчингийн үйл ажиллагаанаас шалтгаалж өөр байх боловч ерөнхийдөө 3-6 сар орчим хадгалагддаг.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Өдөр тутмын амьдралд саад болох уу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Ботокс нь нөхөн сэргээх хугацаа шаарддаггүй. Хийлгэсний дараа шууд нүүрээ угаах, будах, гадуур гарах зэргээр өдөр тутмын амьдрал хэвийн үргэлжлүүлэх боломжтой.
             </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Өвдөлт болон хавдар бий юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Маш нарийн зүү ашиглан хэсэгчлэн тарьдаг тул өвдөлт маш бага бөгөөд ихэнх үйлчлүүлэгчид мэдээ алдуулагчгүйгээр хийлгэх боломжтой. Үйлчилгээний дараа бага зэрэг хавдах, хөхрөх гарч болох ч 1-2 хоногийн дотор аяндаа арилна.
             </p>
          </div>
        </div>

        <div className="mt-12 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={20} className="text-orange-500" />
            <h3 className="font-bold text-[16px] text-slate-800">Ерөнхий анхаарах зүйлс</h3>
          </div>
          <ul className="bg-orange-50 border border-orange-100 rounded-2xl p-6 space-y-3">
            {precautions.map((text, i) => (
              <li key={i} className="flex gap-3 text-[12px] text-slate-700 font-medium leading-relaxed">
                <span className="text-orange-400 text-lg leading-none">•</span>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-200 text-center p-10 text-slate-500 text-[10px] uppercase tracking-widest border-t border-slate-300 pb-20">
        © 2026 90 хоногийн гайхамшиг арьс гоо сайхны эмнэлэг
      </footer>

    </div>
  );
};

export default BotoxPage;
