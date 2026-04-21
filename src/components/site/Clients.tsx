import { CLIENTS } from "@/data/site";
import { Reveal } from "./Reveal";

export default function Clients() {
  const items = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section className="py-20 lg:py-24 bg-paper border-y border-border overflow-hidden">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-8 mb-12">
          <div className="lg:col-span-3">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold">
              05 / Partners
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-navy leading-tight tracking-tight text-balance">
              Trusted by India's leading institutions.
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="marquee-pause overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-r from-paper to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 lg:w-48 bg-gradient-to-l from-paper to-transparent z-10 pointer-events-none" />
        <div className="marquee items-center">
          {items.map((c, i) => (
            <div key={i} className="flex items-center shrink-0">
              <span className="text-3xl lg:text-4xl xl:text-5xl text-navy/30 hover:text-navy transition-colors px-12 lg:px-16 whitespace-nowrap font-bold tracking-tight">
                {c.name}
              </span>
              <span className="text-border text-2xl">·</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
