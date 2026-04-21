import SiteLayout from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import facility from "@/assets/about-facility.jpg";
import team from "@/assets/about-team.jpg";

const pillars = [
  {
    id: "vision",
    num: "01",
    title: "Our Vision",
    href: "/about#vision",
    body: "We want to be your preferred, Innovative supplier of Quality Oxygen, Nitrogen, Acetylene, Nitrous Oxide, Carbon-di-oxide Generation Plants demonstrating Environmental awareness without compromising Our Quality Policy.",
  },
  {
    id: "mission",
    num: "02",
    title: "Our Mission",
    href: "/about#mission",
    body: "We offer innovative and customised solutions catering to specialised application requirements of varied industries and thereby, ensure the availability of quality air and gas for all applications.",
  },
  {
    id: "why-us",
    num: "03",
    title: "Why Us",
    href: "/about#why-us",
    body: "Our infrastructure is designed to meet diverse client needs and deliver tailor-made solutions. Research plays a pivotal role in the entire development process, from product ideation to defining the manufacturing process.",
  },
];

const stats = [
  { value: "16+", label: "Years of Service" },
  { value: "120+", label: "Projects Delivered" },
  { value: "20+", label: "States Covered" },
  { value: "100%", label: "Govt. Business" },
];

export default function About() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-28 pb-10 lg:pt-32 lg:pb-14 bg-hero-warm border-b border-border">
        <div className="container">
          <Reveal>
            {/* Breadcrumb */}
            <nav className="mb-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">About Us</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-8 ">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
                  About Our Company
                </div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-heading-gradient leading-[1.02] tracking-tight text-balance font-extrabold">
                  A 16-year flagship in India's healthcare{" "}
                  <span className="text-accent">manufacturing & supply.</span>
                </h1>
                <p className="mt-8 text-lg lg:text-xl text-foreground/75 max-w-2xl leading-[1.55]">
                  Ghodu Infotech Pvt. Ltd. — manufacturer, authorised distributor and turn-key infrastructure partner to government, defence and tertiary healthcare.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-navy py-12">
        <div className="container">
          <div className="flex flex-wrap items-center gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && <div className="h-10 w-px bg-white/15 mx-4 lg:mx-8" />}
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-white tabular leading-none">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1.5 font-bold">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 bg-paper">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-7 space-y-6">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold flex items-center gap-4">
              <span className="h-px w-8 bg-accent" />
              Who We Are
            </div>
            <h2 className="text-4xl lg:text-5xl text-navy leading-[1.05] tracking-tight font-extrabold text-balance">
              Engineering critical healthcare infrastructure for the nation.
            </h2>
            <div className="space-y-5 text-[17px] leading-relaxed text-foreground/75">
              <p>
                Ghodu Infotech Pvt. Ltd is an established and leading healthcare products manufacturing & trading company only in Government business supplying medicines, surgical, disposables and medical devices to central government agencies, central government hospitals & Défense Medical establishment across India.
              </p>
              <p>
                Ghodu Infotech Private Limited is a flagship Company from last 16 years and has been into the business of serving the agencies in health care. The entire product array is designed and manufactured using modern technology at our own facility.
              </p>
              <p>
                We are an exclusive authorized distributor/channel partner for many leading companies namely{" "}
                <span className="text-navy font-bold">Getinge, Trivitron, New Red Lab Equipment's, Reliance Life Sciences Ltd, Abbott Healthcare India Pvt. Ltd, Cipla Ltd, Ranbaxy Laboratories Ltd, Lupin Ltd, Gland Pharma Ltd, Glenmark Pharmaceuticals Ltd.</span>{" "}
                We look forward to your valuable response and ready to serve your state.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="relative group">
              <div className="aspect-[3/2] overflow-hidden bg-muted shadow-elegant relative">
                <img
                  src={facility}
                  alt="Holden India facility"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
                  <div className="text-[11px] uppercase tracking-wider text-paper/80 font-bold">
                    Holden India — Modular OT Facility
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden xl:block w-32 h-32 bg-accent/10 -z-10" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision / Mission / Why Us */}
      <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
        <div className="container">
          <Reveal className="grid lg:grid-cols-12 gap-8 ">
            <div className="lg:col-span-3">
              <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Our Pillars</div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-4xl lg:text-5xl text-navy leading-[1.05] tracking-tight font-extrabold">
                Vision, Mission & <span className="text-accent">Why Us.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-1 bg-border/20 border border-border">
            {pillars.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 0.1}
                className="group relative bg-paper p-7 lg:p-10 hover:bg-navy transition-colors duration-500"
              >
                <Link to={`/about#${p.id}`} className="block space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-accent font-bold tracking-widest group-hover:text-accent">{p.num}</span>
                    <div className="h-10 w-10 border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl lg:text-3xl text-navy group-hover:text-white leading-tight mb-4 font-bold transition-colors duration-300">
                      {p.title}
                    </h3>
                    <p className="text-[16px] leading-relaxed text-foreground/75 group-hover:text-white/70 transition-colors duration-300">{p.body}</p>
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Know More
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Detail — OEM + 2019 Expansion + Quote */}
      <section className="py-20 lg:py-28 bg-paper border-t border-border">
        <div className="container">
          <Reveal className="grid lg:grid-cols-12 gap-8 ">
            <div className="lg:col-span-3">
              <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Why Choose Us</div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-4xl lg:text-5xl text-navy leading-[1.05] tracking-tight font-extrabold">
                OEM capability, clinical partnerships & <span className="text-accent">government expertise.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid lg:grid-cols-2 gap-12 lg:gap-20">
            <Reveal className="space-y-6 text-[17px] leading-relaxed text-foreground/75">
              <p>
                We, Ghodu Infotech Private Limited, are OEM of all type of "Swachh Bharat Mission Products" like{" "}
                <span className="text-navy font-semibold">
                  Garbage Hopper/Tipper, Dustbins, Wheel Barrow, Garbage Tricycle/e-rickshaw, Sludge Suction Machine, Refuse Compactor, Dumper Placer, Bio Toilets (Modular, Portable and Mobile), Sprinkle Water, Road Sweeping Machine and Municipality Waste Segregation Plant,
                </span>{" "}
                other related Products like Recovery Vehicle, Fire Fighting Equipment, Sky lift, Water Tanker, Hydraulic trolley and all type of Agriculture Equipment and Bio Medical Waste Disinfection System (UVR & Microwave based dual).
              </p>
            </Reveal>

            <Reveal delay={0.1} className="space-y-6 text-[17px] leading-relaxed text-foreground/75">
              <p>
                In the year 2019 the company entered into supply of health products mainly Consumables like{" "}
                <span className="text-navy font-semibold">All types of Gloves, Mask, Sanitary Napkins, Face shield, Goggles</span>{" "}
                and Medical Equipment like{" "}
                <span className="text-navy font-semibold">High end ICU Beds, Multipara monitor, ECG Machine, Cardiac Monitor, Defibrillator & Oxygen Concentrators.</span>
              </p>
              <p>
                We are partnered with various respected brands of Medical Supply like{" "}
                <span className="text-navy font-semibold">Medicyl, Softy, Uniem, ArjoHuntleigh Healthcare India Private Limited, Taurus, Soothe Healthcare, CU Medical, Acer.</span>
              </p>
            </Reveal>
          </div>

          {/* GHODU Quote */}
          <Reveal delay={0.15} className="mt-16 border-l-4 border-accent pl-8 py-2">
            <blockquote className="text-xl lg:text-2xl text-navy font-medium leading-[1.5] italic">
              "In a future-ready world, technology helps overcome physical and national boundaries to ensure control and efficiency in large Businesses with production locations spread across countries and regions. At GHODU, this is not a concept for the future but a reality already."
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Three Key Specialization Areas */}
      <section className="py-20 lg:py-24 bg-paper-warm border-t border-border">
        <div className="container">
          <Reveal className="grid lg:grid-cols-12 gap-8 ">
            <div className="lg:col-span-3">
              <div className="text-[13px] uppercase tracking-wider text-accent font-bold">Specialisations</div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="text-4xl lg:text-5xl text-navy leading-[1.05] tracking-tight font-extrabold">
                We specialise in three key areas that elevate our{" "}
                <span className="text-accent">services and amenities.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-3 gap-1 bg-border/20 border border-border">
            {[
              {
                num: "01",
                title: "Swachh Bharat Mission Support",
                body: "We're dedicated to supporting the Swachh Bharat Mission by providing essential solutions. We offer a comprehensive range of sanitation solutions to support this Mission. We also contribute to the Swachh Bharat Mission and Indian Society as whole by providing solutions and essential products that are making a difference in the Society.",
              },
              {
                num: "02",
                title: "Advanced Medical Equipments",
                body: "We supply advanced medical equipment to central government hospitals, defence establishments and public health institutions across India — from ICU beds and ECG machines to oxygen concentrators and multipara monitors.",
              },
              {
                num: "03",
                title: "Tailored Healthcare Solutions for Government Projects",
                body: "Our infrastructure and procurement expertise is specifically designed for government timelines, compliance requirements and public health mandates — delivering customised, audit-ready solutions for every project.",
              },
            ].map((s, i) => (
              <Reveal
                key={s.num}
                delay={i * 0.1}
                className="group relative bg-paper p-7 lg:p-10 hover:bg-navy transition-colors duration-500"
              >
                <div className="space-y-5">
                  <span className="text-sm text-accent font-bold tracking-widest block">{s.num}</span>
                  <h3 className="text-xl lg:text-2xl text-navy group-hover:text-white leading-tight font-bold transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-foreground/75 group-hover:text-white/70 transition-colors duration-300">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Image Full-Width */}
      <section className="relative h-[420px] lg:h-[560px] overflow-hidden">
        <img
          src={team}
          alt="Holden India team"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container">
            <Reveal className="max-w-lg">
              <div className="text-[11px] uppercase tracking-wider text-accent font-bold mb-4">Our Promise</div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
                Committed to powering India's public health infrastructure.
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-accent text-white px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-navy transition-all duration-300"
              >
                Contact Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
