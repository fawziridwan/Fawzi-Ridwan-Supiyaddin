
import { GraduationCap } from 'lucide-react';
import { Section } from './section';
import type { Education as EducationType } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function Education({ education }: { education: EducationType[] }) {
  return (
    <Section id="education" title="Education" icon={<GraduationCap className="h-6 w-6" />}>
      {education.map((edu, index) => (
        <Card key={index} className="p-6 transition-shadow duration-300 hover:shadow-md">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold">{edu.institution}</h3>
            <p className="text-sm text-muted-foreground">{edu.startDate} - {edu.endDate}</p>
          </div>
          <p className="text-md text-primary">{edu.degree}, {edu.fieldOfStudy}</p>
        </Card>
      ))}
    </Section>
  );
}
