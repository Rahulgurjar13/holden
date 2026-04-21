// Shared content & navigation data for Holden India site
import ambulance from "@/assets/product-ambulance.jpg";
import healthatm from "@/assets/product-healthatm.jpg";
import lmo from "@/assets/product-lmo.jpg";
import psa from "@/assets/product-psa.jpg";
import vending from "@/assets/product-vending.jpg";
import sbm from "@/assets/product-sbm.jpg";

export const CONTACT = {
  phone: "+91-8595551028",
  email: "info@holdenindia.com",
  address: "Ghodu Infotech Pvt Ltd, A 65, Sector 4 Noida, Uttar Pradesh 201301, India",
  addressShort: "A 65, Sector 4 Noida, UP, INDIA",
};

export type ProductSlug = "ambulances" | "health-atm" | "lmo" | "psa" | "sanitary-napkin-vending-machine" | "sbm-swm";
export type ServiceSlug = "modular-ot" | "icu" | "diagnostics-lab" | "engineering-labs" | "medical-gas-pipeline";

export const PRODUCTS: Array<{
  slug: ProductSlug;
  name: string;
  short: string;
  description: string;
  variants: string[];
  image: string;
}> = [
  {
    slug: "ambulances",
    name: "Ambulances",
    short: "BLS, ALS, Air & Water Ambulances",
    description:
      "Mission-ready emergency response vehicles built to government & defence specifications, equipped with advanced life-saving medical infrastructure.",
    variants: ["BLS — Basic Life Support", "ALS — Advance Life Support", "Air Ambulance", "Water Ambulance"],
    image: ambulance,
  },
  {
    slug: "health-atm",
    name: "Health ATM",
    short: "Self-service diagnostic kiosks",
    description:
      "Connected health screening kiosks delivering vitals, BMI, ECG and lab-grade tests in under five minutes — deployable at panchayats, hospitals and corporates.",
    variants: ["Basic", "Advance", "Lab in Bag"],
    image: healthatm,
  },
  {
    slug: "lmo",
    name: "Liquid Medical Oxygen (LMO)",
    short: "Cryogenic LMO storage 6KL–20KL",
    description:
      "Turn-key liquid medical oxygen storage systems engineered for tertiary care hospitals — capacities from 6KL to 20KL with full vaporiser & pipeline integration.",
    variants: ["6 KL", "10 KL", "13 KL", "20 KL"],
    image: lmo,
  },
  {
    slug: "psa",
    name: "PSA Oxygen Generation Plant",
    short: "On-site PSA oxygen 45–2000 LPM",
    description:
      "Pressure Swing Adsorption oxygen plants from 45 LPM up to 2000 LPM — energy-efficient, IS/ISO compliant, with remote monitoring.",
    variants: ["45 LPM", "200 LPM", "500 LPM", "1000 LPM", "2000 LPM"],
    image: psa,
  },
  {
    slug: "sanitary-napkin-vending-machine",
    name: "Sanitary Napkin Vending Machine",
    short: "Basic, Smart & OTP-based vending",
    description:
      "Hygiene infrastructure for schools, public restrooms and corporates — from simple push-button units to OTP-authenticated, dashboard-monitored smart machines.",
    variants: ["Basic — push button", "Smart — with dashboard", "Advance — OTP based"],
    image: vending,
  },
  {
    slug: "sbm-swm",
    name: "SBM & SWM Products",
    short: "Swachh Bharat & solid waste fleet",
    description:
      "End-to-end Swachh Bharat Mission & Solid Waste Management equipment supply — from dustbins and tricycles to refuse compactors and bio-toilets.",
    variants: [
      "Garbage Hopper / Tipper",
      "Dustbins",
      "Wheel Barrow",
      "Garbage Tricycle / e-Rickshaw",
      "Sludge Suction Machine",
      "Refuse Compactor",
      "Dumper Placer",
      "Bio Toilets",
    ],
    image: sbm,
  },
];

