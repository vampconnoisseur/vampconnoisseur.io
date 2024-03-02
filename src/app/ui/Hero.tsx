import React from "react";
import { JetBrainsMono, BeVietnamProBold } from "../lib/fonts";

function Hero() {
  return (
    <div className="text-center max-w-[980px] mx-auto">
      <h1
        className={`${JetBrainsMono.className} text-2xl mt-14 animate-fade-in-short`}
      >
        Hey, I&apos;m Jaiditya.
      </h1>
      <h1
        className={`${BeVietnamProBold.className} text-7xl font-bold mb-8 mt-10 animate-fade-in-long`}
      >
        I enjoy <span className="text-gray-700">building</span> and{" "}
        <span className="text-gray-700">designing</span> Full Stack apps.
      </h1>
    </div>
  );
}

export default Hero;
