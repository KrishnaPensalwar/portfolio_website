"use client";

import { motion } from "framer-motion";
import { Briefcase, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { experiences, type ExperienceItem } from "@/data/portfolio";

function ExperienceCard({
  title,
  company,
  type,
  period,
  isPresent,
  isInternship,
  highlights,
  index,
}: ExperienceItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative pl-8"
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 transition-all ${
          isPresent
            ? "border-emerald-500 bg-emerald-500 shadow-md shadow-emerald-500/50 dark:border-emerald-400 dark:bg-emerald-400"
            : "border-slate-900 bg-white dark:border-slate-400 dark:bg-slate-950"
        }`}
      />
      <div className="absolute left-[7px] top-6 h-full w-0.5 bg-slate-200 dark:bg-slate-800" />

      <div
        className={`glass-card mb-8 p-6 transition-all ${
          isPresent
            ? "border-emerald-500/40 bg-emerald-500/5 ring-1 ring-emerald-500/20 dark:border-emerald-500/30 dark:bg-emerald-500/10"
            : "hover:border-slate-300 dark:hover:border-slate-600"
        }`}
      >
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-xl font-bold text-heading">
                {title}
              </h3>
              {isPresent && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/15 px-3 py-0.5 text-xs font-semibold text-emerald-600 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Present
                </span>
              )}
            </div>

            <p className="mt-1 text-sm font-medium text-heading">
              {company}
              {type && (
                <span className="text-muted"> ({type})</span>
              )}
            </p>
          </div>

          <span
            className={`rounded-full border px-3.5 py-1 text-xs font-semibold ${
              isPresent
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                : "border-slate-200 bg-slate-50 text-muted dark:border-white/10 dark:bg-white/5"
            }`}
          >
            {period}
          </span>
        </div>

        <ul className="space-y-2.5">
          {highlights.map((item, i) => (
            <li
              key={i}
              className="flex gap-2.5 text-sm leading-relaxed text-muted sm:text-base"
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                  isPresent ? "bg-emerald-500" : "bg-slate-800 dark:bg-slate-300"
                }`}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Career Journey & Impact"
          subtitle="My professional evolution as an Android Developer, building production-ready mobile apps and enterprise software solutions."
          emoji="💼"
        />

        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex items-center justify-between text-heading">
            <div className="flex items-center gap-2">
              <Briefcase size={20} className="text-blue-500" />
              <span className="text-sm font-bold uppercase tracking-wider text-heading">
                Work Experience Timeline
              </span>
            </div>
            <span className="text-xs font-medium text-muted">
              Most Recent → Earliest
            </span>
          </div>

          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title + exp.company} {...exp} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

