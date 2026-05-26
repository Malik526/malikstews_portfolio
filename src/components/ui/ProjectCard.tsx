/**
 * ProjectCard.tsx
 * Displays a single portfolio project with category label, image, title, and description.
 * Props: category, title, description, image (src url)
 * Hover: image scales up via group class. Fully self-contained.
 */

import React from "react";
import type { Project } from "../../lib/content";

type ProjectCardProps = Project;

// Renders one card in the project grid
const ProjectCard: React.FC<ProjectCardProps> = ({
  category,
  title,
  description,
  image,
}) => {
  return (
    <div className="group cursor-pointer">
      {/* --- Image container with hover zoom --- */}
      <div className="aspect-square bg-surface-container mb-4 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* --- Text --- */}
      <span className="font-label-mono text-label-mono text-secondary uppercase">
        {category}
      </span>
      <h5 className="font-headline-md text-primary mt-1">{title}</h5>
      <p className="font-body-md text-on-surface-variant mt-2 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
