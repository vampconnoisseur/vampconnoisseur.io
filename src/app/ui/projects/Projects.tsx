import ProjectCard from "./ProjectCard";
import { projectsData } from "../../lib/placeholder-data";
import { Project } from "../../lib/definitions";

export default function Projects() {
  return (
    <section className="mt-40 mb-20">
      <div className="text-left flex items-center mb-12">
        <h2 className="text-3xl font-bold mr-4">Some of my projects</h2>
        <hr className="flex-grow border-t border-gray-300 border-solid border-2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard
            key={index}
            projectName={project.projectName}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
