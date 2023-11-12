import React, { useState } from "react";
import { skillsData } from "../lib/data";
import SectionHeading from "./SectionHeading";
import { Variants, motion } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const ulVariant: Variants = {
  first: {
    opacity: 0,
    y: 100,
  },
  second: {
    opacity: 1,
    y: 0,
  },
};
export default function Skills() {
  const [menuToOpen, setMenuToOpen] = useState("");

  const handleOpenButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.currentTarget as HTMLButtonElement;
    if (menuToOpen === target.innerHTML.slice(0, 3)) {
      setMenuToOpen("");
    } else {
      setMenuToOpen(target.innerHTML.slice(0, 3));
    }
  };

  return (
    <div
      id="skills"
      className=" text-center mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading> My Skills</SectionHeading>
      <motion.ul
        variants={ulVariant}
        initial="first"
        whileInView="second"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.05 }}
        className="flex flex-wrap gap-3 justify-center text-lg items-start"
      >
        {skillsData.map((skill, idx) => {
          if (skill instanceof Object) {
            return (
              <motion.nav
                variants={ulVariant}
                initial={false}
                animate={
                  menuToOpen === Object.keys(skill)[0].slice(0, 3)
                    ? "open"
                    : "closed"
                }
                key={idx}
              >
                <motion.button
                  variants={ulVariant}
                  initial="first"
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  whileInView="second"
                  whileTap={{ scale: 0.97 }}
                  onClick={(e) => handleOpenButton(e)}
                  className=" border rounded-xl px-5 py-3 w-full flex items-center justify-between  border-white shadow-sm bg-gray-200 dark:bg-gray-800 dark:text-white/70 dark:border-black "
                >
                  {Object.keys(skill)[0]}

                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                  >
                    <svg width="15" height="15" viewBox="0 0 20 20">
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.button>
                <motion.ul
                  variants={{
                    open: {
                      clipPath: "inset(0% 0% 0% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05,
                      },
                    },
                    closed: {
                      clipPath: "inset(0% 0% 100% 0% round 10px)",
                      transition: {
                        type: "spring",
                        bounce: 0,
                        duration: 0.3,
                      },
                    },
                  }}
                  style={{ pointerEvents: menuToOpen ? "auto" : "none" }}
                  className="flex mt-2 rounded-xl border flex-col  border-white shadow-sm bg-gray-200 px-5 py-3 dark:bg-gray-800 dark:text-white/70 dark:border-black "
                >
                  {Object.values(skill)[0].map(
                    (reduxElements: string, idx: number) => {
                      console.log(Object.values(skill));
                      return (
                        <motion.li
                          variants={itemVariants}
                          className="text-left py-3"
                          key={idx}
                        >
                          {reduxElements}
                        </motion.li>
                      );
                    }
                  )}
                </motion.ul>
              </motion.nav>
            );
          }
          return (
            <motion.li
              variants={ulVariant}
              className="rounded-xl border border-white shadow-sm bg-gray-200 px-5 py-3 dark:bg-gray-800 dark:text-white/70 dark:border-black "
              key={idx}
            >
              {skill}
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
