'use client';

import React from 'react';

interface ProgressBarProps {
  value: number;
  label?: string;
  className?: string;
  animated?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  label,
  className = '',
  animated = true,
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <span className="text-sm text-slate-500 mb-2 block">{label}</span>
      )}
      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full ${
            animated ? 'transition-all duration-1000 group-hover:animate-pulse' : ''
          }`}
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
