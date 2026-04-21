import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Eye, Target, Shield, Award, Users, Globe2 } from "lucide-react";
import facility from "@/assets/about-facility.jpg";

const pillars = [
  {
    id: "vision",
    icon: Eye,
    title: "Our Vision",
    body:
      "To be the preferred, innovative supplier of Quality Oxygen, Nitrogen, Acetylene, Nitrous Oxide, Carbon-di-oxide Generation Plants — demonstrating environmental awareness without compromising quality.",
  },
  {
    id: "mission",
    icon: Target,
    title: "Our Mission",
    body:
      "To offer innovative and customised solutions catering to specialised application requirements of varied industries, ensuring quality air and gas for all applications.",
  },
  {
    id: "why-us",
    icon: Shield,
    title: "Why Us",
    body:
      "Our infrastructure is designed to meet diverse client needs with tailor-made solutions. Research plays a pivotal role from product ideation to manufacturing — we engineer for reliability, certify for compliance and deliver on government timelines.",
  },
];

const values = [
  { icon: Award, title: "Quality Assured", text: "ISO-grade processes, IS/ISO/HTM compliant deliverables." },
  { icon: Users, title: "Customer First", text: "Dedicated project managers and 24×7 service desk." },
  { icon: Globe2, title: "Pan-India Reach", text: "Active deployments across 20+ states & union territories." },
];

export default function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="A 16-year flagship in India's healthcare manufacturing & supply"
        subtitle="Ghodu Infotech Pvt. Ltd. — manufacturer, authorised distributor and turn-key infrastructure partner to government, defence and tertiary healthcare."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "About Us" }]}
      />

      <section className="py-20 lg:py-28">
        <div className="container grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <p className="text-electric text-sm font-bold uppercase tracking-[0.25em] mb-4">Who We Are</p>
            <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-navy leading-tight text-balance">
              Engineering critical healthcare infrastructure for the nation.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Ghodu Infotech Pvt. Ltd is an established and leading healthcare products manufacturing & trading company specialising
                in Government business — supplying medicines, surgical, disposables and medical devices to central government agencies,
                hospitals & Defence Medical establishments across India.
              </p>
              <p>
                A flagship company with 16 years of service, we are authorised distributors for{" "}
                <span className="font-semibold text-navy">
                  Getinge, Trivitron, Abbott Healthcare, Cipla, Lupin, Gland Pharma, Glenmark Pharmaceuticals
                </span>{" "}
                and more.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-2xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img src={facility} alt="Holden facility" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.08}>
                <article id={p.id} className="bg-white rounded-2xl p-8 border border-border shadow-card-soft hover-lift h-full">
                  <div className="h-14 w-14 rounded-xl bg-gradient-electric grid place-items-center text-white shadow-glow-blue">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="underline-accent font-display text-3xl lg:text-4xl font-extrabold text-navy">Our Core Values</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="bg-steel rounded-2xl p-8 border border-border h-full">
                  <v.icon className="h-8 w-8 text-electric mb-4" strokeWidth={1.8} />
                  <h3 className="font-display text-xl font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
