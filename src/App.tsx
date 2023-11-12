import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ThemeSwitch from "./components/ThemeSwitch";

type InviewParameters = {
  refObj: React.RefObject<HTMLDivElement>;
  thresholdTop: number;
};

export type Theme = "Light" | "Dark";

function App() {
  const refHome = useRef<HTMLDivElement>(null);
  const refAbout = useRef<HTMLDivElement>(null);
  const refProjects = useRef<HTMLDivElement>(null);
  const refSkills = useRef<HTMLDivElement>(null);
  const refExperience = useRef<HTMLDivElement>(null);
  const refContact = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("");
  const [delay, setDelay] = useState(0);
  const [theme, setTheme] = useState<Theme>("Light");

  const handleThemeSwitch = () => {
    if (theme === "Light") {
      setTheme("Dark");
      window.localStorage.setItem("theme", "Dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("Light");
      window.localStorage.setItem("theme", "Light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "Dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("Dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (Date.now() - delay <= 1000) return;

    function inView(
      ...args: InviewParameters[]
    ): React.RefObject<HTMLDivElement> {
      for (let i = 0; i < arguments.length; i++) {
        const sectionTop =
          arguments[i].refObj.current.getBoundingClientRect().top;
        const screen = Math.floor(window.screen.availHeight);
        const thresholdBottom = 0.5;

        if (
          Math.floor(sectionTop) >= screen * arguments[i].thresholdTop &&
          Math.floor(sectionTop) <= screen * thresholdBottom
        )
          var sectionInView = arguments[i].refObj;
      }
      return sectionInView;
    }

    const handleScroll = () => {
      const refObj = inView(
        { refObj: refHome, thresholdTop: 0.1 },
        { refObj: refAbout, thresholdTop: 0.3 },
        { refObj: refProjects, thresholdTop: 0.3 },
        { refObj: refSkills, thresholdTop: 0.3 },
        { refObj: refExperience, thresholdTop: 0.3 },
        { refObj: refContact, thresholdTop: 0.3 }
      );
      switch (refObj) {
        case refHome:
          setActiveSection("Home");
          break;
        case refAbout:
          setActiveSection("About");
          break;
        case refProjects:
          setActiveSection("Projects");
          break;
        case refSkills:
          setActiveSection("Skills");
          break;
        case refExperience:
          setActiveSection("Experience");
          break;
        case refContact:
          setActiveSection("Contact");
          break;
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, setActiveSection, delay]);

  return (
    <div className="pt-28 text-opacity-70 bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 sm:pt-36 flex text-center items-center flex-col">
      <ThemeSwitch theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <header>
        <Header
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          setDelay={setDelay}
        />
      </header>
      <main className="flex items-center flex-col">
        <Toaster position="top-right" />
        <section ref={refHome}>
          <Intro />
        </section>
        <section ref={refAbout}>
          <About />
        </section>
        <section ref={refProjects}>
          <Projects theme={theme} />
        </section>
        <section ref={refSkills}>
          <Skills />
        </section>
        <section ref={refExperience}>
          <Experience theme={theme} />
        </section>
        <section ref={refContact}>
          <Contact />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
