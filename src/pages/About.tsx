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
    href: "https://holdenindia.com/our-vision/",
    body: "We want to be your preferred, Innovative supplier of Quality Oxygen, Nitrogen, Acetylene, Nitrous Oxide, Carbon-di-oxide Generation Plants demonstrating Environmental awareness without compromising Our Quality Policy.",
  },
  {
    id: "mission",
    num: "02",
    title: "Our Mission",
    href: "https://holdenindia.com/our-mission/",
    body: "We offer innovative and customised solutions catering to specialised application requirements of varied industries and thereby, ensure the availability of quality air and gas for all applications.",
  },
  {
    id: "why-us",
    num: "03",
    title: "Why Us",
    href: "https://holdenindia.com/why-us/",
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
      <section className="relative pt-36 pb-14 lg:pt-44 lg:pb-20 bg-paper border-b border-border">
        <div className="container">
          <Reveal>
            {/* Breadcrumb */}
            <nav className="mb-12 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              <span className="text-border">›</span>
              <span className="text-navy">About Us</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
              <div className="lg:col-span-3">
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent font-bold">
                  About Our Company
                </div>
              </div>
              <div className="lg:col-span-9">
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
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
          <Reveal className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-border">
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
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="block space-y-5">
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
                </a>
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
