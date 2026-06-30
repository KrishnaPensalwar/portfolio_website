"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { skillCategories } from "@/data/portfolio";

function SkillItem({ name, index }: { name: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: index * 0.05,
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      className="group rounded-xl border border-slate-200/80 bg-slate-50/80 px-5 py-4 transition-all hover:border-primary-400/50 hover:bg-primary-50/50 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-primary-500/30 dark:hover:bg-primary-500/5"
    >
      <h4 className="text-center text-sm font-semibold text-heading">
        {name}
      </h4>

      <div className="relative mt-3 h-[3px] overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.1 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ originX: 0.5 }} // Grow from center
          className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600"
        />

        {/* Shimmer */}
        <motion.div
          animate={{
            x: ["-120%", "220%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: 0.8 + index * 0.08,
          }}
          className="absolute top-0 h-full w-8 bg-white/60 blur-sm"
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const activeCategory = skillCategories.find((c) => c.id === activeTab)!;

  return (
    <AnimatedSection id="skills" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I use to build modern Android applications."
        />

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                activeTab === category.id
                  ? "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md shadow-primary-500/25"
                  : "tab-inactive"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="glass-card p-5 sm:p-6"
            >
              <h3 className="mb-4 text-center font-display text-lg font-semibold text-heading">
                {activeCategory.label}
              </h3>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {activeCategory.skills.map((skill, index) => (
                  <SkillItem key={skill.name} name={skill.name} index={index} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedSection>
  );
}
