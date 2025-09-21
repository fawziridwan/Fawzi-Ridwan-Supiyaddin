
import { Lightbulb } from 'lucide-react';
import { Section } from './section';
import type { Skill } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const proficiencyLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert', 'Master'];

function ProficiencyDots({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={cn(
            'h-2.5 w-2.5 rounded-full transition-colors',
            i < level ? 'bg-primary' : 'bg-muted'
          )}
        />
      ))}
    </div>
  );
}

export function SkillsMatrix({ skills }: { skills: Skill[] }) {
  return (
    <Section id="skills" title="Skills Matrix" icon={<Lightbulb className="h-6 w-6" />}>
      <TooltipProvider delayDuration={100}>
        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <Tooltip key={skill.name}>
              <TooltipTrigger asChild>
                <div className="flex cursor-default items-center gap-3 rounded-lg border bg-card p-3 transition-shadow duration-300 hover:shadow-md">
                  <span className="font-medium">{skill.name}</span>
                  <ProficiencyDots level={skill.proficiency} />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Proficiency: {proficiencyLevels[skill.proficiency - 1]}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </Section>
  );
}
