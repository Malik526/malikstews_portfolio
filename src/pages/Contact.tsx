import { FormEvent, useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/Button";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <section className="grid-surface border-b border-line pt-28">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-signal">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Let’s talk systems.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-400">
            Use this placeholder form while the portfolio is local. It can be connected to an inbox or backend later.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-[1.4fr_.8fr]">
          <form onSubmit={handleSubmit} className="grid gap-5 rounded-lg border border-line bg-panel/75 p-5">
            <label className="grid gap-2 text-sm font-medium text-white">
              Name
              <input className="rounded-md border border-line bg-ink px-3 py-3 text-slate-100 outline-none focus:border-signal" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Email
              <input type="email" className="rounded-md border border-line bg-ink px-3 py-3 text-slate-100 outline-none focus:border-signal" required />
            </label>
            <label className="grid gap-2 text-sm font-medium text-white">
              Message
              <textarea className="min-h-36 rounded-md border border-line bg-ink px-3 py-3 text-slate-100 outline-none focus:border-signal" required />
            </label>
            <Button type="submit">Send Message</Button>
            {sent ? <p className="text-sm text-signal">Message captured locally. Backend connection can come later.</p> : null}
          </form>

          <aside className="rounded-lg border border-line bg-panel/75 p-5">
            <h2 className="text-xl font-semibold text-white">Useful context</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Good conversations for this portfolio: automation workflows, service-business operations, analytics projects, internal tools, and product systems.
            </p>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
