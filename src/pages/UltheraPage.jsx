import React from 'react';
import { ChevronLeft, Zap, Target, ShieldCheck, CheckCircle2, Sparkles, ArrowDown } from 'lucide-react';

const UltheraPage = ({ onBack }) => {

  const recommendations = [
    "Хүчтэй лифтинг үр дүнг хүсэж буй хүмүүст",
    "Нэг удаагийн эмчилгээгээр удаан хугацаанд үр дүнг мэдрэхийг хүсэж буй хүмүүст",
    "Арьсны ерөнхий уян хатан байдал алдагдаж, унжилтаас болж санаа зовж буй хүмүүст",
    "Хөгшрөлтөөс үүдэлтэй арьсны уян хатан байдал суларсан хүмүүст",
    "Гүн үрчлээ болон хүзүүний үрчлээс үүдэлтэй овортой харагдуулсан төрхийг сайжруулахыг хүсэж буй хүмүүст"
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
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          80%, 100% { transform: scale(2.2); opacity: 0; }
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
      <section className="relative h-[90vh] w-full bg-slate-900 flex flex-col justify-end overflow-hidden group">
        <img
          src="/페이지 이미지/tai00030000702.gif"
          alt="Ulthera Treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

        {/* Floating Pulse Ring */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-20 h-20 rounded-full border-2 border-slate-500/50" style={{animation: 'pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite'}}></div>
        </div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-300 tracking-[0.3em] uppercase mb-3 drop-shadow-md">
            Ulthera — Арьс чангалах
          </p>
          <h1 className="text-[13px] font-bold text-slate-300 mb-4 tracking-wide leading-relaxed shimmer-text">
            УЛЬТЕРА
          </h1>
          <h2 className="text-[36px] font-black leading-[1.08] text-white tracking-tight mb-6 drop-shadow-xl">
            Хүссэн гүний<br/>түвшиндээ<br/>нарийвчлалтай,<br/>хүчтэй хэт авиан<br/>лифтинг
          </h2>
          <div className="h-[1px] w-16 bg-slate-500 mb-6"></div>
          <p className="text-[14px] text-slate-300 font-medium leading-relaxed">
            HYPER-PERSONALITY LIFT
          </p>
          <ArrowDown size={28} className="text-white/50 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 2. Dual Depth Section */}
      <section className="relative w-full bg-slate-100 text-slate-900 py-16 px-7 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100px] bg-slate-50 rounded-[100%] scale-150 border-b border-slate-200"></div>

        <div className="relative z-10 mt-8 animate-fade-in-up delay-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center shadow-sm">
              <Target size={18} className="text-slate-600" />
            </div>
            <h3 className="text-[20px] font-black tracking-tight">DUAL DEPTH</h3>
          </div>
          <p className="text-[14px] text-slate-600 font-medium leading-[1.9]">
            Гурван төрлийн TD (Трансдюсер)-р нарийн хувийн тохируулга хийх боломжтой.
            Ультера нь арьсны <strong className="text-slate-800">хоёр өөр давхаргыг</strong> чиглүүлэн
            эмчилснээр илүү сайн үр дүнг хүлээх боломжтой.
          </p>
        </div>

        {/* Depth Visual */}
        <div className="mt-10 space-y-3 animate-fade-in-up delay-300">
          {[
            { depth: "1.5mm", label: "Арьсны өнгөн давхарга", width: "40%", color: "bg-slate-400/30 border-slate-400/40" },
            { depth: "3.0mm", label: "Арьсны дунд давхарга", width: "65%", color: "bg-slate-400/20 border-slate-400/30" },
            { depth: "4.5mm", label: "SMAS давхарга", width: "90%", color: "bg-slate-400/10 border-slate-400/20" }
          ].map((layer, i) => (
            <div key={i} className="flex items-center gap-4">
              <span className="text-[11px] font-bold text-slate-500 w-12 text-right shrink-0">{layer.depth}</span>
              <div className={`h-10 rounded-xl ${layer.color} border backdrop-blur-sm flex items-center px-4 transition-all duration-700 hover:scale-105`} style={{ width: layer.width }}>
                <span className="text-[11px] font-bold text-slate-200 truncate">{layer.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="w-full bg-white py-16 px-7">
        <div className="animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">How It Works</p>
          <h2 className="text-[28px] font-black text-slate-900 leading-tight mb-8">
            Ультерагийн<br/>үйлчлэх зарчим
          </h2>
        </div>

        {/* Principle Card */}
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl p-7 text-slate-800 shadow-xl border border-white/60 mb-6 animate-scale-in delay-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-100/50 rounded-full blur-3xl group-hover:bg-white/40 transition-colors duration-1000"></div>
          <div className="flex items-center gap-3 mb-5">
            <Zap size={20} className="text-slate-600" />
            <span className="text-[12px] font-bold text-slate-600 tracking-wider uppercase">60~70℃ Optimal Energy</span>
          </div>
          <p className="text-[13px] font-medium leading-[1.9] text-slate-700">
            Өндөр эрчимт хэт авиан энерги нь коллаген нөхөн төлжүүлэх хамгийн
            оновчтой температур <strong className="text-slate-800">(60~70℃)</strong>-д арьсны гүнд хүрч,
            дулааны бүлэгнэлтийн цэг <strong className="text-slate-800">(TPC)</strong> үүсгэн лифтинг хийдэг.
          </p>
        </div>

        {/* FDA Card */}
        <div className="bg-white rounded-3xl p-7 border border-slate-100 shadow-xl animate-scale-in delay-400 relative overflow-hidden group">
          <ShieldCheck className="absolute -bottom-4 -right-4 w-28 h-28 text-slate-50 opacity-40" />
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center">
              <ShieldCheck size={16} className="text-green-600" />
            </div>
            <span className="text-[12px] font-bold text-green-700 tracking-wider uppercase">FDA Баталгаажсан</span>
          </div>
          <p className="text-[13px] font-medium leading-[1.9] text-slate-600 relative z-10">
            АНУ-ын FDA-ээс батламжлагдсан <strong className="text-slate-900">анхны лифтингийн төхөөрөмж</strong> бөгөөд
            өндөр эрчимт хэт авиан туяа нь арьсны өнгөн давхаргыг гэмтээхгүйгээр
            арьсны гүн дэх SMAS давхарга хүртэл нэвтэрч,
            зүсэлт хийхгүйгээр унжсан арьсыг үр дүнтэйгээр сайжруулдаг.
          </p>
        </div>
      </section>

      {/* 4. SMAS + DeepSee Section */}
      <section className="w-full bg-slate-50 flex flex-col">
        <div className="grid grid-cols-2 min-h-[240px]">
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-4 border border-slate-200">
              <Sparkles size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[16px] font-black leading-snug mb-3">SMAS давхаргыг чангалах</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Хөгшрөлтөөс суларсан SMAS давхаргыг чангалж,
              коллаген үүсэлтийг дэмжин арьсыг үр дүнтэй өргөнө.
            </p>
          </div>
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tai00300006103.jpg" alt="SMAS Layer" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
        </div>

        <div className="grid grid-cols-2 min-h-[240px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tai00300006150.jpg" alt="DeepSee Technology" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-400">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
              <Target size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[16px] font-black leading-snug mb-3">DeepSee™ технологи</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Патентлагдсан бодит хугацааны хэт авиан дүрслэлийн
              технологи нь эмчилгээ хийгдэж буй хэсгийг
              дэлгэцэнд нэвт харуулна.
            </p>
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

      {/* Footer */}
      <footer className="bg-slate-200 text-center p-10 text-slate-500 text-[10px] uppercase tracking-widest border-t border-slate-300 pb-20">
        © 2026 90 хоногийн гайхамшиг арьс гоо сайхны эмнэлэг
      </footer>

    </div>
  );
};

export default UltheraPage;
