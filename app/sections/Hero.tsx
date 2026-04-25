'use client';

import React from 'react';
import { Button } from '../components/Button';
import { SocialButton } from '../components/SocialButton';
import { StatusBadge } from '../components/Badge';
import { GradientBackground } from '../components/GradientBackground';
import { Icon } from '../lib/icons';
import { hero, socials, stats } from '../data/portfolio';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20">
      <GradientBackground variant="both" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 animate-fade-in">
            {/* Profile Image - Mobile Only */}
            <div className="lg:hidden mb-6 flex justify-center">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-xl">
                <img 
                  src="/anooshimg.jpeg" 
                  alt="Anoosh Farhad"
                  className="w-full h-full object-contain bg-white border-4 border-white"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><span class="text-white text-4xl font-bold">AF</span></div>';
                  }}
                />
                <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <StatusBadge status="available" text="Available for hire" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mt-6 mb-4 bg-gradient-to-r from-slate-800 via-blue-700 to-cyan-600 bg-clip-text text-transparent leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {hero.name}
            </h1>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <span className="text-2xl md:text-3xl font-semibold text-blue-600">
                {hero.title}
              </span>
              <span className="text-2xl animate-pulse">👨‍💻</span>
            </div>
            
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button
                href={hero.cta.primary.href}
                variant="primary"
                size="lg"
                icon="chevronRight"
                iconPosition="right"
              >
                {hero.cta.primary.label}
              </Button>
              <Button
                href={hero.cta.secondary.href}
                variant="secondary"
                size="lg"
                icon="code2"
              >
                {hero.cta.secondary.label}
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {socials.map((social) => (
                <SocialButton
                  key={social.name}
                  href={social.url}
                  icon={social.icon}
                  label={social.name}
                  external
                />
              ))}
            </div>
          </div>
          
          {/* Right Content - Profile Image & Stats */}
          <div className="order-1 lg:order-2 hidden lg:block">
            <div className="relative flex flex-col items-center">
              {/* Large Profile Image */}
              <div className="relative mb-8 animate-scale-in">
                <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-2xl shadow-blue-500/20">
                  <img 
                    src="/anooshimg.jpeg" 
                    alt="Anoosh Farhad"
                    className="w-full h-full object-contain bg-white border-4 border-white"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"><span class="text-white text-6xl font-bold">AF</span></div>';
                    }}
                  />
                </div>
                {/* Online Status Badge */}
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse" />
                {/* Decorative Ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-blue-200 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              
              {/* Stats Card */}
              <div className="w-full bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-xl shadow-blue-500/10 border border-white/50 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-slate-800">Anoosh Farhad</h3>
                  <p className="text-sm text-slate-500">Full Stack Developer</p>
                </div>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-slate-50 rounded-xl p-3 text-center hover:bg-blue-50 transition-all duration-300 hover:-translate-y-1 cursor-default"
                    >
                      <div className="text-xl font-bold text-blue-600 mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Tech Badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float">
                <Icon name="layers" className="w-6 h-6 text-orange-500" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float" style={{ animationDelay: '0.5s' }}>
                <Icon name="server" className="w-6 h-6 text-green-500" />
              </div>
              
              <div className="absolute top-1/2 -right-8 bg-white rounded-xl p-3 shadow-lg border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
                <Icon name="database" className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <span className="text-sm text-slate-400">Scroll to explore</span>
          <div className="animate-bounce">
            <Icon name="chevronRight" className="w-5 h-5 text-slate-400 rotate-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
