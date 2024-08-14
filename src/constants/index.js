import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  xiaomi,
  xingye,
  tencent,
  alibaba,
  hkex,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Graduate Associate - Technology",
    company_name: "HKEX",
    icon: hkex,
    iconBg: "#E6DEDD",
    date: "August 2024 - Now",
    points: [
      "A Graduate Program like Management Trainee, will rotate in 4 departments in 2 years.",
      "1st Rotation: Listing and Corporate Systems - HR & Finance Systems",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Alibaba Group",
    icon: alibaba,
    iconBg: "#383E56",
    date: "June 2023 - September 2023",
    points: [
      "Responsible for the mobile H5 pages development of the entire allowance shop in 9Game's new app project,including goods details, exchange process, game search, trade records pages (Tech stack: React, TS).",
      "Encapsulated 3 common business components with API documentation, utilized in 10+ different scenarios.",
      "Provided 2 custom React Hooks to enhance user experience details on H5 pages within the Android app.",
      "Initiated some innovative projects, e.g. integrated LLM ability with DingTalk bot, build Chrome extensions.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Industrial Securities",
    icon: xingye,
    iconBg: "#E6DEDD",
    date: "June 2022 - September 2022",
    points: [
      "Participate in the front-end development of internal risk management system (Tech Stack: React + Ant Design)",
      "Participate in project management of outsourced technical staff in the department, responsible for writing requirement documents and scheduling of front-end related requirements.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Tencent",
    icon: tencent,
    iconBg: "#383E56",
    date: "June 2021 - Sepetember 2021",
    points: [
      "Conducted survey of 2,000+ elderly people on browser functions, combined with the 5000+ user feedback obtained by Scrapy crawler on social media, adjusted the UI and functional modules of the elderly version of the browser.",
      "Participated in the optimize of QQ browser’s search function, took charge of competitive product research.",
      "Introduced Echats.js to visualize the business data, supporting a department with 10+ teammates.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Xiaomi",
    icon: xiaomi,
    iconBg: "#E6DEDD",
    date: "January 2021 - April 2021",
    points: [
      "Responsible for the construction of the Front-end pages of the configuration platform for the user growth and membership system. (Technical Stack: Vue 2 + ElementUI).",
      "Participate in the maintenance of main daily e-commerce activity pages (Group Shopping, Lottery), implemented 3 new business requirements, detected and fixed 2 bugs about JavsScript Throttle & Debounce.",
      "Introduced a new Git Rebase workflow in the group, and write a well-constrcuted newcomer document for the team.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const toRotateText = [
  "A Software Engineer",
  "A Photographer",
  "A Football Fan",
  "A Indie Music Lover",
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  toRotateText,
};
