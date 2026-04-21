import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Link, useParams, Navigate } from "react-router-dom";
import { SERVICES } from "@/data/site";
import { ArrowRight, Building2, HeartPulse, Microscope, FlaskConical, GitBranch, CheckCircle2 } from "lucide-react";

const icons = [Building2, HeartPulse, Microscope, FlaskConical, GitBranch];

export function ServicesList() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="End-to-End Capability"
        title="Our Services"
        subtitle="Turn-key healthcare and laboratory infrastructure — from concept to commissioning, certified and audit-ready."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />
      <section className="py-20 lg:py-24">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block h-full relative overflow-hidden rounded-2xl bg-white border border-border p-8 shadow-card-soft hover-lift"
                >
                  <div className="absolute -top-2 -right-2 font-display text-7xl font-extrabold text-steel">{s.number}</div>
                  <div className="relative">
                    <div className="h-14 w-14 rounded-xl bg-navy text-white grid place-items-center group-hover:bg-electric transition-colors duration-500">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-bold text-navy group-hover:text-electric transition-colors">{s.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-electric group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}

const deliverables = [
  "Concept design & feasibility study",
  "BOQ, drawings & regulatory documentation",
  "Supply, installation & commissioning",
  "Validation, training & handover",
  "Annual maintenance & 24×7 service",
];

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const Icon = icons[idx];

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`Service ${service.number}`}
        title={service.name}
        subtitle={service.short}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      />
      <section className="py-20 lg:py-24">
        <div className="container grid lg:grid-cols-3 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <div className="h-16 w-16 rounded-xl bg-gradient-electric grid place-items-center text-white shadow-glow-blue">
              <Icon className="h-7 w-7" />
            </div>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl font-extrabold text-navy">{service.name}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-[17px]">{service.description}</p>

            <h3 className="mt-12 font-display text-xl font-bold text-navy">Our Delivery Approach</h3>
            <ul className="mt-5 space-y-3">
              {deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 p-4 rounded-lg bg-steel border border-border">
                  <CheckCircle2 className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-navy">{d}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-gradient-navy text-white rounded-2xl p-8 shadow-elegant sticky top-28 relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-glow opacity-60" />
              <div className="relative">
                <p className="text-electric text-xs font-bold uppercase tracking-[0.25em]">Get a quote</p>
                <h3 className="mt-3 font-display text-2xl font-bold">Talk to a project consultant</h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  Share your scope and our engineering team will respond with a tailored proposal within one business day.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-electric hover:bg-accent-glow text-white font-semibold px-6 py-3.5 rounded-md transition-all duration-300 btn-glow"
                >
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
