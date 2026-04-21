import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import { PRODUCTS } from "@/data/site";

export function ProductsList() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-hero-warm border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">Products</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 ">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Our Portfolio</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-heading-gradient leading-[1.02] tracking-tight text-balance font-extrabold">
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
                <Link to={`/products/${p.slug}`} className="group block">
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
                </Link>
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
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-hero-warm border-b border-border">
        <div className="container">
          <Reveal>
            <nav className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              <span className="text-border">›</span>
              <span className="text-navy">{product.name}</span>
            </nav>
            <div className="grid lg:grid-cols-12 gap-8 ">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">Product</div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl text-heading-gradient leading-[1.02] tracking-tight text-balance font-extrabold">
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
                  <li key={v} className="flex items-start gap-3 py-3  last:border-0">
                    <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-[15px] font-medium text-navy">{v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-between gap-6 bg-navy hover:bg-accent text-paper px-8 py-4 transition-all duration-500"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">Get in Touch</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
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

      {/* Ambulance-specific rich content */}
      {slug === "ambulances" && (
        <>
          {/* Four Feature Cards */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Leading The Way</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Advanced ambulances in <span className="text-accent">four pillars.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-border/20 border border-border">
                {[
                  {
                    num: "01",
                    title: "When Every Second Counts: Life Plus+ Ambulances",
                    body: "Our flagship Life Plus+ range of ambulances and mobile hospitals understands the critical nature of time in emergencies. These meticulously designed vehicles come pre-equipped with a comprehensive suite of medical amenities, ensuring life-saving support from the moment a patient enters the vehicle.",
                  },
                  {
                    num: "02",
                    title: "Customization at its Finest",
                    body: "We recognize that every emergency scenario is unique. That's why GHODU prioritizes high customization in our ambulances. We work closely with our clients to understand their specific needs and configure the Life Plus+ to perfectly match their requirements. This collaborative approach ensures each ambulance is not just a vehicle, but a vital extension of a medical team's capabilities.",
                  },
                  {
                    num: "03",
                    title: "Innovation for Unmatched Care",
                    body: "GHODU doesn't stop at just providing essential medical amenities. We integrate state-of-the-art medical gadgets into our ambulances, empowering paramedics to deliver the highest level of care. These cutting-edge technologies provide real-time patient monitoring, advanced life support systems, and the tools necessary to stabilize patients during transport.",
                  },
                  {
                    num: "04",
                    title: "Built to Save Lives",
                    body: "GHODU integrates state-of-the-art medical gadgets into our ambulances, empowering paramedics to deliver the highest level of care. Cutting-edge technologies provide real-time patient monitoring, advanced life support systems, and the tools necessary to stabilize patients during transport.",
                  },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={i * 0.08} className="group bg-paper p-7 hover:bg-navy transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-sm text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[17px] text-navy group-hover:text-white font-bold leading-snug transition-colors duration-300">{f.title}</h3>
                      <p className="text-[14px] leading-relaxed text-foreground/70 group-hover:text-white/65 transition-colors duration-300">{f.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Mission Statement */}
              <Reveal delay={0.15} className="mt-14 border-l-4 border-accent pl-8 py-2">
                <p className="text-lg lg:text-xl text-navy font-medium leading-[1.55]">
                  <span className="font-bold">At GHODU, our ultimate mission is clear:</span> to create ambulances that are instrumental in saving lives. Through exceptional design, unparalleled customization options, and cutting-edge technology integration, we empower medical professionals and equip them to deliver the best possible care in the most critical moments.
                </p>
              </Reveal>
            </div>
          </section>

          {/* BLS Ambulance */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Variant 01</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">The Basic Life Support (BLS) Ambulance</h2>
                  <p className="mt-3 text-[16px] text-accent font-bold uppercase tracking-wider">Providing Essential Care During Transport</p>
                </div>
              </Reveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <Reveal className="space-y-8">
                  <p className="text-[17px] leading-relaxed text-foreground/75">
                    BLS ambulances are the frontline responders in emergency medical transportation. They are equipped to provide critical medical support while transporting patients to the hospital.
                  </p>
                  <div className="space-y-0 border border-border">
                    {[
                      { label: "Automatic External Defibrillator (AED)", desc: "Used to restart a patient's heart in case of cardiac arrest." },
                      { label: "Vital Sign Monitoring Equipment", desc: "Continuously monitors a patient's heart rate, blood pressure, and oxygen levels." },
                      { label: "Pulse Oximeter", desc: "Measures the oxygen saturation in a patient's blood." },
                      { label: "Oxygen Delivery Systems", desc: "Provides supplemental oxygen to patients in respiratory distress." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5  last:border-0">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[15px] font-bold text-navy">{item.label}: </span>
                          <span className="text-[15px] text-foreground/70">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80"
                      alt="Basic Life Support Ambulance"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-paper-warm border border-border text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                    BLS Ambulance — Basic Life Support Unit
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* ALS Ambulance */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Variant 02</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">Advance Cardiac Life Support (ALS) Ambulance</h2>
                  <p className="mt-3 text-[16px] text-accent font-bold uppercase tracking-wider">Advanced Care on Wheels</p>
                </div>
              </Reveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <Reveal delay={0.1}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=1200&q=80"
                      alt="Advanced Life Support Ambulance interior"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 p-4 bg-paper border border-border text-[11px] uppercase tracking-wider text-muted-foreground font-bold">
                    ALS Ambulance — Advanced Cardiac Life Support Unit
                  </div>
                </Reveal>

                <Reveal className="space-y-8">
                  <p className="text-[17px] leading-relaxed text-foreground/75">
                    ACLS ambulances are designed for emergencies requiring a higher level of medical intervention compared to basic life support (BLS) ambulances.
                  </p>

                  <div className="space-y-0 border border-border">
                    {[
                      { label: "Key Features", desc: "Advanced medical equipment & Medications to address critical needs." },
                      { label: "Equipments", desc: "Supporting blood circulation." },
                      { label: "Ventilation", desc: "For providing breathing support." },
                      { label: "Trained Personnel", desc: "In advanced life support procedures." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-5  last:border-0">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[15px] font-bold text-navy">{item.label}: </span>
                          <span className="text-[15px] text-foreground/70">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold mb-5">Ideal for Critical Situations</div>
                    <div className="space-y-0 border border-border">
                      {[
                        "Cardiac arrest: Providing advanced cardiac interventions.",
                        "Severe respiratory distress: Utilizing advanced breathing machines.",
                        "Life-threatening trauma: Offering critical care for severely injured patients.",
                        "Other medical emergencies requiring advanced life support.",
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4 p-4  last:border-0">
                          <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-[14px] text-foreground/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Benefits — 5 Cards */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Ambulance Benefits</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    Why our ambulances are built <span className="text-accent">different.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-1 bg-white/5 border border-white/10">
                {[
                  { num: "01", title: "Safe Transport for Contagious Patients", desc: "Designed specifically to transport patients with airborne infectious diseases, minimizing the risk of spreading illness to paramedics and the environment." },
                  { num: "02", title: "HEPA Filtration", desc: "Equipped with a High-Efficiency Particulate Air (HEPA) filter that traps microscopic pathogens, preventing them from escaping the ambulance." },
                  { num: "03", title: "Negative Pressure Containment", desc: "Maintains an internal air pressure lower than the surrounding environment, creating a barrier that prevents contaminated air from leaking out." },
                  { num: "04", title: "Rapid Air Exchange", desc: "The air circulation system replaces the air inside the ambulance 12 times per hour, further reducing the risk of airborne transmission." },
                  { num: "05", title: "UV Disinfection", desc: "Utilizes ultraviolet (UV) light-emitting diode (LED) rods to neutralize pathogens and maintain a sterile environment inside the ambulance." },
                ].map((b, i) => (
                  <Reveal key={b.num} delay={i * 0.08} className="group bg-white/5 p-6 hover:bg-accent/20 transition-colors duration-500 border-r border-white/5 last:border-0">
                    <div className="space-y-4">
                      <span className="text-2xl font-extrabold text-white/20 block">{b.num}</span>
                      <h3 className="text-[16px] text-white font-bold leading-snug">{b.title}</h3>
                      <p className="text-[13px] leading-relaxed text-white/60">{b.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Health ATM-specific rich content */}
      {slug === "health-atm" && (
        <>
          {/* Intro — Making Preventative Healthcare Simple */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Overview</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Making Preventative Healthcare <span className="text-accent">Simple & Accessible.</span>
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal>
                  <p className="text-[18px] leading-relaxed text-foreground/75">
                    This innovative device makes preventive healthcare accessible. Operated via an Android app, it offers a range of vital assessments and securely stores your data in the cloud for remote access. Portable and convenient, HEALTH ATM empowers you to get quality care anytime, anywhere.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1200&q=80"
                      alt="Health ATM Kiosk"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Key Features — 8 Cards */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Key Features</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    A machine for simple, hassle-free <span className="text-accent">preventive diagnosis.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-border/20 border border-border">
                {[
                  { num: "01", title: "Basic & Advance Medical Check-up", desc: "Important features of the health ATM is different types of medical check-up. It can be covering multiple types of vital check-ups, blood check-ups, eye checkups and many more." },
                  { num: "02", title: "Getting Instant Medical Report", desc: "Few seconds can be taken by particular test so we can get the report instantly." },
                  { num: "03", title: "Doctor Consultation", desc: "Doctor consultation includes doctor's appointment booking, video calling and prescription report." },
                  { num: "04", title: "User-Friendly", desc: "It is easy to use. This system is an android application based." },
                  { num: "05", title: "Fully Automatic", desc: "All the analyser and devices are integrated with the application and result will be displayed on the screen." },
                  { num: "06", title: "Patient Registration", desc: "For performing the medical tests, first stage is patient registration this can be helps for managing patient data." },
                  { num: "07", title: "Data Retriever", desc: "All the data will be store on the cloud with expandable and graphical Structure." },
                  { num: "08", title: "Power Consumption", desc: "Less power consumption." },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={(i % 4) * 0.08} className="group bg-paper p-7 hover:bg-navy transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-sm text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[17px] text-navy group-hover:text-white font-bold leading-snug transition-colors duration-300">{f.title}</h3>
                      <p className="text-[14px] leading-relaxed text-foreground/70 group-hover:text-white/65 transition-colors duration-300">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Core Functionalities — 9 items */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Core Functionalities</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Built for <span className="text-accent">complete health screening.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-3 gap-x-6 gap-y-10">
                {[
                  { num: "01", title: "Basic and Advanced Medical", desc: "Android app interface simplifies operation. Each test is designed for ease of use, allowing anyone to perform self-checkups." },
                  { num: "02", title: "Doctor Consultation", desc: "Android app interface simplifies operation. Each test is designed for ease of use, allowing anyone to perform self-checkups." },
                  { num: "03", title: "Fast and Instant Reports", desc: "Receive results for most tests within seconds, allowing for immediate consultation and treatment decisions." },
                  { num: "04", title: "Fully Automated", desc: "Integrated analyzers and devices work seamlessly with the app. Results are displayed directly on the screen for easy access." },
                  { num: "05", title: "Patient Management", desc: "Simple patient registration initiates the process. Secure cloud storage keeps patient data organized and accessible." },
                  { num: "06", title: "Data Storage and Visualization", desc: "All the data will be store on the cloud with expandable and graphical Structure." },
                  { num: "07", title: "Blood Testing", desc: "Requires minimal blood samples, often just a single drop, for efficient testing." },
                  { num: "08", title: "Energy Efficient", desc: "Designed for low power consumption, making it suitable for various settings." },
                  { num: "09", title: "User-friendly, registered with e-Sanjeevni", desc: "Book appointments with healthcare professionals. Conduct video consultations via the government's e-Sanjeevni portal for seamless care delivery." },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={(i % 3) * 0.08}>
                    <div className="border-t-2 border-accent pt-6 space-y-3 h-full">
                      <span className="text-xs text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[18px] text-navy font-bold leading-snug">{f.title}</h3>
                      <p className="text-[14px] leading-relaxed text-foreground/65">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Health ATM Models — 4 Models */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">ATM Models</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    We currently offer <span className="text-accent">4 Models</span> in our Health ATM Range.
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white/5 border border-white/10">
                {[
                  { num: "01", title: "Basic Health ATM Machine", desc: "75 Regular TEST." },
                  { num: "02", title: "Smart Health ATM Machine", desc: "Features of Basic Model with Consumables and HbA1c device." },
                  { num: "03", title: "Advance Health ATM Machine", desc: "Features of Smart Model with KFT and LFT." },
                  { num: "04", title: "Advance Plus Health ATM Machine", desc: "Features of Advance Model with 30 Added Tests and Consumables." },
                ].map((m, i) => (
                  <Reveal key={m.num} delay={i * 0.1} className="group p-8 border-r border-white/5 last:border-0 hover:bg-accent/20 transition-colors duration-500">
                    <div className="space-y-5">
                      <span className="text-4xl font-extrabold text-white/15 block">{m.num}</span>
                      <h3 className="text-[18px] text-white font-bold leading-snug">{m.title}</h3>
                      <p className="text-[14px] text-white/60 leading-relaxed">{m.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* PSA Oxygen Generation Plant-specific rich content */}
      {slug === "psa" && (
        <>
          {/* Intro — State-of-the-Art On-Site Oxygen Generation */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Overview</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    State-of-the-Art <span className="text-accent">On-Site Oxygen Generation.</span>
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal>
                  <p className="text-[18px] leading-relaxed text-foreground/75">
                    In recent years we have invested heavily in a cutting-edge production facility and focused on smart design of our O2 equipment. This approach enabled us to significantly cut down on variable costs. GHODU modular oxygen equipment is of premium quality, and we have simplified our production process, lowered our storage costs and unified sourcing to get better prices. The result is highly competitive prices for you as our customer compared to those of other oxygen plant manufacturers.
                  </p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1581093196277-9f608bb3b2b1?auto=format&fit=crop&w=1200&q=80"
                      alt="PSA Oxygen Generation Plant"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* PSA Technology */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Technology</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    GHODU PSA <span className="text-accent">(Oxygen Generation Plant) Technology.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <Reveal className="space-y-6 text-[17px] leading-relaxed text-foreground/75">
                  <p>
                    GHODU's new oxygen generator uses <span className="font-semibold text-navy">Pressure Swing Adsorption technology</span> to isolate oxygen molecules from other molecules in compressed air. The result is high purity oxygen at the outlet of the generator. The OF series is a very cost-efficient source of oxygen used in various industries like waste water treatment, ozone production, health care, glass industry, and many others.
                  </p>
                  <p>
                    Through an ever ongoing process we are always focussed on developing our systems more cost-effective and ahead of the competition in terms of quality, performance and price. GHODU's hospital oxygen Gas generators are manufactured in accordance with all relevant international codes & standards <span className="font-semibold text-navy">(ASME, ANSI, TEMA C)</span>. Oxygen produced meets the <span className="font-semibold text-navy">United States Pharmacopeia (USP) XXI Oxygen 93% Monograph.</span>
                  </p>
                </Reveal>

                <Reveal delay={0.1} className="space-y-6">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold flex items-center gap-4">
                    <span className="h-px w-8 bg-accent" />
                    Advantages of PSA
                  </div>
                  <div className="space-y-4 text-[16px] leading-relaxed text-foreground/75">
                    <p>Medical oxygen is often used in the course of medical assistance and the treatment of patients. With the GHODU MED range, we have developed special generators for in-house production of oxygen for mobile and stationary medicine.</p>
                    <p>The generators with innovative and energy-saving POC technology have been designed and developed in compliance with the strict quality management specifications of <span className="font-semibold text-navy">ISO 13485:2016 and ISO 7396-1:2016</span>. They are certified in accordance with the <span className="font-semibold text-navy">Medical Device Directive 93/42/EEC</span> and the gas quality of the oxygen produced complies with the standards of the European Pharmacopoeia for medical applications.</p>
                  </div>

                  <div className="border border-border space-y-0">
                    {[
                      "No safety risks of handling high-pressure cylinders",
                      "Safe delivery; controlled flow and uninterrupted gas",
                      "Easily installed in addition to any existing oxygen supply (cylinders, cryogenic or other PSA systems)",
                      "Generate the O2 you need, when and where you need it",
                      "Remove the hassle of handling cylinders",
                      "Advanced central control system carefully operates the system ensuring the desired oxygen quantity and quality is supplied",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 p-4  last:border-0">
                        <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span className="text-[15px] text-foreground/75">{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Why Choose Us — 6 Cards */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Why Choose Us</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    Six reasons to choose <span className="text-accent">GHODU PSA.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/10">
                {[
                  {
                    title: "Lowest Energy Consumption",
                    desc: "HOLOF OXYFRESH PSA (Oxygen Generation Plant) come with the lowest energy consumption on the market. Thanks to our continuous R&D, power consumption is as low as 0.55 kW/Nm3 @ 93% purity.",
                  },
                  {
                    title: "Highest Quality",
                    desc: "Our production is streamlined to a great extent. All materials meet offshore specifications which ensures superior quality. Pipe sets are made from SS316L, surfaces are powder coated in C4 grade paint.",
                  },
                  {
                    title: "24-Hour Support",
                    desc: "If you are in urgent need of service our service team is ready to assist you remotely 24/7. Together with our numerous service partners worldwide we carry out service to keep your oxygen plant operational.",
                  },
                  {
                    title: "Full Compliance",
                    desc: "GHODU PSA (Oxygen Generation Plant) can be used for medical use worldwide. We offer 100% compliance with European Pharmacopoeia, ISO 7396-1, MDD (Medical Device Directive), PED (Pressure Equipment Directive) and CE medical certification.",
                  },
                  {
                    title: "Full Independency",
                    desc: "With GHODU PSA (Oxygen Generation Plant), you will get a secure and constant source of pure oxygen. Produced directly at the hospital, the oxygen is available when you need it. No oxygen shortage due to running out of gas.",
                  },
                  {
                    title: "Quick ROI (1–2 Years)",
                    desc: "Power consumption is more than 40% lower than any other oxygen generator on the market. Overall cost reduction up to 80% in comparison with cylinders. No on-going costs (refills, delivery and transportation charges etc.).",
                  },
                ].map((c, i) => (
                  <Reveal key={c.title} delay={(i % 3) * 0.08} className="group p-8 border-r border-b border-white/5 hover:bg-accent/20 transition-colors duration-500">
                    <div className="space-y-4">
                      <h3 className="text-[18px] text-white font-bold leading-snug">{c.title}</h3>
                      <p className="text-[14px] text-white/60 leading-relaxed">{c.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* LMO-specific rich content */}
      {slug === "lmo" && (
        <>
          {/* Intro — Full Range of Cryogenic Storage */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Overview</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Full range of cryogenic liquid <span className="text-accent">storage & transport tanks.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <Reveal>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80"
                      alt="LMO Cryogenic Storage Tanks"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>

                <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-foreground/75">
                  <p>
                    We offer full range of cryogenic liquid storage and transport tanks for <span className="font-semibold text-navy">Liquid oxygen (LOX), Liquid Nitrogen (LIN), Liquid Argon (LAR) and Liquid Carbon dioxide (LCO2)</span> service. We also offer PUF insulated Carbon dioxide Transport and storage vessels with or without vapour condensing units.
                  </p>
                  <p>
                    Our products range also include pressure vessels for difference refrigerant gases, flammable and toxic gases designed as per specific customer requirement which include <span className="font-semibold text-navy">LPG, Ammonia, Propane, R32</span> etc. The vessels are manufactured as per client requirements both vertical and horizontal options that are suitable to use outdoors.
                  </p>
                  <p>
                    The cryogenic vessels are double walled cylindrical tanks with inner stainless steel and outer carbon steel painted with anti corrosion PU Paints. The annular space is filled with insulation with perlite or multi layer superinsulation and evacuated to high vacuum to achieve minimum evaporation losses.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Technical Standards</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Engineered to <span className="text-accent">international standards.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <Reveal className="space-y-6 text-[17px] leading-relaxed text-foreground/75">
                  <p>
                    Despite of complicated design and engineering parameters, SFPL cryogenic vessels are very safe and easy to operate. The design standards adopted are as per <span className="font-semibold text-navy">EN, ASME for cryogenic vessels and PD-5500, I.S.2825 and EN-13445</span> for other pressure vessels.
                  </p>
                  <p>The capacity is ranging from <span className="font-semibold text-navy">1m³ to 150m³</span> for horizontal and vertical installation.</p>
                  <p>
                    The working pressure is from <span className="font-semibold text-navy">2 bar to 30 bar</span> and design temperature from <span className="font-semibold text-navy">55°C to -196°C</span>. Our workshop has approval for Indian supply from Petroleum and Safety Organisation (PESO) Nagpur. For exports, our tanks are designed and manufactured as per different international standards i.e. <span className="font-semibold text-navy">EN | ISO | ASME</span> etc. under the approval of various inspection agencies.
                  </p>
                  <p>
                    We are an <span className="font-semibold text-navy">ISO 9001:2015 certified company</span> and manufacturing pressure vessels since its inception in 1996.
                  </p>
                  <p>
                    We are counted amongst the known manufacturers of Cryogenic Vessels, Storage Tank, Vacuum Insulated Pipe Line etc. We offer these products at most affordable prices.
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group mb-6">
                    <img
                      src="https://images.unsplash.com/photo-1618944913157-f8e2fcd5df56?auto=format&fit=crop&w=1200&q=80"
                      alt="LMO Cryogenic Storage Tanks at facility"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Spec Cards */}
                  <div className="grid grid-cols-2 gap-1 border border-border bg-border/20">
                    {[
                      { label: "Capacity Range", value: "1m³ – 150m³" },
                      { label: "Pressure Range", value: "2 – 30 bar" },
                      { label: "Temperature Range", value: "55°C to –196°C" },
                      { label: "Certification", value: "ISO 9001:2015 | PESO" },
                    ].map((s) => (
                      <div key={s.label} className="p-5 bg-paper border-r  last:border-0">
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold mb-1">{s.label}</div>
                        <div className="text-[17px] font-bold text-navy">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Additional Product Range — 6 Cards */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Also Available</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    Apart from major equipment, our product range also includes <span className="text-accent">the following.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 border border-white/10">
                {[
                  { num: "01", title: "Ambient Air Heated Vaporizers", desc: "Star fin Aluminum material for low pressure applications." },
                  { num: "02", title: "High Pressure Vaporizers", desc: "Ambient air heated vaporizers of star fin Aluminum with S.S. pipe liner for High pressure application." },
                  { num: "03", title: "Vacuum Insulated Pipe Lines", desc: "For cryogenic liquids with MLSI (Multi Layer Super Insulation)." },
                  { num: "04", title: "Cryogenic Process Unit", desc: "For cryo treatment of metals." },
                  { num: "05", title: "Skid Mounted Tanks", desc: "Custom-configured skid mounted cryogenic storage solutions." },
                  { num: "06", title: "LNG Cryogenic Storage", desc: "Cryogenic storage and transport tanks for Liquefied Natural Gas (LNG)." },
                ].map((item, i) => (
                  <Reveal key={item.num} delay={(i % 3) * 0.08} className="group p-8 border-r border-b border-white/5 hover:bg-accent/20 transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-4xl font-extrabold text-white/15 block">{item.num}</span>
                      <h3 className="text-[17px] text-white font-bold leading-snug">{item.title}</h3>
                      <p className="text-[14px] text-white/60 leading-relaxed">{item.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Sanitary Napkin Vending Machine-specific rich content */}
      {slug === "sanitary-napkin-vending-machine" && (
        <>
          {/* Intro */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Overview</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Manufacturing & designing <span className="text-accent">menstrual product dispensers.</span>
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Reveal>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1578496779937-3815e442abed?auto=format&fit=crop&w=1200&q=80"
                      alt="Sanitary Napkin Vending Machine"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="space-y-5 text-[17px] leading-relaxed text-foreground/75">
                  <p>
                    We, Ghodu Infotech Pvt. Ltd. is a manufacturing and designing company of menstrual product dispensers used by <span className="font-semibold text-navy">Commercial, Government and Institutional facilities</span> across India.
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Features — 3 Items */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Features</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    India's most <span className="text-accent">advanced vending solution.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-3 gap-1 bg-border/20 border border-border">
                {[
                  { num: "01", title: "India's First OTP-Based Sanitary Napkin Vending Machine", desc: "Ensuring secure and convenient access — machine will dispense pad only after verification of mobile number by OTP." },
                  { num: "02", title: "Real-Time Monitoring", desc: "Provides up-to-the-minute updates for efficient inventory management and control of misbilling / miscounting / leakage." },
                  { num: "03", title: "Comprehensive Dashboard", desc: "A centralized view of multiple machines installed at various locations to generate reports for calculation of used pads." },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={i * 0.1} className="group bg-paper p-8 hover:bg-navy transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-sm text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[18px] text-navy group-hover:text-white font-bold leading-snug transition-colors duration-300">{f.title}</h3>
                      <p className="text-[14px] leading-relaxed text-foreground/70 group-hover:text-white/65 transition-colors duration-300">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Advanced Features — 5 Items */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Advanced Features</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Technology that works <span className="text-accent">smarter for you.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-3 lg:grid-cols-5 gap-1 bg-border/20 border border-border">
                {[
                  { num: "01", title: "Future-proof Technology", desc: "Utilizes IoT for efficient and reliable operation." },
                  { num: "02", title: "OTP-based Dispensing", desc: "Eliminates the need for apps, offering seamless access." },
                  { num: "03", title: "Real-time Reporting", desc: "Provides instant insights for better management." },
                  { num: "04", title: "Automated Alerts", desc: "Sends notifications to administrators regarding inventory levels and other critical updates." },
                  { num: "05", title: "Enhanced Security", desc: "Ensures safe and secure operation for users." },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={i * 0.08} className="group bg-paper p-6 hover:bg-navy transition-colors duration-500">
                    <div className="space-y-3">
                      <span className="text-sm text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[16px] text-navy group-hover:text-white font-bold leading-snug transition-colors duration-300">{f.title}</h3>
                      <p className="text-[13px] leading-relaxed text-foreground/70 group-hover:text-white/65 transition-colors duration-300">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Option of Dispensing — 2 Options + How It Contributes */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              {/* Dispensing Options */}
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Dispensing Options</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    Two modes for <span className="text-accent">every user.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 gap-1 bg-white/5 border border-white/10">
                {[
                  { num: "01", title: "OTP-Based For Urban Population", desc: "Machine will dispense pad only after verification of mobile number by OTP." },
                  { num: "02", title: "Timed-Controlled Push Button for Rural Population", desc: "For un-verified users / less mobile-savvy users. Machines will dispense pad only by easy pressing the single button." },
                ].map((d, i) => (
                  <Reveal key={d.num} delay={i * 0.1} className="group p-10 border-r border-white/5 last:border-0 hover:bg-accent/20 transition-colors duration-500">
                    <div className="space-y-5">
                      <span className="text-5xl font-extrabold text-white/15 block">{d.num}</span>
                      <h3 className="text-[20px] text-white font-bold leading-snug">{d.title}</h3>
                      <p className="text-[15px] text-white/60 leading-relaxed">{d.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* How It Contributes */}
              <div className="mt-16">
                <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                  <div className="lg:col-span-3">
                    <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Impact</div>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                      How it <span className="text-accent">contributes.</span>
                    </h2>
                  </div>
                </Reveal>

                <div className="mt-8 space-y-0 border border-white/10">
                  {[
                    { num: "01", title: "Ensures Consistent Supply", desc: "Guarantees readily available sanitary napkins for users." },
                    { num: "02", title: "Prevents Misuse & Theft", desc: "OTP verification and smart controls prevent unauthorised access and theft." },
                    { num: "03", title: "Detects Refill Discrepancies", desc: "Real-time monitoring detects and flags any refill inconsistencies automatically." },
                    { num: "04", title: "Empowers Informed Management", desc: "Dashboard analytics enable data-driven decisions for facility managers." },
                  ].map((c, i) => (
                    <Reveal key={c.num} delay={i * 0.06}>
                      <div className="grid lg:grid-cols-12 gap-6 items-start p-6 lg:p-8 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors duration-300">
                        <div className="lg:col-span-1">
                          <span className="text-xs text-accent font-bold tracking-widest">{c.num}</span>
                        </div>
                        <div className="lg:col-span-4">
                          <h3 className="text-[18px] text-white font-bold">{c.title}</h3>
                        </div>
                        <div className="lg:col-span-7">
                          <p className="text-[15px] text-white/60 leading-relaxed">{c.desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SBM & SWM-specific rich content */}
      {slug === "sbm-swm" && (
        <>
          {/* Intro — OEM Introduction */}
          <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">OEM Introduction</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Introduction of <span className="text-accent">"Swachh Bharat Mission" Products.</span>
                  </h2>
                </div>
              </Reveal>
              <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <Reveal>
                  <div className="aspect-[4/3] overflow-hidden bg-muted group">
                    <img
                      src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80"
                      alt="SBM SWM Manufacturing"
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1} className="space-y-6 text-[17px] leading-relaxed text-foreground/75">
                  <p>
                    We, Ghodu Infotech Private Limited, are OEM of all type of <span className="font-semibold text-navy">"Swachh Bharat Mission Products"</span> like Garbage Hopper/Tipper, Dustbins, Wheel Barrow, Garbage Tricycle/e-rickshaw, Sludge Suction Machine, Refuse Compactor, Dumper Placer, Bio Toilets (Modular, Portable and Mobile), Sprinkle Water, Road Sweeping Machine and other related Products.
                  </p>
                  <p>
                    Our range also includes Recovery Vehicle, Fire Fighting Equipment, Sky lift, Water Tanker, Hydraulic trolley and all type of Agriculture Equipment and Bio Medical Waste Disinfection System (UVR & Microwave based Dual).
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Product Range — Items 01-04 (hover-to-navy card grid) */}
          <section className="py-20 lg:py-24 bg-paper border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 ">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Product Range</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-navy font-extrabold">
                    Advance technology making our products <span className="text-accent">unique in India.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-border/20 border border-border">
                {[
                  { num: "01", title: "Road Sweeping Machine", desc: "Truck-mounted vacuum road cleaning machines for municipal roads, streets, and industrial purposes. Reinventing the road cleaning sector with best-in-class technology." },
                  { num: "02", title: "Hopper, Tipper, Dumper", desc: "Fully-built Garbage Tipper segregating Wet & Dry waste. PTO-driven Hydraulic tipping mechanism with 80-85° angle — ideal for tipping waste into Refuse Compactors." },
                  { num: "03", title: "Refuse Compactor", desc: "Leading Manufacturer & Supplier of Refuse and Garbage Compactors from India. Easy-handle design allowing bin handlers to unload Solid Waste with minimum physical effort and maximum safety." },
                  { num: "04", title: "Sky Lift", desc: "Wide range of street light repairing lift services — cherry picker, 9-meter sky lift machine, hydraulic aerial access platform, hydraulic lift and hydraulic lifting sky lift." },
                ].map((f, i) => (
                  <Reveal key={f.num} delay={i * 0.08} className="group bg-paper p-7 hover:bg-navy transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-sm text-accent font-bold tracking-widest block">{f.num}</span>
                      <h3 className="text-[17px] text-navy group-hover:text-white font-bold leading-snug transition-colors duration-300">{f.title}</h3>
                      <p className="text-[14px] leading-relaxed text-foreground/70 group-hover:text-white/65 transition-colors duration-300">{f.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Product Range — Items 05-08 (dark navy strip) */}
          <section className="py-20 lg:py-24 bg-navy border-t border-border">
            <div className="container">
              <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-white/10">
                <div className="lg:col-span-3">
                  <div className="text-[13px] uppercase tracking-wider text-accent font-bold">More Products</div>
                </div>
                <div className="lg:col-span-9">
                  <h2 className="text-3xl lg:text-4xl text-white font-extrabold">
                    Comprehensive SBM infrastructure <span className="text-accent">solutions.</span>
                  </h2>
                </div>
              </Reveal>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-1 bg-white/5 border border-white/10">
                {[
                  {
                    num: "05",
                    title: "Hydraulic Tractor Trolley",
                    desc: "Superior grade material, industry-standard design. Available in different models and capacities, modifiable per client requirements.",
                    features: ["Heavy duty clearance", "Branded hydraulic pump", "Rigid axle", "Extra load capacity", "Customized back gate"],
                  },
                  {
                    num: "06",
                    title: "Cattle Catcher",
                    desc: "Hydro-mechanical cattle catcher vehicles for stacking, emptying and shipping. Non-slip, checkered floor design. Certified Manufacturer, Supplier and Exporter.",
                  },
                  {
                    num: "07",
                    title: "Suction cum Sewer Jetting Machine",
                    desc: "High-capacity Suction-Jetting system for superior sewer line cleaning with high productivity. Easy operations, low maintenance, hydraulic rear door opening.",
                  },
                  {
                    num: "08",
                    title: "Mobile Toilet",
                    desc: "FRP modular rectangular mobile toilet, FRP bio toilet, FRP portable toilet, wheel operated portable toilet, portable western toilets and FRP paint coated portable toilet.",
                  },
                ].map((item, i) => (
                  <Reveal key={item.num} delay={i * 0.1} className="group p-8 border-r border-white/5 last:border-0 hover:bg-accent/20 transition-colors duration-500">
                    <div className="space-y-4">
                      <span className="text-4xl font-extrabold text-white/15 block">{item.num}</span>
                      <h3 className="text-[17px] text-white font-bold leading-snug">{item.title}</h3>
                      <p className="text-[13px] text-white/60 leading-relaxed">{item.desc}</p>
                      {item.features && (
                        <div className="pt-3 space-y-2">
                          {item.features.map(f => (
                            <div key={f} className="flex items-center gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" />
                              <span className="text-[12px] text-white/60">{f}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Related Products */}
      <section className="py-20 bg-paper-warm border-t border-border">
        <div className="container">
          <Reveal className="grid lg:grid-cols-12 gap-8 ">
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
