import { ButtonLink } from "../ui/Button";

const Hero = () => {
  return (
    <section className="grid-surface relative flex min-h-screen items-center overflow-hidden border-b border-line pt-16">
      <div className="mx-auto w-full max-w-6xl px-4 py-20">
        <div className="max-w-5xl">
          <p className="inline-flex rounded-md border border-line bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
            Analytics · Automation · Operational Infrastructure
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Systems Builder Focused on Analytics, Automation & Operational Infrastructure
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            I build tools, workflows, and decision systems that turn operational friction into cleaner execution: stronger lead capture, better automation, clearer analytics, and systems that help people do the next right thing.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink to="/projects">View Projects</ButtonLink>
            <ButtonLink to="/about" variant="secondary">About Me</ButtonLink>
            <ButtonLink to="/contact" variant="secondary">Contact</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
