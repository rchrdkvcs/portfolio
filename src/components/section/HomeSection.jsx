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
      className="flex flex-col items-center justify-center w-full min-h-screen gap-4 md:grid md:grid-cols-3 scroll-mt-24"
      id="home">
      <h1 className="flex flex-col col-span-2 gap-2 text-sm md:text-base">
        Hey There ! {"I'm"} -
        <span className="text-4xl font-bold md:text-7xl">Richard</span>
        <span className="text-6xl font-bold md:text-9xl text-primary">
          Kovacs
        </span>
        {"I'm"} a Full-Stack Junior Developer, with a passion for building
        applications and websites.
      </h1>
      <div>
        <Image
          src="/images/photo.png"
          alt="Photo de Richard Kovacs"
          width={2048}
          height={2048}
          priority
          className="w-auto h-auto rounded-3xl md:w-full md:h-full md:object-cover md:object-center"
        />
      </div>
      <div className="flex flex-wrap items-center justify-start col-span-3 gap-4 lg:justify-center">
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
          href="mailto:contact@b34r.fr"
          icon={<Email />}
          label="contact@b34r.fr"
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
