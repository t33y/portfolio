import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    title: "Front-End Developer",
    company: "Lykdat",
    description:
      "I am currently working as a front-end developer. I collaborate with backend engineers to develop and maintain responsive user-friendly website and web applications",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Drilling Engineer",
    company: "Halliburton",
    description:
      "After graduation (Mechanical Engineering 2.1 hons). I worked as a drilling engineer in the oil and gas sector .I was responsible for planning, designing and delivering oil wells and coordinating drilling operations. Then I picked an interest in web development",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "NoteApp",
    description:
      "This is an  app used to take notes. It has features like filtering, tagging and markdown support.",
    tags: ["React", "TypeScript", "React Router", "Tailwind"],
    imageUrl: noteappImg,
    link: "https://t33y.github.io/notes",
  },
  {
    title: "WordGame",
    description:
      "This is a very enjoyable game. Player tries to guess what the mystery word is.",
    tags: ["React", "Css"],
    imageUrl: wordgameImg,
    link: "https://t33y.github.io/hangman/",
  },
  {
    title: "Twitter Clone",
    description:
      "A twitter clone to mimic twitter functionalities like tweeting, liking tweets and following. It shows likes count, followers count and following counts etc. A full-stack project",
    tags: ["React", "Next.js", "NextAuth", "Tailwind", "TypeScript", "TRPC"],
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
  "Git",
  "Tailwind",
  "Framer Motion",
  "Tastack/React Query",
  "NextAuth",
  "Node.js",
  "Prisma",
  "GraphQL",
  "TRPC",
  "MongoDB",
  { Redux: ["Redux ToolKit", "Redux ToolKit Query", "Redux Saga"] },
  { CMS: ["WordPress", "Sanity"] },
] as const;
