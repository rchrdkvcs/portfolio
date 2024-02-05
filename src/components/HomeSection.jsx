import { ContactButton } from "@/components/ContactButton";
import { Attach } from "@/components/icones/Attach";
import { Discord } from "@/components/icones/Discord";
import { Email } from "@/components/icones/Email";
import { Github } from "@/components/icones/Github";
import { Linkedin } from "@/components/icones/Linkedin";
import { Twitter } from "@/components/icones/Twitter";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <section
      className="grid items-start justify-start grid-cols-3 mt-32 scroll-mt-24"
      id="home">
      <div className="flex flex-col col-span-2 gap-2">
        <p>Hey There ! {"I'm"} - </p>
        <h2 className="flex flex-col gap-0">
          <span className="font-bold text-7xl">Richard</span>
          <span className="font-bold text-9xl text-primary">Kovacs</span>
        </h2>
        <p>
          {"I'm"} a Full-Stack Junior Developer, with a passion for building
          applications and websites.
        </p>
      </div>
      <div>
        <Image
          src="/images/photo.png"
          alt="Photo de Richard Kovacs"
          width={2048}
          height={2048}
          priority
          className="w-auto h-auto transition-all duration-300 ease-in-out rounded-full filter grayscale hover:filter-none hover:scale-110 hover:rotate-12 hover:shadow-2xl"
        />
      </div>
      <div className="flex flex-wrap col-span-2 gap-2">
        <ContactButton
          href="https://github.com/b34roff"
          icon={<Github />}
          label="Github"
        />
        <ContactButton
          href="https://twitter.com/b34r_rk"
          icon={<Twitter />}
          label="Twitter"
        />
        <ContactButton
          href="https://www.linkedin.com/in/richard-kovacs-dev-web/"
          icon={<Linkedin />}
          label="Linkedin"
        />
        <ContactButton
          href="mailto:kovacs.richard@outlook.be"
          icon={<Email />}
          label="kovacs.richard@outlook.be"
        />
        <ContactButton href="" icon={<Discord />} label="Discord" />
        <ContactButton
          download
          href="/CV_KOVACS_Richard_DEV.pdf"
          icon={<Attach />}
          label="Resume"
        />
      </div>
    </section>
  );
};
