import React from "react";
import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import twittercloneImg from "../images/twitterclone.png";
import wordgameImg from "../images/wordgame.png";
import noteappImg from "../images/noteapp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Drilling Engineer",
    company: "Halliburton",
    description:
      "After graduation (Mechanical Engineering 2.1 hons). I worked as a drilling engineer in the oil and gas sector .I was responsible for planning, designing and delivering oil wells and coordinating drilling operations. Then I picked an interest in web development",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2020",
  },
  {
    title: "Front-End Developer",
    company: "Lykdat",
    description:
      "I am currently working as a front-end developer. I collaborate with backend engineers to develop and maintain responsive user-friendly website and web applications",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WordGame",
    description:
      "This was a full-stack project for me. It is a game where users try to guess what the mystery word is.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Prisma"],
    imageUrl: wordgameImg,
    link: "https://t33y.github.io/hangman/",
  },
  {
    title: "NoteApp",
    description:
      "This is app used to take notes. It has features like filtering, sorting and tagging.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
    imageUrl: noteappImg,
    link: "https://t33y.github.io/notes",
  },
  {
    title: "Twitter Clone",
    description:
      "A twitter clone to mimic twitter functionalities like tweeting, liking tweets and following. It shows likes count, followers count and following counts etc. A full-stack project",
    tags: ["React", "Next.js", "NextAuth", "Tailwind", "TypeScript"],
    imageUrl: twittercloneImg,
    link: "https://twitter-clone-one-lac.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "NextAuth",
  "Clerk",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "GraphQL",
  "Framer Motion",
  { Redux: ["Redux ToolKit", "Redux ToolKit Query", "Redux Saga"] },
] as const;
