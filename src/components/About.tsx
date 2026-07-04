"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { getAboutContent } from "@/data/portfolio";

function renderParagraph(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-heading">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function About() {
  const { greeting, emoji, paragraphs } = getAboutContent();

  return (
    <AnimatedSection id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About Me" emoji="👋" />

        <div className="mx-auto max-w-4xl">
          <div className="glass-card p-8 sm:p-10">
            <p className="mb-6 text-sm font-medium text-heading">
              {greeting} {emoji}
            </p>
            <div className="space-y-5 text-base leading-relaxed text-body sm:text-lg">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{renderParagraph(paragraph)}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
