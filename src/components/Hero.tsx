"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  CheckCircle2,
  FileDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { siteConfig } from "@/data/portfolio";

function getGreeting(): { text: string; emoji: string } {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good Morning", emoji: "☀️" };
  if (hour < 17) return { text: "Good Afternoon", emoji: "🌤️" };
  return { text: "Good Evening", emoji: "🌙" };
}

function AnimatedHeading({ text }: { text: string }) {
  const words = text.split(" ");
  let globalCharIndex = 0;

  return (
    <span aria-label={text} className="inline">
      {words.map((word, wordIndex) => {
        const wordChars = word.split("");
        return (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const charIdx = globalCharIndex++;
              return (
                <motion.span
                  key={`${char}-${charIdx}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: charIdx * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block"
                  aria-hidden
                >
                  {char}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  const greeting = getGreeting();
  const headingText = `Hi, I'm ${siteConfig.name}`;
  const descriptionDelay = headingText.length * 0.045 + 0.25;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-20 lg:py-28"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-slate-400/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-slate-400/10 blur-[128px]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 xl:gap-14">
          {/* Left Column: Hero Greeting & Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:col-span-7 lg:text-left"
          >
            <p className="mb-3 text-lg font-medium text-muted sm:text-xl">
              {greeting.text} {greeting.emoji}
            </p>

            <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-heading sm:text-5xl lg:text-[2.75rem] xl:text-[3.6rem]">
              <AnimatedHeading text={headingText} />
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: descriptionDelay, duration: 0.7 }}
              className="mt-6 max-w-2xl text-lg text-muted sm:text-xl lg:mx-0"
            >
              {siteConfig.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: descriptionDelay + 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
              <a
                href={siteConfig.resumeUrl}
                download="Krishna_Pensalwar_Resume.pdf"
                className="btn-outline"
              >
                Download Resume
                <FileDown size={16} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: descriptionDelay + 0.35, duration: 0.6 }}
              className="mt-8 flex items-center justify-center gap-5 lg:justify-start"
            >
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="icon-btn"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Developer Profile Tile Card (matching user screenshot) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="w-full lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/90 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700/90 dark:border-white/10 dark:bg-slate-950/80 sm:p-7">
              {/* Card Glow accent */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />

              {/* Profile Header */}
              <div className="flex items-center gap-5">
                {/* Initial Avatar Badge */}
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 text-3xl font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                  KP
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-white">
                    {siteConfig.name}
                  </h2>

                </div>
              </div>

              {/* Thin Divider */}
              <div className="my-6 h-px w-full bg-slate-800 dark:bg-slate-800/80" />

              {/* Info Items */}
              <div className="space-y-3.5 text-slate-300">
                <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <MapPin size={18} className="shrink-0 text-cyan-400" />
                  <span>{siteConfig.location}</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <Briefcase size={18} className="shrink-0 text-blue-400" />
                  <span>{siteConfig.roleTitle}</span>
                </div>

                <div className="flex items-center gap-3 text-sm font-medium text-slate-300">
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  <span>{siteConfig.degree}</span>
                </div>
              </div>

              {/* Skill Pills Row */}
              <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
                {siteConfig.heroSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-slate-800 bg-slate-800/70 px-3.5 py-1.5 font-mono text-xs font-medium text-slate-200 transition-colors hover:border-slate-600 dark:border-white/10 dark:bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: descriptionDelay + 0.6, duration: 0.6 }}
          className="mt-16 flex items-center justify-center text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          aria-label="Scroll to about"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}

