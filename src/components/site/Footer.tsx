import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import { CONTACT, PRODUCTS, SERVICES } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-paper/85 relative overflow-hidden">
      <div className="container relative pt-20 pb-8">
        {/* Top: massive wordmark */}
        <div className="border-b border-paper/10 pb-12 mb-16">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-4">
                Holden India · Ghodu Infotech Pvt Ltd
              </div>
              <h2 className="font-serif text-6xl lg:text-8xl xl:text-9xl text-paper leading-[0.95] tracking-tight font-extrabold">
                Powering<br />
                <span className="text-paper/70">healthcare.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:text-right">
              <p className="text-sm text-paper/70 leading-relaxed max-w-sm lg:ml-auto">
                India's trusted government supplier of medical equipment, oxygen systems and healthcare infrastructure for sixteen years.
              </p>
              <div className="mt-6 flex lg:justify-end gap-2">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="h-10 w-10 grid place-items-center border border-paper/20 hover:bg-accent hover:border-accent transition-all duration-300"
                    aria-label="Social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">About</h4>
            <p className="text-[13px] text-paper/60 leading-relaxed">
              We have earned a name in manufacturing of prime quality Industrial Oxygen Gas Plants, PSA Oxygen Generators / Plants. The emergence & success achieved by us in such a short span of time is a result of cooperative attempts put in by skilled staff and committed manpower.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">Our Services</h4>
            <ul className="space-y-3 text-[13px] font-sans">
              <li><Link to="/services/modular-ot" className="text-paper/75 hover:text-paper transition-colors">Setting up modular OT</Link></li>
              <li><Link to="/services/icu" className="text-paper/75 hover:text-paper transition-colors">Setting up ICU</Link></li>
              <li><Link to="/services/diagnostics-lab" className="text-paper/75 hover:text-paper transition-colors">Setting up diagnostics lab</Link></li>
              <li><Link to="/services/engineering-labs" className="text-paper/75 hover:text-paper transition-colors">Setting up engineering labs</Link></li>
              <li><Link to="/services/medical-gas-pipeline" className="text-paper/75 hover:text-paper transition-colors">Installation of medical gas pipeline system</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">Company</h4>
            <ul className="space-y-3 text-[13px] font-sans">
              <li><Link to="/about" className="text-paper/75 hover:text-paper transition-colors">About Us</Link></li>
              <li><Link to="/certificates" className="text-paper/75 hover:text-paper transition-colors">Certificates</Link></li>
              <li><Link to="/media" className="text-paper/75 hover:text-paper transition-colors">Media Center</Link></li>
              <li><Link to="/contact" className="text-paper/75 hover:text-paper transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-5">Get in touch</h4>
            <ul className="space-y-4 text-[13px]">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="font-sans text-paper hover:text-accent transition-colors block">
                  {CONTACT.phone}
                </a>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">Direct line</span>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="font-sans text-paper hover:text-accent transition-colors block">
                  {CONTACT.email}
                </a>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">Enquiries</span>
              </li>
              <li>
                <span className="font-sans text-paper block leading-snug">{CONTACT.address}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">Registered office</span>
              </li>
              <li>
                <a href="https://www.sanitaryholden.com/login.php" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-paper hover:!text-accent">
                  <span style={{ boxShadow: "inset 0 -1px 0 currentColor" }}>Partners login</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-6 border-t border-paper/10 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
          <p>© 2024 All Rights Reserved Designed & Developed By CssFounder.com</p>
          <p>Holden India · Ghodu Infotech Pvt Ltd</p>
        </div>
      </div>
    </footer>
  );
}
