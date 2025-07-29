import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ 
  name, 
  options, 
  value, 
  onChange, 
  className = '' 
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={(e) => onChange?.(e.target.value)}
            className="w-4 h-4 text-vera-accent border-vera-accent/30 focus:ring-vera-accent bg-vera-primary/20"
          />
          <span className="text-sm text-vera-text-light group-hover:text-white transition-colors">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};