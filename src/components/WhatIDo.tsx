"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  Code2,
  Cpu,
  Layers,
  Server,
  Smartphone,
  Sparkles,
  LucideIcon,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { whatIDo } from "@/data/portfolio";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers,
  Server,
  Cloud,
  Brain,
  Sparkles,
  Smartphone,
  Cpu,
};

export default function WhatIDo() {
  return (
    <AnimatedSection className="section-padding section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="What I Do"
          subtitle="Areas where I bring value and passion to every project"
          emoji="🚀"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whatIDo.map((item, index) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group glass-card p-6 transition-all duration-300 hover:border-slate-300 hover:shadow-lg dark:hover:border-slate-600"
              >
                <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-heading transition-transform group-hover:scale-110 dark:bg-slate-800">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
