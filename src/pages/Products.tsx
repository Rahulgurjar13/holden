import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { PRODUCTS } from "@/data/site";

export function ProductsList() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Products</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Our Portfolio</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                  Our <span className="text-accent">Products.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Six product lines engineered, customised and deployed across India's hospitals, municipalities and defence establishments.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-24 bg-paper-warm">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-5">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-2">
                    {p.short}
                  </div>
                  <h3 className="text-xl lg:text-2xl text-navy leading-tight group-hover:text-accent transition-colors duration-300 font-bold">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-foreground/65 line-clamp-2">
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
            <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-3">Custom Requirements?</div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight max-w-lg">
              We design and supply to your exact government specifications.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-white hover:text-navy transition-all duration-300 whitespace-nowrap"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/products" replace />;

  const others = PRODUCTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              <span className="text-border">›</span>
              <span className="text-navy">{product.name}</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Product</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
                  {product.name}
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  {product.short}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-20 lg:py-28 bg-paper">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-7">
            <div className="aspect-[4/3] overflow-hidden bg-muted shadow-elegant relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-4">Description</div>
              <p className="text-[17px] leading-relaxed text-foreground/75">{product.description}</p>
            </div>

            <div className="pt-8 border-t border-border">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-6">Available Variants</div>
              <ul className="space-y-3">
                {product.variants.map((v) => (
                  <li key={v} className="flex items-start gap-3 py-3 border-b border-border last:border-0">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-[15px] font-medium text-navy">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between gap-6 bg-navy hover:bg-accent text-paper px-8 py-4 transition-all duration-500"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">View Details</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 border border-navy text-navy hover:bg-navy hover:text-paper px-8 py-4 transition-all duration-500"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">Request a Quote</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-paper-warm border-t border-border">
        <div className="container">
          <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
            <div className="lg:col-span-3">
              <div className="text-[13px] uppercase tracking-wider text-accent font-bold">More Products</div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                Explore our other <span className="text-accent">product lines.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-x-6 gap-y-12">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to={`/products/${p.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-4">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-2">{p.short}</div>
                  <h3 className="text-xl text-navy font-bold group-hover:text-accent transition-colors">{p.name}</h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
