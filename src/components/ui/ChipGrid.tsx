import React from 'react';
import { CheckIcon } from 'lucide-react';
import { Reveal } from './Reveal';

type ChipGridProps = {
  items: string[];
  columns?: 2 | 3 | 4;
  note?: string;
};

export function ChipGrid({ items, columns = 3, note }: ChipGridProps) {
  const cols =
  columns === 2 ?
  'sm:grid-cols-2' :
  columns === 4 ?
  'sm:grid-cols-2 lg:grid-cols-4' :
  'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div>
      <ul className={`grid gap-3 ${cols}`}>
        {items.map((item, index) =>
        <Reveal as="li" key={item} delay={Math.min(index * 0.03, 0.24)}>
            <div className="flex h-full items-start gap-3 rounded-card border border-brand-100 bg-white p-4 shadow-ring transition-[transform,box-shadow,border-color] duration-200 ease-premium hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-soft">
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <CheckIcon className="h-3.5 w-3.5" strokeWidth={2.5} />
              </span>
              <span className="text-sm font-medium leading-snug text-brand-800">{item}</span>
            </div>
          </Reveal>
        )}
      </ul>
      {note ? <p className="mt-5 text-sm text-brand-800/60">{note}</p> : null}
    </div>);

}

export function Highlight({ children, tone = 'accent' }: {children: React.ReactNode;tone?: 'accent' | 'blue';}) {
  return (
    <Reveal>
      <blockquote
        className={`rounded-panel p-7 sm:p-9 ${
        tone === 'accent' ?
        'border-l-4 border-accent-500 bg-accent-50' :
        'border-l-4 border-brand-500 bg-brand-100'}`
        }>
        
        <p className="font-display text-xl font-bold leading-snug text-brand-700 sm:text-2xl">
          {children}
        </p>
      </blockquote>
    </Reveal>);

}