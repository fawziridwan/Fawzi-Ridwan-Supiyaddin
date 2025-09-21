
import { History } from 'lucide-react';
import { Section } from './section';
import type { EmploymentHistory as EmploymentHistoryType } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function EmploymentHistory({ history }: { history: EmploymentHistoryType[] }) {
  return (
    <Section id="employment-history" title="Employment History" icon={<History className="h-6 w-6" />}>
      {history.map((item, index) => (
        <Card key={index} className="p-6 transition-shadow duration-300 hover:shadow-md">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold">{item.company}</h3>
            <p className="text-sm text-muted-foreground">{item.dates}</p>
          </div>
        </Card>
      ))}
    </Section>
  );
}
