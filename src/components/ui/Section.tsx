import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  containerClassName?: string;
}

export default function Section({ 
  className, 
  containerClassName,
  children, 
  ...props 
}: SectionProps) {
  return (
    <section className={cn('py-16 md:py-24 relative', className)} {...props}>
      <div className={cn('container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
