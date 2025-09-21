
import { User } from 'lucide-react';
import { Section } from './section';

export function ProfessionalSummary({ summary }: { summary: string }) {
  return (
    <Section id="summary" title="Professional Summary" icon={<User className="h-6 w-6" />}>
      <p className="leading-relaxed text-muted-foreground">{summary}</p>
    </Section>
  );
}
