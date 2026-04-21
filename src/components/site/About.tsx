import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import facility from "@/assets/about-facility.jpg";
import team from "@/assets/about-team.jpg";
import { Reveal } from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Our Vision",
    text: "We want to be your preferred, Innovative supplier of Quality Oxygen, Nitrogen, Acetylene, Nitrous Oxide, Carbon-di-oxide Generation Plants demonstrating Environmental awareness without compromising Our Quality Policy.",
    href: "https://holdenindia.com/our-vision/",
  },
  {
    num: "02",
    title: "Our Mission",
    text: "We offer innovative and customised solutions catering to specialised application requirements of varied industries and thereby, ensure the availability of quality air and gas for all applications.",
    href: "https://holdenindia.com/our-mission/",
  },
  {
    num: "03",
    title: "Why Us",
    text: "Our infrastructure is designed to meet diverse client needs and deliver tailor-made solutions. Research plays a pivotal role in the entire development process, from product ideation to defining the manufacturing process.",
    href: "https://holdenindia.com/why-us/",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-10 lg:py-14 bg-paper overflow-hidden">
      {/* Subtle background detail */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-paper-warm/50 -z-10" />
      
      <div className="container">
        {/* Section header */}
        <Reveal className="max-w-4xl mb-6 lg:mb-10">
          <div className="text-[13px] uppercase tracking-wider text-accent font-bold mb-4 flex items-center gap-4">
            <span className="h-px w-8 bg-accent" />
            01 / ABOUT OUR COMPANY
          </div>
          <h2 className="text-4xl lg:text-7xl text-navy leading-[1.05] tracking-tight font-extrabold text-pretty">
            Established and leading healthcare <span className="text-accent">products</span> manufacturing & trading company.
          </h2>
        </Reveal>

        {/* Main Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Side: Content & Stats */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6">
            <Reveal className="space-y-6">
              <div className="inline-block px-3 py-1 bg-navy/5 text-navy text-[11px] font-bold uppercase tracking-wider rounded-sm mb-2">
                Flagship Company since 2008
              </div>
              <p className="text-lg lg:text-xl leading-relaxed text-navy font-medium">
                Ghodu Infotech Pvt. Ltd is a sky-high name, specialized in the development of healthcare infrastructure and medical devices for central government agencies and defense medical establishments.
              </p>
              <div className="space-y-5 text-[17px] leading-relaxed text-foreground/75 max-w-2xl">
                <p>
                  We are an established and leading healthcare products manufacturing & trading company only in Government business supplying medicines, surgical, disposables and medical devices to central government agencies, central government hospitals & Défense Medical establishment across India. Ghodu Infotech Private Limited is a flagship Company from last 16 years and has been into the business of serving the agencies in health care.
                </p>
                <p>
                  The entire product array is designed and manufactured using modern technology at our own facility. We are an exclusive authorized distributor/channel partner for many leading companies namely <span className="text-navy font-bold">Getinge, Trivitron, New Red Lab Equipment's, Reliance Life Sciences Ltd, Abbott Healthcare India Pvt. Ltd, Cipla Ltd, Ranbaxy Laboratories Ltd, Lupin Ltd, Gland Pharma Ltd, Glenmark Pharmaceuticals Ltd.</span> We look forward to your valuable response and ready to serve your state.
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://holdenindia.com/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-navy text-paper px-8 py-4 text-[13px] font-bold uppercase tracking-wider hover:bg-accent transition-all duration-300"
                >
                  READ MORE <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            {/* Integrated Stats Row */}
            <Reveal delay={0.1} className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-6 border-t border-border">
              <div>
                <div className="text-4xl font-extrabold text-navy tabular leading-none">16+</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 font-bold">
                  Years of Service
                </div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-navy tabular leading-none">120+</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 font-bold">
                  Projects Delivered
                </div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-4xl font-extrabold text-navy tabular leading-none">20+</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 font-bold">
                  States Covered
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Side: Feature Image & Captions */}
          <Reveal delay={0.2} className="lg:col-span-5">
            <div className="relative group">
              {/* Image Frame */}
              <div className="aspect-[3/2] overflow-hidden bg-muted shadow-elegant relative">
                <img
                  src={facility}
                  alt="Holden India modular operating theatre facility"
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  width={1024}
                  height={1280}
                  loading="lazy"
                />
                {/* Image Overlay Label */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-navy/80 to-transparent">
                   <div className="text-[11px] uppercase tracking-wider text-paper/80 font-bold">
                    Fig. 02 — Modular OT Systems, Q3 2024
                  </div>
                </div>
              </div>
              
              {/* Floating Accent Detail */}
              <div className="absolute -bottom-6 -left-6 hidden xl:block w-32 h-32 bg-accent/10 -z-10" />
            </div>
          </Reveal>
        </div>

        {/* Pillars — Horizontal Cards */}
        <div className="mt-10 lg:mt-12 grid md:grid-cols-3 gap-1 bg-border/20 border border-border">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className="group relative bg-paper p-5 lg:p-7 hover:bg-paper-warm transition-colors duration-500"
            >
              <a href={p.href} target="_blank" rel="noopener noreferrer" className="block space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-accent font-bold tracking-widest">{p.num}</span>
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-500">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl lg:text-3xl text-navy leading-tight mb-4 font-bold">
                    {p.title}
                  </h3>
                  <p className="text-[16px] leading-relaxed text-foreground/75">{p.text}</p>
                  <div className="pt-2 text-[11px] uppercase tracking-wider text-accent font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Know More
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
