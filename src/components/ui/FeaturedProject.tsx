/**
 * FeaturedProject.tsx
 * Reusable structure for video-led project features.
 * Project metadata is managed in src/data/featuredProjects.ts.
 */

import React, { useRef } from "react";
import type { FeaturedProjectData } from "../../data/featuredProjects";

export interface FeaturedProjectProps extends FeaturedProjectData {
  index?: number;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  title,
  category,
  problem,
  solution,
  tech,
  outcome,
  videoSrc,
  slug,
  frame,
  index,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const projectNumber = typeof index === "number" ? String(index + 1).padStart(2, "0") : null;
  const details = [
    { label: "Problem", value: problem },
    { label: "Solution", value: solution },
    { label: "Tech", value: tech },
    { label: "Outcome", value: outcome },
  ];

  const openFullscreen = async () => {
    const video = videoRef.current;
    if (!video) return;

    const fullscreenVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };

    try {
      if (video.requestFullscreen) {
        await video.requestFullscreen();
        return;
      }

      if (fullscreenVideo.webkitEnterFullscreen) {
        fullscreenVideo.webkitEnterFullscreen();
      }
    } catch (error) {
      console.error("Unable to open project video fullscreen:", error);
    }
  };

  const fullscreenButton = (
    <button
      aria-label={`Open ${title} video fullscreen`}
      className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center bg-white/90 text-primary shadow-sm transition-colors hover:bg-white"
      onClick={openFullscreen}
      type="button"
    >
      <span className="material-symbols-outlined text-[20px]">fullscreen</span>
    </button>
  );

  return (
    <article className="grid gap-8 border-t border-surface-variant py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className={frame?.type === "phone" ? "relative flex justify-center bg-surface-variant py-6" : "relative aspect-video overflow-hidden bg-surface-variant"}>
        {frame?.type === "phone" ? (
          <div className="relative aspect-[9/19] w-full max-w-[280px] overflow-hidden rounded-[36px] bg-black">
            {/* FirstMove only: phone frame assets belong in public/images/frames/. */}
            <video
              ref={videoRef}
              className="absolute left-[7%] top-[2.5%] h-[95%] w-[86%] rounded-[28px] object-cover"
              controls
              playsInline
              preload="metadata"
              src={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
            <img
              alt={frame.alt}
              className="pointer-events-none absolute inset-0 z-10 h-full w-full"
              src={frame.src}
            />
          </div>
        ) : (
          <>
            {/* Video files live in public/videos/featured/{project-slug}/demo.mp4. */}
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              src={videoSrc}
            >
              Your browser does not support the video tag.
            </video>
          </>
        )}
        {fullscreenButton}
      </div>

      <div>
        <div className="mb-4 flex items-center gap-3 font-label-mono text-label-mono text-secondary">
          {projectNumber && <span>{projectNumber}</span>}
          <span>{category}</span>
        </div>

        <h4 className="mb-4 font-display-hero text-headline-md text-primary">
          {title}
        </h4>

        <dl className="space-y-4">
          {details.map((detail) => (
            <div key={detail.label}>
              <dt className="mb-1 font-label-mono text-label-mono text-secondary">
                {detail.label}
              </dt>
              <dd className="font-body-md text-body-sm leading-relaxed text-secondary">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>

        <span className="sr-only">
          Project slug: {slug}
          {frame ? `. Optional ${frame.type} frame: ${frame.src}` : ""}
        </span>
      </div>
    </article>
  );
};

export default FeaturedProject;
