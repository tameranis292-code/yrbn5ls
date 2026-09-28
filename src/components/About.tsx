import React from 'react';
import { MapPin, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import aboutImage from '../assets/images/home_compact_system_1790545701673.jpg';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50/70 border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
              <img
                src={aboutImage}
                alt="أنظمة وفلاتر مياه الشرب المنزلية - الفردوس"
                className="w-full aspect-4/3 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15254d]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Statement Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start text-right">
            
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-600 mb-3 tracking-wider">
              <span>من نحن</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500 font-normal">الإسكندرية، مصر</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#15254d] tracking-tight leading-snug mb-6">
              التزام بالجودة والنقاء الفني
            </h2>

            {/* The exact requested statement */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed mb-8">
              الفردوس لأنظمة معالجة المياه والفلاتر، نقدم منتجات ومستلزمات أنظمة الفلترة ومعالجة المياه للفنيين والمحلات والعملاء المنزليين.
            </p>

            <div className="pt-6 border-t border-slate-200 w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>المقر والتوريد: الإسكندرية</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>ضمان ومطابقة للمواصفات الفنية</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
