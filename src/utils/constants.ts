import {
  css,
  express,
  git,
  github,
  gitlab,
  html,
  javascript,
  linux,
  mongodb,
  nextJS,
  nodeJS,
  postgresql,
  postman,
  reactJS,
  tailwindCss,
  typescript,
  framerMotion,
  prisma,
  Figma,
  ViteJS,
} from "./helpers";

export const techStack = [
  // Frontend
  { name: "HTML", color: "#e44d26", image: html },
  { name: "CSS", color: "#264de4", image: css },
  { name: "JavaScript", color: "#f0db4f", image: javascript },
  { name: "TypeScript", color: "#007acc", image: typescript },
  { name: "ReactJS", color: "#61DBFB", image: reactJS },
  { name: "NextJS", color: "#000000", image: nextJS },
  { name: "Tailwind CSS", color: "#38bdf8", image: tailwindCss },
  { name: "Framer Motion", color: "#e83e8c", image: framerMotion },
  { name: "ViteJS", color: "#646CFF", image: ViteJS },

  // Backend
  { name: "NodeJS", color: "#3c873a", image: nodeJS },
  { name: "ExpressJS", color: "#000000", image: express },
  { name: "Prisma", color: "#0c344b", image: prisma },

  // Databases
  { name: "MongoDB", color: "#4DB33D", image: mongodb },
  { name: "PostgreSQL", color: "#336791", image: postgresql },

  // Dev Tools
  { name: "Git", color: "#F1502F", image: git },
  { name: "GitHub", color: "#181717", image: github },
  { name: "GitLab", color: "#fc6d26", image: gitlab },
  { name: "Postman", color: "#FF6C37", image: postman },

  // Platforms & OS
  { name: "Linux", color: "#fbc02d", image: linux },

  // Design
  { name: "Figma", color: "#a259ff", image: Figma },
];
