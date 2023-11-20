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
        <span className="font-medium">Mechanical Engineering. </span> I've
        seamlessly transitioned my expertise from navigating the complexities of
        Oil-Well design and Drilling engineering to the dynamic realm of{" "}
        <span ref={ref} className="font-bold text-blue-600 dark:text-blue-400">
          Frontend Engineering
        </span>
        . With a foundation built on the precision of engineering and a passion
        for problem-solving I thrive in environments where innovation meets
        practicality, finding elegant solutions to intricate problems . I love
        the feeling of creating seamless digital experiences and transforming
        complex concepts into intuitive interfaces, ensuring exceptional user
        experiences. My core stack is{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          Typescript, React, Next.js, Javascript, Tailwind, HTML, CSS
        </span>
        . I am also familiar with{" "}
        <span className="italic font-medium">
          Nodejs, NoSQL, Firebase, MongoDB, MySQL, Planetscale, and Prisma.
        </span>{" "}
        I am always looking to learn new technologies. I am open to{" "}
        <span className="font-medium">
          Collaborations, Innovative Projects, and Opportunities
        </span>{" "}
        that allow me to contribute my skills and expertise. Let's explore how I
        can make a meaningful impact on your next venture.
      </p>

      <p className="font-serif text-xl">
        <span className="italic">When I'm not coding</span>, I enjoy watching
        movies, and listening to music.
      </p>
    </motion.section>
  );
}

export default About;
