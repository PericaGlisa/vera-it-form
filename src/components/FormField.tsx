import React from 'react';

interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  description?: string;
}

export const FormField: React.FC<FormFieldProps> = ({ 
  label, 
  required = false, 
  children, 
  description 
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-vera-text-light">
        {label}
        {required && <span className="text-vera-accent ml-1">*</span>}
      </label>
      {description && (
        <p className="text-sm text-vera-gray-300 italic">{description}</p>
      )}
      {children}
    </div>
  );
};