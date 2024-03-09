"use client";

import { useEffect, useState } from "react";

const SideNavigator: React.FC<{
  sections: number;
}> = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionElements = Array.from(
        document.querySelectorAll("main > section")
      );

      let cumulativeHeight = 0;
      let currentSection = 0;

      sectionElements.some((sectionElement, index) => {
        const element = sectionElement as HTMLElement;
        cumulativeHeight += element.offsetHeight;

        if (cumulativeHeight > scrollPosition) {
          currentSection = index;
          return true;
        }

        return false;
      });

      setCurrentSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sectionNumbers: number[] = [];
  for (let i = 0; i < sections; i++) {
    sectionNumbers.push(i);
  }

  const handleMenuItemClick = (index: number) => {
    const sectionElement = document.getElementById(`section-${index}`);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="side-navigator hidden md:block lg:block">
      <div className="flex flex-col justify-center">
        {sectionNumbers.map((section) => (
          <a
            key={section}
            className={currentSection === section ? "active" : ""}
            onClick={() => handleMenuItemClick(section)}
          >
            <span className="indicator"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideNavigator;
