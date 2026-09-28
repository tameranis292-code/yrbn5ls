import React from 'react';
import { MessageCircle, ArrowLeft, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import heroImage from '../assets/images/home_hero_filtration_1790545659963.jpg';

export const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 bg-white overflow-hidden">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-sky-50/50 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-right">
            
            {/* Location & Trust Tagline */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 mb-6 font-medium">
              <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
              <span>{BRAND_INFO.locationText}</span>
              <span className="text-slate-300">|</span>
              <span className="text-sky-600 font-semibold">توريد وتوزيع معتمد</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#15254d] tracking-tight leading-[1.18] mb-5 text-balance">
              حلول متكاملة لمعالجة المياه
            </h1>

            {/* Supporting Sentence */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              {BRAND_INFO.name}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#15254d] text-white hover:bg-[#0d1733] px-7 py-3.5 rounded-lg text-base font-medium transition-all shadow-sm hover:shadow-md active:scale-[0.99] whitespace-nowrap"
              >
                <MessageCircle className="w-5 h-5 text-sky-400" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                href="#products"
                onClick={scrollToProducts}
                className="inline-flex items-center justify-center gap-2 bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-200 px-7 py-3.5 rounded-lg text-base font-medium transition-all whitespace-nowrap"
              >
                <span>تصفح المنتجات</span>
                <ArrowLeft className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Quick Metadata Proof Line */}
            <div className="mt-10 pt-6 border-t border-slate-100 flex items-center gap-6 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span>فنيين</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span>محلات</span>
              </div>
              <span className="text-slate-300">·</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                <span>عملاء منازل</span>
              </div>
            </div>

          </div>

          {/* Editorial Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
              {/* Subtle top subtle cyan wave accent */}
              <div className="water-wave-border w-full absolute top-0 inset-x-0 z-10" />

              <img
                src={heroImage}
                alt="أنظمة وفلاتر مياه الشرب المنزلية - الفردوس"
                className="w-full aspect-16/10 object-cover object-center transform transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#15254d]/25 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Architectural decorative minimalist accent */}
            <div className="hidden sm:block absolute -bottom-5 -right-5 w-24 h-24 border-r-2 border-b-2 border-sky-400/40 rounded-br-2xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};
