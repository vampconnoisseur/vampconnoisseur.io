import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Skills from "./ui/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects limit={3} />
      <Skills />
    </main>
  );
}
