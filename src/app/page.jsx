import { ContactSection } from "@/components/ContactSection";
import { ExpSection } from "@/components/ExpSection";
import { HomeSection } from "@/components/HomeSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";

const Home = () => {
  return (
    <main className="flex flex-col gap-32 mb-64">
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ExpSection />
      <ContactSection />
    </main>
  );
};

export default Home;
