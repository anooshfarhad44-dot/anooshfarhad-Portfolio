'use client';

import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';
import { portfolioData } from '../data/portfolio';
import { Icon } from '../lib/icons';

export const Education: React.FC = () => {
  const { education, achievements } = portfolioData;

  if (!education && !achievements) return null;

  return (
    <section id="education" className="py-24 px-4 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Education & Achievements"
          subtitle="My academic background and professional milestones"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Icon name="briefcase" className="w-6 h-6 text-blue-600" />
              Education
            </h3>
            {education?.map((edu, index) => (
              <Card key={index} className="p-6 border-l-4 border-l-blue-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-800">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.institution}</p>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {edu.period}
                  </Badge>
                </div>
                {edu.details && (
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {edu.details}
                  </p>
                )}
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
              <Icon name="star" className="w-6 h-6 text-amber-500" />
              Achievements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {achievements?.map((achievement, index) => (
                <Card key={index} className="p-6 hover:border-amber-200 transition-colors">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                    <span className="text-amber-500 mt-1">
                      <Icon name="check" className="w-4 h-4" />
                    </span>
                    {achievement.title}
                  </h4>
                  <p className="text-slate-600 text-sm">
                    {achievement.description}
                  </p>
                </Card>
              ))}
            </div>
            
            {/* Languages - also from CV */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Icon name="globe" className="w-5 h-5 text-indigo-500" />
                Languages
              </h3>
              <div className="flex gap-4">
                <Badge variant="primary">English — Fluent</Badge>
                <Badge variant="outline">Urdu — Native</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
