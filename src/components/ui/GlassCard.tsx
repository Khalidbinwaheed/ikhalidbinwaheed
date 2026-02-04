import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { motion, HTMLMotionProps } from 'framer-motion';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass-card rounded-3xl p-6 relative overflow-hidden",
        hoverEffect && "hover:shadow-lg hover:-translate-y-1 hover:bg-white/90 dark:hover:bg-white/10 dark:hover:border-white/20",
        className
      )}
      variants={props.variants}
      initial={props.variants ? "hidden" : { opacity: 0, y: 20 }}
      whileInView={props.variants ? "visible" : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", stiffness: 40, damping: 15 }}
      {...props}
    >
      {/* Glossy reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {children}
    </motion.div>
  );
}
