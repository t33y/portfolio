import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

function About() {
  const ref = useRef<HTMLParagraphElement>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      className="mb-28 scroll-mt-28 max-w-[60rem] p-3 leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p ref={ref} className="mb-3 font-serif text-xl leading-8">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I worked in
        the oil and gas sector as Well Design Engineer/ Drilling Engineer. I
        later decided to pursue my passion for programming. I learned{" "}
        <span ref={ref} className="font-bold text-blue-600 dark:text-blue-400">
          Frontend Web Development
        </span>
        . My favorite part of programming is the problem-solving aspect. I love
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          Typescript, React, Next.js, Javascript, Tailwind, HTML, CSS
        </span>
        . I am also familiar with{" "}
        <span className="italic font-medium">Nodejs, MongoDB and Prisma.</span>{" "}
        I am always looking to learn new technologies. I am currently looking
        for a <span className="font-medium">full-time position</span> as a
        Frontend Web Developer.
      </p>

      <p className="font-serif text-xl">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

export default About;
