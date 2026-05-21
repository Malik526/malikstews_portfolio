import { experience } from "../../data/experience";
import SectionHeading from "../ui/SectionHeading";

const OperationalExperience = () => {
  return (
    <section className="border-b border-line bg-white/[0.02] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Operational Experience"
          title="Real-time execution in high-standard service environments."
          description="Luxury hospitality taught me the human side of operations: communication, discretion, stakeholder coordination, and calm execution when timing matters."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {experience.map((entry) => (
            <article key={entry.company} className="rounded-lg border border-line bg-panel/75 p-5">
              <h3 className="text-2xl font-semibold tracking-tight text-white">{entry.company}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{entry.environment}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {entry.themes.map((theme) => (
                  <span key={theme} className="rounded-md border border-line bg-ink/70 px-2.5 py-1 text-xs text-slate-400">
                    {theme}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-md border border-line bg-ink/60 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">What I learned</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">{entry.learned}</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
          These environments included moments serving former presidents, world-class athletes, and high-profile entertainers. The emphasis is professional trust, discretion, and execution quality.
        </p>
      </div>
    </section>
  );
};

export default OperationalExperience;
