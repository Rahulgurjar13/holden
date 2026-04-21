import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "@/data/site";
import { Reveal } from "./Reveal";

export default function Products() {
  return (
    <section id="products" className="py-10 lg:py-12 bg-paper-warm">
      <div className="container">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-8 pb-8 border-b border-border">
          <div className="lg:col-span-3">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold">
              02 / Portfolio
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-6xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
              Six product lines.<br />
              <span className="text-accent">Engineered for India.</span>
            </h2>
          </div>
          <div className="lg:col-span-3 flex lg:items-end">
            <p className="text-sm text-foreground/70 leading-relaxed">
              Customised, deployed and maintained across hospitals, municipalities and defence establishments.
            </p>
          </div>
        </Reveal>

        {/* Product list — magazine grid */}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link to={`/products/${p.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    width={1024}
                    height={1280}
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-paper bg-navy/80 backdrop-blur px-2.5 py-1.5 font-bold">
                      0{i + 1} / 0{PRODUCTS.length}
                    </span>
                    <div className="h-9 w-9 grid place-items-center bg-paper text-navy translate-y-1 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                    {p.short}
                  </div>
                </div>
                <h3 className="text-xl lg:text-[24px] text-navy leading-tight group-hover:text-accent transition-colors duration-300 font-bold">
                  {p.name}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-foreground/70 line-clamp-2">
                  {p.description}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex flex-wrap gap-x-4 gap-y-1.5">
                  {p.variants.slice(0, 3).map((v) => (
                    <span key={v} className="text-[11px] uppercase tracking-wider text-foreground/60 font-bold">
                      {v}
                    </span>
                  ))}
                  {p.variants.length > 3 && (
                    <span className="text-[11px] uppercase tracking-wider text-accent font-bold">
                      +{p.variants.length - 3}
                    </span>
                  )}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
