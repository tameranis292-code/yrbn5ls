import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/content';
import { BrandLogo } from './BrandLogo';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'الرئيسية', href: '#hero' },
    { label: 'المنتجات', href: '#products' },
    { label: 'خدماتنا', href: '#audience' },
    { label: 'من نحن', href: '#about' },
    { label: 'تواصل معنا', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#121f42]/95 backdrop-blur-md shadow-lg shadow-[#0b142b]/25 border-b border-sky-500/20 py-2 sm:py-2.5'
          : 'bg-white/90 backdrop-blur-xs py-3 sm:py-3.5 border-b border-slate-100/60'
      }`}
    >
      {/* Visual Accent Layer: Glowing Water Wave border inspired by the logo when scrolled */}
      {scrolled && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b3b]/95 via-[#132249]/95 to-[#102047]/95 pointer-events-none -z-10" />
          <div className="w-full h-[2px] absolute bottom-0 inset-x-0 bg-gradient-to-r from-transparent via-sky-400 to-cyan-300 pointer-events-none" />
        </>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Exact Brand Logo with comfortable proportionate sizing */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 shrink-0 group focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm py-0.5"
            aria-label="شركة الفردوس لأنظمة معالجة المياه والفلاتر"
          >
            <BrandLogo size="header" onDark={scrolled} />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-[15px] font-medium transition-colors duration-150 py-1 border-b-2 border-transparent whitespace-nowrap ${
                  scrolled
                    ? 'text-slate-100 hover:text-sky-300 hover:border-cyan-400'
                    : 'text-slate-700 hover:text-sky-600 hover:border-sky-500'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (CTA + Facebook Link) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BRAND_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="صفحة الفردوس على فيسبوك"
              className={`p-2 transition-colors rounded-full ${
                scrolled
                  ? 'text-sky-200 hover:text-white hover:bg-white/10'
                  : 'text-slate-500 hover:text-[#1877F2] hover:bg-slate-50'
              }`}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                scrolled
                  ? 'bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white shadow-md shadow-sky-500/30'
                  : 'bg-[#15254d] text-white hover:bg-[#0d1733] shadow-xs hover:shadow-sm'
              }`}
            >
              <MessageCircle className={`w-4 h-4 ${scrolled ? 'text-white' : 'text-sky-400'}`} />
              <span>تواصل معنا</span>
            </a>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg sm:hidden ${
                scrolled
                  ? 'text-sky-300 hover:bg-white/10'
                  : 'text-[#15254d] hover:bg-slate-100'
              }`}
              aria-label="تواصل واتساب"
            >
              <MessageCircle className="w-5 h-5 text-emerald-500" />
            </a>
            
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-400 ${
                scrolled
                  ? 'text-white hover:text-sky-300 hover:bg-white/10'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
              aria-label="القائمة الرئيسية"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-150 ${
            scrolled
              ? 'bg-[#121f42]/98 border-sky-500/30 text-white backdrop-blur-lg'
              : 'bg-white/98 border-slate-200 text-slate-800 backdrop-blur-lg'
          }`}
        >
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-base font-medium py-2 border-b ${
                  scrolled
                    ? 'text-slate-100 hover:text-cyan-300 border-white/10'
                    : 'text-slate-800 hover:text-sky-600 border-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-2 flex flex-col gap-3">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3 rounded-lg text-sm font-medium shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>تواصل عبر واتساب</span>
              </a>

              <a
                href={BRAND_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium ${
                  scrolled
                    ? 'text-sky-200 bg-white/10 hover:bg-white/15'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
              >
                <svg className="w-4 h-4 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>متابعتنا على فيسبوك</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
