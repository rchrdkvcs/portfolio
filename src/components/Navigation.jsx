"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Burger } from "./icones/Burger";
import { Cross } from "./icones/Cross";

export const Navigation = () => {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [keyDown, setKeyDown] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experiences", label: "Experiences" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  if (typeof window !== "undefined") {
    if (navOpen) {
      window.onscroll = () => {
        setScroll(false);
      };
    } else {
      window.onscroll = () => {
        if (window.scrollY > 100) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
    }
  }

  useEffect(() => {
    const keyRouteMap = {
      0: "/#home",
      1: "/#skills",
      2: "/#projects",
      3: "/#experiences",
      4: "/#contact",
    };

    const handleKeyDown = (e) => {
      const route = keyRouteMap[e.key];
      if (route) {
        setKeyDown({ [e.key]: true });
        setTimeout(() => {
          setKeyDown({ [e.key]: false });
        }, 500);
        router.push(route);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [keyDown, router]);

  return (
    <header className="fixed top-0 left-0 z-50 flex flex-col w-full">
      <nav
        className={`flex items-center justify-between w-full px-4 py-2 md:px-16 lg:px-32 xl:px-64 ${
          scroll
            ? "bg-[#aaa] dark:bg-[#111] shadow-lg backdrop-blur-md bg-opacity-25 dark:bg-opacity-25"
            : ""
        } ${
          navOpen
            ? "bg-[#aaa] dark:bg-[#111] backdrop-blur-md bg-opacity-25 dark:bg-opacity-25"
            : ""
        }`}>
        {/* Nav Desktop */}

        <Image
          src="/images/photo.png"
          alt="Photo de Richard"
          width={2048}
          height={2048}
          className="w-10 h-10 lg:h-12 lg:w-12 filter grayscale"
        />

        <ul className="items-center justify-center hidden gap-4 lg:flex md:text-sm lg:text-base">
          {navItems.map((item, index) => (
            <li key={index} className="flex items-center justify-center">
              <Link
                href={item.href}
                className="flex items-center justify-center w-full gap-1">
                <span
                  className={`items-center justify-center px-2 transition duration-100 ease-in-out border border-b-4 w-fit border-[#111] dark:border-[#aaa] hidden md:flex ${
                    keyDown[index]
                      ? "dark-preset dark:white-preset border-b-0"
                      : ""
                  }`}>
                  {index}
                </span>
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>

        {/* Nav Mobile */}

        <button
          className="border border-[#111] dark:border-[#aaa] text-3xl lg:hidden"
          onClick={() => handleNavOpen()}>
          {navOpen ? <Cross /> : <Burger />}
        </button>
      </nav>

      {navOpen && (
        <nav className="flex w-full h-full lg:hidden bg-[#aaa] dark:bg-[#111] backdrop-blur-md bg-opacity-25 dark:bg-opacity-25 z-50 text-lg py-4">
          <ul className="flex flex-col items-center justify-center w-full gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="flex items-center justify-center">
                <Link
                  onClick={() => setNavOpen(false)}
                  href={item.href}
                  className="flex items-center justify-center w-full gap-1">
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
