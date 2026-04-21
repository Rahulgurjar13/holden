import SiteLayout from "@/components/site/SiteLayout";
import ContactSection from "@/components/site/Contact";
import { Reveal } from "@/components/site/Reveal";
import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-hero-warm border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Contact Us</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 ">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Get In Touch</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-heading-gradient leading-[1.02] tracking-tight text-balance font-extrabold">
                  Contact{" "}
                  <span className="text-accent">Holden India.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Tenders, partnerships, project enquiries — our team responds within one business day.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </SiteLayout>
  );
}
