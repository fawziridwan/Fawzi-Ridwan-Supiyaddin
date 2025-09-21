
import type { Profile } from './types';

export const profileData: Profile = {
  name: "Alex Doe",
  headline: "Senior Software Engineer | Full-Stack Developer | Cloud Enthusiast",
  location: "San Francisco, CA",
  email: "alex.doe@example.com",
  phone: "+1 (555) 123-4567",
  linkedin: "https://linkedin.com/in/alexdoe",
  website: "https://alexdoe.dev",
  summary: "Results-driven Senior Software Engineer with over 8 years of experience in designing, developing, and deploying scalable web applications. Proficient in a wide range of technologies with a passion for clean code and solving complex problems. Adept at leading development teams and collaborating with cross-functional stakeholders to deliver high-quality products. Seeking to leverage expertise in a challenging role with a forward-thinking company.",
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Innovatech Solutions Inc.",
      location: "San Francisco, CA",
      startDate: "Jan 2020",
      endDate: "Present",
      description: [
        "Led a team of 5 engineers in the development of a new SaaS platform, increasing customer engagement by 40%.",
        "Architected and implemented a microservices-based backend using Node.js, TypeScript, and Docker, deployed on AWS.",
        "Developed and maintained the front-end application using React, Redux, and Tailwind CSS, improving performance by 25%.",
        "Mentored junior developers, conducted code reviews, and established best practices for the engineering team."
      ]
    },
    {
      title: "Software Engineer",
      company: "TechCorp",
      location: "Palo Alto, CA",
      startDate: "Jun 2017",
      endDate: "Dec 2019",
      description: [
        "Contributed to the development of a high-traffic e-commerce website, using Ruby on Rails and PostgreSQL.",
        "Collaborated with product managers and designers to implement new features and improve user experience.",
        "Wrote and maintained unit and integration tests, achieving 90% code coverage."
      ]
    }
  ],
  education: [
    {
      institution: "Stanford University",
      degree: "Master of Science",
      fieldOfStudy: "Computer Science",
      startDate: "2015",
      endDate: "2017"
    },
    {
      institution: "University of California, Berkeley",
      degree: "Bachelor of Science",
      fieldOfStudy: "Electrical Engineering and Computer Sciences",
      startDate: "2011",
      endDate: "2015"
    }
  ],
  skills: [
    { name: "TypeScript", proficiency: 5 },
    { name: "React", proficiency: 5 },
    { name: "Node.js", proficiency: 5 },
    { name: "AWS", proficiency: 4 },
    { name: "Docker", proficiency: 4 },
    { name: "SQL (PostgreSQL)", proficiency: 4 },
    { name: "System Design", proficiency: 4 },
    { name: "CI/CD", proficiency: 3 },
    { name: "Python", proficiency: 3 },
  ]
};
