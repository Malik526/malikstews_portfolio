import { Link } from "react-router-dom";
import { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
  large?: boolean;
};

const ProjectCard = ({ project, large = false }: ProjectCardProps) => {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-line bg-panel/80 p-5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-signal/50">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">{project.status}</span>
        <span className="text-right text-xs text-slate-500">{project.category}</span>
      </div>

      <h3 className={`${large ? "text-2xl" : "text-xl"} font-semibold tracking-tight text-white`}>{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.slice(0, large ? 5 : 3).map((tool) => (
          <span key={tool} className="rounded-md border border-line bg-ink/70 px-2.5 py-1 text-xs text-slate-400">
            {tool}
          </span>
        ))}
      </div>

      <Link
        to={`/projects/${project.slug}`}
        className="mt-auto pt-6 text-sm font-semibold text-signal transition group-hover:text-cyan-200"
      >
        View project system →
      </Link>
    </article>
  );
};

export default ProjectCard;
