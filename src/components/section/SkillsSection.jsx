import { Photoshop } from "@/components/icones/AdobePh";
import { AdobeXd } from "@/components/icones/AdobeXd";
import { Adonis } from "@/components/icones/Adonis";
import { Figma } from "@/components/icones/Figma";
import { Github } from "@/components/icones/Github";
import { Mongo } from "@/components/icones/Mongo";
import { Node } from "@/components/icones/Node";
import { Postgresal } from "@/components/icones/Postgresql";
import { React } from "@/components/icones/React";
import { Tailwindcss } from "@/components/icones/Tailwindcss";
import { Typescript } from "@/components/icones/Typescript";
import { Vercel } from "@/components/icones/Vercel";
import { Vue } from "@/components/icones/Vue";

export const SkillsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-16 min-h-screen" id="skills">
      <h2 className="text-2xl lg:text-3xl w-full">
        {"->"} 1. <span className="font-bold">Skills</span> :
      </h2>
      <div className="flex flex-col items-center justify-center grid-cols-2 grid-rows-2 gap-16 text-xl lg:grid w-full">
        <div className="flex flex-col gap-6 mx-auto w-fit">
          <h3 className="text-2xl font-bold text-center">Front-end</h3>
          <ul>
            <Li icon={<Typescript />} label="Typescript" />
            <Li icon={<React />} label="React (Next.js)" />
            <Li icon={<Vue />} label="Vue (Nuxt)" />
            <Li icon={<Tailwindcss />} label="Tailwind CSS" />
          </ul>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-fit">
          <h3 className="text-2xl font-bold text-center">Back-end</h3>
          <ul>
            <Li icon={<Node />} label="Node.js" />
            <Li icon={<Adonis />} label="Adonis.js" />
            <Li icon={<Postgresal />} label="PostgreSQL" />
            <Li icon={<Mongo />} label="MongoDB" />
          </ul>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-fit">
          <h3 className="text-2xl font-bold text-center">Design</h3>
          <ul>
            <Li icon={<AdobeXd />} label="Adobe XD" />
            <Li icon={<Photoshop />} label="Photoshop" />
            <Li icon={<Figma />} label="Figma" />
          </ul>
        </div>
        <div className="flex flex-col gap-6 mx-auto w-fit">
          <h3 className="text-2xl font-bold text-center">Other</h3>
          <ul className="text-center">
            <Li icon={<Github />} label="Git & Github" />
            <Li icon={<Vercel />} label="Vercel" />
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Li = ({ icon, label }) => {
  return (
    <li className="flex items-center justify-start gap-6">
      {icon}
      {label}
    </li>
  );
};
