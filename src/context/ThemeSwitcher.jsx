import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { Moon, Sun } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
    <div className="fixed right-8 bottom-10 z-10 bg-[#020917] p-3 rounded-full shadow-md">
      {theme === "light" ? (
        <Moon
          onClick={handleTheme}
          className="w-6 h-6 cursor-pointer"
        />
      ) : (
        <Sun
          onClick={handleTheme}
          className="w-6 h-6 cursor-pointer"
        />
      )}
      </div>
    </>
  );
};

export default ThemeSwitcher;