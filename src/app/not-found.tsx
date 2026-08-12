import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-center dark:bg-slate-950">
      <div className="glass-card max-w-md p-8 sm:p-10">
        <span className="font-mono text-6xl font-black text-cyan-500">404</span>
        <h1 className="mt-4 font-display text-2xl font-bold text-heading">
          Page Not Found
        </h1>
        <p className="mt-2 text-sm text-muted">
          The page or project case study you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8">
          <Link href="/" className="btn-primary w-full px-5 py-2.5">
            <ArrowLeft size={16} />
            Back to Portfolio Home
          </Link>
        </div>
      </div>
    </main>
  );
}
