import { featuredProjects } from "../../data/projects";
import ProjectCard from "../project/ProjectCard";
import SectionHeading from "../ui/SectionHeading";

const FeaturedProjects = () => {
  return (
    <section className="border-b border-line bg-white/[0.02] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Operational systems, automation tools, and analytics-driven case studies."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} large />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
