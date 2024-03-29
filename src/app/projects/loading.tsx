import { CardsSkeleton } from "../ui/skeletons";
import { PlayfairDisplayMedium, PlayfairDisplayHeading } from "../lib/fonts";

export default async function Projects() {
  return (
    <main>
      <section className="mb-40">
        <h1
          className={`${PlayfairDisplayMedium.className} text-7xl font-bold text-center mt-16 pt-20 animate-fade-in-short`}
        >
          My Projects
        </h1>
        <p
          className={`${PlayfairDisplayHeading.className} text-xl sm:text-2xl max-w-3xl m-auto mt-10 text-center animate-fade-in-long`}
        >
          I&apos;ve built cool apps and websites using anything from HTML to
          Next (and even Flutter!). Here are some of my favorite projects over
          the course of my journey.
        </p>
      </section>
      <CardsSkeleton />
    </main>
  );
}
