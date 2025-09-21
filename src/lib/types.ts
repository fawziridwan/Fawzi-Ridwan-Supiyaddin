
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
  skills: Skills;
  employmentHistory: EmploymentHistory[];
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

export type EmploymentHistory = {
  company: string;
  dates: string;
};

export type Skills = {
  management: string[];
  implementation: {
    languages: string[];
    frameworks: string[];
    databases: string[];
    logs: string[];
  };
  additional: {
    languages: string[];
    reporting: string[];
  }
};
