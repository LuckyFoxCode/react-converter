import { cn } from '@/libs/utils';

interface BoxProps {
  className?: string;
  position?: boolean;
  children: React.ReactNode;
}
export const Box: React.FC<BoxProps> = ({ children, className, position }) => {
  return (
    <div className={cn('flex', position ? 'flex-col' : 'flex-row', className)}>
      {children}
    </div>
  );
};
