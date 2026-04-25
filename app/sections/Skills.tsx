'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { skills, techStack } from '../data/portfolio';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Technical Skills"
          subtitle="Technologies I work with daily"
        />
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <SkillCard
                name={skill.name}
                level={skill.level}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>
        
        {/* Tech Stack Cloud */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <h3 className="text-lg font-semibold text-slate-700 mb-6">Complete Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-slate-600 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 hover:text-blue-600 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in cursor-default"
                style={{ animationDelay: `${0.6 + index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
