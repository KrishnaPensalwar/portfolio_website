"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import {
  projects,
  getProjectUrl,
  isValidProjectUrl,
} from "@/data/portfolio";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Android Projects" emoji="📱" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const projectUrl = getProjectUrl(project);
            const hasLiveDemo = isValidProjectUrl(project.link);
            const hasGithub = isValidProjectUrl(project.github);

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{ y: -8 }}
                className="group glass-card overflow-hidden rounded-2xl transition-all duration-300 hover:border-slate-300 hover:shadow-xl dark:hover:border-slate-600"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                <div className="flex h-full flex-col p-6">
                  <p className="mb-6 text-sm leading-7 text-muted">
                    {project.description}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center gap-3">
                    <a
                      href={projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                    >
                      {hasLiveDemo ? "View Project" : "View on GitHub"}
                      <ExternalLink size={16} />
                    </a>

                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        title="Open GitHub repository"
                        className="rounded-lg border border-slate-200 p-2 text-slate-600 transition-all duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-600 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-white"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
