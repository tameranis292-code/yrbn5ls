import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const FloatingWhatsapp: React.FC = () => {
  return (
    <aside
      aria-label="تواصل سريع عبر واتساب"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip on hover (desktop) */}
      <span className="hidden sm:inline-block px-3 py-1.5 bg-slate-900/90 text-white text-xs font-medium rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        تحدث معنا عبر واتساب
      </span>

      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب: 01556280446"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-hidden focus:ring-4 focus:ring-emerald-300"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
};
