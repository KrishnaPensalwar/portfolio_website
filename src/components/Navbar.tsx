"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, House } from "lucide-react";
import { navLinks, siteConfig } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const firstName = siteConfig.name.split(" ")[0];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "border-b border-slate-200/80 bg-white/80 shadow-md shadow-slate-200/50 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85 dark:shadow-black/20"
          : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Home"
          className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/80 transition-all duration-300 hover:scale-110 hover:border-primary-500 hover:bg-primary-50 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-primary-500 dark:hover:bg-primary-500/10"
        >
          <House
            size={22}
            className="text-heading transition-all duration-300 group-hover:text-primary-500"
            strokeWidth={2.2}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="nav-link"
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-slate-100 hover:text-heading dark:hover:bg-white/10 dark:hover:text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl dark:border-white/10 dark:bg-surface-dark/95 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-3 text-sm font-medium text-body transition-colors hover:bg-primary-50 hover:text-primary-700 dark:hover:bg-white/5 dark:hover:text-white"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
