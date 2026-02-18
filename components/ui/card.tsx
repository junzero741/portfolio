import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  gradient?: 'blue' | 'purple' | 'orange' | 'green' | 'none';
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, gradient = 'none', hover = true, children, ...props }, ref) => {
    const gradientClasses = {
      blue: 'from-gray-800 to-gray-700',
      purple: 'from-gray-800 to-gray-700',
      orange: 'from-gray-800 to-gray-700',
      green: 'from-gray-800 to-gray-700',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden rounded-2xl bg-gray-900 p-6 shadow-md transition-all border border-gray-800',
          hover && 'hover:shadow-xl hover:scale-105',
          className,
        )}
        {...props}
      >
        {gradient !== 'none' && (
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity',
              hover && 'group-hover:opacity-5',
              gradientClasses[gradient],
            )}
          />
        )}
        <div className="relative z-10 h-full">{children}</div>
      </div>
    );
  },
);

Card.displayName = 'Card';

export default Card;
