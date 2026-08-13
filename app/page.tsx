import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { FeaturedOpportunities } from "@/components/landing/FeaturedOpportunities";
import { WhyStudentsLoveIt } from "@/components/landing/WhyStudentsLoveIt";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <FeaturedOpportunities />
      <WhyStudentsLoveIt />
      <Testimonials />
      <FAQ />
    </>
  );
}
