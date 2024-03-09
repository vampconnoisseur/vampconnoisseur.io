import { PlayfairDisplayHeading, PlayfairDisplayMedium } from "../lib/fonts";
import ScrollButton from "./scroll-button";

export default function Hero() {
  return (
    <section
      className="text-center max-w-[980px] md:mx-auto pt-20 pb-40 flex flex-col items-center"
      id="section-0"
    >
      <h1
        className={`${PlayfairDisplayHeading.className} text-2xl mt-14 animate-fade-in-short`}
      >
        Hey, I&apos;m Jaiditya.
      </h1>
      <h1
        className={`${PlayfairDisplayHeading.className} text-5xl md:text-7xl mb-8 mt-10 animate-fade-in-long`}
      >
        I enjoy{" "}
        <span className={`${PlayfairDisplayMedium.className}`}>Building</span>{" "}
        and{" "}
        <span className={`${PlayfairDisplayMedium.className}`}>Designing</span>{" "}
        Full Stack apps.
      </h1>
      <ScrollButton />
    </section>
  );
}
