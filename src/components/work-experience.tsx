
import { Briefcase } from 'lucide-react';
import { Section } from './section';
import type { Experience } from '@/lib/types';
import { Card } from '@/components/ui/card';

export function WorkExperience({ experience }: { experience: Experience[] }) {
  return (
    <Section id="experience" title="Work Experience" icon={<Briefcase className="h-6 w-6" />}>
      {experience.map((job, index) => (
        <Card key={index} className="flex flex-col gap-1 p-6 transition-shadow duration-300 hover:shadow-md">
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-muted-foreground">{job.startDate} - {job.endDate}</p>
          </div>
          <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
            <p className="text-md font-medium text-primary">{job.company}</p>
            <p className="text-sm text-muted-foreground">{job.location}</p>
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            {job.description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </Section>
  );
}
