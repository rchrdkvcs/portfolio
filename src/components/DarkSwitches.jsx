"use client";

import { useEffect, useState } from "react";

export const DarkSwitches = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const localDarkMode = window.localStorage.getItem("darkMode");

    if (localDarkMode) {
      setDarkMode(localDarkMode);

      if (localDarkMode) {
        document.documentElement.classList.add("dark");
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "m" || e.key === "M") {
        setDarkMode(!darkMode);
        window.localStorage.setItem("darkMode", !darkMode);
        document.documentElement.classList.toggle("dark");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [darkMode]);

  return (
    <button
      className="fixed bottom-0 left-0 z-50 flex items-center justify-center gap-2 p-2 text-sm cursor-pointer"
      onClick={() => {
        setDarkMode(!darkMode);
        window.localStorage.setItem("darkMode", !darkMode);
        document.documentElement.classList.toggle("dark");
      }}>
      <p className="px-2 border border-b-4 border-[#111] dark:border-[#aaa]">
        M
      </p>
      <p>Light / Dark</p>
    </button>
  );
};
