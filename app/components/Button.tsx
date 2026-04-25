'use client';

import React from 'react';
import { Icon } from '../lib/icons';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  external?: boolean;
  fullWidth?: boolean;
}

const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50";

const variantStyles = {
  primary: "bg-blue-600 hover:bg-blue-700 text-white hover:scale-105 shadow-lg shadow-blue-500/25",
  secondary: "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 hover:border-slate-300",
  outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "bg-transparent hover:bg-slate-100 text-slate-600 hover:text-slate-800",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'left',
  external = false,
  fullWidth = false,
}) => {
  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  const content = (
    <>
      {icon && iconPosition === 'left' && <Icon name={icon} className="w-5 h-5" />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
