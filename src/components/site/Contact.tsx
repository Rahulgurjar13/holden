import { useState } from "react";
import { Mail, MapPin, Phone, ArrowUpRight, Clock } from "lucide-react";
import { CONTACT } from "@/data/site";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Appointment request received", {
        description: "Our team will respond within 24 business hours.",
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-16 lg:py-20 bg-paper-warm border-t border-border">
      <div className="container">
        <Reveal className="grid lg:grid-cols-12 gap-8 pb-10 border-b border-border">
          <div className="lg:col-span-3">
            <div className="text-[13px] uppercase tracking-wider text-accent font-bold">
              BOOK APPOINTMENT / CONTACT US
            </div>
          </div>
          <div className="lg:col-span-9">
            <h2 className="text-3xl lg:text-5xl text-navy leading-[1.1] tracking-tight text-balance font-extrabold">
              Tenders, partnerships,<br />
              <span className="text-accent">or a conversation.</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Contact Info */}
          <Reveal className="lg:col-span-4 space-y-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-bold">
                  Direct lines
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-accent" />
                    <a href={`tel:${CONTACT.phone}`} className="text-xl text-navy hover:text-accent transition-colors font-bold tracking-tight">
                      +91-8595551028
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-accent" />
                    <a href={`mailto:${CONTACT.email}`} className="text-lg text-navy hover:text-accent transition-colors font-bold tracking-tight">
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-3 font-bold">
                  Office Details
                </div>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-base text-navy leading-snug font-bold">Ghodu Infotech Pvt Ltd, A 65, Sector 4 Noida 201301</p>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <p className="text-base text-navy font-bold italic opacity-80">Mon — Sat · 9:30 AM – 6:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border overflow-hidden h-[200px] rounded-sm shadow-sm grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Holden India office location"
                src="https://www.google.com/maps?q=A%2065%20Sector%204%20Noida&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Right: Compact Form */}
          <Reveal delay={0.1} className="lg:col-span-8 bg-paper p-8 lg:p-10 border border-border shadow-sm">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-bold border-b border-border pb-4 mb-2">
                Make an Appointment / Enquiry
              </div>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                <Field label="Write Your Name" name="name" placeholder="Your name" required />
                <Field label="Email Address" name="email" type="email" placeholder="you@company.com" required />
                <Field label="Preferred Date" name="date" type="date" required />
                <Field label="Your Location" name="location" placeholder="Topic or city" required />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 font-bold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project or enquiry..."
                  className="w-full bg-transparent border-0 border-b border-border px-0 py-2 text-base text-navy placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors resize-none font-sans font-medium"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex items-center justify-between gap-8 bg-navy hover:bg-accent text-paper px-8 py-4 transition-all duration-500 disabled:opacity-70"
                >
                  <span className="uppercase tracking-wider text-[13px] font-bold">
                    {submitting ? "Sending..." : "Make an Appointment"}
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1.5 font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-border px-0 py-2 text-base text-navy placeholder:text-muted-foreground/40 focus:outline-none focus:border-accent transition-colors font-sans font-medium"
      />
    </div>
  );
}
