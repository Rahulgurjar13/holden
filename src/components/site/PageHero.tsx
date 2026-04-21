import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 bg-paper">
      <div className="container">
        <Reveal>
          {breadcrumbs && (
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <span key={i} className="flex items-center gap-2">
                  {b.to ? (
                    <Link to={b.to} className="hover:text-accent transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-navy">{b.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </span>
              ))}
            </nav>
          )}
          <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
            <div className="lg:col-span-3">
              {eyebrow && (
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                  {eyebrow}
                </div>
              )}
            </div>
            <div className="lg:col-span-9">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-8 text-lg lg:text-xl text-foreground/80 max-w-2xl leading-[1.55]">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
