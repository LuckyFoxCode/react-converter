import { cn } from '@/libs/utils';

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={cn(
        'py-2 px-4 text-white bg-gray-700 rounded-lg border border-transparent transition-all hover:bg-gray-600 active:bg-rose-400 focus:outline-none focus:border-sky-500',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
