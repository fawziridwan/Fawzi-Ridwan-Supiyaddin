
import type { Profile } from './types';

export const profileData: Profile = {
  name: "Fawzi Ridwan Supiyaddin",
  headline: "Quality Assurance | Test Engineer | Frontend Developer",
  location: "Indonesia",
  email: "fawzi.ridwan@example.com",
  phone: "+62 123 456 7890",
  linkedin: "https://linkedin.com/in/fawziridwans",
  website: "https://fawziridwan.dev",
  summary: "Over 5 years of experience as a Quality Assurance and Test Engineer, with 1 year of experience as a Frontend Developer. Skilled in both manual and automated testing for web and mobile applications, API testing, and working within Agile and Waterfall methodologies.",
  experience: [
    {
      title: "Test Engineer",
      company: "PT Code Development Indonesia",
      location: "Jakarta, Indonesia",
      startDate: "Jul 2024",
      endDate: "Present",
      description: [
        "Senior SIT Tester for PT Bank Danamon Tbk, supporting D-Bank Pro 2.0.",
        "Performed API testing using Postman and managed databases with Dbeaver and PostgreSQL.",
        "Conducted testing on Android & iOS mobile applications.",
        "Utilized Selenium and Appium with Java for test automation."
      ]
    },
    {
      title: "Quality Assurance Analyst",
      company: "PT Smoets Teknologi Outsourcing",
      location: "Jakarta, Indonesia",
      startDate: "Nov 2018",
      endDate: "Jun 2024",
      description: [
        "Served as QA Analyst for PT Fintek Karya Nusantara (LinkAja), supporting core payment migration, P2P lending, and consumer applications.",
        "Worked on various projects including My Republic's CMS, MARS marketing automation, Pagii.co HR attendance, UOB's TMRW Digital Banking, and more.",
        "Gained experience with a wide array of tools and technologies including Postman, gRPC, Kubernetes, JMeter, Selenium, Cypress, and various databases."
      ]
    },
    {
      title: "Frontend Developer",
      company: "Clean & Go",
      location: "Hong Kong (Remote)",
      startDate: "2018",
      endDate: "2019",
      description: [
        "Developed the frontend for a cleaning service website based in Hong Kong.",
        "Utilized Vue.js, GraphQL, and worked with MySQL and DynamoDB databases."
      ]
    }
  ],
  education: [
    {
      institution: "Politeknik & STMIK Komputer Niaga LPKIA",
      degree: "Bachelor's Degree",
      fieldOfStudy: "Information Technology",
      startDate: "2013",
      endDate: "2017"
    },
    {
      institution: "Vocation High School Medikacom",
      degree: "Vocational",
      fieldOfStudy: "Software Engineering",
      startDate: "2010",
      endDate: "2013"
    }
  ],
  skills: [
    { name: "Blackbox Testing", proficiency: 5 },
    { name: "Agile & Scrum", proficiency: 5 },
    { name: "API Testing", proficiency: 5 },
    { name: "Postman", proficiency: 5 },
    { name: "Jira", proficiency: 5 },
    { name: "Java", proficiency: 4 },
    { name: "JavaScript", proficiency: 4 },
    { name: "Appium", proficiency: 4 },
    { name: "Selenium", proficiency: 4 },
    { name: "Cypress.js", proficiency: 3 },
    { name: "Python", proficiency: 3 },
    { name: "Vue.js", proficiency: 2 },
  ]
};
