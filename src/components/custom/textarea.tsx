type Props = {
  label: string;
  onChange: (values: string) => void;
  h?: string;
  w?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
};

export default function Textarea({
  label,
  onChange,
  h = 'h-12',
  w = 'w-full',
  placeholder = '',
  error = false,
  errorMessage = '',
}: Props) {
  return (
    <label htmlFor={label}>
      <p className="text-gray-custom text-sm">{label}</p>
      <div className="mt-2 h-12 rounded-lg">
        <textarea
          id={label}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`
            ${h}
            ${w}
            p-3.5
            text-sm
            rounded-lg
            border-[1px]
            outline-none
            bg-transparent
            ${
              error
                ? 'border-destructive hover:border-destructive focus:border-destructive focus:shadow-input-error-custom'
                : 'hover:border-slate-400 focus:border-slate-400 focus:shadow-input-custom'
            }
            
          `}
        />
      </div>
      {error && (
        <p className="mt-2 text-[12px] text-destructive">{errorMessage}</p>
      )}
    </label>
  );
}
