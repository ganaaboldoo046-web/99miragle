import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, ArrowDown, Layers, HelpCircle, AlertTriangle, Disc } from 'lucide-react';

const UltracolPage = ({ onBack }) => {

  const recommendations = [
    "Төрөлхийн мэт лифтинг хийлгэхийг хүсэж буй хүмүүст",
    "Нүүрний зөв, тод хэлбэр гаргахыг хүссэн хүмүүст",
    "Нүүрний нарийн үрчлээ болон уян хатан байдлаа сайжруулахыг хүссэн хүмүүст",
    "Арьсныхаа ерөнхий хөгшрөлтийн эсрэг үйлчилгээ хүсэж буй хүмүүст"
  ];

  const precautions = [
    "Эмчилгээний дараа 1 долоо хоногийн турш нүүрээ хүчтэй үрэх болон даралт учруулахаас зайлсхийх хэрэгтэй.",
    "Саун, архи согтууруулах ундаа, эрчимтэй дасгалаас 1 долоо хоног зайлсхийнэ үү.",
    "Хавдах, хөхрөлт үүсвэл хүйтэн жин тавьж болно.",
    "Хэвийн бус шинж тэмдэг удаан үргэлжилбэл эмнэлэгт хандан эмчтэй зөвлөлдөнө үү."
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
          src="/페이지 이미지/tai00020000622.gif"
          alt="Ultracol Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Ultracol Procedure
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            УЛЬТРАКОЛ
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Арьсны нөхөн<br/>төлжилт болон<br/>уян хатан чанар
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Коллагеныг идэвхжүүлж унаган мэт залуу арьсыг мэдрээрэй.
          </p>
          <ArrowDown size={28} className="text-slate-400 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 2. Overview Gri*/}
      <section className="w-full bg-slate-50 flex flex-col">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-200 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-4 border border-slate-300 relative z-10 shadow-sm">
              <Zap size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 relative z-10">Төрөлхийн мэт<br/>эзэлхүүн</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed relative z-10">
              PDO задарч, зөвхөн коллаген үлдэж, төрөлхийн мэт эзэлхүүнийг бий болгодог.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00700000011.jpg" alt="Volnewmer Lift" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tica1010016694.jpg" alt="RF Technology" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300 relative">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 text-slate-800">Эрчимтэй<br/>төлжилт</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Биед шимэгддэг PDO орцтой коллаген тариа.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Product Info */}
      <section className="w-full bg-slate-50 py-12 px-5">
        <div className="animate-fade-in-up delay-200 px-2 mb-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Product Lines</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Бүтээгдэхүүний<br/>төрлүүд
          </h2>
        </div>

        <div className="flex bg-white shadow-md border border-slate-200/60 rounded-2xl p-5 items-start gap-4 animate-fade-in-up delay-300 mb-4">
          <Disc size={28} className="text-slate-800 shrink-0 mt-1" />
           <div>
             <h4 className="font-black text-[15px] text-slate-800 mb-2 uppercase">Ultracol 100</h4>
             <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
               Өөрийн биеийн коллаген скин бүүстер бөгөөд нүхжилт багасгах, гэрэлтүүлэхийн зэрэгцээ нарийн үрчлээ, уян хатан байдлыг сайжруулахад тусална. Коллаген, чийгшил дутагдсан арьс, нүдний эргэн тойрон дахь нарийн үрчлээг сайжруулахыг хүсэж буй хүмүүст санал болгож байна.
             </p>
           </div>
        </div>

        <div className="flex bg-slate-100 shadow-inner border border-slate-200 rounded-2xl p-5 items-start gap-4 animate-fade-in-up delay-400">
          <Disc size={28} className="text-slate-800 shrink-0 mt-1" />
           <div>
             <h4 className="font-black text-[15px] text-slate-800 mb-2 uppercase">Ultracol 200</h4>
             <p className="text-[12px] text-slate-600 leading-relaxed font-medium">
               Хонхойсон хэсгийн эзэлхүүнийг дүүргэдэг коллаген филлэр бөгөөд уян хатан байдал, эзэлхүүнээ нэмэгдүүлэхийг хүссэн хүмүүст санал болгож буй үйлчилгээ юм. Ширхэглэг нь харьцангуй том бөгөөд эзэлхүүн дүүргэхэд илүү тусалдаг.
             </p>
           </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-16 px-6 bg-white border-t border-slate-100">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Process</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            УЛЬТРАКОЛ ХИЙХ<br/>ҮЕ ШАТ
          </h2>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">1</div>
            <p className="text-[14px] font-bold text-slate-700">Зөвлөгөө болон оношилгоо</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">2</div>
            <p className="text-[14px] font-bold text-slate-700">Нүүр цэвэрлэгээ болон мэдээ алдуулалт</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">3</div>
            <p className="text-[14px] font-bold text-slate-700">Филлэр тарих</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">4</div>
            <div className="flex flex-col">
              <p className="text-[14px] font-bold text-slate-700 mb-1">Тохируулга</p>
              <p className="text-[12px] text-slate-500 font-medium">(Шаардлагатай бол) Үйлчилгээ хийсэн хэсэгт зөөлөн массаж хийж филлэрийг жигд тараах</p>
            </div>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">5</div>
            <p className="text-[14px] font-bold text-slate-700">Тайвшруулах арчилгаа ба заавар өгөх</p>
          </div>
        </div>
      </section>

      {/* 5. Recommendations */}
      <section className="py-16 px-6 bg-slate-50 border-t border-slate-200 border-dashed">
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
              className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default animate-fade-in-up"
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
      <section className="py-16 px-6 bg-slate-100">
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
               Хэзээнээс үр дүнгээ өгч эхлэх вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6 mb-2">
               Ультракол нь коллаген төлжилтийг дэмждэг био стимуляци тариа (Коллаген бүүстер) тул шууд үр дүнгээс илүүтэйгээр цаг хугацааны явцад аажмаар сайжрах үр дүн үзүүлдэг онцлогтой. 
             </p>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Ерөнхийдөө 4 долоо хоногийн дараагаас коллаген бүрэлдэж эхэлдэг ба 6-8 долоо хоногийн дараагаас уян хатан байдал сайжрах, үрчлээ тэнийх, арьсны бүтэц сайжрах зэргийг илт анзаарч эхэлнэ. Эцсийн үр дүн 2-3 сарын дараа тод харагдана.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Гаж нөлөө бий юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Энэ нь Солонгосын KFDA-с зөвшөөрөгдсөн аюулгүй байдал бүхий коллаген бүтээгдэхүүн боловч тарилгын онцлогоос шалтгаалж түр хавдах, улайх, хөхрөх, хатгуулж өвдөх шинж 2-3 хоногийн дотор байж болно. Зарим тохиолдолд арьс хатуурах, барзайх зэрэг илэрч болох ч хэдэн долоо хоногийн дотор уусч алга болдог.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Хэдэн удаа хийлгэх шаардлагатай вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Нэг удаа хийлгэхэд үр дүнг харах боломжтой хэдий ч тодорхой үр дүн хүсэж байвал 1 сарын зайтайгаар 2-3 удаа хийлгэхийг санал болгодог. Үүний дараа үр дүнг хадгалах зорилгоор 3-6 сар тутам ретач (retouch) хийлгэх хэрэгтэй.
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

export default UltracolPage;
