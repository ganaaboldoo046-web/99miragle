import React from 'react';
import { ChevronLeft, ArrowDown, MoveRight } from 'lucide-react';

const IntroPage = ({ onBack }) => {
  return (
    <div className="bg-slate-50 flex flex-col font-sans relative w-full max-w-[430px] mx-auto shadow-2xl overflow-x-hidden text-slate-800">
      
      {/* Motion Graphics Keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

      {/* 2. Full-Impact Hero Section */}
      <section className="relative h-[85vh] w-full bg-slate-200 flex flex-col justify-end overflow-hidden group">
        {/* Background Image Image */}
        <img 
          src="/images/hero.png" 
          alt="Lydia Clinic Hero" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity transform scale-100 transition-transform duration-[10000ms] group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-200 via-slate-100/60 to-transparent"></div>
        
        <div className="relative z-10 px-7 pb-16 animate-fade-in-up delay-100">
          <p className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mb-4 opacity-80 leading-snug">
            90 хоногийн гайхамшиг арьс гоо сайхны эмнэлэг
          </p>
          <h1 className="text-[44px] font-black leading-[1.05] text-slate-800 tracking-tight mb-6 drop-shadow-md">
            90 ӨДРИЙН<br/>ГАЙХАМШИГ
          </h1>
          <div className="h-[1px] w-20 bg-slate-400 mb-6"></div>
          <p className="text-[17px] text-slate-700 font-medium leading-relaxed border-l-2 border-slate-400 pl-4">
            Залуу харагдах биш,<br/>
            харин <span className="font-bold text-slate-900">залуужих нь.</span><br/>
            Арьс нэг л удаагийн үйлдлээр сайжирдаггүй.
          </p>
          <ArrowDown size={32} className="text-slate-400 mt-10 animate-bounce" />
        </div>
      </section>

      {/* 3. High-Contrast Impact (The Philosophy / Greeting) */}
      <section className="relative w-full bg-slate-200 text-slate-900 py-20 px-7 overflow-hidden flex flex-col items-center text-center">
        {/* Decorative Circle matching reference style */}
        <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-[120%] h-[120px] bg-slate-100 rounded-[100%] scale-150 shadow-inner"></div>
        
        <div className="relative z-10 mt-10 animate-scale-in delay-200">
          <p className="text-[13px] font-bold tracking-[0.2em] text-slate-500 uppercase mb-4 animate-fade-in-up delay-300">Focus On You</p>
          {/* Big Number Display */}
          <h2 className="text-[64px] font-black leading-none tracking-tighter mb-2 drop-shadow-md animate-fade-in-up delay-400">
            100<span className="text-[40px]">%</span>
          </h2>
          <p className="text-[20px] font-extrabold tracking-tight mb-10 text-slate-700 animate-fade-in-up delay-400">
            1:1 ОНЦГОЙ ТАНХИМ
          </p>
          <p className="text-[14px] text-slate-600 font-medium leading-relaxed max-w-[280px] mx-auto animate-fade-in-up delay-400">
            Олон үйлчлүүлэгч авахаас илүү, нэг үйлчлүүлэгчид 100% анхаарал хандуулах нь бидний зорилго. Др. Кан Жонбом (Kang Jongbeom)
          </p>
        </div>
      </section>

      {/* 4. Alternating Grid Blocks (Sincere Communication, Slow Aging) */}
      <section className="w-full bg-slate-50 flex flex-col">
        {/* Block A: Image Left, Text Right */}
        <div className="grid grid-cols-2 min-h-[220px]">
          <div className="bg-slate-300 relative overflow-hidden group">
             <img src="/images/slow_aging.png" alt="Slow Aging" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
          <div className="bg-slate-200 text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-200">
            <h3 className="text-[18px] font-black leading-snug mb-3">Удаан хөгшрөх</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              (Slow Aging) гүн ухаанаар төрөлхийн мэт гоо сайхныг бүтээнэ.
            </p>
          </div>
        </div>

        {/* Block B: Text Left, Image Right */}
        <div className="grid grid-cols-2 min-h-[220px]">
          <div className="bg-white text-slate-900 p-6 flex flex-col justify-center animate-fade-in-up delay-200">
            <h3 className="text-[18px] font-black leading-snug mb-3">Илэн далангүй харилцаа</h3>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              Эхний уулзалтаас итгэл найдварыг алдалгүй хүлээлтээс давсан үр дүнг амлана.
            </p>
          </div>
          <div className="bg-slate-200 relative overflow-hidden group">
             <img src="/images/gallery.png" alt="Gallery Room" className="absolute inset-0 w-full h-full object-cover transform duration-[2000ms] group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* 5. The 90 Days Miracles (Dynamic Alternating Layers) */}
      <section className="py-20 px-5 bg-white">
        <div className="text-center w-full mb-12 animate-fade-in-up delay-100">
          <p className="text-[12px] font-bold tracking-[0.2em] text-slate-400 uppercase mb-2">Programs</p>
          <h2 className="text-[32px] font-black text-slate-900 leading-tight">
            САНАЛ БОЛГОХ<br/>ШИЙДЛҮҮД
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          
          {/* 15 Days (Large Banner Style) */}
          <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-200 text-slate-900 group cursor-pointer h-[320px] animate-fade-in-up delay-100">
             <img src="/images/15_days.png" alt="15 days" className="absolute top-0 left-0 w-full h-3/4 object-cover opacity-80 transform duration-[3000ms] group-hover:scale-105" />
             <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-slate-200 via-slate-100 to-transparent flex flex-col justify-end p-8 border-t border-slate-100/30">
                <span className="text-[12px] font-extrabold text-slate-500 tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">15 DAYS</span>
                <h3 className="text-[24px] font-black mb-2">15 өдрийн гайхамшиг</h3>
                <p className="text-[13px] text-slate-600 font-medium opacity-90">15 өдрийн доторх эрч хүчтэй өөрчлөлтийн эхлэл.</p>
             </div>
          </div>

          {/* 30 Days (Solid color overlapping image) */}
          <div className="w-full flex items-center justify-between h-[200px] relative mt-4 group cursor-pointer animate-fade-in-up delay-200">
             <div className="w-[45%] h-full rounded-[2rem] overflow-hidden shadow-xl relative z-0">
                <img src="/images/slow_aging.png" alt="30 days" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transform duration-700 group-hover:grayscale-0 group-hover:scale-110" />
             </div>
             <div className="w-[65%] absolute right-0 bg-white shadow-2xl rounded-[2rem] p-7 border border-slate-100 z-10 flex flex-col justify-center min-h-[160px] transform transition-transform duration-500 group-hover:-translate-x-2">
                <span className="text-[11px] font-extrabold text-slate-400 tracking-wider mb-2">30 DAYS</span>
                <h3 className="text-[20px] font-black text-slate-900 mb-2 leading-tight">30 өдрийн гайхамшиг</h3>
                <p className="text-[12px] text-slate-500 font-medium line-clamp-2">30 өдрөөр гэрэлтэн цэцэглэх арьс.</p>
             </div>
          </div>

          {/* 60 Days (Solid color overlapping image Left) */}
          <div className="w-full flex items-center justify-between h-[200px] relative mt-4 group cursor-pointer animate-fade-in-up delay-300">
             <div className="w-[45%] h-full rounded-[2rem] overflow-hidden shadow-xl absolute right-0 z-0">
                <img src="/images/60_days.png" alt="60 days" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transform duration-700 group-hover:grayscale-0 group-hover:scale-110" />
             </div>
             <div className="w-[65%] absolute left-0 bg-slate-200 text-slate-900 shadow-2xl rounded-[2rem] p-7 border border-slate-50 z-10 flex flex-col justify-center min-h-[160px] transform transition-transform duration-500 group-hover:translate-x-2">
                <span className="text-[11px] font-extrabold text-slate-500 tracking-wider mb-2">60 DAYS</span>
                <h3 className="text-[20px] font-black mb-2 leading-tight">60 өдрийн гайхамшиг</h3>
                <p className="text-[12px] text-slate-600 font-medium line-clamp-2">Уян хатан, залуужсан арьсыг мэдэр.</p>
             </div>
          </div>

          {/* 90 Days (Large Box) */}
          <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-slate-50 cursor-pointer h-[320px] mt-4 border border-slate-200 group animate-fade-in-up delay-400">
             <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200 z-0 opacity-80"></div>
             <div className="absolute bottom-0 right-0 w-[55%] h-full">
                 <img src="/images/hero.png" alt="90 days" className="w-full h-full object-cover object-left opacity-90 transform duration-700 group-hover:scale-105" />
                 {/* Masking fade so text reads clear */}
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-transparent"></div>
             </div>
             
             <div className="relative z-10 p-8 h-full flex flex-col justify-start w-[65%]">
                <span className="text-[12px] font-extrabold text-slate-500 tracking-wider mb-2">90 DAYS</span>
                <h3 className="text-[28px] font-black text-slate-900 mb-4 leading-tight group-hover:text-amber-700 transition-colors duration-500">90 өдрийн<br/>гайхамшиг</h3>
                <p className="text-[13px] text-slate-600 font-medium opacity-90 mb-6 group-hover:text-slate-800 transition-colors">90 өдрийн төгс гоо сайхны гүйцэтгэл. Гайхамшгийг бидэнтэй хүлээн авна уу.</p>
                <div className="mt-auto w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                  <MoveRight size={18} />
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* 6. Areas of Treatment (Bento Grid) */}
      <section className="py-20 px-5 bg-gradient-to-b from-slate-200 to-slate-100 text-slate-900">
        <h2 className="text-[28px] font-black leading-tight mb-8 drop-shadow-sm text-center animate-fade-in-up delay-100">
          ҮЙЛЧИЛГЭЭНИЙ<br />ЧИГЛЭЛҮҮД
        </h2>
        
        {/* Bento Grid layout matching the visual reference blocks */}
        <div className="grid grid-cols-2 gap-3 auto-rows-[120px]">
          
          {/* Big Item */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-white to-slate-100 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-end text-slate-900 shadow-xl border border-slate-200 group cursor-pointer animate-scale-in delay-200">
             <div className="absolute top-0 right-0 w-[80%] h-full">
                <img src="/images/60_days.png" alt="Skin Care" className="w-full h-full object-cover mix-blend-overlay opacity-60 transform duration-[3000ms] group-hover:scale-110" />
             </div>
             <div className="relative z-10 w-[70%] transform duration-500 group-hover:-translate-y-2">
               <h4 className="text-[24px] font-black leading-tight mb-1">Арьс чангалах</h4>
               <p className="text-[12px] font-bold text-slate-500">Elasticity & Tightening</p>
               <div className="h-1 w-0 bg-slate-900 mt-2 transition-all duration-700 group-hover:w-10"></div>
             </div>
          </div>
          
          {/* Small Single items */}
          <div className="col-span-1 row-span-1 bg-white hover:bg-slate-50 transition-colors rounded-2xl flex flex-col items-center justify-center border border-slate-200 shadow-sm cursor-pointer animate-fade-in-up delay-300">
             <h4 className="font-extrabold text-[15px]">Арьс</h4>
             <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest">Skin</span>
          </div>

          <div className="col-span-1 row-span-1 bg-gradient-to-br from-slate-200 to-slate-300 hover:from-slate-100 hover:to-slate-200 transition-colors rounded-2xl flex flex-col items-center justify-center shadow-md cursor-pointer animate-fade-in-up delay-400">
             <h4 className="font-extrabold text-[15px] text-slate-800">Пети</h4>
             <span className="text-[10px] text-slate-500 mt-1 uppercase tracking-widest">Petit</span>
          </div>
          
          {/* Wide Item */}
          <div className="col-span-2 row-span-1 bg-white text-slate-900 rounded-2xl p-5 flex items-center justify-between shadow-sm border border-slate-100 cursor-pointer group animate-fade-in-up delay-400">
             <div>
               <h4 className="font-black text-[16px] mb-1 leading-tight group-hover:text-amber-700 transition-colors">Сорви / Нүхжилт / Батга</h4>
               <p className="text-[11px] font-bold text-slate-500">Нөсөө / Мэнгэ арилгах</p>
             </div>
             <MoveRight size={20} className="text-slate-400 transform transition-transform group-hover:translate-x-2" />
          </div>

          <div className="col-span-2 row-span-1 bg-slate-50 border border-slate-300 rounded-2xl p-5 flex items-center justify-center outline-dashed outline-1 outline-slate-300 -outline-offset-4 hover:bg-white transition-colors cursor-pointer animate-fade-in-up delay-400">
             <h4 className="font-bold text-[14px] text-slate-600 tracking-wide uppercase">Эмчилгээний Гоо Сайхан</h4>
          </div>

        </div>
      </section>

      {/* Footer minimal for intro page */}
      <footer className="bg-slate-200 text-center p-10 text-slate-500 text-[10px] uppercase tracking-widest border-t border-slate-300 pb-20">
        © 2026 90 хоногийн гайхамшиг арьс гоо сайхны эмнэлэг
      </footer>

    </div>
  );
};

export default IntroPage;
