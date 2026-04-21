import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "@/data/site";
import { Reveal } from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-36 bg-paper">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-8 pb-16 border-b border-border">
          <div className="lg:col-span-3">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              §04 — Capability
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl lg:text-6xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
              Turn-key infrastructure,<br />
              <span className="text-accent">audit-ready.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 flex lg:items-end">
            <p className="text-sm text-foreground/70 leading-relaxed">
              From concept and civil works through commissioning, validation and lifecycle service.
            </p>
          </div>
        </Reveal>

        {/* Services as editorial list */}
        <div className="mt-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline py-8 lg:py-10 border-b border-border hover:bg-paper-warm/60 transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10"
              >
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-accent">{s.number}</span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="font-serif text-3xl lg:text-4xl xl:text-5xl text-navy leading-[1.05] group-hover:text-accent transition-colors duration-300 text-balance">
                    {s.name}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[15px] leading-[1.65] text-foreground/75">
                    {s.description}
                  </p>
                </div>
                <div className="lg:col-span-1 flex lg:justify-end">
                  <div className="h-11 w-11 grid place-items-center border border-border group-hover:bg-navy group-hover:border-navy group-hover:text-paper transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
