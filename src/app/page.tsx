import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Skills from "./ui/skills/Skills";
import SideNavigator from "./ui/side-navigator";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <SideNavigator sections={3} />
    </main>
  );
}
