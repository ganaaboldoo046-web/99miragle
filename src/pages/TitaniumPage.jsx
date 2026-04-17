import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, ArrowDown, Layers, HelpCircle, AlertTriangle } from 'lucide-react';

const TitaniumPage = ({ onBack }) => {

  const recommendations = [
    "Нүүрний ерөнхий уян хатан байдлыг нэмэгдүүлэхийг хүсэж буй хүмүүст",
    "Улайлт болон улаан батганаас үүдэн арьсны өнгө жигд бус харагддаг хүмүүст",
    "Нарийн болон гүн үрчлээс багасгахыг хүсэж буй хүмүүст",
    "Томорсон нүхжилт болон тэгш бус арьсны бүтцийг сайжруулахыг хүсэж буй хүмүүст",
    "Хурдан бөгөөд үр дүнтэй арьс чангалах (лифтинг) үр дүнг хүсэж буй хүмүүст."
  ];

  const precautions = [
    "Эмчилгээний дараа хамгийн багадаа 1 долоо хоногийн турш саун болон нарны хүчтэй хэт ягаан туяанаас зайлсхийнэ үү.",
    "Хүчтэй химийн найрлагатай арьс арчилгааны бүтээгдэхүүн ашиглахаас зайлсхийж, арьсыг тайвшруулах, чийгшүүлэх арчилгаа хийх шаардлагатай.",
    "Эмчилгээ хийгдсэн хэсэг эмзэг байх боломжтой тул арьсаа үрэх, маажихгүй байхыг анхаарна уу."
  ];

  return (
    <div className="bg-slate-50 flex flex-col font-sans relative w-full max-w-[430px] mx-auto shadow-2xl overflow-x-hidden text-slate-800 min-h-screen">

      {/* Keyframes */}
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
          src="/페이지 이미지/tai00310000594.gif"
          alt="Titanium Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Titanium Lifting
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            ТИТАНИУМ
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Арьсны гүнээс<br/>эхлэн чангалах<br/>дэвшилтэт<br/>технологи
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Арьсаа шинээр бүтээнэ үү.
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
            <h3 className="text-[17px] font-black leading-snug mb-3 relative z-10">Өндөр үр дүнтэй<br/>лифтинг</h3>
            <p className="text-[12px] text-slate-600 font-medium leading-relaxed relative z-10">
              Титаниум эмчилгээ нь арьсны уян хатан байдлыг дэмжиж, үрчлээг багасгана.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00130000133.jpg" alt="Titanium Lift" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* Row 2: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[260px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tci00400001150.jpg" alt="RF & Microneedle" className="absolute inset-0 w-full h-full object-cover transform duration-[3000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300 relative">
            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 border border-slate-200 shadow-sm">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[17px] font-black leading-snug mb-3 text-slate-800">HYPER<br/>PERSONALITY LIFT</h3>
            <p className="text-[12px] text-slate-500 font-medium leading-relaxed">
              Өндөр давтамжийн (RF) болон микро зүүний технологийг хослуулан дээд зэргийн үр дүнг үзүүлнэ.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Device Info Section */}
      <section className="w-full bg-slate-50 py-12 px-5">
        <div className="animate-fade-in-up delay-200 px-2 mb-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Device Specification</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Титаниум төхөөрөмж
          </h2>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200/60 animate-scale-in delay-300 relative group flex flex-col">
          {/* Card Image Header */}
          <div className="h-48 relative overflow-hidden">
             <img src="/페이지 이미지/tci00400001221.jpg" alt="Device Focus" className="w-full h-full object-cover origin-center transform transition-transform duration-[4000ms] group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
             <div className="absolute bottom-4 left-5 flex items-center gap-2">
                 <Layers size={18} className="text-white" />
                 <span className="text-[13px] font-bold text-white tracking-wider uppercase drop-shadow-md">Soprano Titanium</span>
             </div>
          </div>
          {/* Content Area */}
          <div className="p-6 bg-gradient-to-b from-slate-50 to-white relative">
            <div className="w-12 h-1 bg-slate-300 rounded-full mb-5"></div>
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600 mb-4">
              <strong className="text-slate-900">Diode 755, 810, 1064nm</strong> гурван өөр долгионы уртыг нэгэн зэрэг ялгаруулдаг лазер бөгөөд энергийг илүү гүн, хүчтэйгээр дамжуулдаг.
            </p>
            <p className="text-[13px] font-medium leading-[1.8] text-slate-600">
              Жинхэнэ арьсны давхарга хүртэл энерги дамжуулж, арьсны өнгийг сайжруулж, нүүрний хэлбэрийг засахын зэрэгцээ арьсны нөхөн төлжилтийг хангадаг <strong className="text-slate-900 border-b border-slate-400 pb-0.5">All-in-one</strong> лифтинг төхөөрөмж юм.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="text-center mb-10 animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Process</p>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            ТИТАНИУМ ЭМЧИЛГЭЭНИЙ<br/>ҮЕ ШАТ
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
            <p className="text-[14px] font-bold text-slate-700">Титаниум төхөөрөмж ашиглан эмчилгээг хэрэгжүүлэх</p>
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
               Эмчилгээний дараа шууд өдөр тутмын амьдралдаа орох боломжтой юу?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Тийм ээ, Титаниум лифтинг нь мэс заслын бус арга бөгөөд эмчилгээний дараа шууд хэвийн амьдралдаа орох боломжтой. Эмчилгээ хийлгэсэн хэсэгт улайлт эсвэл бага зэрэг халуун оргих шинж тэмдэг илэрч болох ч ихэнх тохиолдолд хэдэн цагийн дотор байгалийн жамаараа арилдаг. Нүүр будалт, угаалт болон гадагш гарах үйлдэл тухайн өдөртөө шууд хийх боломжтой ба нэмэлт нөхөн сэргээх хугацаа (downtime) шаардлагагүй.
             </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
             <h4 className="font-bold text-[14px] text-slate-800 mb-3 flex gap-2 items-start">
               <HelpCircle size={18} className="text-slate-400 shrink-0 mt-0.5" />
               Хэдэн удаа хийлгэх шаардлагатай вэ?
             </h4>
             <p className="text-[12px] text-slate-600 leading-relaxed pl-6">
               Нэг удаагийн эмчилгээгээр ч арьс чангарах үр дүнг мэдрэх боломжтой боловч тасралтгүй үр дүнгийн тулд 3-5 удаагийн давтамжтай хийлгэхийг зөвлөж байна. Ерөнхийдөө 2-4 долоо хоногийн зайтай эхлүүлж, цаашид 3-6 сарын завсарлагатайгаар үр дүнг хадгалах үйлчилгээ хийлгэх нь зүйтэй.
             </p>
          </div>
        </div>

        <div className="mt-12 animate-fade-in-up delay-400">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={20} className="text-orange-500" />
            <h3 className="font-bold text-[16px] text-slate-800">Анхаарах зүйлс</h3>
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

export default TitaniumPage;
