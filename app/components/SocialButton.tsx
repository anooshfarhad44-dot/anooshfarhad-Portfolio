'use client';

import React from 'react';
import { Icon } from '../lib/icons';
import { Card } from './Card';

interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
  external?: boolean;
  variant?: 'default' | 'large';
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  href,
  icon,
  label,
  external = true,
  variant = 'default',
}) => {
  if (variant === 'large') {
    return (
      <Card hover className="p-0">
        <a
          href={href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="flex items-center gap-3 p-6 text-slate-700 hover:text-blue-600 transition-colors"
        >
          <Icon name={icon} className="w-6 h-6 text-blue-600" />
          <span className="font-medium">{label}</span>
        </a>
      </Card>
    );
  }

  return (
    <a
      href={href}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      className="p-3 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:border-blue-300 transition-all hover:scale-110"
      aria-label={label}
    >
      <Icon name={icon} className="w-5 h-5 text-slate-600" />
    </a>
  );
};

export default SocialButton;
