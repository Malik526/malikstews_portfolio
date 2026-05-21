import { ButtonLink } from "../ui/Button";

const ContactCta = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-lg border border-line bg-panel/80 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">Contact</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s talk about systems, automation, analytics, or operational infrastructure.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            I’m interested in work where business problems, workflow design, and practical technical execution meet.
          </p>
          <div className="mt-6">
            <ButtonLink to="/contact">Start a Conversation</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCta;
