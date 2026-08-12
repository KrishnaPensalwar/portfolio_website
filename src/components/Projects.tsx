"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { projects, isValidProjectUrl } from "@/data/portfolio";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Featured Applications & Projects"
          subtitle="Deep dive into my Android software projects, highlighting problem solving, architecture design, and technical impact."
          emoji="📱"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hasProjectLink = isValidProjectUrl(project.link);
            const hasGithub = isValidProjectUrl(project.github);

            return (
              <article
                key={project.slug || project.title}
                className="glass-card flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-56 shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="font-display text-2xl font-bold text-white">
                      {project.title}
                    </h3>

                    {project.category && (
                      <p className="mt-1 text-xs font-medium text-cyan-300">
                        {project.category}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="mb-4 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-2.5 pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="btn-primary w-full px-4 py-2.5 text-sm font-semibold"
                    >
                      View Detailed Case Study
                      <ArrowRight size={16} />
                    </Link>

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline w-full px-4 py-2 text-xs font-semibold text-muted"
                      >
                        GitHub Repository
                        <Github size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}

