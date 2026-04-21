import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Mail, MapPin, Phone, Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, PRODUCTS, SERVICES } from "@/data/site";

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Vision", to: "/about#vision" },
      { label: "Our Mission", to: "/about#mission" },
      { label: "Why Us", to: "/about#why-us" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    children: PRODUCTS.map((p) => ({ label: p.name, to: `/products/${p.slug}` })),
  },
  {
    label: "Services",
    to: "/services",
    children: SERVICES.map((s) => ({ label: s.name, to: `/services/${s.slug}` })),
  },
  { label: "Certificates", to: "/certificates" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMobileGroup(null);
  }, [location.pathname]);

  // Transparent navbar only on homepage when not scrolled
  const isHome = location.pathname === "/";
  const solid = scrolled || !isHome;

  return (
    <header className="fixed top-0 inset-x-0 z-50">

      {/* Main nav */}
      <nav
        className={cn(
          "transition-all duration-500",
          solid
            ? "bg-paper/95 backdrop-blur-xl border-b border-border shadow-card-soft"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="container flex items-center justify-between h-[72px] lg:h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="leading-tight">
              <div className={cn(
                "text-2xl font-extrabold tracking-tight transition-colors duration-500",
                solid ? "text-navy" : "text-white"
              )}>
                Holden
              </div>
              <div className={cn(
                "hidden sm:block text-[11px] uppercase tracking-wider font-bold transition-colors duration-500",
                solid ? "text-muted-foreground" : "text-white/60"
              )}>
                by Ghodu Infotech
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden xl:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.label} className="relative group">
                <Link
                  to={link.to}
                  className={cn(
                    "flex items-center gap-1 px-3.5 py-2 text-[13px] font-sans font-medium tracking-[-0.01em] transition-colors",
                    solid ? "text-navy hover:text-accent" : "text-white/90 hover:text-accent"
                  )}
                >
                  {link.label}
                  {link.children && <ChevronDown className="h-3 w-3 opacity-60" />}
                </Link>
                {link.children && (
                  <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[280px]">
                    <div className="bg-paper border border-border shadow-elegant overflow-hidden">
                      <div className="px-5 py-2.5 border-b border-border bg-paper-warm">
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                          {link.label}
                        </span>
                      </div>
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className="flex items-center justify-between px-5 py-3 text-[13px] font-sans text-navy hover:bg-paper-warm hover:text-accent border-b border-border/50 last:border-0 transition-colors group/item"
                        >
                          <span>{child.label}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="https://www.sanitaryholden.com/login.php"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden md:inline-flex items-center gap-2 text-[12px] font-sans uppercase tracking-[0.06em] font-semibold px-5 py-2.5 transition-all duration-300 border",
                solid
                  ? "bg-navy text-paper border-navy hover:bg-accent hover:border-accent"
                  : "bg-accent text-white border-accent hover:bg-accent/90"
              )}
            >
              Partners Login
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className={cn(
                "xl:hidden p-2 transition-colors",
                solid ? "text-navy" : "text-white"
              )}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "xl:hidden bg-paper border-t border-border overflow-y-auto transition-all duration-300",
            mobileOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="container py-4 space-y-0">
            {navLinks.map((link) => (
              <li key={link.label} className="border-b border-border">
                {link.children ? (
                  <>
                    <button
                      onClick={() => setOpenMobileGroup(openMobileGroup === link.label ? null : link.label)}
                      className="w-full flex items-center justify-between px-2 py-4 text-navy font-sans font-medium text-sm"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openMobileGroup === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openMobileGroup === link.label && (
                      <ul className="bg-paper-warm py-2">
                        {link.children.map((child) => (
                          <li key={child.to}>
                            <Link to={child.to} className="block px-6 py-2.5 text-sm font-sans text-navy hover:text-accent">
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.to}
                    className="block px-2 py-4 text-navy font-sans font-medium text-sm hover:text-accent"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://www.sanitaryholden.com/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-navy text-paper font-sans font-semibold uppercase tracking-[0.06em] text-xs px-5 py-3.5"
              >
                Partners Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
