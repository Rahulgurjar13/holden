import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 100, suffix: "%", label: "Customised Solutions", note: "Every deployment, built ground-up." },
  { value: 100, suffix: "%", label: "Satisfied Customers", note: "Across 16 years of service." },
  { value: 120, suffix: "+", label: "Projects Complete", note: "Hospitals, defence, municipal." },
  { value: 20, suffix: "+", label: "States Covered", note: "Pan-India deployment footprint." },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsBanner() {
  return (
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      
      <div className="container relative py-20 lg:py-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
            A pan-India footprint, measured in{" "}
            <span className="text-accent">outcomes.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-white/10"
            >
              <div className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-none tracking-tight">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-sm font-semibold text-white">
                {s.label}
              </div>
              <div className="mt-1.5 text-xs text-white/50">
                {s.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
