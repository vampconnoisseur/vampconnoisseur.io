import Image from "next/image";
import { Project } from "@/app/lib/definitions";

const ProjectCard: React.FC<Project> = ({
  projectName,
  description,
  image,
  techStack,
  github,
}) => {
  return (
    <div className="relative">
      <div className="rounded-lg shadow-md p-3 border border-gray-300 mb-4 transition-transform hover:-translate-y-2">
        <div className="relative aspect-w-4 aspect-h-1">
          <Image
            src={image}
            alt={projectName}
            width={400}
            height={200}
            className="filter brightness-100 hover:brightness-50"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-xl font-bold">{projectName}</h3>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Image
            src="/icons/github.svg"
            width={16}
            height={16}
            alt="Github Icon"
          />
        </a>
      </div>
      <p className="text-sm text-gray-500 mb-4">{description}</p>
      <ul className="mt-2">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="inline-block mr-2 px-2 py-1 bg-white bg-opacity-15 rounded"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
