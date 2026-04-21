import SiteLayout from "@/components/site/SiteLayout";
import PageHero from "@/components/site/PageHero";
import MediaCenterSection from "@/components/site/MediaCenter";

export default function Media() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="News & Insights"
        title="Media Center"
        subtitle="Press, project stories and industry perspectives from Holden India."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Media Center" }]}
      />
      <MediaCenterSection />
    </SiteLayout>
  );
}
