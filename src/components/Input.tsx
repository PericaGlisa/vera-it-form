import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-3 border border-vera-accent/30 rounded-lg focus:ring-2 focus:ring-vera-accent focus:border-vera-accent transition-all duration-200 bg-vera-primary/20 backdrop-blur-sm text-vera-text-light placeholder-vera-gray-400 ${className}`}
      {...props}
    />
  );
};