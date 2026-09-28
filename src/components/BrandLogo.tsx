import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';

interface BrandLogoProps {
  className?: string;
  size?: 'header' | 'footer' | 'large';
  onDark?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'header',
  onDark = false,
}) => {
  const [errorCount, setErrorCount] = useState<number>(0);

  // Directly using the exact uploaded logo without any alterations
  const sources = [
    BRAND_INFO.logoUrl,
    '/Gemini_Generated_Image_d28xaid28xaid28x-removebg-preview.png',
    '/logo-transparent.png',
    '/logo.png',
  ];

  // Proportionate, elegant heights keeping all logo details sharp and comfortable to the eye
  const sizeClasses = {
    header: 'h-12 sm:h-14 md:h-16 max-w-[500px] sm:max-w-[600px] md:max-w-[700px]',
    footer: 'h-16 sm:h-18 md:h-20 max-w-[550px] sm:max-w-[650px]',
    large: 'h-20 sm:h-24 max-w-[700px]',
  }[size];

  const handleImageError = () => {
    if (errorCount < sources.length - 1) {
      setErrorCount((prev) => prev + 1);
    }
  };

  const currentSrc = sources[errorCount];

  return (
    <div
      className={`relative flex items-center justify-center shrink-0 transition-all duration-300 ${
        onDark
          ? 'bg-white/95 backdrop-blur-xs px-4 py-2 rounded-none shadow-xs border border-white/80 ring-1 ring-sky-400/25'
          : ''
      } ${sizeClasses} ${className}`}
    >
      <img
        src={currentSrc}
        alt={BRAND_INFO.name}
        onError={handleImageError}
        className="w-auto h-full object-contain transition-transform duration-200 hover:scale-[1.02] scale-[1.5]"
        referrerPolicy="no-referrer"
        loading="eager"
      />
    </div>
  );
};
