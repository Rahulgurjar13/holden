import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import ContactSection from "@/components/site/Contact";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Get In Touch"
        title="Contact Holden India"
        subtitle="Tenders, partnerships, project enquiries — our team responds within one business day."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
      />
      <ContactSection />
    </SiteLayout>
  );
}
