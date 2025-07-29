import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ children, className = '', ...props }) => {
  return (
    <select
      className={`w-full px-4 py-3 border border-vera-accent/30 rounded-lg focus:ring-2 focus:ring-vera-accent focus:border-vera-accent transition-all duration-200 bg-vera-primary/20 backdrop-blur-sm text-vera-text-light ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};