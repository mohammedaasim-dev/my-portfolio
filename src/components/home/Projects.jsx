import projects from "../../data/projects";
import ProjectCard from "../common/ProjectCard";
import FadeIn from "../common/FadeIn";

export default function Projects() {
  return (
    <FadeIn>
      <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Projects
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Some projects I've built using AI, Web Development, and Cloud technologies.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>
    </section>
    </FadeIn>
  );
}