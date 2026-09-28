import React, { useEffect } from 'react';
import { X, Check, MessageCircle, ArrowLeft } from 'lucide-react';
import { ProductCategory, BRAND_INFO } from '../data/content';

interface ProductModalProps {
  category: ProductCategory | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ category, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  const whatsappMessage = encodeURIComponent(
    `مرحباً شركة الفردوس، أود الاستفسار عن توفر وأسعار: ${category.title}`
  );
  const whatsappUrl = `https://wa.me/201556280446?text=${whatsappMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 text-slate-500 hover:text-slate-900 bg-white/80 hover:bg-white backdrop-blur-xs rounded-full shadow-xs transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Frame */}
        <div className="relative aspect-16/9 bg-slate-100 overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          <div className="absolute bottom-4 right-6 left-6 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-1">{category.title}</h3>
            <p className="text-sm text-sky-200 font-light">{category.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            {category.description}
          </p>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">المواصفات والخيارات المتاحة:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {category.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-sky-50 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-sky-600" />
                  </div>
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              متوفر للتركيب المنزلي الفوري والتوريد للفنيين والمحلات في الإسكندرية
            </div>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#15254d] hover:bg-[#0d1733] text-white px-6 py-3 rounded-lg text-sm font-medium transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-sky-400" />
              <span>طلب تسعير عبر واتساب</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
