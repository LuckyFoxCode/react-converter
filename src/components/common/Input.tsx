import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';
import { Box } from './Box';
import { Icon } from './Icon';

interface InputProps {
  name?: string;
  value: string;
  label?: string;
  className?: string;
  placeholder?: string;
  withIcon?: boolean;
  iconSize?: number;
  iconName: IconType;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  onChange,
  className,
  placeholder,
  withIcon = false,
  iconSize,
  iconName,
}) => {
  return (
    <Box
      position
      className={cn(className)}
    >
      <label
        htmlFor={name}
        className='text-lime-300 text-sm mb-1'
      >
        {label}
      </label>
      <Box className='relative text-slate-400'>
        <input
          id={name}
          name={name}
          type='text'
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={cn(
            'w-full p-2 rounded-xl border transition-all border-transparent bg-gray-700  focus:outline-none focus:border-rose-500',
            withIcon && 'pl-9',
          )}
        />
        {withIcon && (
          <Icon
            name={iconName}
            size={iconSize}
            className='absolute left-2 top-1/2 -translate-y-1/2'
          />
        )}
      </Box>
    </Box>
  );
};
