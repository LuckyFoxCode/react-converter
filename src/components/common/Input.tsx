import { cn } from '@/libs/utils';
import { Box } from './Box';

interface InputProps {
  label?: string;
  name?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  className,
  value,
  onChange,
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
        type='text'
        value={value}
        onChange={onChange}
        placeholder='Введите числовые значения'
        className='w-full p-2 bg-gray-700 text-slate-300 rounded-xl focus:outline-none'
      />
    </Box>
  );
};
