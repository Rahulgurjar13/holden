import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { MEDIA } from "@/data/site";

const accentImages = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1200&q=80",
];

export default function Media() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Media Center</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">News & Insights</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                  Media <span className="text-accent">Center.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Press, project stories and industry perspectives from Holden India.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 lg:py-28 bg-paper-warm">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {MEDIA.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <a
                  href={m.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-6">
                    <img
                      src={accentImages[i]}
                      alt={m.title}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider text-muted-foreground mb-4 font-bold">
                    <span>{m.date}</span>
                    <span className="h-px w-6 bg-border" />
                    <span className="text-accent">Article</span>
                  </div>
                  <h3 className="text-xl lg:text-2xl text-navy leading-tight group-hover:text-accent transition-colors duration-300 text-balance font-bold mb-3">
                    {m.title}
                  </h3>
                  <p className="text-[14px] leading-[1.65] text-foreground/65 mb-5">{m.excerpt}</p>
                  <div className="inline-flex items-center gap-2 text-[12px] uppercase tracking-wider text-navy group-hover:text-accent transition-colors font-bold">
                    Read More <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <Reveal>
            <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-3">Stay Updated</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-lg">
              Interested in project collaborations or media enquiries?
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
