'use client';

import React from 'react';
import { footer, navItems } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 px-4 border-t border-slate-200 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
              AF
            </div>
            <span className="text-lg font-bold text-slate-800">Anoosh Farhad</span>
          </div>
          
          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            {footer.copyright}
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>{footer.tagline}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
