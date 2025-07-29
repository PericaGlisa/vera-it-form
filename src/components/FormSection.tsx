import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-2xl font-heading font-bold text-white mb-6 pb-3 border-b-2 border-vera-accent">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};