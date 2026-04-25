'use client';

import React from 'react';
import { Timeline } from '../components/Timeline';
import { Card } from '../components/Card';
import { experience, stats } from '../data/portfolio';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left - Header & Stats */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
                Experience
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                My professional journey as a Full Stack Developer
              </p>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
                <div className="text-3xl font-bold text-blue-600">{stats[0].value}</div>
                <div className="text-sm text-slate-500">{stats[0].label}</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
                <div className="text-3xl font-bold text-blue-600">{stats[1].value}</div>
                <div className="text-sm text-slate-500">{stats[1].label}</div>
              </Card>
            </div>
          </div>
          
          {/* Right - Timeline */}
          <div className="lg:col-span-3">
            <Timeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
