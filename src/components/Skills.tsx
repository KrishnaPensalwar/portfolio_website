"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import SkillIcon from "@/components/SkillIcon";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build modern Android applications."
        />

        {/* Category tabs */}
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeTab === category.id
                  ? "bg-slate-900 text-white shadow-md dark:bg-white dark:text-slate-900"
                  : "tab-inactive"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mb-6 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Skills panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass-card p-5 sm:p-6"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                  Technologies
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-heading">
                  {activeCategory.label}
                </h3>
              </div>

              <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                {activeCategory.skills.length} skills
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              {activeCategory.skills.map((skill, index) => (
                <motion.div
                  key={`${activeCategory.id}-${skill.name}`}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.04 }}
                  className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                >
                  <SkillIcon
                    icon={skill.icon}
                    size={28}
                    className="transition-transform duration-200 group-hover:scale-105"
                  />
                  <span className="text-sm font-medium text-heading">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
