/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Audience } from './components/Audience';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { ContactCta } from './components/ContactCta';
import { Footer } from './components/Footer';
import { FloatingWhatsapp } from './components/FloatingWhatsapp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-sky-500 selection:text-white flex flex-col justify-between">
      {/* Fixed Navigation Top Bar */}
      <Header />

      {/* Main Content Sections */}
      <main id="main-content" className="grow">
        <Hero />
        <Products />
        <Audience />
        <About />
        <WhyUs />
        <ContactCta />
      </main>

      {/* Corporate Minimal Footer */}
      <Footer />

      {/* Always Visible Floating WhatsApp Button */}
      <FloatingWhatsapp />
    </div>
  );
}
