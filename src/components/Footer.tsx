import { Github, Linkedin, Mail, Phone } from "lucide-react";
import {
  siteConfig,
  getPhoneDisplay,
  getPhoneHref,
} from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="text-center lg:text-left">
            <p className="font-display text-lg font-bold text-heading">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-muted">
              Android Developer · Kotlin · Jetpack Compose
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 text-sm text-muted lg:items-end">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
            <a
              href={getPhoneHref()}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Phone size={16} />
              {getPhoneDisplay()}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition-all hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:hover:border-primary-500/30 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-200 p-2.5 text-muted transition-all hover:border-primary-400 hover:text-primary-600 dark:border-white/10 dark:hover:border-primary-500/30 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-sm text-slate-400 dark:border-white/5 dark:text-slate-600">
          © {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
