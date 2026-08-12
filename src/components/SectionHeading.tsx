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
      {emoji && <span className="mb-3 block text-3xl sm:text-4xl">{emoji}</span>}
      <h2 className="font-display text-4xl font-extrabold tracking-tight text-heading sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-base font-normal text-muted sm:text-xl">
          {subtitle}
        </p>
      )}
      <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-80" />
    </div>
  );
}

