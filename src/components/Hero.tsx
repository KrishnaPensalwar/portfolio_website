"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/portfolio";

function getGreeting(): { text: string; emoji: string } {
  const hour = new Date().getHours();
  if (hour < 12) return { text: "Good Morning", emoji: "☀️" };
  if (hour < 17) return { text: "Good Afternoon", emoji: "🌤️" };
  return { text: "Good Evening", emoji: "🌙" };
}

function AnimatedHeading({ text }: { text: string }) {
  const characters = text.split("");

  return (
    <span aria-label={text}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: index * 0.045,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          aria-hidden
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-slate-400/10 blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-slate-400/10 blur-[128px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-lg text-muted sm:text-xl">
            {greeting.text} {greeting.emoji}
          </p>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-heading sm:text-6xl lg:text-7xl">
            <AnimatedHeading text={headingText} />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: descriptionDelay, duration: 0.7 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: descriptionDelay + 0.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
            className="mt-10 flex items-center justify-center gap-5"
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

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: descriptionDelay + 0.6, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 transition-colors hover:text-slate-900 dark:hover:text-white"
          aria-label="Scroll to about"
        >
          <ArrowDown size={24} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
