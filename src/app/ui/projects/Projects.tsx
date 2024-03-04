import ProjectCard from "./ProjectCard";
import { Project } from "../../lib/definitions";
import { fetchProjects } from "@/app/lib/data";

export default async function Projects({
  limit,
  addHeading = true,
}: {
  limit?: number;
  addHeading?: boolean;
}) {
  const projectsData = await fetchProjects();

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
            projectname={project.projectname}
            description={project.description}
            images={project.images}
            techstack={project.techstack}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}
