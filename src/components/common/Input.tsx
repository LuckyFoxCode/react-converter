import { cn } from '@/libs/utils';
import { Box } from './Box';

interface InputProps {
  name?: string;
  value: string;
  label?: string;
  className?: string;
  type?: 'text' | 'number';
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  className,
  type = 'number',
}) => {
  return (
    <Box
      position
      className={cn(className)}
    >
      <label
        htmlFor={name}
        className='text-rose-500 text-sm mb-1'
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder='Введите числовые значения'
        className='w-full p-2 rounded-xl border transition-all border-transparent bg-gray-700 text-slate-300 focus:outline-none focus:border-sky-400'
      />
    </Box>
  );
};
