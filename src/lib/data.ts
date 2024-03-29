import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import shoutoutImg from "../images/shoutout.png";
import shoutoutImgl from "../images/shoutoutlight.png";
import wordgameImg from "../images/wordgame.png";
import wordgameImgl from "../images/wordgamelight.png";
import noteappImg from "../images/noteapp.png";
import noteappImgl from "../images/noteapplight.png";
import pricewhistleImg from "../images/pricewhistle.png";
import pricewhistleImgl from "../images/pricewhistlelight.png";

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
    title: "Front-End Engineer",
    company: "Lykdat",
    description:
      "I am currently working as a front-end engineer. I collaborate with backend engineers to develop and maintain responsive user-friendly website and web applications",
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
      "This is an app used to take notes. It has features like filtering, tagging and markdown support.",
    tags: [
      "React",
      "TypeScript",
      "React Router",
      "Tailwind",
      "Framer-Motion",
      "MaterialUi",
    ],
    imageUrl: { dark: noteappImg, light: noteappImgl },
    link: "https://t33y.github.io/notes",
  },
  {
    title: "WordGame",
    description:
      "This is a very enjoyable game. Player tries to guess what the mystery word is.",
    tags: ["React", "Css", "Tailwind", "MaterialUi"],
    imageUrl: { dark: wordgameImg, light: wordgameImgl },
    link: "https://t33y.github.io/hangman/",
  },
  {
    title: "ShoutOut",
    description:
      "A social web app where users can share uplifting shout outs,  like and unlike posts and have a following. Sign in and make a shout out",
    tags: ["React", "Next.js", "NextAuth", "Tailwind", "TypeScript", "TRPC"],
    imageUrl: { dark: shoutoutImg, light: shoutoutImgl },
    link: "https://shout-out-one-lac.vercel.app/",
  },
  {
    title: "PriceWhistle",
    description:
      "Ever wished you could get that trendy outfit at a lower price? PriceWhistle is your personal fashion companion that keeps you in the loop on the latest deals on your favourite outfit",
    tags: ["React", "Next.js", "TypeScript"],
    imageUrl: { dark: pricewhistleImg, light: pricewhistleImgl },
    link: "https://pricewhistle.com/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "HTML",
  "CSS",
  "Framer Motion",
  "Tastack/React Query",
  "NextAuth",
  "Node.js",
  "Prisma",
  "Planetscale",
  "TRPC",
  "Firebase",
  { Redux: ["Redux ToolKit", "Redux ToolKit Query", "Redux Saga"] },
  { CMS: ["WordPress", "Sanity"] },
] as const;
