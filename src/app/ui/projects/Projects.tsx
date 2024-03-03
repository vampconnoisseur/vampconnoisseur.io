import ProjectCard from "./ProjectCard";
import { projectsData } from "../../lib/placeholder-data";
import { Project } from "../../lib/definitions";

export default function Projects({
  limit,
  addHeading = true,
}: {
  limit?: number;
  addHeading?: boolean;
}) {
  return (
    <section className="mt-40 mb-20">
      {addHeading && (
        <div className="flex items-center mb-12 text-center">
          <hr className="flex-grow border-t border-black border-solid" />
          <h2 className="text-3xl font-bold mx-4">Some of my projects</h2>
          <hr className="flex-grow border-t border-black border-solid" />
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projectsData.slice(0, limit).map((project: Project, index: number) => (
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
