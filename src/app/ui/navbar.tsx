"use client";

import { useEffect, useState } from "react";
import { PlayfairDisplayHeading, BeVietnamProRegular } from "../lib/fonts";
import Link from "next/link";

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-10 py-4 px-6 bg-white opacity-90 shadow transition-transform duration-300 ${
        visible ? "" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link href="/">
            <h1 className={`${PlayfairDisplayHeading.className}`}>
              vampconnoisseur.
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <NavLink href="/" title="HOME" />
          <NavLink href="/projects" title="PROJECTS" />
        </div>
      </div>
    </nav>
  );
}

const NavLink: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  return (
    <Link
      href={href}
      className={`${BeVietnamProRegular.className} hover:bg-gray-300 px-3 py-2 text-sm font-medium`}
    >
      {title}
    </Link>
  );
};
