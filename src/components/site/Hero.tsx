import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-medical.jpg";
import facilityImg from "@/assets/about-facility.jpg";
import psaImg from "@/assets/product-psa.jpg";
import ambulanceImg from "@/assets/product-ambulance.jpg";

const slides = [
  {
    image: heroImg,
    tag: "Critical Care Infrastructure",
    headline: (
      <>
        Powering India's<br />healthcare{" "}
        <span className="text-accent">infrastructure.</span>
      </>
    ),
    description:
      "Trusted government supplier of medical equipment, oxygen systems and healthcare infrastructure — engineered for tertiary hospitals, defence and public health missions across twenty Indian states.",
  },
  {
    image: facilityImg,
    tag: "Modular OT & ICU",
    headline: (
      <>
        Turn-key operating<br />theatres,{" "}
        <span className="text-accent">audit-ready.</span>
      </>
    ),
    description:
      "NABH-compliant modular OTs with laminar airflow, antibacterial panels and integrated medical gas — designed, built and commissioned end-to-end.",
  },
  {
    image: psaImg,
    tag: "Oxygen Generation",
    headline: (
      <>
        On-site oxygen<br />plants,{" "}
        <span className="text-accent">45–2000 LPM.</span>
      </>
    ),
    description:
      "PSA oxygen generation and cryogenic LMO storage systems for hospitals — IS/ISO compliant, energy-efficient, with remote monitoring.",
  },
  {
    image: ambulanceImg,
    tag: "Emergency Response",
    headline: (
      <>
        Mission-ready<br />
        <span className="text-accent">ambulances.</span>
      </>
    ),
    description:
      "BLS, ALS, Air and Water ambulances built to government and defence specifications, equipped with advanced life-saving medical infrastructure.",
  },
];

const trust = [
  { name: "NTPC", meta: "Power" },
  { name: "HITES", meta: "HLL Infra Tech" },
  { name: "AIIMS", meta: "Medical" },
  { name: "RML Hospital", meta: "New Delhi" },
];

const stats = [
  { value: "100%", label: "Customised Solutions" },
  { value: "100%", label: "Satisfied Customers" },
  { value: "120+", label: "Project Complete" },
  { value: "20+", label: "States Covered" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((i: number) => setCurrent(i), []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative text-white overflow-hidden">
      {/* ═══ Full-viewport hero ═══ */}
      <div
        className="relative min-h-[100svh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background images — crossfade */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <img
              src={slide.image}
              alt={slide.tag}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                transform: i === current ? "scale(1.06)" : "scale(1)",
                transition: "transform 7s ease-out",
              }}
              width={1920}
              height={1080}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* ── Strong gradient overlays ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, hsl(215 60% 4% / 0.92) 0%, hsl(215 60% 4% / 0.78) 35%, hsl(215 60% 4% / 0.45) 60%, hsl(215 60% 4% / 0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, hsl(215 60% 4% / 0.95) 0%, hsl(215 60% 4% / 0.4) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, hsl(215 60% 4% / 0.7) 0%, transparent 20%)",
          }}
        />

        {/* ── Hero content ── */}
        <div className="relative min-h-[100svh] container flex flex-col justify-between pt-[140px] pb-10">

          {/* Main content block */}
          <div className="max-w-2xl xl:max-w-3xl flex-1 flex flex-col justify-center">
            {/* Eyebrow */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tag-${current}`}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.45 }}
                className="flex items-center gap-4 mb-6"
              >
                <span className="h-[2px] w-8 bg-accent" />
                <span className="text-[13px] uppercase tracking-wider text-accent font-bold">
                  {slides[current].tag}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Headline */}
            <AnimatePresence mode="wait">
              <motion.h1
                key={`h1-${current}`}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="text-[clamp(2.25rem,5.8vw,4.75rem)] font-extrabold leading-[1.08] tracking-[-0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]"
              >
                {slides[current].headline}
              </motion.h1>
            </AnimatePresence>

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${current}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
                className="mt-6 text-[15px] lg:text-base text-white/70 leading-[1.75] max-w-lg"
              >
                {slides[current].description}
              </motion.p>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 bg-accent hover:bg-[hsl(184,65%,28%)] text-white px-7 py-3.5 text-sm font-semibold transition-all duration-300"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">
                  Explore Products
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-white/8 backdrop-blur-sm hover:bg-white/15 text-white border border-white/20 hover:border-white/40 px-7 py-3.5 text-sm font-semibold transition-all duration-300"
              >
                <span className="uppercase tracking-wider text-[13px] font-bold">
                  Contact Team
                </span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* ── Bottom Content ── */}
          <div className="space-y-10 mt-12">
            {/* Stats + Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6 border-t border-white/10"
            >
              <div className="flex flex-wrap items-center gap-0">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-center">
                    {i > 0 && <div className="h-10 w-px bg-white/15 mx-4 lg:mx-6" />}
                    <div>
                      <div className="text-2xl lg:text-3xl font-extrabold text-white tabular leading-none">
                        {stat.value}
                      </div>
                      <div className="text-[10px] uppercase tracking-wider text-white/50 mt-1.5 font-bold">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-5">
                <span className="text-[11px] uppercase tracking-wider text-white/40 tabular hidden sm:block font-bold">
                  {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                </span>
                <div className="flex gap-1.5">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      className={`rounded-full transition-all duration-500 ${i === current
                        ? "h-2 w-8 bg-accent"
                        : "h-2 w-2 bg-white/25 hover:bg-white/50"
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Integrated Trust Bar */}
            <div className="pt-8 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-4 items-center">
                <div className="md:col-span-1">
                  <div className="text-[11px] uppercase tracking-wider text-white/40 leading-tight font-bold">
                    Trusted by<br />India's institutions
                  </div>
                </div>
                {trust.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.08 }}
                    className="border-l border-white/10 pl-4"
                  >
                    <div className="text-lg lg:text-xl font-bold text-white leading-tight">
                      {t.name}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider text-white/40 mt-0.5 font-bold">
                      {t.meta}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar — very bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
          <motion.div
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isPaused ? undefined : 1 }}
            transition={{ duration: 2, ease: "linear" }}
            className="h-full bg-accent origin-left"
          />
        </div>
      </div>
    </section>
  );
}
