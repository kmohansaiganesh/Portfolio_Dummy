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
  meta,
  usc,
  harman,
  matchday,
  stocksearch,
  xchange,
  contextualmatching,
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
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Data Analyst",
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
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
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
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Research Assistant",
    company_name: "USC Viterbi School of Engineering",
    icon: usc,
    iconBg: "#FFFFFF",
    date: "AUG 2025 - Present",
    points: [
      "Develop Agentic AI frameworks integrated with interactive web interfaces using React, JavaScript, and TypeScript, enabling users to visualize reasoning outcomes, interact with dynamic dashboards, and improve task automation efficiency across research prototypes.",
      "Design and test multi-agent architectures for information extraction, ranking, and adaptive planning, connecting AI reasoning outputs to web frontends and enhancing coordination accuracy, interface responsiveness, and user experience for complex workflows."
    ],
  },
  {
    title: "Computer Science Grader",
    company_name: "University of Southern California",
    icon: usc,
    iconBg: "#FFFFFF",
    date: "AUG 2024 - May 2025",
    points: [
      "Ranked in top 1%  of 481 students and appointed as a grader for the Web Technologies course under Prof. Marco Papa.",
      "Assisted in instructing students on assignments and homework related to MERN and MEAN stacks, Kotlin for Android Development, and Flask.",
      "Graded assignments, homework, and exams while supporting the professor in evaluating the course.",
      "Provided guidance to students to improve their understanding of modern web technologies and development frameworks.",
    ],
  },
  {
    title: "Software Engineer - 1",
    company_name: "SAMSUNG (Harman International)",
    icon: harman,
    iconBg: "#FFFFFF",
    date: "MAR 2023 - JUN 2023",
    points: [
      "Directed CI/CD pipeline integration across 6 cross-functional teams, ensuring smooth, streamlined deployments using Agile workflows.",
      "Implemented 4 Remote Procedure Calls using client-server architecture and event-driven programming, ensuring high-performance.",
      "Enhanced cross-platform UI communication by replacing HIDL with Stable AIDL modules, cutting down development time by 40%."
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "SAMSUNG (Harman International)",
    icon: harman,
    iconBg: "#FFFFFF",
    date: "OCT 2020 - FEB 2023",
    points: [
      "Formulated and led end-to-end strategic module development, driving all 7 phases of the Software Development Life Cycle (SDLC).",
      "Performed root cause analysis and fixed UI and integration defects, improving stability and minimizing issue resolution time by 50%.",
      "Automated reporting pipelines using custom scripts, reducing manual QA time by 300 hours across 6 teams and accelerating releases.",
      "Recognized as a best performer in 7 Program Increments for consistent delivery, UI improvements, and cross-team collaboration."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Matchday.Ai",
    icon: matchday,
    iconBg: "#FFFFFF",
    date: "DEC 2019 - JUN 2020",
    points: [
      "Engineered an Automated Player Tracking system in a multi-camera environment with 95.6% accuracy, providing real-time statistics.",
      "Collaborated with Star Sports broadcast crew for Premier Badminton League tournament, reaching a peak viewership of 1.5 million.",
    ],
  }
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
    name: "Stock Trek",
    description:
      "Responsive stock trading platform (MERN) stack and Android app (Kotlin) with real-time trade simulation, RESTful APIs, buy/sell functionality, wallet, watchlist, portfolio, and interactive stock charts.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "yellow-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: stocksearch,
    source_code_link: "https://github.com/mohansaiganesh/stock_trek",
    live_demo_link: "",
    youtube_link: "https://youtu.be/e1JHsNx1AUU",
  },
  {
    name: "X-Change VIT",
    description:
      "Web and Mobile (Java) Applications to streamline hostel room allocation for 20,000+ VIT students spanning across 24 blocks, enabling real-time room searches, block filtering, and image viewing. This prposed system reduces the end-to-end hostel allocation and exchange process time from 1 month to 3-5 days.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "php",
        color: "violet-text-gradient",
      },
      {
        name: "sql",
        color: "blue-text-gradient",
      },

    ],
    image: xchange,
    source_code_link: "https://github.com/mohansaiganesh/x_change_vit",
  },
  {
    name: "Contextual Matching",
    description:
      "This project reimagines the job-matching process by utilizing word and sentence embeddings to uncover hidden context within job applications. It enhances the accuracy and precision of matching candidates with the most relevant opportunities, transforming the traditional approach to recruitment.",
    tags: [
      {
        name: "llm",
        color: "blue-text-gradient",
      },
      {
        name: "dense_passage_retrieval",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: contextualmatching,
    source_code_link: "https://github.com/mohansaiganesh/contextual_matching",
  },
];

export { services, technologies, experiences, testimonials, projects };
