import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, ArrowDown, Layers, HelpCircle, AlertTriangle } from 'lucide-react';

const WaterGlowPage = ({ onBack }) => {

  const recommendations = [
    "Арьс нь хуурайшиж, өнгөө алдсан мэт харагддаг хүмүүст",
    "Нарийн үрчлээ болон арьсны өнгө бүтцийг сайжруулах шаардлагатай хүмүүст",
    "Төрөлхийн мэт усан гялбаатай (Mulwang) арьсыг хүсэж буй хүмүүст",
    "Чухал арга хэмжээний өмнө арьсаа маш хурдан хугацаанд сайжруулахыг хүссэн хүмүүст"
  ];

  const precautions = [
    "Эмчилгээний дараа 1 долоо хоногийн турш саун, эрчимтэй дасгал, архи согтууруулах ундаанаас зайлсхий.",
    "Хэрэв хавдах, хөхрөлт үүсвэл хүйтэн жин тавьж тайвшруулаарай.",
    "Үйлчилгээ хийсэн хэсгийг үрэх, хүчтэй даралт өгөхийг хориглоно.",
    "Хэрэв арьс харшимтгай эсвэл маш эмзэг бол эмчилгээний өмнө эмчид мэдэгдэж зөвлөлдөөрэй."
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
          src="/페이지 이미지/tai00100003104.jpg"
          alt="Water Glow Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Deep Hydration
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            УСАН ГЯЛБАА ТАРИА
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Арьсны гүнд<br/>чийгшил дүүргэх<br/>төгс шийдэл
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Гиалуроны хүчил (HA) -ийг шууд тарьж эрүүл бөгөөд гэрэлтсэн арьстай болгоно.
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
            <h3 className="text-[17px] font-black leading-snug mb-3 relative z-10">Тэр даруй<br/>чийгшүүлэх</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed relative z-10">
              Гиалуроны хүчил арьсанд шимэгдэж гүн чийгшил өгнө.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00700000011.jpg" alt="Hydration Effect" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00130000133.jpg" alt="Glowing Skin" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300 relative">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 text-slate-800">Усан<br/>гэрэлтэлт</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Арьсны хамгаалалтыг сайжруулж чийг алдалтыг зогсооно.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Principle / Device Info */}
      <section className="w-full bg-slate-50 py-12 px-5">
        <div className="animate-fade-in-up delay-200 px-2 mb-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Injector System</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Зориулалтын<br/>таригч төхөөрөмж
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 animate-scale-in delay-300 relative group flex flex-col mb-8">
          {/* Card Image Header */}
          <div className="h-48 relative overflow-hidden">
             <img src="/페이지 이미지/td02220000864.jpg" alt="Injector Device" className="w-full h-full object-cover origin-center transform transition-transform duration-[4000ms] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
             <div className="absolute bottom-4 left-5 flex items-center gap-2">
                 <Layers size={18} className="text-white" />
                 <span className="text-[13px] font-bold text-white tracking-wider uppercase drop-shadow-md">Auto Suction Injector</span>
             </div>
          </div>
          {/* Content Area */}
          <div className="p-6 bg-gradient-to-b from-slate-50 to-white relative">
            <div className="w-12 h-1 bg-slate-300 rounded-full mb-5"></div>
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600 mb-4">
              Арьс арчилгааны зориулалтын таригч төхөөрөмж нь <strong className="text-slate-800">Сорох (Suction) үйлдлийг</strong> ашиглан эмийн орцын хэмжээг тогтмол байлгаж, орцын алдагдлыг хамгийн бага түвшинд хүргэсэн байдаг.
            </p>
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600">
              Энгийн гар тариуртай харьцуулахад арьсны гүнд <strong className="text-slate-900 border-b border-slate-400 pb-0.5">жигд, яг тодорхой хэмжээгээр</strong> тарьдаг тул үйлчилгээний үр дүн илтэд найдвартай бөгөөд маш сайн байдаг.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Process</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            УСАН ГЯЛБАА ТАРИХ<br/>ҮЕ ШАТ
          </h2>
        </div>

        <div className="space-y-4 animate-fade-in-up delay-300">
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">1</div>
            <p className="text-[14px] font-bold text-slate-700">Зөвлөгөө болон оношилгоо</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">2</div>
            <p className="text-[14px] font-bold text-slate-700">Нүүр цэвэрлэгээ болон мэдээ алдуулалт</p>
          </div>
          <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 shrink-0 bg-slate-800 text-white rounded-full flex items-center justify-center font-black text-lg">3</div>
            <div className="flex flex-col">
              <p className="text-[14px] font-bold text-slate-700 mb-1">Усан гялбаа тарих</p>
              <p className="text-[12px] text-slate-500 font-medium">Нарийн зүүгээр арьсны давхаргад үйлчилнэ</p>
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
               Эмчилгээний дараа шууд арьс чийгшсэн, зөөлөн бөгөөд гэрэлтсэн мэт мэдрэгдэх болно.
             </p>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               2-5 хоногийн дотор хамгийн тод үр дүн гарах ба үүнээс хойш арьс толигор болох, нарийн үрчлээ тэнийх, уян хатан болох зэрэг үр дүн аажмаар нэмэгдэж гарна.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Үр дүн хэр удаан хадгалагдах вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6 mb-2">
               1 удаагийн үйлчилгээний үр дүн дунджаар 3-4 долоо хоног үргэлжлэх ба гиалуроны хүчил биед аяндаа задрахын хэрээр үр дүн аажмаар буурна.
             </p>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Тогтмол 3-5 удаа (багц) хийлгэсний дараа 2-3 сар тутамд ретач (retouch) хийлгэснээр арьсны төлөвөө маш сайн тогтвортой хадгалах бүрэн боломжтой.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Гаж нөлөө бий юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Харьцангуй аюулгүй ч арьсанд тарих тул хавдах, улайх, хөхрөх, хатгуулж өвдөх, жижиг товруу үүсэх зэрэг хөнгөн шинжүүд илэрч болно. Ихэвчлэн 2-3 хоногт хуучин хэвэндээ ордог тул санаа зовох зүйлгүй.
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

export default WaterGlowPage;
