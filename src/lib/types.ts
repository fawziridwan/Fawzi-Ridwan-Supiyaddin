
export type Profile = {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  website: string;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
};

export type Experience = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type Education = {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
};

export type Skill = {
  name:string;
  proficiency: number; // Proficiency from 1 to 5
};
