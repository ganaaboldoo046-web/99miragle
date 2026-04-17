import React from 'react';
import { ChevronLeft, MapPin, Phone, Clock, TrainTrack, BusFront, Car, Info } from 'lucide-react';

const LocationPage = ({ onBack }) => {
  return (
    <div className="bg-slate-50 flex flex-col font-sans relative w-full max-w-[430px] mx-auto shadow-2xl overflow-x-hidden text-slate-800 min-h-screen">
      
      {/* Motion Graphics Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* 1. Header (Sticky & Transparent) */}
      <header className="px-5 py-5 absolute top-0 w-full z-50 flex justify-between items-center text-white mix-blend-difference animate-fade-in-up">
        <button onClick={onBack} className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-all">
          <ChevronLeft size={28} />
        </button>
      </header>

      {/* 2. Hero Section */}
      <section className="relative h-[40vh] w-full bg-slate-200 flex flex-col justify-end overflow-hidden group">
        <img 
          src="/images/gallery.png" 
          alt="Location background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity transform scale-100 transition-transform duration-[10000ms] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/60 to-transparent"></div>
        
        <div className="relative z-10 px-7 pb-10 animate-fade-in-up delay-100 text-center">
          <h1 className="text-[32px] font-black leading-tight text-slate-800 tracking-tight mb-2 drop-shadow-md">
            ҮЗЛЭГИЙН МЭДЭЭЛЭЛ<br/>БАЙРШИЛ
          </h1>
          <div className="h-[1px] w-12 bg-slate-400 mx-auto mb-3"></div>
          <p className="text-[13px] text-slate-600 font-medium tracking-widest uppercase">
            Төрөлхийн мэт гоо сайханд хүрэх зам
          </p>
        </div>
      </section>

      {/* 3. Main Info Content */}
      <section className="relative z-20 w-full px-5 py-10 flex flex-col gap-6 -mt-6">
        
        {/* Contact & Location Block */}
        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in-up delay-200 relative overflow-hidden">
          <MapPin className="absolute -top-4 -right-4 w-32 h-32 text-slate-50 opacity-50 -z-10" />
          
          <div className="mb-6">
            <h2 className="text-[18px] font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-5 bg-slate-900 rounded-full"></span>
              Байршил
            </h2>
            <div className="flex gap-3 text-[13px] text-slate-600 font-medium leading-relaxed mb-4">
              <div className="mt-1"><MapPin size={16} className="text-slate-400" /></div>
              <p>
                <strong className="text-slate-800 block mb-1">Сөүл хот, Ганнам-гү, Дусан-дэру 509</strong>
                SD Biosensor 4-р давхар (Чондам-дон)
              </p>
            </div>
            <div className="flex gap-3 text-[13px] text-slate-600 font-medium leading-relaxed">
              <div className="mt-0.5"><Phone size={16} className="text-slate-400" /></div>
              <p>
                <strong className="text-slate-800 text-[15px]">02-512-7515</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Operating Hours Block */}
        <div className="bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl p-6 shadow-xl text-slate-800 animate-fade-in-up delay-300 relative overflow-hidden border border-white/50">
          <Clock className="absolute top-4 right-4 w-32 h-32 text-slate-400 opacity-20 mix-blend-overlay" />
          
          <h2 className="text-[18px] font-black text-slate-900 mb-5 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-slate-500 rounded-full"></span>
            Үзлэгийн цагийн хуваарь
          </h2>
          
          <ul className="space-y-3 text-[13px] font-medium text-slate-700">
            <li className="flex justify-between border-b border-slate-300/50 pb-2">
              <span className="text-slate-500 w-24">Даваа ~ Пүрэв</span>
              <span className="font-bold text-slate-800 tracking-widest">10:30 - 18:30</span>
            </li>
            <li className="flex justify-between border-b border-slate-300/50 pb-2">
              <span className="text-slate-500 w-24">Баасан гараг</span>
              <span className="font-bold text-slate-800 tracking-widest">14:00 - 21:00</span>
            </li>
            <li className="flex justify-between border-b border-slate-300/50 pb-2">
              <span className="text-slate-500 w-24">Бямба гараг</span>
              <span className="font-bold text-slate-800 tracking-widest">10:30 - 16:30</span>
            </li>
          </ul>
          
          <div className="mt-5 p-3 rounded-xl bg-orange-50/80 border border-orange-200 flex gap-2 items-start text-orange-700">
            <Info size={16} className="shrink-0 mt-0.5 text-orange-500" />
            <p className="text-[11px] leading-snug">Лхагва, Ням гараг болон бүх нийтийн амралтын өдрүүдэд амарна.</p>
          </div>
        </div>

      </section>

      {/* 4. Transportation Layout */}
      <section className="px-5 pb-20 pt-2 animate-fade-in-up delay-400">
         <h2 className="text-[18px] font-black text-slate-900 mb-6 px-1 flex items-center gap-2">
            Тээврийн хэрэгслээр ирэх
         </h2>
         
         <div className="space-y-4">
           {/* Subway */}
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
             <h3 className="flex items-center gap-2 font-bold text-slate-800 text-[15px]">
               <TrainTrack size={18} className="text-slate-500"/> Метро
             </h3>
             <ul className="space-y-4 text-[12px] text-slate-600">
               <li className="flex gap-3 items-start">
                 <span className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0">3-р шугам</span>
                 <p className="leading-snug pt-0.5">Апгүжон өртөөний 3-р гарцаар гарч, Дусан-дэруу дагуу 8 минут алхана.</p>
               </li>
               <li className="flex gap-3 items-start">
                 <span className="bg-lime-700 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0">7-р шугам</span>
                 <p className="leading-snug pt-0.5">Ганнам-гү чон өртөөний 3-р гарцаар гарч, Дусан-дэруу дагуу 10 минут алхана.</p>
               </li>
             </ul>
           </div>

           {/* Bus */}
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-4">
             <h3 className="flex items-center gap-2 font-bold text-slate-800 text-[15px]">
               <BusFront size={18} className="text-slate-500"/> Автобус
             </h3>
             <div className="text-[12px] text-slate-600 space-y-2 mb-2 font-medium">
                <p>• 'Апгүжон родео' зогсоолд бууж 5 минут алхана.</p>
                <p>• 'Дусан цэцэрлэгт хүрээлэн' зогсоолд бууж 2 минут алхана.</p>
             </div>
             <ul className="space-y-3 text-[12px] text-slate-600 border-t border-slate-100 pt-4">
               <li className="flex gap-3 items-center">
                 <span className="bg-blue-600 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0 w-14 text-center">Цэнхэр</span>
                 <p className="font-medium">143, 240, 242, 345</p>
               </li>
               <li className="flex gap-3 items-center">
                 <span className="bg-green-600 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0 w-14 text-center">Ногоон</span>
                 <p className="font-medium">2416, 4212, 4318</p>
               </li>
               <li className="flex gap-3 items-center">
                 <span className="bg-red-500 text-white font-bold px-2 py-0.5 rounded text-[10px] shrink-0 w-14 text-center">Улаан</span>
                 <p className="font-medium">9407, 9507, 9607</p>
               </li>
             </ul>
           </div>

           {/* Car */}
           <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-3">
             <h3 className="flex items-center gap-2 font-bold text-slate-800 text-[15px] mb-1">
               <Car size={18} className="text-slate-500"/> Хувийн машин
             </h3>
             <p className="text-[13px] font-bold text-slate-900 ml-7">
               Дусан-дэру 509 <span className="text-[11px] text-slate-500 font-normal">(Дусан цэцэрлэгт хүрээлэнгийн ойролцоо)</span>
             </p>
             <div className="ml-7 mt-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
               <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md mb-2 inline-block">Зогсоолын мэдээлэл</span>
               <ul className="text-[11px] text-slate-600 space-y-1.5 leading-snug">
                 <li className="flex items-start gap-1">
                    <span className="text-slate-400 font-bold">*</span> 
                    Барилгын зогсоолд байрлуулах боломжтой (2 цаг үнэгүй).
                 </li>
                 <li className="flex items-start gap-1">
                    <span className="text-slate-400 font-bold">*</span> 
                    Валет үйлчилгээ 4,000 вон / Цахилгаан машин болон том (SUV) машин зогсоолд байрлуулах боломжгүй.
                 </li>
               </ul>
             </div>
           </div>
         </div>
      </section>

    </div>
  );
};

export default LocationPage;
