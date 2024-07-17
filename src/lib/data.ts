import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import lykdatImg from "../images/lykdat.png";
import lykdatImgl from "../images/lykdatlight.png";
import wordgameImg from "../images/wordgame.png";
import wordgameImgl from "../images/wordgamelight.png";
import noteappImg from "../images/noteapp.png";
import noteappImgl from "../images/noteapplight.png";
import pricewhistleImg from "../images/pricewhistle.png";
import pricewhistleImgl from "../images/pricewhistlelight.png";
import simplevideoplayerImg from "../images/simplevideoplayer.png";
import simplevideoplayerImgl from "../images/simplevideoplayerlight.png";

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
      "I am currently working as a software engineer. I collaborate with other engineers to develop and maintain highly performant, responsive, user-friendly software applications",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
  {
    title: "Solutions Engineer",
    company: "Halliburton",
    description:
      "After graduation (Mechanical Engineering 2.1 hons). I worked as a solutions engineer.I was responsible for testing, designing and delivering software and web application solutions",
    icon: React.createElement(CgWorkAlt),
    date: "2014 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Lykdat",
    description:
      "Lykdat makes it easy to find and purchase similar styles of an outfit with just an image.Lykdat is the powerful search tool that helps you find what you want even when you don't have the right words.",
    tags: ["React", "Next.js", "Ant Design", "TypeScript"],
    imageUrl: { dark: lykdatImg, light: lykdatImgl },
    link: "https://lykdat.com/",
  },

  {
    title: "PriceWhistle",
    description:
      "Ever wished you could get that trendy outfit at a lower price? PriceWhistle is your personal fashion companion that keeps you in the loop on the latest deals on your favourite outfit",
    tags: ["React", "Next.js", "TypeScript"],
    imageUrl: { dark: pricewhistleImg, light: pricewhistleImgl },
    link: "https://pricewhistle.com/",
  },
  {
    title: "SimpleVideoPlayer",
    description:
      "SimpleVideoPlayer.com is a Video player that runs on the Browser. It strictly plays video files that exist on your local computer. It offers features similar to VLC such as amplified volume (you can increase volume to 400%), subtitle files (you can enable subtitles as you watch a video), keyboard controls (up and down for volume, etc.).Sometimes you have videos from untrusted sources and you are worried about the safety of playing them with any app on your machine.Because browsers like Chrome, and Brave have sandboxing. Even though they are also not 100% secure, you are more assured when using them. Also browsers are updated more often than a lot of video players.",
    tags: ["React", "Next.js", "TypeScript"],
    imageUrl: { dark: simplevideoplayerImg, light: simplevideoplayerImgl },
    link: "https://simplevideoplayer.com/",
  },
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
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Ionic",
  "Git",
  "Tailwind",
  "HTML",
  "CSS",
  "Framer Motion",
  "Tanstack/React Query",
  "NextAuth",
  "Node.js",
  "GCP",
  "NestJs",
  "Prisma",
  "Planetscale",
  "TRPC",
  "Firebase",
  { Redux: ["Redux ToolKit", "Redux ToolKit Query", "Redux Saga"] },
  { CMS: ["WordPress", "Sanity"] },
] as const;
