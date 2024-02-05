"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [scroll, setScroll] = useState(false);

  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  }
  return (
    <nav
      className={`fixed top-0 left-0 flex items-center justify-between w-full px-64 py-2 z-50 ${
        scroll ? "backdrop-blur-md bg-black bg-opacity-25" : ""
      }`}>
      <Image
        src="/images/photo.png"
        alt="Photo de Richard Kovacs"
        width={2048}
        height={2048}
        className="w-10 h-10 rounded-full filter grayscale"
      />
      <ul className="flex items-center justify-center gap-6">
        <li>
          <Link
            href="#home"
            className="transition duration-100 ease-in-out hover:dark-preset dark:hover:white-preset">
            0. Home
          </Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="transition duration-100 ease-in-out hover:dark-preset dark:hover:white-preset">
            1. Skills
          </Link>
        </li>
        <li>
          <Link
            href="#projects"
            className="transition duration-100 ease-in-out hover:dark-preset dark:hover:white-preset">
            2. Projects
          </Link>
        </li>
        <li>
          <Link
            href="#experiences"
            className="transition duration-100 ease-in-out hover:dark-preset dark:hover:white-preset">
            3. Experiences
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="transition duration-100 ease-in-out hover:dark-preset dark:hover:white-preset">
            4. Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
