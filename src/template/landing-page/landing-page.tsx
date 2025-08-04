import { CustomerStorySection } from "./sections/customer-story"
import { FeatureSection } from "./sections/feature"
import { HeroSection } from "./sections/hero"
import { SupportSection } from "./sections/support"

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  )
}