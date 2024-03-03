import Image from "next/image";
import { Project } from "@/app/lib/definitions";
import EmblaCarousel from "../project-carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = {};

const ProjectCard: React.FC<Project> = ({
  projectName,
  description,
  image,
  techStack,
  github,
}) => {
  const SLIDES: string[] = [image, image, image];

  return (
    <div className="relative">
      <div className="rounded-lg shadow-lg p-3 border border-gray-300 mb-4 transition-transform hover:-translate-y-2 transition-shadow hover:shadow-2xl">
        {/* <div className="relative aspect-w-4 aspect-h-1">
          <Image src={image} alt={projectName} width={400} height={500} />
        </div> */}
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xl font-bold">{projectName}</h3>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/github-black.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
        </a>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <ul className="mt-2">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="inline-block mr-2 mb-2 px-2 py-1 bg-opacity-15 bg-gray-700 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
