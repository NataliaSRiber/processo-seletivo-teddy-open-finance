import { useState } from 'react';

type InputProps = {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  className?: string;
};

export const Input = ({
  label,
  placeholder,
  value = '',
  onChange,
  type = 'text',
  className = ''
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const hasValue = value.length > 0;

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={isFocused ? placeholder : ''} 
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full
          sm:max-w-[400px]
          md:max-w-[521px]
          lg:max-w-[521px]
          px-4
          py-4
          border
          border-gray-300
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-brand-primary
          focus:border-transparent
          transition-all
          duration-200
          text-lg 
          md:text-xl 
          lg:text-2xl 
          ${className}
        `}
      />
      
      {label && (
        <label
          className={`
            absolute
            left-4
            transition-all
            duration-200
            pointer-events-none
            text-lg
            md:text-xl
            lg:text-2xl
            ${isFocused || hasValue
              ? 'top-2 text-xs md:text-sm lg:text-base text-brand-primary  font-medium'
              : 'top-4 text-gray-500'
            }
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};