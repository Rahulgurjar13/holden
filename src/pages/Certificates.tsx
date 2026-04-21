import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, ShieldCheck, FileBadge2, BadgeCheck } from "lucide-react";

const items = [
  { icon: Award, title: "ISO 9001:2015", desc: "Quality Management System" },
  { icon: ShieldCheck, title: "ISO 13485", desc: "Medical Devices QMS" },
  { icon: FileBadge2, title: "CDSCO License", desc: "Medical Device manufacturing & distribution" },
  { icon: BadgeCheck, title: "GeM Verified Seller", desc: "Government e-Marketplace empanelment" },
  { icon: ShieldCheck, title: "MSME Registered", desc: "Udyam classified enterprise" },
  { icon: Award, title: "DGS&D Rate Contract", desc: "Approved central government supplier" },
];

export default function Certificates() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Compliance & Quality"
        title="Certificates & Accreditations"
        subtitle="Audited, certified and empanelled across the standards that matter most for healthcare and government supply."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Certificates" }]}
      />
      <section className="py-20 lg:py-24">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <article className="bg-white rounded-2xl p-8 border border-border shadow-card-soft hover-lift h-full">
                <div className="h-14 w-14 rounded-xl bg-gradient-electric grid place-items-center text-white shadow-glow-blue">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
