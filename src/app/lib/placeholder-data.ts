import { Project, SocialLink, Skill } from "./definitions";

export const projectsData: Project[] = [
  {
    projectName: "Sadak Soochak",
    description:
      "Developed a system to regulate the flow of traffic around a roundabout or crossroad based upon traffic density.",
    image: "/dummy_image.jpg",
    techStack: [
      "Next.js",
      "TypeScript",
      "Vercel",
      "PostgreSQL",
      "Flask",
      "Tailwind CSS",
    ],
    github: "https://github.com/vampconnoisseur?tab=repositories",
  },
  {
    projectName: "Clean Catalogue",
    description:
      "Developed an app with a mechanism which scores catalogues using the capabilites of GPT4 vision.",
    image: "/dummy_image.jpg",
    techStack: [
      "Flutter",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "GPT4V",
      "Next.js",
    ],
    github: "https://github.com/vampconnoisseur?tab=repositories",
  },
  {
    projectName: "Gather",
    description:
      "Developed a video conferencing app with corporate meeting optimized architecture as a Full Stack Developer.",
    image: "/dummy_image.jpg",
    techStack: ["Flutter", "Agora", "Firebase", "Node.js", "Render"],
    github: "https://github.com/vampconnoisseur?tab=repositories",
  },
];

export const socialData: SocialLink[] = [
  {
    name: "Github",
    icon: "/icons/github.svg",
    link: "https://github.com/vampconnoisseur",
  },
  {
    name: "Twitter",
    icon: "/icons/twitter.svg",
    link: "https://twitter.com/jaidityabatra",
  },
  {
    name: "Linkedin",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/jaidityabatra/",
  },
  {
    name: "Mail",
    icon: "/icons/mail.svg",
    link: "https://github.com/vampconnoisseur?tab=repositories",
  },
];

export const skills: Skill[] = [
  {
    title: "HTML",
    icon: "/skill-icons/html.svg",
  },
  {
    title: "CSS",
    icon: "/skill-icons/css.svg",
  },
  {
    title: "Javascript",
    icon: "/skill-icons/js.svg",
  },
  {
    title: "TailwindCSS",
    icon: "/skill-icons/tailwind.svg",
  },
  {
    title: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "NextJS",
    icon: "/skill-icons/next.svg",
  },
  {
    title: "Typescript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    title: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Express",
    icon: "/skill-icons/express.svg",
  },
  {
    title: "MongoDB",
    icon: "/skill-icons/mongodb.svg",
  },
  {
    title: "Flutter",
    icon: "/skill-icons/flutter.svg",
  },
  {
    title: "Dart",
    icon: "/skill-icons/dart.svg",
  },
  {
    title: "PostgreSQL",
    icon: "/skill-icons/postgres.svg",
  },
  {
    title: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    title: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];
