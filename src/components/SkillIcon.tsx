"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import type { SkillIcon as SkillIconData } from "@/data/skillIcons";
import { SKILL_ICON_FALLBACK } from "@/data/skillIcons";

type SkillIconProps = {
  icon: SkillIconData;
  size?: number;
  className?: string;
};

const DEFAULT_SIZE = 28;

export default function SkillIcon({
  icon,
  size = DEFAULT_SIZE,
  className = "",
}: SkillIconProps) {
  const [src, setSrc] = useState(icon.src);
  const [failed, setFailed] = useState(false);

  const handleError = () => {
    if (src !== SKILL_ICON_FALLBACK.src) {
      setSrc(SKILL_ICON_FALLBACK.src);
      return;
    }
    setFailed(true);
  };

  const wrapperClass =
    "inline-flex shrink-0 items-center justify-center rounded-lg bg-white p-1 shadow-sm ring-1 ring-slate-200 dark:bg-white dark:ring-slate-300/50";

  if (failed) {
    return (
      <span
        className={`skill-icon-fallback ${wrapperClass} ${className}`}
        style={{ width: size, height: size }}
        role="img"
        aria-label={icon.alt}
      >
        <Code2
          size={Math.round(size * 0.55)}
          className="text-slate-500"
          aria-hidden
        />
      </span>
    );
  }

  return (
    <span
      className={`skill-icon ${wrapperClass} ${className}`}
      style={{ width: size, height: size }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={icon.alt}
        width={size - 8}
        height={size - 8}
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={handleError}
        className="h-full w-full object-contain"
      />
    </span>
  );
}
