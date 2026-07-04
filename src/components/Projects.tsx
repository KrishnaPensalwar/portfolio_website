"use client";

import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { projects, isValidProjectUrl } from "@/data/portfolio";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Android Projects" emoji="📱" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hasProjectLink = isValidProjectUrl(project.link);
            const hasGithub = isValidProjectUrl(project.github);

            return (
              <article
                key={project.title}
                className="glass-card flex flex-col overflow-hidden rounded-2xl"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    {project.category && (
                      <p className="mt-1 text-xs text-slate-300">
                        {project.category}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(hasProjectLink || hasGithub) && (
                    <div className="mt-auto flex items-center gap-3 pt-2">
                      {hasProjectLink && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary min-h-10 flex-1 px-4 py-2"
                        >
                          View Project
                          <ExternalLink size={16} />
                        </a>
                      )}

                      {/* {hasGithub && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} on GitHub`}
                          title="Open GitHub repository"
                          className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 dark:border-slate-600 dark:text-slate-200"
                        >
                          <Github size={20} />
                        </a>
                      )} */}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
