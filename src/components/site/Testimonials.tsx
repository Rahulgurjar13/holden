import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/site";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % total), 7000);
    return () => clearInterval(id);
  }, [total]);

  const t = TESTIMONIALS[i];

  return (
    <section className="relative py-24 lg:py-36 bg-paper">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-8 pb-16 border-b border-border">
          <div className="lg:col-span-3">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold">
              07 / Voices
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-4xl lg:text-6xl text-navy leading-[1.02] tracking-tight text-balance font-extrabold">
              What our clients <span className="text-accent">say.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-2">
            <div className="text-7xl lg:text-9xl text-accent leading-none font-extrabold">“</div>
          </div>

          <div className="lg:col-span-8">
            <div className="min-h-[280px] md:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-2xl lg:text-4xl xl:text-[42px] leading-[1.25] text-navy text-balance tracking-tight font-bold">
                    {t.quote}
                  </p>
                  <div className="mt-10 flex items-baseline gap-4">
                    <div>
                      <div className="text-xl font-bold text-navy">{t.name}</div>
                      <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1 font-bold">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-2 flex lg:flex-col items-end justify-between gap-4">
            <div className="text-[12px] uppercase tracking-wider text-muted-foreground tabular font-bold">
              <span className="text-navy">0{i + 1}</span> / 0{total}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((p) => (p - 1 + total) % total)}
                className="h-11 w-11 grid place-items-center border border-border text-navy hover:bg-navy hover:text-paper hover:border-navy transition-all"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((p) => (p + 1) % total)}
                className="h-11 w-11 grid place-items-center border border-border text-navy hover:bg-navy hover:text-paper hover:border-navy transition-all"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-16 h-px bg-border relative">
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 7, ease: "linear" }}
            className="absolute left-0 top-0 h-px bg-accent w-full origin-left"
          />
        </div>
      </div>
    </section>
  );
}
