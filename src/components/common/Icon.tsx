import { cn } from '@/libs/utils';
import { IconType } from 'react-icons';

interface IconProps {
  size?: number;
  name: IconType;
  className?: string;
}
export const Icon: React.FC<IconProps> = ({
  size = 16,
  className,
  name: IconComponent,
}) => {
  return (
    <IconComponent
      size={size}
      className={cn(className)}
    />
  );
};
