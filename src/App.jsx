import React, { useState, useEffect } from 'react';
import {
  Menu, ChevronLeft, ChevronRight, Sparkles,
  Droplets, Stethoscope, Syringe, Star, Heart,
  X, ChevronDown, ChevronUp
} from 'lucide-react';
import IntroPage from './pages/IntroPage';
import LocationPage from './pages/LocationPage';
import UltheraPage from './pages/UltheraPage';
import ThermagePage from './pages/ThermagePage';
import TitaniumPage from './pages/TitaniumPage';
import VolnewmerPage from './pages/VolnewmerPage';
import ThreadLiftingPage from './pages/ThreadLiftingPage';
import RadiessePage from './pages/RadiessePage';
import UltracolPage from './pages/UltracolPage';
import ExosomePage from './pages/ExosomePage';
import RejuranPage from './pages/RejuranPage';
import JuvelookPage from './pages/JuvelookPage';
import WaterGlowPage from './pages/WaterGlowPage';
import ByryznPage from './pages/ByryznPage';
import SkinvivePage from './pages/SkinvivePage';
import AnimatedCanvas from './components/AnimatedCanvas';

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const toggleMenuAccordion = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleNavigation = (subItem) => {
    if (subItem === "Эмнэлгийн танилцуулга") setCurrentPage('intro');
    else if (subItem === "Үзлэгийн мэдээлэл / Хаяг байршил") setCurrentPage('location');
    else if (subItem === "Ультера") setCurrentPage('ulthera');
    else if (subItem === "Термаж") setCurrentPage('thermage');
    else if (subItem === "Титаниум") setCurrentPage('titanium');
    else if (subItem === "Вольнюмер") setCurrentPage('volnewmer');
    else if (subItem === "Утасан лифтинг") setCurrentPage('threadlifting');
    else if (subItem === "Радиесс") setCurrentPage('radiesse');
    else if (subItem === "Ультракол") setCurrentPage('ultracol');
    else if (subItem === "Эксосом") setCurrentPage('exosome');
    else if (subItem === "Режуран") setCurrentPage('rejuran');
    else if (subItem === "Жювелук") setCurrentPage('juvelook');
    else if (subItem === "Усан гялбаа тариа") setCurrentPage('waterglow');
    else if (subItem === "Байрижн") setCurrentPage('byryzn');
    else if (subItem === "Скинвайв") setCurrentPage('skinvive');
    else if (subItem === "Ботокс") setCurrentPage('botox');
    setIsMenuOpen(false);
  };

  const menuData = [
    { title: "90 өдрийн гайхамшиг", items: ["Эмнэлгийн танилцуулга", "Тоног төхөөрөмж", "Үзлэгийн мэдээлэл / Хаяг байршил"] },
    { title: "Арьс чангалах", items: ["Ультера", "Термаж", "Титаниум", "Вольнюмер", "Утасан лифтинг"] },
    { title: "Арьс", items: ["Радиесс", "Ультракол", "Эксосом", "Режуран", "Жювелук", "Усан гялбаа тариа", "Байрижн", "Скинвайв"] },
    { title: "Пети", items: ["Ботокс", "Нүүрний хэлбэр засах тариа", "Жювидерм", "Y Солюшн"] },
    { title: "Сорви / Нүхжилт / Батга / Нөсөө толбо / Мэнгэ арилгах", items: ["Потенза", "Сикрет дуо", "Пико эн ди", "Үрэвслийн эсрэг тариа", "Аква пил", "CO2 лазер"] },
    { title: "Эмчилгээний гоо сайхан", items: ["Батганы арчилгаа", "Хүчилтөрөгчийн арчилгаа", "Цайруулах арчилгаа", "Нөхөн сэргээх арчилгаа", "Чийгшүүлэх арчилгаа", "Дуслын эмчилгээ"] },
    { title: "Гоо сайхны бүтээгдэхүүн", items: ["Ревиталайзинг тос", "Эксосом серам мист", "Эксосом голограмм маск"] },
    { title: "Мэдээлэл солилцох хэсэг", items: ["Зарлал", "Хэвлэл мэдээлэл", "Онлайн зөвлөгөө", "Өмнөх болон дараах зураг", "Какаоток зөвлөгөө"] }
  ];

  // 상단 슬라이더 데이터
  const heroSlides = [
    {
      id: 1,
      title: "Эмэгтэйчүүдийн\nнарийн мэргэжлийн\nэмнэлэг",
      subtitle: "Clinic — Арьсны стандарт",
      img: "/페이지 이미지/tci00760000014.jpg"
    },
    {
      id: 2,
      title: "Дээд зэргийн\nлазер технологи",
      subtitle: "Хамгийн сүүлийн үеийн төхөөрөмж",
      img: "/페이지 이미지/tci00800000032.jpg"
    },
    {
      id: 3,
      title: "Косметик мэс засал\nмэргэжилтнүүд",
      subtitle: "Танд зориулсан ганцаарчилсан төлөвлөгөө",
      img: "/페이지 이미지/td02220000864.jpg"
    },
    {
      id: 4,
      title: "Мэргэжилтнүүдийн\nбатлагдсан үр дүн",
      subtitle: "Аюулгүй бөгөөд найдвартай",
      img: "/페이지 이미지/td02220001654.jpg"
    },
    {
      id: 5,
      title: "Төрөлхийн мэт\nгоо сайхан",
      subtitle: "Эрүүл, гэрэлтсэн арьс",
      img: "/페이지 이미지/tica1010016694.jpg"
    },
    {
      id: 6,
      title: "Өөртөө итгэлтэй\nгэрэлтсэн төрх",
      subtitle: "Мэргэжлийн арьс арчилгаа",
      img: "/페이지 이미지/tica1140006962.jpg"
    }
  ];

  // 하단 서비스 카드 데이터 (실버 & 그레이 그라데이션 적용)
  const services = [
    {
      id: '01',
      title: "Ультера\nхэт авиан\nлифтинг",
      icon: <Sparkles className="w-5 h-5 text-slate-700" />,
      gradClass: "from-slate-200 via-slate-100 to-slate-200 text-slate-800",
      iconBg: "bg-white/50"
    },
    {
      id: '02',
      title: "Скинвайв\nарьсны гүний\nтариа",
      icon: <Droplets className="w-5 h-5 text-slate-700" />,
      gradClass: "from-slate-100 via-slate-200 to-slate-300 text-slate-800",
      iconBg: "bg-black/5"
    },
    {
      id: '03',
      title: "Потенза\nсорви болон\nнүхжилт",
      icon: <Star className="w-5 h-5 text-slate-800" />,
      gradClass: "from-slate-300 via-slate-200 to-slate-300 text-slate-900",
      iconBg: "bg-white/70"
    }
  ];

  const categories = ["Арьс чангалах", "Арьс арчилгаа", "Сорви / Нүхжилт", "Пети"];
  const categoriesItems = [
    menuData[1].items,
    menuData[2].items,
    menuData[4].items,
    menuData[3].items
  ];

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  if (currentPage === 'intro') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <IntroPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'location') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <LocationPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'ulthera') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <UltheraPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'thermage') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <ThermagePage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'titanium') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <TitaniumPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'volnewmer') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <VolnewmerPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'threadlifting') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <ThreadLiftingPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'radiesse') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <RadiessePage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'ultracol') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <UltracolPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'exosome') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <ExosomePage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'rejuran') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <RejuranPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'juvelook') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <JuvelookPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'waterglow') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <WaterGlowPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'byryzn') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <ByryznPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'skinvive') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <SkinvivePage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  if (currentPage === 'botox') {
    return (
      <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
        <BotoxPage onBack={() => setCurrentPage('home')} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e5e7eb] flex justify-center font-sans">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          display: inline-flex;
          width: max-content;
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* 모바일 메인 컨테이너 (실버 그라데이션 배경) */}
      <div className="w-full max-w-[430px] bg-gradient-to-b from-white via-slate-50 to-slate-200 min-h-screen relative shadow-2xl overflow-x-hidden flex flex-col">

        {/* 1. Header (실버/다크그레이 로고) */}
        <header className="px-5 py-5 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center shadow-md border border-white">
              <span className="text-slate-700 font-black text-xl">L</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px] font-black text-slate-800 leading-none tracking-tight">
                90 ХОНОГИЙН ГАЙХАМШИГ
              </h1>
              <span className="text-[10px] font-medium text-slate-400 tracking-wider">
                арьс гоо сайхны эмнэлэг
              </span>
            </div>
          </div>
          <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-500 hover:text-slate-800 transition-colors">
            <Menu size={24} />
          </button>
        </header>

        {/* 2. Marquee (라이트 그레이 메탈릭 바) */}
        <div className="bg-gradient-to-r from-slate-200 via-slate-50 to-slate-200 text-slate-700 py-3 overflow-hidden shadow-sm border-y border-slate-300/50">
          <div className="animate-marquee text-[10px] font-bold tracking-[0.25em] uppercase opacity-90">
            <span className="mx-6 flex items-center gap-2"><Star size={10} fill="#94a3b8" className="text-slate-400" /> 90 ХОНОГИЙН ГАЙХАМШИГ</span>
            <span className="mx-6 flex items-center gap-2"><Star size={10} fill="#94a3b8" className="text-slate-400" /> LIGHT GRAY METALLIC</span>
            <span className="mx-6 flex items-center gap-2"><Star size={10} fill="#94a3b8" className="text-slate-400" /> МЭРГЭШСЭН ЭМНЭЛЭГ</span>
            <span className="mx-6 flex items-center gap-2"><Star size={10} fill="#94a3b8" className="text-slate-400" /> 90 ХОНОГИЙН ГАЙХАМШИГ</span>
          </div>
        </div>

        {/* 3. Hero Carousel (배너 하단 실버/블랙 그라데이션) */}
        <div className="mt-8 relative h-[440px] w-full flex items-center justify-center">
          <AnimatedCanvas />
          {heroSlides.map((slide, index) => {
            let isCenter = index === activeSlide;
            let isLeft = index === (activeSlide - 1 + heroSlides.length) % heroSlides.length;
            let isRight = index === (activeSlide + 1) % heroSlides.length;

            if (!isCenter && !isLeft && !isRight) return null;

            let transformClasses = "translate-x-0 scale-100 z-30 opacity-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)]";
            if (isLeft) transformClasses = "-translate-x-[62%] scale-[0.82] z-10 opacity-40 blur-[2px]";
            if (isRight) transformClasses = "translate-x-[62%] scale-[0.82] z-10 opacity-40 blur-[2px]";

            return (
              <div
                key={slide.id}
                className={`absolute w-[70%] h-[400px] rounded-[2.5rem] overflow-hidden transition-all duration-700 ease-in-out border border-white/40 ${transformClasses}`}
              >
                <img src={slide.img} alt="banner" className="w-full h-full object-cover" />

                {/* 하단 부분 그라데이션 (라이트 그레이) */}
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-200/95 via-slate-100/70 to-transparent pointer-events-none"></div>

                {/* 하트 아이콘 (라이트 메탈릭 스타일) */}
                <div className="absolute top-6 right-6 w-10 h-10 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/80 shadow-md">
                  <Heart size={18} className="text-slate-500 fill-slate-300/50" />
                </div>

                <div className={`absolute bottom-8 left-7 right-7 transition-all duration-500 ${isCenter ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                  <h2 className="text-slate-800 font-bold text-xl leading-tight mb-2 drop-shadow-sm whitespace-pre-line">
                    {slide.title}
                  </h2>
                  <p className="text-slate-500 text-[11px] font-medium tracking-wide">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 페이지네이션 및 컨트롤 */}
        <div className="flex flex-col items-center mt-2 mb-10">
          <div className="flex space-x-2 mb-6">
            {heroSlides.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeSlide === idx ? 'w-10 bg-slate-800' : 'w-1.5 bg-slate-300'}`}
              />
            ))}
          </div>
          <div className="flex space-x-4">
            <button onClick={prevSlide} className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 bg-white shadow-sm active:scale-90 transition-all">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center text-white shadow-lg active:scale-90 transition-all">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* 4. 서비스 섹션 헤더 */}
        <div className="px-7 mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-[2px] w-6 bg-slate-800"></div>
            <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">ҮЙЛЧИЛГЭЭ</h3>
          </div>
          <h2 className="text-[26px] font-black text-slate-900 leading-tight">
            Арьс гоо сайхны<br />үйлчилгээний төрлүүд
          </h2>
        </div>

        {/* 5. 서비스 카드 (자동 슬라이드 - Marquee) */}
        <div className="overflow-hidden w-full pb-12 pt-2 relative">
          
          <div className="animate-marquee flex gap-4 w-max">
            {[...services, ...services, ...services, ...services].map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className={`shrink-0 w-[180px] h-[230px] rounded-[2.5rem] p-7 flex flex-col justify-between relative shadow-xl shadow-slate-200/50 bg-gradient-to-br border border-white/20 ${service.gradClass}`}
              >
                <div className="flex justify-between items-start">
                  <span className="font-bold text-[11px] opacity-40">{service.id}</span>
                  <div className={`w-9 h-9 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 ${service.iconBg}`}>
                    {service.icon}
                  </div>
                </div>
                <div>
                  <p className="font-extrabold text-[14px] leading-snug whitespace-pre-line mb-3">
                    {service.title}
                  </p>
                  <div className="w-6 h-1 bg-current opacity-20 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. 카테고리 탭 및 서브메뉴 (실버 버튼 스타일) */}
        <div className="flex flex-col mb-16">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 px-7 pb-6">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`shrink-0 px-6 py-3.5 rounded-2xl text-[12px] font-bold transition-all shadow-sm ${activeCategoryIdx === idx
                    ? 'bg-slate-800 text-white shadow-slate-200 shadow-lg'
                    : 'bg-white border border-slate-200 text-slate-600'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="px-7 flex flex-col">
            {categoriesItems[activeCategoryIdx].map((subItem, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(subItem);
                }}
                className="w-full py-4 text-left flex items-center justify-between group active:opacity-70 transition-all border-b border-slate-200/60 last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-[5px] h-[5px] rounded-full bg-slate-500"></div>
                  <span className="text-[14px] font-bold text-slate-700 leading-tight pr-2">{subItem}</span>
                </div>
                <ChevronRight size={16} className="text-slate-300 group-hover:text-slate-600 transition-colors shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Footer (라이트 그레이 메탈릭) */}
        <footer className="bg-gradient-to-b from-slate-200 to-slate-300 rounded-t-[3rem] px-7 py-16 text-center text-slate-800 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] border-t border-white/50">
          <h3 className="font-black text-lg tracking-[0.2em] mb-2 uppercase text-slate-700">90 DAYS MIRACLE</h3>
          <p className="text-slate-500 text-[11px] leading-relaxed mb-8">
            Professional Cosmetic Surgery Clinic<br />
            90 хоногийн гайхамшиг арьс гоо сайхны эмнэлэг
          </p>
          <button className="w-full py-4 bg-white text-slate-800 font-black rounded-2xl mb-10 active:scale-95 transition-all shadow-md border border-slate-100">
            ЦАГ ЗАХИАЛАХ
          </button>
          <p className="text-slate-400 text-[10px] tracking-widest uppercase">© 2026 Lydia Clinic. All rights reserved.</p>
        </footer>

        {/* Full Screen Menu Overlay */}
        <div
          className={`absolute inset-0 bg-white z-[100] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto flex flex-col hide-scrollbar`}
        >
          {/* Menu Header */}
          <div className="px-5 py-5 sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 flex justify-between items-center">
            <div className="flex flex-col">
              <h2 className="text-[18px] font-black text-slate-900 leading-none tracking-tight">ҮНДСЭН ЦЭС</h2>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Lydia Clinic Menu</span>
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-600 bg-slate-100 rounded-full active:scale-90 transition-all hover:bg-slate-200">
              <X size={20} />
            </button>
          </div>

          {/* Menu List */}
          <div className="flex-1 px-5 py-4 pb-20">
            {menuData.map((menu, idx) => {
              const isOpen = openMenuIndex === idx;
              return (
                <div key={idx} className="border-b border-slate-200/60 last:border-0">
                  <button
                    onClick={() => toggleMenuAccordion(idx)}
                    className="w-full py-4 flex justify-between items-center text-left text-slate-800 font-extrabold active:opacity-70 transition-opacity"
                  >
                    <span className="text-[14px] leading-tight pr-4">{menu.title}</span>
                    <span className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {/* Submenu Items */}
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                    <ul className="pl-4 space-y-3 mt-1 border-l-2 border-slate-200">
                      {menu.items.map((subItem, subIdx) => (
                        <li key={subIdx}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              if (subItem === "Эмнэлгийн танилцуулга") {
                                setCurrentPage('intro');
                                setIsMenuOpen(false);
                              } else if (subItem === "Үзлэгийн мэдээлэл / Хаяг байршил") {
                                setCurrentPage('location');
                                setIsMenuOpen(false);
                              } else if (subItem === "Ультера") {
                                setCurrentPage('ulthera');
                                setIsMenuOpen(false);
                              } else if (subItem === "Термаж") {
                                setCurrentPage('thermage');
                                setIsMenuOpen(false);
                              } else if (subItem === "Титаниум") {
                                setCurrentPage('titanium');
                                setIsMenuOpen(false);
                              } else if (subItem === "Вольнюмер") {
                                setCurrentPage('volnewmer');
                                setIsMenuOpen(false);
                              } else if (subItem === "Утасан лифтинг") {
                                setCurrentPage('threadlifting');
                                setIsMenuOpen(false);
                              } else if (subItem === "Радиесс") {
                                setCurrentPage('radiesse');
                                setIsMenuOpen(false);
                              } else if (subItem === "Ультракол") {
                                setCurrentPage('ultracol');
                                setIsMenuOpen(false);
                              } else if (subItem === "Эксосом") {
                                setCurrentPage('exosome');
                                setIsMenuOpen(false);
                              } else if (subItem === "Режуран") {
                                setCurrentPage('rejuran');
                                setIsMenuOpen(false);
                              } else if (subItem === "Жювелук") {
                                setCurrentPage('juvelook');
                                setIsMenuOpen(false);
                              } else if (subItem === "Усан гялбаа тариа") {
                                setCurrentPage('waterglow');
                                setIsMenuOpen(false);
                              } else if (subItem === "Байрижн") {
                                setCurrentPage('byryzn');
                                setIsMenuOpen(false);
                              } else if (subItem === "Скинвайв") {
                                setCurrentPage('skinvive');
                                setIsMenuOpen(false);
                              } else if (subItem === "Ботокс") {
                                setCurrentPage('botox');
                                setIsMenuOpen(false);
                              }
                            }}
                            className="w-full text-left text-[13px] font-semibold text-slate-500 hover:text-slate-900 block pl-3 active:text-slate-800 transition-colors"
                          >
                            {subItem}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
