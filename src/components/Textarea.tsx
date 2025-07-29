import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export const Textarea: React.FC<TextareaProps> = ({ className = '', ...props }) => {
  return (
    <textarea
      className={`w-full px-4 py-3 border border-vera-accent/30 rounded-lg focus:ring-2 focus:ring-vera-accent focus:border-vera-accent transition-all duration-200 resize-vertical min-h-[120px] bg-vera-primary/20 backdrop-blur-sm text-vera-text-light placeholder-vera-gray-400 ${className}`}
      {...props}
    />
  );
};