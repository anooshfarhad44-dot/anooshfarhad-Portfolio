'use client';

import React from 'react';
import { Card } from './Card';
import { Icon } from '../lib/icons';
import { TechBadge } from './Badge';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  icon: string;
  link?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  icon,
  link = "#",
}) => {
  return (
    <Card hover className="group p-8">
      <div className="flex items-start justify-between mb-6">
        <div className="p-4 rounded-xl bg-blue-100 text-blue-600">
          <Icon name={icon} className="w-8 h-8" />
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors opacity-0 group-hover:opacity-100"
        >
          <Icon name="externalLink" className="w-5 h-5" />
        </a>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <TechBadge key={item} name={item} />
        ))}
      </div>
    </Card>
  );
};

export default ProjectCard;
