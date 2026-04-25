'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  glass = false,
}) => {
  const baseStyles = "rounded-2xl border border-slate-200 transition-all duration-300";
  const hoverStyles = hover ? "hover:border-blue-400/50 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10" : "";
  const glassStyles = glass
    ? "bg-white/80 backdrop-blur-sm shadow-sm"
    : "bg-white shadow-sm";

  return (
    <div className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export const GlassCard: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
}) => {
  return (
    <Card glass hover={hover} className={className}>
      {children}
    </Card>
  );
};

export default Card;
