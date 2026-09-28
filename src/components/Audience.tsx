import React from 'react';
import { Wrench, Store, Home, ArrowLeft } from 'lucide-react';
import { AUDIENCE_SEGMENTS, BRAND_INFO } from '../data/content';

export const Audience: React.FC = () => {
  const icons = [
    <Wrench key="wrench" className="w-6 h-6 text-sky-600" />,
    <Store key="store" className="w-6 h-6 text-sky-600" />,
    <Home key="home" className="w-6 h-6 text-sky-600" />,
  ];

  return (
    <section id="audience" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-wider text-sky-600 uppercase mb-2 block">
            شركاء النجاح والخدمة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15254d] tracking-tight">
            حلول تناسب احتياجاتك
          </h2>
        </div>

        {/* 3 Simple Visual Choices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {AUDIENCE_SEGMENTS.map((segment, index) => {
            const encodedMsg = encodeURIComponent(`مرحباً شركة الفردوس، أتواصل معكم بخصوص استفسار (${segment.title})`);
            const segmentWhatsapp = `https://wa.me/201556280446?text=${encodedMsg}`;

            return (
              <div
                key={segment.key}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top subtle highlight */}
                <div className="absolute top-0 inset-x-8 h-0.5 bg-transparent group-hover:bg-sky-500 transition-colors rounded-full" />

                <div>
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-6 group-hover:bg-sky-500/10 transition-colors">
                    {icons[index]}
                  </div>

                  <span className="text-xs font-semibold text-slate-400 mb-1 block">
                    {segment.headline}
                  </span>

                  <h3 className="text-2xl font-bold text-[#15254d] mb-3">
                    {segment.title}
                  </h3>

                  <p className="text-base text-slate-600 font-medium leading-relaxed mb-4">
                    {segment.subtext}
                  </p>

                  <p className="text-xs text-slate-500 leading-normal mb-6">
                    {segment.details}
                  </p>
                </div>

                <a
                  href={segmentWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#15254d] group-hover:text-sky-600 transition-colors pt-4 border-t border-slate-100"
                >
                  <span>طلب استشارة أو طلبية</span>
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
