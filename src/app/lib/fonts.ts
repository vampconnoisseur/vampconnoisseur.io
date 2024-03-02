import { JetBrains_Mono } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";

export const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100"],
  style: "normal",
});

export const BeVietnamProRegular = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["200"],
});

export const BeVietnamProBold = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["700"],
});
