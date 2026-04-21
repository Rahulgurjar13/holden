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
  link: string;
}> = [
  {
    slug: "ambulances",
    name: "Ambulances",
    short: "BLS, ALS, Air & Water Ambulances",
    description: "BLS basic life support ALS advance life support Air Ambulance Water ambulance",
    variants: ["BLS Basic Life Support", "ALS Advance Life Support", "Air Ambulance", "Water Ambulance"],
    image: ambulance,
    link: "https://holdenindia.com/ambulances/",
  },
  {
    slug: "health-atm",
    name: "Health ATM",
    short: "Basic, Advance, Lab in Bag",
    description: "Connected health screening kiosks delivering vitals, BMI, ECG and lab-grade tests in under five minutes.",
    variants: ["Basic", "Advance", "Lab in Bag"],
    image: healthatm,
    link: "https://holdenindia.com/health-atm/",
  },
  {
    slug: "lmo",
    name: "Liquid Medical Oxygen (LMO)",
    short: "6KL 10KL 13KL 20KL",
    description: "6KL 10KL 13KL 20KL cryogenic storage solutions for tertiary care hospitals.",
    variants: ["6KL", "10KL", "13KL", "20KL"],
    image: lmo,
    link: "https://holdenindia.com/lmo/",
  },
  {
    slug: "psa",
    name: "PSA (Oxygen Generation Plant)",
    short: "45LPM to 2000LPM",
    description: "45LPM to 2000LPM Pressure Swing Adsorption oxygen plants.",
    variants: ["45LPM to 2000LPM"],
    image: psa,
    link: "https://holdenindia.com/psa-oxygen-generation-plant/",
  },
  {
    slug: "sanitary-napkin-vending-machine",
    name: "Sanitary Napkin Vending Machine",
    short: "Basic, Smart, Advance",
    description: "Basic (push button) Smart (Push button with dashboard) Advance (OTP based with dashboard)",
    variants: ["Basic (push button)", "Smart (with dashboard)", "Advance (OTP based)"],
    image: vending,
    link: "https://holdenindia.com/sanitary-napkin-vending-machine/",
  },
  {
    slug: "sbm-swm",
    name: "SBM & SWM Products",
    short: "Swachh Bharat & Solid Waste Management",
    description: "Garbage Hopper/Tipper, Dustbins, Wheel Barrow, Garbage Tricycle/e-rickshaw, Sludge Suction Machine, Refuse Compactor, Dumper Placer, Bio Toilets.",
    variants: [
      "Garbage Hopper/Tipper",
      "Dustbins",
      "Wheel Barrow",
      "Garbage Tricycle/e-rickshaw",
      "Sludge Suction Machine",
      "Refuse Compactor",
      "Dumper Placer",
      "Bio Toilets (Modular, Portable and Mobile)",
    ],
    image: sbm,
    link: "https://holdenindia.com/sbm-swm-products/",
  },
];

export const SERVICES: Array<{
  slug: ServiceSlug;
  number: string;
  name: string;
  short: string;
  description: string;
  link: string;
}> = [
  {
    slug: "diagnostics-lab",
    number: "01",
    name: "Setting up Diagnostics Lab",
    short: "Complete lab infrastructure",
    description: "Professional setup of diagnostic laboratories for various healthcare requirements.",
    link: "https://holdenindia.com/setting-up-diagnostics-lab/",
  },
  {
    slug: "engineering-labs",
    number: "02",
    name: "Setting up Engineering Labs",
    short: "Technical & skill labs",
    description: "Establishment of modern engineering labs with high-grade technical equipment.",
    link: "https://holdenindia.com/setting-up-engineering-labs/",
  },
  {
    slug: "modular-ot",
    number: "03",
    name: "Setting up Modular OT",
    short: "Modern operating theatres",
    description: "NABH-compliant modular OT installations with advanced airflow systems.",
    link: "https://holdenindia.com/setting-up-modular-ot/",
  },
  {
    slug: "medical-gas-pipeline",
    number: "04",
    name: "Installation of Medical Gas Pipeline System",
    short: "Complete MGPS solutions",
    description: "Safe and compliant medical gas pipeline systems for healthcare facilities.",
    link: "https://holdenindia.com/installation-of-medical-gas-pipeline-system/",
  },
  {
    slug: "icu",
    number: "05",
    name: "Setting up ICU",
    short: "Critical care unit setup",
    description: "Full infrastructure for intensive care units including all essential devices.",
    link: "https://holdenindia.com/setting-up-icu/",
  },
];

