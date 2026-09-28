import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, ArrowLeft } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export const ContactCta: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'technician' | 'shop' | 'home' | 'general'>('general');
  const [note, setNote] = useState('');

  const getDynamicWhatsappUrl = () => {
    let roleText = 'استفسار عام عن منتجات الفلاتر';
    if (selectedRole === 'technician') roleText = 'أنا فني وأرغب في الاستفسار عن قطع الغيار والشمعات للتوريد';
    if (selectedRole === 'shop') roleText = 'أنا صاحب محل وأود الاستفسار عن أسعار الجملة وتوريد الفلاتر والمستلزمات';
    if (selectedRole === 'home') roleText = 'أود الاستفسار عن فلاتر وشمعات للاستخدام المنزلي';

    const fullMessage = note ? `${roleText} - تفاصيل الطلب: ${note}` : roleText;
    return `https://wa.me/201556280446?text=${encodeURIComponent(fullMessage)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle top subtle cyan wave accent */}
      <div className="water-wave-border w-full absolute top-0 inset-x-0" />

      {/* Ambient background styling */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.12),transparent_50%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          
          <span className="text-xs font-semibold tracking-wider text-sky-400 mb-3 block">
            تواصل مباشر وفوري
          </span>

          {/* Requested Headline */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            جاهز لطلبك؟
          </h2>

          {/* Requested Supporting text */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal">
            تواصل معنا مباشرة عبر واتساب.
          </p>

        </div>

        {/* Interactive Fast Contact Box */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-slate-700/80 shadow-2xl max-w-2xl mx-auto text-right">
          
          <label className="text-xs font-medium text-slate-300 mb-3 block">
            اختر نوع الطلب لتجهيز رسالتك:
          </label>

          <div className="grid grid-cols-3 gap-2.5 mb-6">
            <button
              type="button"
              onClick={() => setSelectedRole('technician')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all border ${
                selectedRole === 'technician'
                  ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                  : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
              }`}
            >
              للفنيين
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('shop')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all border ${
                selectedRole === 'shop'
                  ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                  : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
              }`}
            >
              للمحلات
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('home')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all border ${
                selectedRole === 'home'
                  ? 'bg-sky-500 text-white border-sky-400 shadow-xs'
                  : 'bg-slate-700/50 text-slate-300 border-slate-600 hover:bg-slate-700'
              }`}
            >
              للمنازل
            </button>
          </div>

          <div className="mb-6">
            <label htmlFor="quick-note" className="text-xs font-medium text-slate-300 mb-2 block">
              ملاحظة أو صنف محدد (اختياري):
            </label>
            <input
              id="quick-note"
              type="text"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="مثال: استفسار عن كرتونة شمعات أو ممبرين 75 جالون..."
              className="w-full bg-slate-900/80 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-hidden focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {/* Requested Big Primary Action Button */}
          <a
            href={getDynamicWhatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white py-4 px-6 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-emerald-900/40 active:scale-[0.99] mb-4"
          >
            <MessageCircle className="w-6 h-6" />
            <span>تواصل عبر واتساب</span>
            <ArrowLeft className="w-5 h-5 mr-1" />
          </a>

          {/* WhatsApp Direct Phone & Location info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-slate-700 text-xs text-slate-400">
            <a
              href={`tel:${BRAND_INFO.phone}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>هاتف / واتساب: {BRAND_INFO.phone}</span>
            </a>

            <div className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span>{BRAND_INFO.locationText}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
