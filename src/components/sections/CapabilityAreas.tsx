import { categories, projects } from "../../data/projects";
import SectionHeading from "../ui/SectionHeading";

const CapabilityAreas = () => {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Capability Areas"
          title="Work organized by the systems it creates."
          description="This portfolio is structured around operational value, not isolated coding exercises."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {categories.map((category) => (
            <article key={category.title} className="rounded-lg border border-line bg-panel/75 p-5">
              <h3 className="text-xl font-semibold tracking-tight text-white">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.signals.map((signal) => (
                  <span key={signal} className="rounded-md border border-line bg-ink/70 px-2.5 py-1 text-xs text-slate-400">
                    {signal}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-line pt-5">
                {projects
                  .filter((project) => project.category === category.title)
                  .slice(0, 4)
                  .map((project) => (
                    <div key={project.slug} className="flex items-center justify-between gap-3 py-1 text-sm">
                      <span className="text-slate-200">{project.title}</span>
                      <span className="shrink-0 text-xs text-slate-500">{project.status}</span>
                    </div>
                  ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityAreas;
