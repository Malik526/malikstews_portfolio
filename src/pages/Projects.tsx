import Layout from "../components/layout/Layout";
import ProjectCard from "../components/project/ProjectCard";
import { categories, projects } from "../data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="grid-surface border-b border-line pt-28">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">Projects</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Systems index.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Internal tools, client-facing operational systems, and analytics projects organized by the business problem they solve.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-12 px-4">
          {categories.map((category) => (
            <div key={category.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-white">{category.title}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{category.description}</p>
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((project) => project.category === category.title)
                  .map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
