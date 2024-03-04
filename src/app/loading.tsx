import { Suspense } from "react";
import Hero from "./ui/Hero";
import Projects from "./ui/projects/Projects";
import Skills from "./ui/skills/Skills";
import { CardsSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-40 mb-20">
        <div className="flex items-center mb-12 text-center">
          <hr className="flex-grow border-t border-black border-solid" />
          <h2 className="text-3xl font-bold mx-4">Some of my projects</h2>
          <hr className="flex-grow border-t border-black border-solid" />
        </div>
        <CardsSkeleton />
      </section>
      <Skills />
    </main>
  );
}
