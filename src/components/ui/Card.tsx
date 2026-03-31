import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'green';
  children: ReactNode;
}

export default function Card({ 
  className, 
  glow = false, 
  glowColor = 'cyan',
  children, 
  ...props 
}: CardProps) {
  const glowColors = {
    cyan: 'hover:shadow-[0_0_30px_rgba(0,255,255,0.3)]',
    purple: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
    pink: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    green: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
  };

  return (
    <div
      className={cn(
        'relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300',
        glow && glowColors[glowColor],
        'hover:border-white/20 hover:bg-white/10',
        className
      )}
      {...props}
    >
      {glow && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
