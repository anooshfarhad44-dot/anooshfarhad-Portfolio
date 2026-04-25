'use client';

import React from 'react';
import { Card } from './Card';
import { Icon } from '../lib/icons';
import type { Experience } from '../types';

interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  period,
  highlights,
  isLast = false,
}) => {
  return (
    <div className={`relative pl-8 pb-8 border-l-2 border-slate-300 ${isLast ? 'last:pb-0' : ''}`}>
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
      <Card className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">{role}</h3>
            <p className="text-blue-600">{company}</p>
          </div>
          <span className="text-sm text-slate-500 mt-2 sm:mt-0">{period}</span>
        </div>
        <ul className="space-y-2">
          {highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600">
              <Icon name="chevronRight" className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

interface TimelineProps {
  items: Experience[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          role={item.role}
          company={item.company}
          period={item.period}
          highlights={item.highlights}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export default Timeline;
