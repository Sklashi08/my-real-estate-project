import { AboutUs } from "@/components/AboutUs";
import { Hero } from "@/components/common/Hero";
import { ContactCta } from "@/components/ContactCta";
import { OurAdvantages } from "@/components/OurAdvantages";
import { OurProjects } from "@/components/OurProjects";
import { Testimonials } from "@/components/Testimonials";
import { TrustedAndTested } from "@/components/TrustedAndTested";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhyUs } from "@/components/WhyUs";
import { Helmet } from "react-helmet-async";



const Home = () => {
  return (
   <>

<Helmet>
  {/* Basic SEO */}
  <title>StoneWorx Builders | Quality Construction Built to Last</title>
  <meta
    name="description"
    content="StoneWorx Builders delivers high-quality residential and commercial construction with craftsmanship, integrity, and lasting value."
  />

  {/* Canonical URL */}
  <link
    rel="canonical"
    href="https://stoneworxbuilders.vercel.app/"
  />

  {/* Open Graph (Facebook, LinkedIn, WhatsApp) */}
  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="StoneWorx Builders | Trusted Construction Professionals"
  />
  <meta
    property="og:description"
    content="From residential builds to commercial projects, StoneWorx Builders delivers reliable construction designed to stand the test of time."
  />
  <meta
    property="og:url"
    content="https://stoneworxbuilders.com/"
  />
  <meta
    property="og:image"
    content="https://i.postimg.cc/4xjNhNBw/home-seo-img.png"
  />

  {/* Twitter / X */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content="StoneWorx Builders | Building Quality You Can Trust"
  />
  <meta
    name="twitter:description"
    content="Expert construction services focused on quality, durability, and client satisfaction."
  />
  <meta
    name="twitter:image"
    content="https://i.postimg.cc/4xjNhNBw/home-seo-img.png"
  />
</Helmet>

    <main>
      <Hero
        introText="25+ Years of Crafting Timeless Spaces"
        title="Building Modern Homes That Stand the Test of Time"
        subTitle="We design and build contemporary living spaces with precision, clarity, and unmatched craftsmanship"
        btnAffirmText="Enquire Now"
        btnNoAffirmText="View Our Work"
      />
      <OurAdvantages />
      <AboutUs />
      <WhatWeDo />
      <OurProjects />
      <ContactCta />
      <Testimonials />
      <TrustedAndTested />
      <WhyUs />
    </main>
   </>
  );
};

export default Home;
