import React from 'react';

interface InputFieldProps {
  type?: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  iconPosition = 'left',
  className = '',
}) => {
  const baseClasses = 'w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5030e5] focus:border-transparent transition-all';
  const paddingClasses = icon
    ? iconPosition === 'left' ?'pl-10 pr-4' :'pl-4 pr-10' :'px-4';
  
  const classes = `${baseClasses} ${paddingClasses} py-2 ${className}`;
  
  return (
    <div className="relative">
      {icon && iconPosition === 'left' && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
      
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classes}
      />
      
      {icon && iconPosition === 'right' && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          {icon}
        </div>
      )}
    </div>
  );
};

export default InputField;