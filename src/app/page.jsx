import { ContactSection } from "@/components/section/ContactSection";
import { ExpSection } from "@/components/section/ExpSection";
import { HomeSection } from "@/components/section/HomeSection";
import { ProjectsSection } from "@/components/section/ProjectsSection";
import { SkillsSection } from "@/components/section/SkillsSection";

const Home = () => {
  return (
    <main className="flex flex-col w-full gap-16 md:gap-8 lg:gap-0">
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExpSection />
      <ContactSection />
    </main>
  );
};

export default Home;
