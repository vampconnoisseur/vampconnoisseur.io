import Hero from "./ui/Hero";
import Skills from "./ui/skills/Skills";
import { CardsSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="mt-40 mb-20" id="section-1">
        <div className="flex items-center mb-12 text-center px-6">
          <hr className="flex-grow border-t border-black border-solid" />
          <h2 className="text-xl md:text-3xl font-bold mx-4">
            All of my projects
          </h2>
          <hr className="flex-grow border-t border-black border-solid" />
        </div>
        <CardsSkeleton />
      </section>
      <Skills />
    </main>
  );
}
