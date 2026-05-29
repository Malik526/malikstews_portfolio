/**
 * FeaturedProjectsSection.tsx
 * Phase 1 scaffold for video-led featured projects.
 *
 * Project metadata is managed in src/data/featuredProjects.ts.
 * Future video files belong in public/videos/featured/{project-slug}/demo.mp4.
 * Future phone frame assets belong in public/images/frames/.
 */

import React from "react";
import { featuredProjects } from "../../data/featuredProjects";
import FeaturedProject from "../ui/FeaturedProject";

const FeaturedProjectsSection: React.FC = () => {
  return (
    <div className="space-y-0">
      {featuredProjects.map((project, index) => (
        <FeaturedProject key={project.slug} {...project} index={index} />
      ))}
    </div>
  );
};

export default FeaturedProjectsSection;
