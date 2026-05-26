/**
 * ContactCta.tsx
 * Full-width centered contact section with large headline, email link, and social links.
 * Spacing: py-16 lg:py-24 (reduced from py-32 lg:py-60 per spec).
 * Links: LinkedIn and GitHub only (Twitter and Dribbble removed per spec).
 */

import React from "react";
import { contact } from "../../lib/content";

const ContactCta: React.FC = () => {
  return (
    <section className="py-16 lg:py-24" id="contact">
      <div className="max-w-max-width mx-auto px-margin-desktop text-center">

        {/* --- Label --- */}
        <span className="font-label-mono text-label-mono text-secondary mb-4 block">
          {contact.label}
        </span>

        {/* --- Headline --- */}
        <h2 className="font-display-hero text-display-hero text-primary mb-6 text-[48px] lg:text-display-hero">
          {contact.heading}
        </h2>

        {/* --- Body copy --- */}
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
          {contact.body}
        </p>

        {/* --- Email + social links --- */}
        <div className="flex flex-col items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="font-display-hero text-headline-lg text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-4 underline-offset-8"
          >
            {contact.email}
          </a>

          <div className="flex gap-8 mt-4">
            {contact.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-label-mono text-secondary hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCta;
