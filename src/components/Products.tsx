import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PRODUCT_CATEGORIES, ProductCategory } from '../data/content';
import { ProductModal } from './ProductModal';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | null>(null);

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-16 gap-4">
          <div className="max-w-xl text-right">
            <span className="text-xs font-semibold tracking-wider text-sky-600 mb-2 block">
              حلول الفلترة والتنقية المنزلية
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#15254d] tracking-tight">
              منتجاتنا
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal">
              شمعات وممبرينات وقطع غيار الفلاتر المنزلية المعتمدة
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>قطع أصلية معتمدة</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
              <span>مناسبة لجميع فلاتر المنازل</span>
            </div>
          </div>
        </div>

        {/* 3 Core Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#15254d]/75 via-[#15254d]/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-4 right-5 left-5 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-xs text-sky-200 line-clamp-1">{category.tagline}</p>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between grow">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-2">
                  {category.description}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-400">
                    ضمان وجودة الفردوس
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 hover:gap-2.5 transition-all whitespace-nowrap"
                  >
                    <span>استكشف المواصفات</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal */}
      <ProductModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />
    </section>
  );
};
