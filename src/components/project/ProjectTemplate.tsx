import { Link } from "react-router-dom";
import { Project } from "../../data/projects";
import Layout from "../layout/Layout";

type ProjectTemplateProps = {
  project: Project;
};

const contentSections = [
  ["Problem / Opportunity", "problem"],
  ["Systems / Features Built", "systems"],
  ["Tools & Technologies Used", "tools"],
  ["Results / Outcomes", "outcomes"],
  ["Key Takeaways / What I Learned", "takeaways"],
] as const;

const ProjectTemplate = ({ project }: ProjectTemplateProps) => {
  return (
    <Layout>
      <section className="grid-surface border-b border-line pt-28">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Link to="/projects" className="text-sm text-slate-400 transition hover:text-white">
            ← Back to projects
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">{project.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">{project.summary}</p>
            </div>
            <aside className="rounded-lg border border-line bg-panel/80 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">Project Overview</p>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-semibold text-white">What it is</dt>
                  <dd className="mt-1 leading-6 text-slate-400">{project.overview}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Who it serves</dt>
                  <dd className="mt-1 leading-6 text-slate-400">{project.audience}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Status</dt>
                  <dd className="mt-1 leading-6 text-slate-400">{project.status}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-4">
          {contentSections.map(([title, key], index) => {
            const items = project[key];
            return (
              <section key={title} className="rounded-lg border border-line bg-panel/70 p-5 sm:p-7">
                <div className="grid gap-5 md:grid-cols-[220px_1fr]">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">{title}</h2>
                  </div>
                  <div className={key === "tools" ? "flex flex-wrap gap-2" : "grid gap-3"}>
                    {items.map((item) =>
                      key === "tools" ? (
                        <span key={item} className="rounded-md border border-line bg-ink/70 px-3 py-2 text-sm text-slate-300">
                          {item}
                        </span>
                      ) : (
                        <p key={item} className="rounded-md border border-line bg-ink/60 p-4 text-sm leading-6 text-slate-400">
                          {item}
                        </p>
                      ),
                    )}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;
