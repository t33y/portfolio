import React from "react";
import { BsMoon, BsSunrise } from "react-icons/bs";
import { Theme } from "../App";

type ThemeSwitchProps = {
  theme: Theme;
  handleThemeSwitch: () => void;
};

function ThemeSwitch({ theme, handleThemeSwitch }: ThemeSwitchProps) {
  return (
    <button
      title={`${theme} mode`}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-10 backdrop-blur-[0.8rem] border border-white border-opacity-20 shadow-sm rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900 dark:border-gray-800 "
      onClick={handleThemeSwitch}
    >
      {theme === "Light" ? <BsSunrise /> : <BsMoon />}
    </button>
  );
}

export default ThemeSwitch;
