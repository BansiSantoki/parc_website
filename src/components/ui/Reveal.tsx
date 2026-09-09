import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.23, 1, 0.32, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'section';
};

export function Reveal({ children, delay = 0, y = 18, className, as = 'div' }: RevealProps) {
  const props = {
    className,
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.28, ease: EASE, delay }
  } as const;

  if (as === 'li') return <motion.li {...props}>{children}</motion.li>;
  if (as === 'section') return <motion.section {...props}>{children}</motion.section>;
  return <motion.div {...props}>{children}</motion.div>;
}