'use client';

import React from 'react';

interface GradientBackgroundProps {
  variant?: 'top-right' | 'bottom-left' | 'both' | 'none';
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = 'both',
}) => {
  if (variant === 'none') return null;

  return (
    <>
      {(variant === 'top-right' || variant === 'both') && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent pointer-events-none" />
      )}
      {(variant === 'bottom-left' || variant === 'both') && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent pointer-events-none" />
      )}
    </>
  );
};

export default GradientBackground;
