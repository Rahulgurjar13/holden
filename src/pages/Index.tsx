import SiteLayout from "@/components/site/SiteLayout";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import Products from "@/components/site/Products";
import StatsBanner from "@/components/site/StatsBanner";
import Services from "@/components/site/Services";
import Clients from "@/components/site/Clients";
import MediaCenter from "@/components/site/MediaCenter";
import Testimonials from "@/components/site/Testimonials";
import Contact from "@/components/site/Contact";

const Index = () => (
  <SiteLayout>
    <Hero />
    <About />
    <Products />
    <StatsBanner />
    <Services />
    <Clients />
    <MediaCenter />
    <Testimonials />
    <Contact />
  </SiteLayout>
);

export default Index;
