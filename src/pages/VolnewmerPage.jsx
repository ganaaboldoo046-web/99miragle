import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, ArrowDown, Layers, HelpCircle, AlertTriangle, Disc } from 'lucide-react';

const VolnewmerPage = ({ onBack }) => {

  const recommendations = [
    "Нүүрний хэлбэр тэгш бус, хонхойж барзайсан хэсгийг засахыг хүсэж буй хүмүүст",
    "Нүүрэнд үрчлээ үүсэж эхэлж буй хүмүүст",
    "Уян хатан байдлаа алдсан арьсандаа санаа зовж буй хүмүүст",
    "Хурдан хугацаанд хэвийн амьдралдаа орох шаардлагатай хүмүүст"
  ];

  const precautions = [
    "Өндөр давтамж ашигладаг эмнэлгийн төхөөрөмж тул эмчилгээний өмнө бүх төрлийн хүзүүний зүүлт, ээмэг гэх мэт металл эдлэлийг тайлах шаардлагатай.",
    "Эмчилгээний дараа хөхрөлт, хаван үүсэж болох ч цаг хугацааны явцад аяндаа алга болно.",
    "Саун, эрчимтэй дасгал хөдөлгөөнийг 1 долоо хоногийн турш хийхгүй байх хэрэгтэй.",
    "Эмчилгээ хийлгэсэн хэсгээ үрж, маажихаас зайлсхийх хэрэгтэй."
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
          src="/페이지 이미지/tai00310001328.gif"
          alt="Volnewmer Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Volnewmer procedure
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            ВОЛЬНЮМЕР
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Арьсанд хөвсгөр<br/>зөөлөн байдал,<br/>эрч хүч нэмнэ.
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Арьсны гүнээс нягт нөхөн төлжиж,<br/>илүү залуу харагдах арьсыг бүтээгээрэй.
          </p>
          <ArrowDown size={28} className="text-slate-400 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 2. Overview & Principle Grid */}
      <section className="w-full bg-slate-50 flex flex-col">
        {/* Row 1: Text Left, Image Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-200 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/30 rounded-full blur-2xl"></div>
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-4 border border-slate-300 relative z-10 shadow-sm">
              <Zap size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 relative z-10">Төрөлхийн мэт<br/>хөвсгөр байдал</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed relative z-10">
              Вольнюмер нь уян хатан чанарыг нэмэгдүүлж, коллаген нөхөн төлжилтийг дэмждэг.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00490000006.jpg" alt="Volnewmer Lift" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00700000011.jpg" alt="RF Technology" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300 relative">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 text-slate-800">RF & Бичил<br/>гүйдэл</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Өндөр давтамж (RF) болон бичил гүйдлээр арьсны гүнд хүрч үйлчилнэ.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Device Info Section */}
      <section className="w-full bg-slate-50 py-12 px-5">
        <div className="animate-fade-in-up delay-200 px-2 mb-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Device Specification</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Вольнюмер<br/>төхөөрөмж
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 animate-scale-in delay-300 relative group flex flex-col mb-8">
          {/* Card Image Header */}
          <div className="h-48 relative overflow-hidden">
             <img src="/페이지 이미지/tci00760000013.jpg" alt="Device Focus" className="w-full h-full object-cover origin-center transform transition-transform duration-[4000ms] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
             <div className="absolute bottom-4 left-5 flex items-center gap-2">
                 <Layers size={18} className="text-white" />
                 <span className="text-[13px] font-bold text-white tracking-wider uppercase drop-shadow-md">Monopolar RF</span>
             </div>
          </div>
          {/* Content Area */}
          <div className="p-6 bg-gradient-to-b from-slate-50 to-white relative">
            <div className="w-12 h-1 bg-slate-300 rounded-full mb-5"></div>
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600 mb-4">
              Өндөр давтамжийн энерги монополяр электрод буюу дамжуулагчаар арьсанд хүрэх үед арьсны цахилгаан эсэргүүцлийн нөлөөгөөр дулаан ялгарч, арьсны эд эсийг бүлэгнүүлэн (coagulate) эмчилгээний үр дүнг удаан хадгалдаг.
            </p>
          </div>
        </div>

        {/* Floating Tile */}
        <div className="flex bg-white shadow-md border border-slate-200/60 rounded-2xl p-5 items-start gap-4 animate-fade-in-up delay-400">
          <Disc size={28} className="text-slate-800 shrink-0 mt-1" />
           <div>
             <h4 className="font-bold text-[14px] text-slate-800 mb-2">Нарийвчлалтай 4 төрлийн хошуу</h4>
             <p className="text-[12px] text-slate-500 leading-relaxed font-medium">Эмчилгээ хийх хэсэгт тохируулан ашиглах боломжтой 4 өөр хэмжээтэй эмчилгээний хошуу (Tip) санал болгож, арьсны төлөв болон онцлогт тохирсон нарийн эмчилгээ хийх боломжтой.</p>
           </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Process</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            ВОЛЬНЮМЕР ЭМЧИЛГЭЭНИЙ<br/>ҮЕ ШАТ
          </h2>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">1</div>
            <p className="text-[14px] font-bold text-slate-700">Арьсны зөвлөгөө болон оношилгоо</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">2</div>
            <p className="text-[14px] font-bold text-slate-700">Нүүр цэвэрлэгээ болон мэдээ алдуулах тос түрхэх</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">3</div>
            <p className="text-[14px] font-bold text-slate-700">Вольнюмер төхөөрөмж ашиглан эмчилгээг хэрэгжүүлэх</p>
          </div>
        </div>
      </section>

      {/* 5. Recommendations */}
      <section className="py-16 px-6 bg-white">
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
              className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 cursor-default animate-fade-in-up"
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
               Хийлгэх үед өвдөх үү?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Тийм ээ, Вольнюмер нь нарийн зүү бүхий тарилгын үйлчилгээ байж болох тул бага зэрэг хатгуулах мэдрэмж гарч болно. Гэхдээ ерөнхийдөө хүчтэй өвдөлт байхгүй бөгөөд санаа зовж буй тохиолдолд мэдээ алдуулах тосоор өвдөлтийг бүрэн бууруулах боломжтой.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Мэдээ алдуулалт хэрэгтэй юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Эмчилгээ энгийн ч гэсэн хэсэг газрын мэдээ алдуулах тос 20-30 минут урьдчилан түрхэж тав тухтай байдлыг хангадаг. Зүүний оронд гуурс ашиглавал мэдээ алдуулалтгүйгээр ч хийх боломжтой тохиолдол гарна.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Эмчилгээний дараах арчилгааг хэрхэн хийх вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6 mb-2">Эмчилгээний дараа 24 цагийн турш саун, хүнд дасгал, архи согтууруулах ундаа, халуун орчноос зайлсхий. Нүүр угаах, будахаа 6 цагийн дараагаас хийх боломжтой бөгөөд зөөлөн найрлагатай бүтээгдэхүүн хэрэглэнэ.</p>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">Чийгшүүлэгч, нөхөн төлжүүлэх тос түрхэж тайвшруулна, мөн гадагш гарахдаа нарны тос заавал түрхээрэй.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Эмчилгээнд анхаарах зүйлс бий юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Арьсны үрэвсэл, батга, халдвартай хэсэгт хийхгүй байх нь зүйтэй бөгөөд урьдчилан эмчтэй нарийн зөвлөлдөнө. Аспирин зэрэг цус бүлэгнэлтийг саатуулах эм ууж байгаа бол эмчид мэдэгдэх хэрэгтэй. Мөн үйлчилгээний дараа богино хугацаанд филлер эсвэл өөх соруулах үйлчилгээтэй давхар хийхээс зайлсхийгээрэй.
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

export default VolnewmerPage;
