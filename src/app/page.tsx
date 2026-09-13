import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TopSpecialists } from "@/components/home/TopSpecialists";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { BecomeProSection } from "@/components/home/BecomeProSection";
import { AppPromoSection } from "@/components/home/AppPromoSection";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CategoriesSection />
      <HowItWorks />
      <TopSpecialists />
      <TestimonialsSection />
      <BecomeProSection />
      <AppPromoSection />
    </>
  );
}
