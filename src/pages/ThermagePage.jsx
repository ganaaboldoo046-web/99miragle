import React from 'react';
import { ChevronLeft, Waves, ShieldCheck, CheckCircle2, Eye, ArrowDown, Zap } from 'lucide-react';

const ThermagePage = ({ onBack }) => {

  const recommendations = [
    "Эрүүл арьсны төлөв байдлаа сэргээхийг хүсэж буй хүмүүст",
    "Нүүрэнд үрчлээ үүсч эхэлсэн хүмүүст",
    "Байгалийн бус харагдах нүүрнээс зайлсхийхийг хүсэж буй хүмүүст",
    "Нүдний зовхи унжиж эхэлсэн хүмүүст"
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
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-4px) rotate(1deg); }
          75% { transform: translateY(4px) rotate(-1deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-wave {
          animation: wave 4s ease-in-out infinite;
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
          alt="Thermage FLX"
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-100 transition-transform duration-[12000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/70 to-slate-100/20"></div>

        {/* Floating Wave Icon */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-wave">
          <Waves size={48} className="text-slate-300" />
        </div>

        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[11px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-3 drop-shadow-sm">
            Thermage FLX — Арьс чангалах
          </p>
          <h1 className="text-[13px] font-bold text-slate-500 mb-4 tracking-wide leading-relaxed shimmer-text">
            ТЕРМАЖ FLX
          </h1>
          <h2 className="text-[34px] font-black leading-[1.08] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            Туршлага бүр<br/>нарийвчлалтай,<br/>аюулгүй коллаген<br/>нөхөн төлжилт
          </h2>
          <div className="h-[1px] w-16 bg-slate-400 mb-6"></div>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed">
            Нүдний орчим болон нүүрний үрчлээг сайжруулах
          </p>
          <ArrowDown size={28} className="text-slate-400 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 2. How It Works */}
      <section className="relative w-full bg-slate-100 text-slate-900 py-16 px-7 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[100px] bg-slate-50 rounded-[100%] scale-150 border-b border-slate-200"></div>

        <div className="relative z-10 mt-8 animate-fade-in-up delay-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center shadow-sm">
              <Zap size={18} className="text-slate-600" />
            </div>
            <h3 className="text-[20px] font-black tracking-tight">Коллаген нөхөн төлжилт</h3>
          </div>
          <p className="text-[14px] text-slate-600 font-medium leading-[1.9]">
            Термажийн <strong className="text-slate-800">өндөр давтамжийн энерги</strong> арьсанд нэвтрэхэд
            арьсны доторх коллагеныг нөхөн төлжүүлэхэд тусалдаг.
            Уян хатан чанараа алдсан арьс болон үрчлээг Термаж эмчилгээгээр сайжруулах боломжтой.
          </p>
        </div>

        {/* Visual: RF Energy Wave */}
        <div className="mt-10 flex flex-col items-center animate-fade-in-up delay-300">
          <div className="relative w-full max-w-[280px] h-[120px]">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-full border border-slate-400/30"
                style={{
                  width: `${80 + i * 50}px`,
                  height: `${40 + i * 25}px`,
                  opacity: 1 - i * 0.2,
                  animation: `wave ${2 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`
                }}
              ></div>
            ))}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-3 h-3 bg-slate-400 rounded-full shadow-lg shadow-slate-400/50"></div>
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-4 tracking-wider uppercase">RF Energy Penetration</p>
        </div>
      </section>

      {/* 3. Device Info Section */}
      <section className="w-full bg-white py-16 px-7">
        <div className="animate-fade-in-up delay-200">
          <p className="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Device</p>
          <h2 className="text-[28px] font-black text-slate-900 leading-tight mb-8">
            Термаж төхөөрөмжийн<br/>танилцуулга
          </h2>
        </div>

        <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl p-7 text-slate-800 shadow-xl border border-white/60 animate-scale-in delay-300 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-100/50 rounded-full blur-3xl group-hover:bg-white/40 transition-colors duration-1000"></div>
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck size={18} className="text-slate-600" />
            <span className="text-[12px] font-bold text-slate-600 tracking-wider uppercase">Solta Medical, Inc.</span>
          </div>
          <p className="text-[13px] font-medium leading-[1.9] text-slate-700 relative z-10">
            Термаж бол АНУ-ын <strong className="text-slate-900">Солта Медикал (SOLTA MEDICAL, INC.)</strong> компаниас
            боловсруулсан өвөрмөц бүтээгдэхүүний нэр бөгөөд өндөр давтамжийн гүйдлийг ашиглан
            эдийг бүлэгнүүлэх замаар нүдний орчим болон нүүрний <strong className="text-slate-900">үрчлээг
            зүсэлтгүйгээр</strong> эмчлэхэд хэрэглэгддэг төхөөрөмж юм.
          </p>
        </div>
      </section>

      {/* 4. Eye + Face Grid */}
      <section className="w-full bg-slate-50 flex flex-col">
        <div className="grid grid-cols-2 min-h-[240px]">
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-300">
            <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-4 border border-slate-200">
              <Eye size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[16px] font-black leading-snug mb-3">Нүдний орчим</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Нүдний зовхины унжилт, нүдний доорх нарийн үрчлээг нарийвчлалтай сайжруулна.
            </p>
          </div>
          <div className="bg-slate-200 relative overflow-hidden group">
            <img src="/페이지 이미지/tai00100003104.jpg" alt="Eye area" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
        </div>

        <div className="grid grid-cols-2 min-h-[240px]">
          <div className="bg-slate-300 relative overflow-hidden group">
            <img src="/페이지 이미지/tai00300000343.jpg" alt="Face area" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-400">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mb-4">
              <Waves size={14} className="text-slate-600" />
            </div>
            <h3 className="text-[16px] font-black leading-snug mb-3">Нүүрний үрчлээ</h3>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Нүүрний бүх хэсгийн уян хатан чанарыг нэмэгдүүлж, байгалийн мэт залуужуулна.
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

export default ThermagePage;
