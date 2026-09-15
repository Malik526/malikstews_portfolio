/**
 * FreeStuffResources.tsx
 * Renders every entry in resources.ts as a ResourceCard. Adding a resource
 * to that list is enough to make it appear here — no other changes needed.
 * Props: none.
 */

import React from "react";
import { ResourceCard } from "../ui";
import { resources } from "../../lib/resources";

const FreeStuffResources: React.FC = () => {
  return (
    <section className="px-margin-desktop pb-24">
      <div className="max-w-max-width mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            name={resource.name}
            description={resource.description}
            href={resource.href}
            ctaLabel={resource.ctaLabel}
          />
        ))}
      </div>
    </section>
  );
};

export default FreeStuffResources;
