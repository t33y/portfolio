import React from "react";
import twhy from "./twhypic.png";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Button } from "@mui/material";

export default function Intro() {
  return (
    <div
      id="home"
      className="flex scroll-mt-[100rem] items-center flex-col max-w-[58rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.img
            src={twhy}
            alt="avatar"
            width="192"
            height="256"
            className=" aspect-auto h-[171] w-[128] rounded-2xl border-[0.35rem] border-white"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween" }}
          />
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 185,
              delay: 0.1,
              duration: 0.7,
            }}
            className=" text-gray-950/100 absolute bottom-0 right-0 text-4xl"
          >
            👋🏼
          </motion.span>
        </div>
      </div>
      <motion.h1
        className=" font-mono mb-10 mt-8 text-2xl leading-[1.5] font-medium px-4 sm:text-4xl"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I'm <span className="font-bold">Omotayo Olarewaju,</span> call me{" "}
        <span className="font-bold">
          {" "}
          Tayo.
          <br />{" "}
        </span>
        I'm a <span className="font-bold">Frontend Engineer. </span> I
        specialize in building robust and performant{" "}
        <span className="italic"> Web Applications</span>. <br /> My focus is{" "}
        <code className="font-bold">React (Next.js) Typescript</code>.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col gap-[15px] items-center sm:flex-row pb-10 "
      >
        <a
          className="group flex gap-2 rounded-full text-white  items-center  hover:scale-110 focus:scale-110  transition-all active:scale-105"
          href="#contact"
        >
          <Button variant="outlined" color="success">
            Contact me here{" "}
            <BsArrowRight className=" group-hover:translate-x-1 opacity-70" />{" "}
          </Button>
        </a>

        <a
          className="group flex gap-2 rounded-full items-center hover:scale-110 focus:scale-110 transition-all active:scale-105 "
          href="CV.pdf"
          download
        >
          <Button variant="contained">
            Download CV{"  "}
            <HiDownload className="group-hover:translate-x-1 opacity-60 group-active:translate-y-1" />{" "}
          </Button>
        </a>
        <a
          className="flex rounded-full text-gray-700 text-[1.35rem] hover:scale-[1.20] focus:scale-110 p-2 bg-gray-200 border border-gray-100 shadow-lg transition-all active:scale-105 dark:bg-gray-700 dark:text-white dark:border-gray-800 "
          href="https://www.github.com"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubSquare />{" "}
        </a>

        <a
          className="rounded-full text-[1.32rem] bg-gray-700 text-white p-2 hover:scale-[1.20] focus:scale-[1.15] transition-all active:scale-105 items-center dark:bg-gray-50 dark:text-gray-700"
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />{" "}
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.125 }}
        className="h-16 my-24 border border-gray-300 hidden sm:block dark:border-opacity-20 "
      ></motion.div>
    </div>
  );
}
