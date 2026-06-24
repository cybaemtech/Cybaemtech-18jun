import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { enterpriseSoftwareSeoData } from "@/data/seo/enterpriseSoftwareSeo";
import SolutionHero from "@/components/solutions/SolutionHero";
import EnterpriseProductsShowcase from "@/components/solutions/EnterpriseProductsShowcase";
import SolutionTestimonial from "@/components/solutions/SolutionTestimonial";
import SolutionGuarantees from "@/components/solutions/SolutionGuarantees";
import SolutionFAQ from "@/components/solutions/SolutionFAQ";
import SolutionCTA from "@/components/solutions/SolutionCTA";
import { solutionsData } from "@/data/solutionsData";

const data = solutionsData["enterprise-software"];

const EnterpriseSoftware = () => {
  const relatedTitles = data.relatedSlugs.map((s) => solutionsData[s]?.title || s);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title={enterpriseSoftwareSeoData.title}
        description={enterpriseSoftwareSeoData.description}
        canonical={enterpriseSoftwareSeoData.canonical}
        keywords={enterpriseSoftwareSeoData.keywords}
        ogTitle={enterpriseSoftwareSeoData.ogTitle}
        ogDescription={enterpriseSoftwareSeoData.ogDescription}
        twitterTitle={enterpriseSoftwareSeoData.twitterTitle}
        twitterDescription={enterpriseSoftwareSeoData.twitterDescription}
        jsonLd={enterpriseSoftwareSeoData.jsonLd}
      />
      <Navbar />
      <SolutionHero
        title={data.title}
        headline={data.heroHeadline}
        subheadline={data.heroSubheadline}
        keywords={data.heroKeywords}
        heroImage={data.heroImage}
      />
      <EnterpriseProductsShowcase />
      <SolutionTestimonial testimonial={data.testimonial} images={data.trustImages} />
      <SolutionGuarantees guarantees={data.guarantees} />
      <SolutionFAQ faqs={data.faqs} title={data.title} />
      <SolutionCTA headline={data.ctaHeadline} relatedSlugs={data.relatedSlugs} relatedTitles={relatedTitles} />
      <Footer />
    </div>
  );
};

export default EnterpriseSoftware;
