import { ArrowUpRight } from "lucide-react";
import { MEDIA } from "@/data/site";
import { Reveal } from "./Reveal";

const accentImages = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80",
];

export default function MediaCenter() {
  return (
    <section id="media" className="py-24 lg:py-36 bg-paper-warm">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-8 pb-16 border-b border-border">
          <div className="lg:col-span-3">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold">
              06 / Newsroom
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-6xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
              Insights from the <span className="text-accent">field.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 flex lg:items-end">
            <a href="#" className="link-underline text-[12px] uppercase tracking-wider font-bold">
              All articles <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-x-8 gap-y-12">
          {MEDIA.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.1}>
              <a href="#" className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-muted mb-5">
                  <img
                    src={accentImages[i]}
                    alt={m.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-bold">
                  <span>{m.date}</span>
                  <span className="h-px w-6 bg-border" />
                  <span className="text-accent">Insight</span>
                </div>
                <h3 className="text-2xl text-navy leading-tight group-hover:text-accent transition-colors duration-300 text-balance font-bold">
                  {m.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-foreground/70">{m.excerpt}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-navy group-hover:text-accent transition-colors font-bold">
                  Read article <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
