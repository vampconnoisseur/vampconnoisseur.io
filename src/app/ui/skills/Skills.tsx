import Image from "next/image";
import { skills } from "../../lib/placeholder-data";
import { BeVietnamProRegular, PlayfairDisplayMedium } from "@/app/lib/fonts";

export default function Skills() {
  return (
    <section className="pt-40 pb-20" id="section-2">
      <div className="flex items-center mb-12 text-center px-6">
        <hr className="flex-grow border-t border-black border-solid" />
        <h2 className="text-xl md:text-3xl font-bold mx-4">My Toolbelt</h2>
        <hr className="flex-grow border-t border-black border-solid" />
      </div>

      <div className="md:flex justify-between px-4 items-center">
        <div className="flex flex-col md:items-start mb-28">
          <h2
            className={`${PlayfairDisplayMedium.className} text-center md:text-left text-4xl font-bold mb-6`}
          >
            I got the experience.
          </h2>
          <h2
            className={`${PlayfairDisplayMedium.className} text-center md:text-left text-4xl font-bold`}
          >
            Here is my toolbelt for success.
          </h2>
        </div>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mb-6">
              <Image
                src={skill.icon}
                alt={skill.title}
                width={16}
                height={16}
                className={"w-12 h-12 mb-2"}
              />
              <p className={`${BeVietnamProRegular.className} text-sm`}>
                {skill.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
