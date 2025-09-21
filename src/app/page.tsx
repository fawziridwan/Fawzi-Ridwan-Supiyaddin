
import { profileData } from '@/lib/data';
import { CvHeader } from '@/components/cv-header';
import { ProfessionalSummary } from '@/components/professional-summary';
import { WorkExperience } from '@/components/work-experience';
import { Education } from '@/components/education';
import { Separator } from '@/components/ui/separator';
import { SkillsQualifications } from '@/components/skills-qualifications';
import { EmploymentHistory } from '@/components/employment-history';
import { PersonalData } from '@/components/personal-data';

export default function Home() {
  return (
    <main className="container mx-auto max-w-5xl p-4 sm:p-6 md:p-8">
      <div className="space-y-8">
        <CvHeader profile={profileData} />
        <div className="rounded-xl bg-card p-6 shadow-sm sm:p-8">
          <ProfessionalSummary summary={profileData.summary} />
          <Separator className="my-8" />
          <WorkExperience experience={profileData.experience} />
          <Separator className="my-8" />
          <SkillsQualifications skills={profileData.skills} />
          <Separator className="my-8" />
          <Education education={profileData.education} />
          <Separator className="my-8" />
          <EmploymentHistory history={profileData.employmentHistory} />
          <Separator className="my-8" />
          <PersonalData />
        </div>
      </div>
    </main>
  );
}
