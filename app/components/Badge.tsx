'use client';

import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'primary' | 'secondary';
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  icon,
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium";
  
  const variantStyles = {
    default: "bg-blue-100 text-blue-700",
    outline: "bg-transparent border border-slate-300 text-slate-600",
    primary: "bg-blue-100 text-blue-600 border border-blue-200",
    secondary: "bg-slate-100 text-slate-600 border border-slate-200",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {icon && icon}
      {children}
    </span>
  );
};

export const TechBadge: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Badge variant="secondary" className="text-xs">
      {name}
    </Badge>
  );
};

export const StatusBadge: React.FC<{ 
  status: 'available' | 'busy' | 'offline';
  text: string;
}> = ({ status, text }) => {
  const colors = {
    available: 'bg-green-500',
    busy: 'bg-yellow-500',
    offline: 'bg-slate-400',
  };

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm">
      <span className={`w-2 h-2 rounded-full ${colors[status]} animate-pulse`} />
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  );
};

export default Badge;
