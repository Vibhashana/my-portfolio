import Image from "next/image";
import Link from "next/link";

import SectionHeader from "@/components/section-header";
import { Button } from "@/components/ui/button";
import {
  featuredProjects,
  otherProjects,
  type FeaturedProject,
  type Project,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const index = (n: number) => String(n).padStart(2, "0");

const FeaturedCard = ({
  project,
  position,
}: {
  project: FeaturedProject;
  position: number;
}) => {
  const { title, tag, description, shortDescription, stack, image, theme } =
    project;
  const dark = theme === "dark";

  return (
    <article
      className={cn(
        "grid overflow-hidden rounded-3xl lg:min-h-[600px] lg:grid-cols-[460px_1fr] lg:rounded-[32px]",
        dark ? "bg-night text-on-night" : "border border-line bg-card"
      )}
    >
      <div className="flex flex-col justify-between gap-2.5 p-[22px] lg:gap-10 lg:p-12">
        <div className="flex flex-col gap-2.5 lg:gap-5">
          <p className="mono-label flex gap-2.5 lg:gap-3">
            <span className="text-accent">{index(position)}</span>
            <span className={dark ? "text-on-night-muted" : "text-ink-muted"}>
              {tag}
            </span>
          </p>
          <h3 className="mt-1.5 text-title-l font-semibold lg:mt-0">{title}</h3>
          <p
            className={cn(
              "text-body-s lg:text-body-m",
              dark ? "text-on-night-muted" : "text-ink-muted"
            )}
          >
            <span className="lg:hidden">{shortDescription}</span>
            <span className="hidden lg:inline">{description}</span>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <p
            className={cn(
              "hidden font-mono text-mono-m lg:block",
              dark ? "text-on-night-muted" : "text-ink-muted"
            )}
          >
            {stack.join(" · ")}
          </p>

          {/* Desktop: buttons */}
          <div className="hidden flex-wrap gap-2.5 lg:flex">
            {project.primary && (
              <Button asChild variant={dark ? "onNight" : "primary"}>
                <a
                  href={project.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.primary.label} ↗
                </a>
              </Button>
            )}
            <Button asChild variant={dark ? "outlineNight" : "secondary"}>
              <Link href={project.caseStudy}>Read case study →</Link>
            </Button>
          </div>

          {/* Mobile: text links */}
          <div className="flex gap-6 pt-1 text-label font-medium lg:hidden">
            {project.primary && (
              <a
                href={project.primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {project.primary.label} ↗
              </a>
            )}
            <Link
              href={project.caseStudy}
              className="underline-offset-4 hover:underline"
            >
              Read case study →
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "order-first flex items-center justify-center p-[18px] lg:order-none lg:p-12",
          dark ? "bg-night-raised" : "bg-surface"
        )}
      >
        <Image
          src={image}
          alt={`${title} on laptop and phone`}
          sizes="(min-width: 1024px) 642px, calc(100vw - 76px)"
          className="h-auto w-full max-w-[642px]"
        />
      </div>
    </article>
  );
};

const ProjectCard = ({
  project,
  position,
}: {
  project: Project;
  position: number;
}) => {
  const { title, tag, description, stack, image, liveUrl, githubUrl } =
    project;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-line bg-card lg:rounded-[28px]">
      <div className="flex items-center justify-center bg-surface p-[18px] lg:p-7">
        <Image
          src={image}
          alt={`${title} on laptop and phone`}
          sizes="(min-width: 1024px) 530px, calc(100vw - 76px)"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-2.5 p-[22px] lg:gap-3 lg:px-8 lg:pb-8 lg:pt-7">
        <p className="mono-label flex gap-2.5 lg:hidden">
          <span className="text-accent">{index(position)}</span>
          <span className="text-ink-muted">{tag}</span>
        </p>
        <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between">
          <h3 className="text-h3 font-semibold">{title}</h3>
          <div className="order-last flex gap-[18px] text-label font-medium lg:order-none">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink underline-offset-4 hover:underline"
            >
              Live ↗<span className="sr-only"> — {title}</span>
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink lg:text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              GitHub ↗<span className="sr-only"> — {title}</span>
            </a>
          </div>
          <p className="text-body-s text-ink-muted lg:hidden">{description}</p>
        </div>
        <p className="hidden text-body-s text-ink-muted lg:block">
          {description}
        </p>
        <p className="mono-label hidden text-ink-muted lg:block">
          {stack.join(" · ")}
        </p>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section
      id="work"
      className="container-page scroll-mt-16 py-[72px] md:py-36"
    >
      <SectionHeader
        eyebrow="02 — Selected work"
        title="Featured projects"
        description="Products I’ve designed and built end to end — from live SaaS to a hotel platform in progress — plus smaller builds along the way."
        className="[&>p]:hidden md:[&>p]:block"
      />

      <div className="mt-8 flex flex-col gap-8 md:mt-16 lg:gap-6">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} position={i + 1} />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 lg:mt-16">
        <div className="hidden items-center gap-4 lg:flex">
          <h3 className="mono-label shrink-0 text-ink-muted">Also built</h3>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-6">
          {otherProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              position={featuredProjects.length + i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
