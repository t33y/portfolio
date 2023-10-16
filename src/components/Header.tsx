import React from "react";
import { motion } from "framer-motion";
import { links } from "../lib/data";

type HeaderProps = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  setDelay: React.Dispatch<React.SetStateAction<number>>;
};

const Header = ({ activeSection, setActiveSection, setDelay }: HeaderProps) => {
  return (
    <header className=" relative z-[999]">
      <motion.div
        className="fixed top-0 left-1/2 w-full h-[4.5rem] border-white shadow-lg shadow-black/[0.15] backdrop-blur-[0.2rem] border  bg-white dark:bg-gray-900 border-opacity-40 bg-opacity-80 sm:top-6 sm:h-[3.25rem] sm:rounded-full sm:w-[36rem] dark:bg-opacity-75"
        initial={{ y: -200, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className=" flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:w-[36rem] sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex gap-y-1 items-center text-[0.9rem] justify-center font-medium text-gray-500 w-[22rem] flex-wrap sm:w-[initial] sm:gap-5 sm:flex-nowrap dark:text-gray-50 ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: 500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <a
                className={`flex w-full px-3 py-3 justify-center items-center hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300 ${
                  activeSection === link.name
                    ? "text-gray-950 dark:text-gray-200"
                    : ""
                }`}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setDelay(Date.now);
                }}
              >
                {link.name}
                {activeSection === link.name && (
                  <motion.span
                    className=" absolute bg-gray-200 inset-1 rounded-full -z-10 dark:bg-gray-800 "
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
