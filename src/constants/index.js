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
    title: "Computer Science Grader",
    company_name: "University of Southern California",
    icon: usc,
    iconBg: "#FFFFFF",
    date: "AUG 2024 - Present",
    points: [
      "Ranked in top 2%  of 481 students and appointed as a grader for the Web Technologies course under Prof. Marco Papa.",
      "Assisted in instructing students on assignments and homework related to MERN and MEAN stacks, Kotlin for Android Development, and Flask.",
      "Graded assignments, homework, and exams while supporting the professor in evaluating the course.",
      "Provided guidance to students to improve their understanding of modern web technologies and development frameworks.",
    ],

  },
  {
    title: "Software Engineer - 1",
    company_name: "Harman International",
    icon: harman,
    iconBg: "#FFFFFF",
    date: "MAR 2023 - JUN 2023",
    points: [
      "Tech Stack - Android, Stable Aidl, C++, Java, Rapid Json, IOC, SomeIP, Multi Core IPC, DSI.",
      "Responsible for developing and integrating CI/CD pipelines, delivering code across 6 cross-functional teams using Agile workflows.",
      "Developed 4 Remote Procedure Calls using client-server architecture and event-driven programming, ensuring high-performance.",
      "Replaced HIDL with Stable AIDL supporting cross-language features and ported to Android S, reducing development time by 40%."
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Harman International",
    icon: harman,
    iconBg: "#FFFFFF",
    date: "OCT 2020 - FEB 2023",
    points: [
      "Tech Stack - Adaptive Autosar, Linux, Common API, OpenSSL, DAC, MAC, AX8 Softcore.",
      "Responsible for end-to-end strategic module development, following the 7 phases of the Software Development Life Cycle (SDLC).",
      "Conducted root cause analysis and resolved top-priority, release-gating tickets in a short span, saving 50% of the allocated time.",
      "Developed python scripts to automatically generate CodeSonar and unit test reports, reducing 300 hours weekly across 6 teams."
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Matchday.Ai",
    icon: matchday,
    iconBg: "#FFFFFF",
    date: "DEC 2019 - JUN 2020",
    points: [
      "Tech Stack - Python, Computer Vision, Transfer Learning, Deep Learning, Flask, Anaconda.",
      "Engineered an automated player tracking system using Deep Learning and OpenCV in a multi-camera environment, enhancing real-time analytics for major tournaments such as the Premier Badminton League, which reached a peak viewership of 1.5 million.",
      "Partnered with the Star Sports broadcast crew to deliver real-time statistics and analysis during live broadcasts, significantly enhancing viewer experience.",
      "Initiated research in soccer by implementing advanced techniques such as color segmentation and spatial transformation, achieving 95.6% accuracy in player tracking and providing valuable data insights.",
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
