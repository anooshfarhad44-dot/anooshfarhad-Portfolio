'use client';

import React from 'react';
import { Card } from './Card';
import { Icon } from '../lib/icons';

interface StatsCardProps {
  value: string;
  label: string;
  icon?: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({ value, label, icon }) => {
  return (
    <Card className="p-6 text-center">
      {icon && (
        <div className="inline-flex p-3 rounded-xl bg-blue-100 text-blue-600 mb-4">
          <Icon name={icon} className="w-6 h-6" />
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
        {value}
      </div>
      <div className="text-slate-500 text-sm">{label}</div>
    </Card>
  );
};

export default StatsCard;
