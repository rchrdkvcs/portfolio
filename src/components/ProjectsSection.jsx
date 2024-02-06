import { Figma } from "@/components/icones/Figma";
import { Framer } from "@/components/icones/Framer";
import { NextJs } from "@/components/icones/Next";
import { Open } from "@/components/icones/Open";
import { Postgresal } from "@/components/icones/Postgresql";
import { React } from "@/components/icones/React";
import { Tailwindcss } from "@/components/icones/Tailwindcss";
import Link from "next/link";

export const ProjectsSection = () => {
  return (
    <section className="flex flex-col w-full gap-16 scroll-mt-24" id="projects">
      <h2 className="text-2xl lg:text-3xl">
        {"->"} 2. <span className="font-bold">Projects</span> :
      </h2>
      <div className="flex flex-col items-start justify-center grid-cols-3 gap-8 mt-8 lg:grid">
        <ProjectElement
          href="https://fivestars.b34r.fr"
          name="FiveStars"
          desc="A simple showcase website for a GTA 5 RolePlay game server, featuring a clean and modern design. In the future, I am going to implement more functionality to create a questionnaire for Whitelist.">
          <ProjectTags icon={<NextJs />} label="Next.Js" />
          <ProjectTags icon={<Tailwindcss />} label="Tailwind CSS" />
          <ProjectTags icon={<Framer />} label="Framer Motion" />
        </ProjectElement>
        <ProjectElement
          href="https://pizza.b34r.fr"
          name="Krem Pizzéria"
          desc="Krem Pizzéria is a Hungarian restaurant for which I have created a presentation website with sections for 'About,' 'Menu,' and 'Contact.">
          <ProjectTags icon={<React />} label="React" />
          <ProjectTags icon={<NextJs />} label="Next.Js" />
          <ProjectTags icon={<Tailwindcss />} label="Tailwind CSS" />
          <ProjectTags icon={<Figma />} label="Figma" />
        </ProjectElement>
        <ProjectElement
          href="https://sapd.b34r.fr"
          name="SAPD"
          desc="A complex web application for a fictional police service, featuring patrol unit management, administrative panel, report writing, and many other functionalities. (In progress)">
          <ProjectTags icon={<NextJs />} label="Next.Js" />
          <ProjectTags icon={<Postgresal />} label="Postgre SQL" />
          <ProjectTags icon={<Tailwindcss />} label="Tailwind CSS" />
          <ProjectTags icon={<Framer />} label="Framer Motion" />
        </ProjectElement>
      </div>
    </section>
  );
};

export const ProjectElement = ({ href, name, desc, children }) => {
  return (
    <div className="flex flex-col gap-6 border border-[#111] dark:border-[#aaa] p-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl">{name}</h3>
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl transition duration-100 ease-in-out hover:dark:white-preset hover:dark-preset">
          <Open />
        </Link>
      </div>
      <p className="h-full">{desc}</p>
      <div className="flex flex-wrap items-center justify-start w-full gap-2">
        {children}
      </div>
    </div>
  );
};

export const ProjectTags = ({ icon, label }) => {
  return (
    <div className="flex items-center justify-center gap-2 px-2 py-1 text-xs rounded-full dark:white-preset dark-preset">
      <span className="text-sm">{icon}</span>
      {label}
    </div>
  );
};
