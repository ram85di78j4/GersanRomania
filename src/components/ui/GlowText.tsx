import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface GlowTextProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: 'cyan' | 'purple' | 'pink' | 'green';
}

export default function GlowText({ 
  children, 
  color = 'cyan', 
  className,
  ...props 
}: GlowTextProps) {
  const colors = {
    cyan: 'text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]',
    purple: 'text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]',
    pink: 'text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)]',
    green: 'text-green-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]',
  };

  return (
    <span className={cn(colors[color], 'font-bold', className)} {...props}>
      {children}
    </span>
  );
}
