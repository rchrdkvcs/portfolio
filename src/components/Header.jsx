"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GhostButton } from "./buttons/GhostButton";
import { PrimaryButton } from "./buttons/PrimaryButton";
import { Burger } from "./icones/Burger";
import { Cross } from "./icones/Cross";
import { LogoRk } from "./icones/LogoRk";

export default function Header() {
  const router = useRouter();
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navItems = [
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experiences", label: "Experiences" },
    { href: "#contact", label: "Contacts" },
  ];

  const handleNavOpen = () => {
    setNavOpen(!navOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 z-50 flex flex-col w-full bg-gradient-to-b from-[#FAF6F3] from-50% to-transparent">
      <nav
        className={`flex items-center justify-between w-full p-4 pb-16 md:px-8 lg:px-16 xl:px-32 ${
          navOpen
            ? "bg-[#FAF6F3] backdrop-blur-md bg-opacity-25 dark:bg-opacity-25"
            : ""
        }`}>
        {/* Nav Desktop */}

        <Link href="/" className="flex items-center justify-center">
          <LogoRk className="size-8 text-fg-1 hover:text-bg-3 transition-all ease-in-out" />
        </Link>

        <ul className="items-center justify-center hidden gap-4 lg:flex md:text-sm lg:text-base">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center text-fg-1 text-opacity-75 hover:text-fg-2 hover:text-opacity-100">
              <GhostButton href={item.href} label={item.label} />
            </li>
          ))}

          <PrimaryButton
            href="mailto:hello@richardkovacs.fr"
            label="Mail me now !"
          />
        </ul>

        {/* Nav Mobile */}

        <button
          className="border border-[#111] dark:border-[#aaa] text-3xl lg:hidden"
          onClick={() => handleNavOpen()}>
          {navOpen ? <Cross /> : <Burger />}
        </button>
      </nav>

      {navOpen && (
        <nav className="flex w-full h-full lg:hidden bg-[#FAF6F3] dark:bg-[#111] backdrop-blur-md bg-opacity-25 dark:bg-opacity-25 z-50 text-lg py-4">
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
    </motion.header>
  );
}
