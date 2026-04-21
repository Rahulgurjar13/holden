import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Link, useParams, Navigate } from "react-router-dom";
import { PRODUCTS } from "@/data/site";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function ProductsList() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What We Manufacture"
        title="Our Products"
        subtitle="Six product lines engineered, customised and deployed across India's hospitals, municipalities and defence establishments."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Products" }]}
      />
      <section className="py-20 lg:py-24">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                to={`/products/${p.slug}`}
                className="group block h-full relative overflow-hidden rounded-2xl bg-white border border-border shadow-card-soft hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 to-transparent opacity-60" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-navy group-hover:text-electric transition-colors">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{p.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric group-hover:gap-3 transition-all">
                    Learn More <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
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
      <PageHero
        eyebrow="Product"
        title={product.name}
        subtitle={product.short}
        breadcrumbs={[
          { label: "Home", to: "/" },
          { label: "Products", to: "/products" },
          { label: product.name },
        ]}
      />
      <section className="py-20 lg:py-24">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <Reveal>
            <div className="rounded-2xl overflow-hidden shadow-elegant aspect-[4/3]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy">{product.name}</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">{product.description}</p>

            <h3 className="mt-10 font-display text-lg font-bold text-navy uppercase tracking-wider text-sm">Available Variants</h3>
            <ul className="mt-4 space-y-3">
              {product.variants.map((v) => (
                <li key={v} className="flex items-start gap-3 p-4 rounded-lg bg-steel border border-border">
                  <CheckCircle2 className="h-5 w-5 text-electric shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-navy">{v}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 bg-navy hover:bg-electric text-white font-semibold px-7 py-4 rounded-md transition-all duration-300 btn-glow"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 bg-gradient-section">
        <div className="container">
          <Reveal className="text-center mb-14">
            <h2 className="underline-accent font-display text-3xl lg:text-4xl font-extrabold text-navy">Explore More Products</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-7">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-border shadow-card-soft hover-lift"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-navy group-hover:text-electric transition-colors">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
