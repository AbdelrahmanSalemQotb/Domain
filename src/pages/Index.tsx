import {
  DataStreams,
  FloatingParticles,
} from "@/components/effects/BackgroundEffects";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { ExtensionsSection } from "@/components/sections/ExtensionsSection";
import { DomainsForSaleSection } from "@/components/sections/DomainsForSaleSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="fixed inset-0 matrix-bg" />
      <DataStreams />
      <FloatingParticles />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <ExtensionsSection />
      <DomainsForSaleSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
