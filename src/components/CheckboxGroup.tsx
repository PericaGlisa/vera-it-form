import React from 'react';

interface CheckboxOption {
  value: string;
  label: string;
}

interface CheckboxGroupProps {
  name: string;
  options: CheckboxOption[];
  values?: string[];
  onChange?: (values: string[]) => void;
  className?: string;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ 
  name, 
  options, 
  values = [], 
  onChange, 
  className = '' 
}) => {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange?.([...values, optionValue]);
    } else {
      onChange?.(values.filter(v => v !== optionValue));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {options.map((option) => (
        <label key={option.value} className="flex items-center space-x-3 cursor-pointer group">
          <input
            type="checkbox"
            name={name}
            value={option.value}
            checked={values.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            className="w-4 h-4 text-vera-accent border-vera-accent/30 rounded focus:ring-vera-accent bg-vera-primary/20"
          />
          <span className="text-sm text-vera-text-light group-hover:text-white transition-colors">
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};