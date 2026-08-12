import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { projects, isValidProjectUrl, siteConfig } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const hasProjectLink = isValidProjectUrl(project.link);
  const hasGithub = isValidProjectUrl(project.github);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      {/* Background Grids & Glow */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-[128px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-[128px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-white/20 dark:hover:bg-white/10"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
            <Sparkles size={14} />
            {project.category}
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 max-w-3xl text-lg font-medium text-slate-600 dark:text-slate-300 sm:text-xl">
            {project.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-5 py-2.5"
              >
                <Github size={18} />
                GitHub Repository
              </a>
            )}

            {hasProjectLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline px-5 py-2.5"
              >
                <ExternalLink size={18} />
                Live Demo / Link
              </a>
            )}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-16 overflow-hidden rounded-3xl border border-slate-200/80 shadow-xl dark:border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full object-cover max-h-[480px]"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Left Column: Problem, Solution, Architecture, Features */}
          <div className="space-y-12 lg:col-span-8">
            {/* Project Idea & Overview */}
            <section className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 dark:bg-blue-400/10">
                  <Lightbulb size={20} />
                </div>
                <h2 className="font-display text-2xl font-bold text-heading">
                  Project Idea & Overview
                </h2>
              </div>
              <p className="text-base leading-relaxed text-body sm:text-lg">
                {project.description}
              </p>
            </section>

            {/* Problem Statement */}
            <section className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-500 dark:bg-amber-400/10">
                  <ShieldAlert size={20} />
                </div>
                <h2 className="font-display text-2xl font-bold text-heading">
                  The Problem
                </h2>
              </div>
              <p className="text-base leading-relaxed text-body sm:text-lg">
                {project.problem}
              </p>
            </section>

            {/* The Solution */}
            <section className="glass-card p-6 sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/10">
                  <Zap size={20} />
                </div>
                <h2 className="font-display text-2xl font-bold text-heading">
                  The Solution
                </h2>
              </div>
              <p className="text-base leading-relaxed text-body sm:text-lg">
                {project.solution}
              </p>
            </section>

            {/* Architecture Highlights */}
            {project.architecture && project.architecture.length > 0 && (
              <section className="glass-card p-6 sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 dark:bg-indigo-400/10">
                    <Layers size={20} />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-heading">
                    Architecture & Patterns
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.architecture.map((arch, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-base text-body"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-1 shrink-0 text-cyan-500"
                      />
                      <span>{arch}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Key Features Grid */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <section>
                <h2 className="mb-6 font-display text-2xl font-bold text-heading">
                  Key Features & Capabilities
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.keyFeatures.map((feat, index) => (
                    <div
                      key={index}
                      className="glass-card p-5 transition-all hover:border-slate-300 dark:hover:border-slate-700"
                    >
                      <h3 className="font-display text-lg font-semibold text-heading">
                        {feat.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Column Sidebar: Tech Stack & Key Takeaway */}
          <div className="space-y-8 lg:col-span-4">
            {/* Tech Stack Box */}
            <div className="glass-card p-6">
              <h3 className="mb-4 font-display text-lg font-bold text-heading">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStackDetailed.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-slate-200 bg-slate-100 px-3 py-1.5 font-mono text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact & Result */}
            {project.impact && (
              <div className="glass-card border-cyan-500/30 bg-cyan-500/5 p-6 dark:border-cyan-500/20 dark:bg-cyan-500/10">
                <h3 className="mb-2 font-display text-lg font-bold text-cyan-700 dark:text-cyan-300">
                  Key Impact
                </h3>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.impact}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Navigation CTA */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-slate-200 pt-8 sm:flex-row dark:border-slate-800">
          <Link
            href="/#projects"
            className="btn-outline px-5 py-2.5 text-sm"
          >
            ← Back to All Projects
          </Link>
          <Link
            href="/#contact"
            className="btn-primary px-5 py-2.5 text-sm"
          >
            Get in Touch with Krishna
          </Link>
        </div>
      </div>
    </main>
  );
}