export const SERVICES: Array<{
  slug: ServiceSlug;
  number: string;
  name: string;
  short: string;
  description: string;
}> = [
  {
    slug: "modular-ot",
    number: "01",
    name: "Setting up Modular OT",
    short: "Turn-key modular operating theatres",
    description:
      "Design, supply and commissioning of modular operating theatres conforming to NABH & HTM 03-01 standards — laminar airflow, antibacterial panels, integrated medical gas.",
  },
  {
    slug: "icu",
    number: "02",
    name: "Setting up ICU",
    short: "Critical care unit infrastructure",
    description:
      "Complete ICU build-outs including bed-head panels, ventilators, monitors, central station and isolation infrastructure — engineered for level-1 critical care.",
  },
  {
    slug: "diagnostics-lab",
    number: "03",
    name: "Setting up Diagnostics Lab",
    short: "Pathology & molecular labs",
    description:
      "End-to-end pathology, biochemistry and molecular diagnostics lab setup — from civil planning to reagent supply, validation and NABL readiness.",
  },
  {
    slug: "engineering-labs",
    number: "04",
    name: "Setting up Engineering Labs",
    short: "Academic & R&D engineering labs",
    description:
      "Engineering and skill-development labs for technical institutions and government polytechnics — equipment, calibration and trainer documentation included.",
  },
  {
    slug: "medical-gas-pipeline",
    number: "05",
    name: "Installation of Medical Gas Pipeline System",
    short: "MGPS to HTM 02-01 standards",
    description:
      "Design and installation of medical gas pipeline systems — oxygen, vacuum, N₂O, medical air and AGSS — fully compliant with HTM 02-01 and IS 7396.",
  },
];

export const STATS = [
  { value: "100%", label: "Customised Solutions", icon: "Target" },
  { value: "100%", label: "Satisfied Customers", icon: "Smile" },
  { value: "120+", label: "Projects Complete", icon: "CheckCircle2" },
  { value: "20+", label: "States Covered", icon: "MapPin" },
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Hospital Administrator",
    quote:
      "GHODU Infotech's commitment to quality and innovation is truly commendable. Their Medical Oxygen Supply System has been a game-changer for our hospital.",
  },
  {
    name: "Ritu Verma",
    role: "Municipal Officer",
    quote:
      "We have been relying on GHODU Infotech for our Swachh Bharat Mission products for years. Their waste management solutions have significantly contributed to our city's cleanliness.",
  },
  {
    name: "Alok Gupta",
    role: "Industrial Operations Head",
    quote:
      "We use GHODU Infotech's Holden brand inert gas generators for industrial processes and are thoroughly impressed with their performance and reliability.",
  },
  {
    name: "Priya Patel",
    role: "Procurement Lead",
    quote:
      "GHODU Infotech helped us meet growing demand for medical supplies. Their health products are top-notch quality, ensuring safety of our staff and patients.",
  },
  {
    name: "Dr. Anil Kumar",
    role: "Chief Medical Officer",
    quote:
      "Their Medical Oxygen Supply System improved efficiency of our operations and reduced costs significantly. Highly recommend to others in healthcare.",
  },
];

export const CLIENTS = ["NTPC", "HITES", "AIIMS", "Dr. RML Hospital", "Defence Medical", "Govt. of India", "Cipla", "Lupin"];

export const MEDIA = [
  {
    title: "Common financial strategies for healthcare businesses",
    date: "12 Mar 2024",
    excerpt:
      "How leading healthcare suppliers are restructuring procurement and capex models to deliver more impact per rupee for government clients.",
  },
  {
    title: "Consider consulting services if you're in stagnant areas",
    date: "28 Feb 2024",
    excerpt:
      "Why tier-2 and tier-3 hospitals are partnering with infrastructure specialists to leapfrog into modern critical-care delivery.",
  },
  {
    title: "Elevate your business to new heights",
    date: "05 Feb 2024",
    excerpt:
      "Inside Holden India's expansion across 20+ states — and what's next for oxygen, ambulances and modular OT deployments.",
  },
];
