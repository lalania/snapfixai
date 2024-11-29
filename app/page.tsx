import { HeroSection } from './components/hero-section'
import { FeaturesOverview } from './components/features-overview'
import { Testimonials } from './components/testimonials'
import { HowItWorks } from './components/how-it-works'
import { Footer } from './components/footer'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturesOverview />
      <Testimonials />
      <HowItWorks />
      <Footer />
    </div>
  )
}

