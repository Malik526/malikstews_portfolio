import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout>
      <section className="grid-surface border-b border-line pt-28">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">About</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            I build systems that solve business problems.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            My work sits at the intersection of analytics, automation, product thinking, and operational execution. I care about turning messy workflows into tools and structures that make action clearer.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 md:grid-cols-3">
          {[
            ["Systems Thinking", "Breaking workflows into inputs, rules, handoffs, feedback, and measurable outcomes."],
            ["Business Reasoning", "Connecting technical work to acquisition, operations, ROI, service quality, and decision support."],
            ["Communication", "Explaining tradeoffs clearly so technical and non-technical stakeholders can act."],
          ].map(([title, body]) => (
            <article key={title} className="rounded-lg border border-line bg-panel/75 p-5">
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
