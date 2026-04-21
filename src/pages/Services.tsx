import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { SERVICES } from "@/data/site";

const deliverables = [
  "Concept design & feasibility study",
  "BOQ, drawings & regulatory documentation",
  "Supply, installation & commissioning",
  "Validation, training & handover",
  "Annual maintenance & 24×7 service",
];

export function ServicesList() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Services</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">End-to-End Capability</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                  Our <span className="text-accent">Services.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Turn-key healthcare and laboratory infrastructure — from concept to commissioning, certified and audit-ready.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services Editorial List */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="container">
          <div className="mt-4">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <a
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-baseline py-10 lg:py-12 border-b border-border hover:bg-paper-warm/60 transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10"
                >
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-accent">{s.number}</span>
                  </div>
                  <div className="lg:col-span-5">
                    <h3 className="text-3xl lg:text-4xl xl:text-5xl text-navy leading-[1.05] group-hover:text-accent transition-colors duration-300 text-balance font-bold">
                      {s.name}
                    </h3>
                  </div>
                  <div className="lg:col-span-5">
                    <p className="text-[16px] leading-[1.65] text-foreground/70">{s.description}</p>
                    <div className="mt-4 text-[11px] uppercase tracking-wider text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn More
                    </div>
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

      {/* CTA Strip */}
      <section className="bg-navy py-20">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-3">Ready to start?</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-lg">
              Share your scope and our engineering team will respond within one business day.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-white hover:text-navy transition-all duration-300 whitespace-nowrap"
            >
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
              <span className="text-border">›</span>
              <span className="text-navy">{service.name}</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
                  Service {service.number}
                </div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                  {service.name}
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  {service.short}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Service Detail Body */}
      <section className="py-20 lg:py-28 bg-paper">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-7 space-y-10">
            <div>
              <div className="text-[13px] uppercase tracking-wider text-accent font-bold flex items-center gap-4 mb-6">
                <span className="h-px w-8 bg-accent" />
                Service Overview
              </div>
              <p className="text-[18px] leading-relaxed text-foreground/75">{service.description}</p>
            </div>

            <div className="pt-10 border-t border-border">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-8">Our Delivery Approach</div>
              <ul className="space-y-0">
                {deliverables.map((d, i) => (
                  <li key={d} className="flex items-start gap-5 py-5 border-b border-border last:border-0">
                    <span className="font-mono text-xs text-accent mt-0.5 shrink-0">0{i + 1}</span>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-[16px] font-medium text-navy">{d}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="bg-navy text-white p-8 lg:p-10 sticky top-28">
              <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-4">Get a Quote</div>
              <h3 className="text-2xl lg:text-3xl font-extrabold mb-5 leading-tight">
                Talk to a project consultant.
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed mb-8">
                Share your scope and our engineering team will respond with a tailored proposal within one business day.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 bg-accent hover:bg-white hover:text-navy text-white px-8 py-4 transition-all duration-500 w-full"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">Start a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>

              <div className="mt-10 pt-8 border-t border-white/10 space-y-2">
                <div className="text-[11px] uppercase tracking-wider text-white/40 font-bold">Other Services</div>
                {others.map((o) => (
                  <a
                    key={o.slug}
                    href={o.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-3 border-b border-white/10 group/item last:border-0"
                  >
                    <span className="text-[14px] text-white/70 group-hover/item:text-white transition-colors font-medium">{o.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-white/40 group-hover/item:text-accent transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
