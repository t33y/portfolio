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
      className="mb-28 scroll-mt-28 max-w-6xl p-3 leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p ref={ref} className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanical Engineering</span>, I worked in
        the oil and gas sector as Well Design Engineer/ Drilling Engineer. I
        later decided to pursue my passion for programming. I learned{" "}
        <span ref={ref} className="font-medium">
          Frontend Web Development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          HTML, CSS, Tailwind, React, Next.js, Typescript
        </span>
        . I am also familiar with Nodejs, MongoDB and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a Frontend
        Web Developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and listening to music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>.
      </p>
    </motion.section>
  );
}

export default About;
