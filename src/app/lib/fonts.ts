import {
  JetBrains_Mono,
  Playfair_Display,
  Be_Vietnam_Pro,
} from "next/font/google";

export const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300"],
  style: "normal",
});

export const BeVietnamProRegular = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400"],
});

export const PlayfairDisplayRegular = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
});

export const PlayfairDisplayMedium = Playfair_Display({
  subsets: ["latin"],
  weight: ["500"],
});

export const PlayfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  weight: ["800"],
});

export const BeVietnamProBold = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["700"],
});
