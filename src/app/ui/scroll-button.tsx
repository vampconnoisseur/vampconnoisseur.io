"use client";

import { Link as ScrollLink } from "react-scroll";
import { BeVietnamProRegular } from "../lib/fonts";

export default function ScrollButton() {
  return (
    <div className="max-w-[300px] pt-24">
      <ScrollLink
        activeClass="section-0"
        to="section-1"
        spy={true}
        smooth={true}
        duration={500}
      >
        <div
          className={`${BeVietnamProRegular.className} cursor-pointer font-bold whitespace-nowrap px-10 py-4 border-2 text-xl rounded-full bg-bg transition-colors hover:bg-black hover:text-white border-black`}
        >
          Tell me more
        </div>
      </ScrollLink>
    </div>
  );
}
