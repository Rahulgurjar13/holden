import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const certs = [
  { num: "01", title: "ISO 9001:2015", desc: "Quality Management System — ensures consistent, auditable processes across manufacturing and supply operations." },
  { num: "02", title: "ISO 13485", desc: "Medical Devices Quality Management System — international standard for medical device design, production, and distribution." },
  { num: "03", title: "CDSCO License", desc: "Central Drugs Standard Control Organisation — authorised for medical device manufacturing & distribution across India." },
  { num: "04", title: "GeM Verified Seller", desc: "Government e-Marketplace empanelment — certified and verified for direct government procurement portals." },
  { num: "05", title: "MSME Registered", desc: "Udyam classified enterprise — eligible for government priority in procurement under MSME frameworks." },
  { num: "06", title: "DGS&D Rate Contract", desc: "Approved central government supplier under Directorate General of Supplies & Disposals rate contract." },
];

export default function Certificates() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-hero-warm border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Certificates</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 ">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Compliance & Quality</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-heading-gradient leading-[1.02] tracking-tight text-balance font-extrabold">
                  Certificates &{" "}
                  <span className="text-accent">Accreditations.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Audited, certified and empanelled across the standards that matter most for healthcare and government supply.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certificates Editorial List */}
      <section className="py-20 lg:py-24 bg-paper">
        <div className="container">
          <div>
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-start py-10 lg:py-12  hover:bg-paper-warm/60 transition-colors duration-500 -mx-6 px-6 lg:-mx-10 lg:px-10">
                  <div className="lg:col-span-1">
                    <span className="font-mono text-xs text-accent">{c.num}</span>
                  </div>
                  <div className="lg:col-span-4">
                    <h3 className="text-2xl lg:text-3xl text-navy font-bold leading-tight">
                      {c.title}
                    </h3>
                  </div>
                  <div className="lg:col-span-6">
                    <p className="text-[16px] leading-[1.65] text-foreground/70">{c.desc}</p>
                  </div>
                  <div className="lg:col-span-1 flex lg:justify-end">
                    <div className="h-10 w-10 grid place-items-center border border-border text-navy group-hover:bg-navy group-hover:border-navy group-hover:text-paper transition-all duration-500">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Navy CTA */}
      <section className="bg-navy py-20">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-3">Need Verification?</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-lg">
              Request our compliance documents and certifications directly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-white hover:text-navy transition-all duration-300 whitespace-nowrap"
            >
              Contact Us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
