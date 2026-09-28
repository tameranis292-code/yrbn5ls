import React from 'react';
import { Layers, Users, PhoneCall } from 'lucide-react';
import { WHY_US_POINTS } from '../data/content';

export const WhyUs: React.FC = () => {
  const icons = [
    <Layers key="layers" className="w-5 h-5 text-sky-600" />,
    <Users key="users" className="w-5 h-5 text-sky-600" />,
    <PhoneCall key="phone" className="w-5 h-5 text-sky-600" />,
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-wider text-sky-600 mb-2 block">
            معايير العمل
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#15254d]">
            لماذا شركة الفردوس؟
          </h2>
        </div>

        {/* 3 Concise Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHY_US_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-slate-50/70 border border-slate-100 flex flex-col items-start text-right transition-colors hover:bg-slate-50"
            >
              <div className="w-10 h-10 rounded-lg bg-sky-100/60 flex items-center justify-center mb-5">
                {icons[idx]}
              </div>

              <h3 className="text-xl font-bold text-[#15254d] mb-2.5">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
