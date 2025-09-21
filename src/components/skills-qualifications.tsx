
import { Layers, Lightbulb, Package } from 'lucide-react';
import { Section } from './section';
import type { Skills } from '@/lib/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function SkillsQualifications({ skills }: { skills: Skills }) {
  return (
    <Section id="skills" title="Skills & Qualifications" icon={<Lightbulb className="h-6 w-6" />}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-1">
        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
          <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <Layers className="h-5 w-5" />
            Management Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.management.map((skill, index) => (
              <Badge key={index} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </Card>
        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
          <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <Package className="h-5 w-5" />
            Implementation Skills
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.implementation.languages.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium">Frameworks</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.implementation.frameworks.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium">Databases</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.implementation.databases.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium">Logging & Monitoring</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.implementation.logs.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
        <Card className="p-6 transition-shadow duration-300 hover:shadow-md">
          <h3 className="mb-4 flex items-center gap-3 text-lg font-semibold">
            <Lightbulb className="h-5 w-5" />
            Additional Skills
          </h3>
          <div className="space-y-3">
            <div>
              <h4 className="font-medium">Languages</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.additional.languages.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium">Reporting</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {skills.additional.reporting.map((skill, index) => (
                  <Badge key={index} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
}
