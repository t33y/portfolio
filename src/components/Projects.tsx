import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "../lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      {projectsData.map((project) => {
        return (
          <React.Fragment key={project.title}>
            <Project {...project} />
          </React.Fragment>
        );
      })}
    </div>
  );
}

type ProjectProps = (typeof projectsData)[number];
function Project({ title, description, tags, imageUrl, link }: ProjectProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="mb-3 sm:mb-8 last:mb-0 group "
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="flex group-even:flex-row-reverse bg-gray-100 max-w-[42rem] border sm:pr-8 sm:h-[20rem] border-black/5 overflow-hidden relative rounded-lg   hover:bg-gray-200 transition-all dark:bg-white/10 dark:hover:bg-white/20 dark:text-white "
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ">
          <h3 className="text-2xl font-semibold ">{title}</h3>
          <p className=" leading-relaxed mt-2 text-gray-700 dark:text-white/70 ">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
            {tags.map((tag, idx) => {
              return (
                <li
                  className=" bg-black/70 px-3 py-1 text-[0.7rem] uppercase rounded-full tracking-wider text-white dark:text-white/70 "
                  key={idx}
                >
                  {tag}
                </li>
              );
            })}
          </ul>
        </div>
        <img
          src={imageUrl}
          alt="My Projects"
          className="absolute top-8 -right-40 shadow-2xl rounded-t-lg group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:rotate-2 group-hover:scale-[1.1] group-odd:group-hover:translate-x-3  group-odd:group-hover:-rotate-2 transition-all hidden sm:block "
          width={456}
          height={500}
        />
      </a>
    </motion.div>
  );
}

export default Projects;
