import React from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 pt-16 pb-12 text-slate-600 text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-200/60">
          
          {/* Brand & EXACT Uploaded Logo (Enlarged and Clear) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <BrandLogo size="footer" />

            <div>
              <h3 className="text-xl font-bold text-[#15254d]">
                {BRAND_INFO.name}
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-500" />
                <span>{BRAND_INFO.locationText}</span>
              </div>
            </div>
          </div>

          {/* Social & Contact Actions */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#1877F2] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>فيسبوك</span>
            </a>

            <span className="text-slate-300">·</span>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>واتساب ({BRAND_INFO.phone})</span>
            </a>

            <span className="text-slate-300">·</span>

            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-[#15254d] transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-500" />
              <span>اتصال مباشر</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {BRAND_INFO.name}. جميع الحقوق محفوظة.
          </p>

          <p className="font-light">
            أنظمة الفلترة ومعالجة المياه · الإسكندرية، مصر
          </p>
        </div>

      </div>
    </footer>
  );
};
