'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { Button } from '../components/Button';
import { projects } from '../data/portfolio';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-blue-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Featured Projects"
          subtitle="Selected projects from my CV and recent client work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tech={project.tech}
                icon={project.icon}
                link={project.link}
              />
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            href="https://github.com/anooshfarhad44-dot" 
            variant="outline" 
            size="lg"
            icon="github"
            external
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
