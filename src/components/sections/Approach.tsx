import SectionHeading from "../ui/SectionHeading";

const principles = [
  ["Start with the operating problem", "Find the repeated friction: missed follow-ups, manual steps, weak visibility, unclear ownership, or inconsistent decisions."],
  ["Turn workflow into structure", "Create a data model, repeatable process, or lightweight tool that makes the next action obvious."],
  ["Automate after the logic is clear", "Automation works best when the rules, exceptions, and handoff points are understood first."],
  ["Use analytics to improve judgment", "Dashboards and models should help someone decide, prioritize, or explain tradeoffs."],
];

const Approach = () => {
  return (
    <section className="border-b border-line py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          eyebrow="Approach"
          title="Implementation over theory. Leverage over busywork."
          description="I build practical systems that make operations cleaner: fewer repeated decisions, stronger follow-through, clearer data, and better communication between people and tools."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-line bg-panel/75 p-5">
              <h3 className="text-lg font-semibold tracking-tight text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