export const STATS = [
  { value: "100%", label: "Customised Solutions", icon: "Target" },
  { value: "100%", label: "Satisfied Customers", icon: "Smile" },
  { value: "120+", label: "Project Complete", icon: "CheckCircle2" },
  { value: "20+", label: "States Covered", icon: "MapPin" },
];

export const TESTIMONIALS = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Medical Director",
    stars: 5,
    quote:
      "GHODU Infotech's commitment to quality and innovation is truly commendable. Their Medical Oxygen Supply System has been a game-changer for our hospital, providing a reliable and cost-effective solution for our oxygen needs. We are extremely satisfied with their products and services.",
  },
  {
    name: "Ritu Verma",
    role: "Municipal Officer",
    stars: 5,
    quote:
      "We have been relying on GHODU Infotech for our Swachh Bharat Mission products for years now. Their range of garbage handling equipment and waste management solutions have significantly contributed to our efforts in maintaining cleanliness and hygiene in our city. Highly recommended!",
  },
  {
    name: "Alok Gupta",
    role: "Plant Manager",
    stars: 5,
    quote:
      "We have been using GHODU Infotech's Holden brand inert gas generators for our industrial processes, and we are thoroughly impressed with their performance and reliability. The team at GHODU has been incredibly supportive and responsive to our needs, making them our preferred partner for gas generation solutions.",
  },
  {
    name: "Priya Patel",
    role: "Healthcare Professional",
    stars: 5,
    quote:
      "GHODU Infotech has been instrumental in helping us meet the growing demand for medical supplies during these challenging times. Their wide range of health products, including masks, gloves, and medical equipment, have been of top-notch quality and have helped us ensure the safety of our healthcare staff and patients. Thank you, GHODU, for your invaluable support!",
  },
  {
    name: "Dr. Anil Kumar",
    role: "Chief Medical Officer",
    stars: 5,
    quote:
      "GHODU Infotech's focus on innovation and technology has revolutionized the way we approach oxygen supply in our healthcare facility. Their Medical Oxygen Supply System has not only improved the efficiency of our operations but has also reduced our overall costs significantly. We are extremely satisfied with the performance of their products and would highly recommend them to others in the healthcare industry.",
  },
];

export const CLIENTS = [
  { name: "NTPC", meta: "Power" },
  { name: "HITES", meta: "HLL Infra Tech Services Ltd" },
  { name: "AIIMS", meta: "Medical Excellence" },
  { name: "Dr. RML Hospital", meta: "New Delhi" },
];

export const MEDIA = [
  {
    title: "Common financial strategies for businesses",
    date: "12 Mar 2024",
    link: "https://holdenindia.com/event/common-financial-strategies-for-businesses/",
    excerpt: "Exploring financial growth and sustainability models for healthcare enterprises.",
  },
  {
    title: "Consider consulting services if you're areas like stagnant",
    date: "28 Feb 2024",
    link: "https://holdenindia.com/event/consider-consulting-services-if-youre-areas-like-stagnant/",
    excerpt: "Consulting strategies for scaling business in developing markets.",
  },
  {
    title: "Elevate your business to-new heights.",
    date: "05 Feb 2024",
    link: "https://holdenindia.com/event/elevate-your-business-to-new-heights/",
    excerpt: "Innovative approaches to take your enterprise to the next level.",
  },
];
