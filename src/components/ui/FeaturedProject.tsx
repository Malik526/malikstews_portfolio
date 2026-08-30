/**
 * FeaturedProject.tsx
 * Reusable structure for video-led project features.
 * Project metadata is managed in src/data/featuredProjects.ts.
 */

import React, { useRef } from "react";
import { Link } from "react-router-dom";
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
  embed,
  slug,
  frame,
  links,
  visual,
  index,
}) => {
  const mediaRef = useRef<HTMLDivElement>(null);
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
    const media = mediaRef.current;
    if (!video && !media) return;

    const fullscreenVideo = video as HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
    };

    try {
      if (video?.requestFullscreen) {
        await video.requestFullscreen();
        return;
      }

      if (fullscreenVideo?.webkitEnterFullscreen) {
        fullscreenVideo.webkitEnterFullscreen();
        return;
      }

      if (media?.requestFullscreen) {
        await media.requestFullscreen();
      }
    } catch (error) {
      console.error("Unable to open project media fullscreen:", error);
    }
  };

  const fullscreenButton = (
    <button
      aria-label={`Open ${title} media fullscreen`}
      className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center bg-white/90 text-primary shadow-sm transition-colors hover:bg-white"
      onClick={openFullscreen}
      type="button"
    >
      <span className="material-symbols-outlined text-[20px]">fullscreen</span>
    </button>
  );

  return (
    <article className="grid gap-8 border-t border-surface-variant py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div
        ref={mediaRef}
        className={
          frame?.type === "phone"
            ? "relative flex justify-center bg-surface-variant py-6"
            : visual
              ? "relative min-h-[320px] overflow-hidden bg-surface-variant p-6 lg:aspect-video"
              : "relative aspect-video overflow-hidden bg-surface-variant"
        }
      >
        {frame?.type === "phone" && videoSrc ? (
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
        ) : embed ? (
          <iframe
            src={embed.src}
            title={embed.title}
            frameBorder="0"
            allow="fullscreen; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : videoSrc ? (
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
        ) : visual ? (
          <div className="flex h-full min-h-[272px] flex-col justify-center">
            <p className="mb-5 font-label-mono text-label-mono uppercase text-secondary">
              {visual.title}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {visual.items.map((item, itemIndex) => (
                <div
                  key={item}
                  className="border-l border-primary bg-white/60 p-4"
                >
                  <span className="mb-2 block font-label-mono text-label-mono text-outline">
                    {String(itemIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body-md text-body-sm leading-relaxed text-primary">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}
        {(videoSrc || embed || visual) && fullscreenButton}
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

        {/* --- Optional CTA links rendered after project details --- */}
        {links && links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-4">
            {links.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-2"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="inline-flex items-center gap-2 font-body-md text-body-md text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-2"
                >
                  {link.label}
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
              )
            )}
          </div>
        )}

        <span className="sr-only">
          Project slug: {slug}
          {frame ? `. Optional ${frame.type} frame: ${frame.src}` : ""}
        </span>
      </div>
    </article>
  );
};

export default FeaturedProject;
