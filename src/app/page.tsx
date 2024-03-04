import { Suspense } from "react";
import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Skills from "./ui/skills/Skills";
import { CardsSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
    </main>
  );
}
