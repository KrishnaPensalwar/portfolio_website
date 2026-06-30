"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

function ExperienceCard({
  title,
  company,
  type,
  period,
  highlights,
  index,
}: {
  title: string;
  company: string;
  type?: string;
  period: string;
  highlights: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="relative pl-8"
    >
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-primary-500 bg-white dark:bg-slate-950" />
      <div className="absolute left-[7px] top-6 h-full w-0.5 bg-gradient-to-b from-primary-500/50 to-transparent" />

      <div className="glass-card mb-8 p-6 transition-all hover:border-primary-400/30 dark:hover:border-primary-500/20">
        <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-lg font-semibold text-heading">
              {title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              {company}
              {type && (
                <span className="text-muted"> ({type})</span>
              )}
            </p>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-muted dark:border-white/10 dark:bg-white/5">
            {period}
          </span>
        </div>
        <ul className="space-y-2">
          {highlights.map((item, i) => (
            <li
              key={i}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              {item}
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
        <SectionHeading title="Professional Experience" emoji="💼" />

        <div className="mx-auto max-w-3xl">
          <div className="mb-4 flex items-center gap-2 text-primary-600 dark:text-primary-400">
            <Briefcase size={20} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Work Experience
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
