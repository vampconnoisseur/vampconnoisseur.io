import React from "react";
import { PlayfairDisplayRegular, PlayfairDisplayHeading } from "../lib/fonts";

function Hero() {
  return (
    <div className="text-center max-w-[980px] mx-auto pt-20">
      <h1
        className={`${PlayfairDisplayRegular.className} text-2xl mt-14 animate-fade-in-short`}
      >
        Hey, I&apos;m Jaiditya.
      </h1>
      <h1
        className={`${PlayfairDisplayRegular.className} text-7xl font-bold mb-8 mt-10 animate-fade-in-long`}
      >
        I enjoy{" "}
        <span className={`${PlayfairDisplayHeading.className} text-black`}>
          Building
        </span>{" "}
        and{" "}
        <span className={`${PlayfairDisplayHeading.className} text-black`}>
          Designing
        </span>{" "}
        Full Stack apps.
      </h1>
    </div>
  );
}

export default Hero;
