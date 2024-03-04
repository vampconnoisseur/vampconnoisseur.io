import { Suspense } from "react";
import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Skills from "./ui/skills/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Suspense
        fallback={
          <h1 className="text-center mt-40 text-3xl">Loading Projects...</h1>
        }
      >
        <Projects limit={3} />
      </Suspense>
      <Skills />
    </main>
  );
}
