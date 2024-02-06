import { ContactButton } from "@/components/ContactButton";
import { Attach } from "@/components/icones/Attach";
import { Discord } from "@/components/icones/Discord";
import { Email } from "@/components/icones/Email";
import { Github } from "@/components/icones/Github";
import { Linkedin } from "@/components/icones/Linkedin";
import { Twitter } from "@/components/icones/Twitter";

export const ContactSection = () => {
  return (
    <section className="flex flex-col w-full gap-16 scroll-mt-24" id="contact">
      <h2 className="text-2xl lg:text-3xl">
        {"->"} 3. <span className="font-bold">Contact</span> :
      </h2>
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <p>Feel free to contact me by email or through my social networks.</p>
        <div className="flex flex-wrap items-center w-full gap-4 justify-left md:justify-center">
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
      </div>
    </section>
  );
};
