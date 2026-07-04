interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  emoji?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  emoji,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center lg:mb-16">
      {emoji && <span className="mb-3 block text-3xl">{emoji}</span>}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        <span className="text-heading">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-slate-300 dark:bg-slate-600" />
    </div>
  );
}
