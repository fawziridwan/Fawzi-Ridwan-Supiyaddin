
import type { Profile } from './types';

export const profileData: Profile = {
  name: "Fawzi Ridwan Supiyaddin",
  headline: "Quality Assurance | Test Engineer | Frontend Developer",
  location: "Indonesia",
  email: "fawziridwan@gmail.com",
  phone: "+62 822-1655-0540",
  linkedin: "https://www.linkedin.com/in/fawzi-ridwan-supiyaddin-431322b5/",
  website: "",
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
      location: "Bandung, Indonesia",
      startDate: "Nov 2018",
      endDate: "Jun 2024",
      description: [
        "Served as QA Analyst for Financial Technology (Fintech), supporting core payment migration, P2P lending, and consumer applications.",
        "Worked on various projects including My Republic's Project Management, Marketing Automation Tools, HRIS Applications, One of above Digital Banking in Singapore & Indonesia, and more.",
        "Gained experience with a wide array of tools and technologies including Postman, gRPC, Kubernetes, JMeter, Selenium, Cypress, and various databases."
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
  skills: {
    management: [
      "Software Development Life Cycle",
      "Waterfall methodologies",
      "Scrum, Agile methodologies",
      "Blackbox Testing",
      "Grey Box Testing",
      "UAT Testing",
      "SIT Testing",
      "Sanity & Regression Testing",
      "Detail Orientation",
      "Agile Testing"
    ],
    implementation: {
      languages: ["Java", "Python", "Javascript"],
      frameworks: ["Appium", "Webdriver.io", "Cypress.Js", "Mocha.js", "Robot Framework", "Node.Js", "Katalon Studio"],
      databases: ["MySQL", "PostgreSQL", "MongoDB", "Dbeaver"],
      logs: ["WinSCP", "Telnet", "Kibana"]
    },
    additional: {
      languages: ["PHP", "Vue.Js", "Wordpress"],
      reporting: ["Jira", "Zephyr", "Testrail", "Spreadsheet"]
    }
  },
  employmentHistory: [
    {
      company: "PT Code Development Indonesia",
      dates: "Jul 2024 – Now"
    },
    {
      company: "PT Smooets Teknologi Outsourcing",
      dates: "Nov 2017 – Jun 2024"
    },
    {
      company: "Geeksfarm",
      dates: "Oct 2017 – Nov 2017"
    },
    {
      company: "PT Inovindo Digital Media",
      dates: "Feb 2017 – May 2017"
    }
  ]
};
