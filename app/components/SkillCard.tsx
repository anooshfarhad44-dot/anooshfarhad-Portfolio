'use client';

import React from 'react';
import { Card } from './Card';
import { Icon } from '../lib/icons';
import { ProgressBar } from './ProgressBar';

interface SkillCardProps {
  name: string;
  level: number;
  icon: string;
}

export const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => {
  return (
    <Card hover className="group p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-blue-100 text-blue-600">
          <Icon name={icon} className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800">{name}</h3>
      </div>
      <ProgressBar
        value={level}
        label={`${level}% proficiency`}
        animated
      />
    </Card>
  );
};

export default SkillCard;
