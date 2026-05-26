/**
 * FeaturedProjects.tsx
 * 3-column project grid on white background.
 * Uses ProjectCard UI component for each item.
 * Spacing: py-16 lg:py-20 (reduced from py-32 lg:py-40 per spec).
 */

import React from "react";
import { projects } from "../../lib/content";
import ProjectCard from "../ui/ProjectCard";

const FeaturedProjects: React.FC = () => {
  return (
    <section className="bg-white py-16 lg:py-20" id="work">
      <div className="max-w-max-width mx-auto px-margin-desktop">

        {/* --- Section header row --- */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h3 className="font-label-mono text-label-mono text-secondary mb-3">
              {projects.label}
            </h3>
            <p className="font-display-hero text-headline-lg text-primary">
              {projects.heading}
            </p>
          </div>

          {/* Explore portfolio CTA — arrow animates on hover */}
          <button className="text-primary font-body-md font-bold flex items-center gap-2 group max-md:hidden">
            Explore Portfolio{" "}
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>
        </div>

        {/* --- Project cards grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;
