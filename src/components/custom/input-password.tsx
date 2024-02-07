import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

type Props = {
  label: string;
  onChange: (values: string) => void;
  h?: string;
  w?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
};

export default function InputPassword({
  label,
  onChange,
  h = 'h-12',
  w = 'w-full',
  placeholder = '',
  error = false,
  errorMessage = '',
}: Props) {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <label htmlFor={label}>
      <p className="text-gray-custom text-sm">{label}</p>
      <div
        className={`
        flex
        mt-2
        h-12
        rounded-lg
        border-[1px]
        items-center
        ${
          error
            ? 'border-destructive hover:border-destructive focus-within:border-destructive focus-within:shadow-input-error-custom'
            : 'hover:border-slate-400 focus-within:border-slate-400 focus-within:shadow-input-custom'
        }
      `}
      >
        <input
          id={label}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`
            ${h}
            ${w}
            p-3.5
            text-sm
            rounded-lg
            outline-none
            bg-transparent
          `}
        />
        <div className="mr-4 cursor-pointer">
          {showPassword ? (
            <FontAwesomeIcon
              color="#5B6B79"
              icon={faEye}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FontAwesomeIcon
              color="#5B6B79"
              icon={faEyeSlash}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      {error && (
        <p className="mt-2 text-[12px] text-destructive">{errorMessage}</p>
      )}
    </label>
  );
}
