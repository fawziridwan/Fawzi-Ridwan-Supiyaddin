
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  id: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, icon, children, className }: SectionProps) {
  return (
    <section id={id} className={cn('printable-section scroll-mt-20', className)}>
      <div className="mb-6 flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <h2 className="font-headline text-2xl font-bold text-primary">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
