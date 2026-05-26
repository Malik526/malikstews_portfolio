/**
 * Hero.tsx
 * Full-width hero section: text left, photo right (12-column grid).
 * Features: parallax scroll effect on photo, grayscale-to-color hover on image.
 * Badge replaced with "CS & Business Graduate · Charleston Southern University".
 * Spacing reduced ~35% from Stitch original per spec.
 */

import React, { useEffect, useRef } from "react";
import { hero } from "../../lib/content";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLImageElement>(null);

  // Parallax: shifts the hero image slightly upward as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${window.pageYOffset * 0.05}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="max-w-max-width mx-auto px-margin-desktop mb-12 lg:mb-20">
      <div className="grid lg:grid-cols-12 gap-12 items-center">

        {/* --- Left column: text --- */}
        <div className="lg:col-span-7">
          <span className="font-label-mono text-label-mono uppercase tracking-widest text-secondary mb-4 block">
            {hero.label}
          </span>

          <h1 className="font-display-hero text-[56px] lg:text-display-hero text-primary leading-tight mb-5">
            {hero.name}
          </h1>

          <h2 className="font-headline-lg text-secondary mb-4">
            {hero.title}
          </h2>

          <p className="font-body-lg text-on-surface-variant max-w-xl mb-7 leading-relaxed">
            {hero.bio}
          </p>

          {/* --- CTA buttons --- */}
          <div className="flex flex-wrap gap-4">
            <Button
              label={hero.cta1.label}
              href={hero.cta1.href}
              variant="primary"
              icon="arrow_forward"
            />
            <Button
              label={hero.cta2.label}
              href={hero.cta2.href}
              variant="outline"
            />
          </div>
        </div>

        {/* --- Right column: photo + badge --- */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden soft-shadow">
            <img
              ref={imgRef}
              src="/assets/images/profile/malik_profile_web.webp"
              alt="Malik Stewart — Systems Builder & AI Automation Specialist"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Badge: replaced 142+ with education credential */}
          <div className="absolute -bottom-4 -left-4 bg-secondary-container p-4 rounded-lg hidden lg:block max-w-[220px]">
            <p className="font-label-mono text-on-secondary-container text-[11px] leading-snug">
              {hero.badge}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
