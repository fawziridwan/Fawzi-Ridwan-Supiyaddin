
import { UserCircle } from 'lucide-react';
import { Section } from './section';
import { Card } from '@/components/ui/card';

export function PersonalData() {
  return (
    <Section id="personal-data" title="Personal Data" icon={<UserCircle className="h-6 w-6" />}>
      <Card className="p-6">
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-4">
            <span className="w-24 font-medium text-card-foreground">Sex</span>
            <span>Male</span>
          </li>
          <li className="flex items-center gap-4">
            <span className="w-24 font-medium text-card-foreground">Birth Date</span>
            <span>June 14, 1995</span>
          </li>
        </ul>
      </Card>
    </Section>
  );
}
