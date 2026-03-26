"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBadges } from "@/components/trust-badges"
import { BeforeAfter } from "@/components/before-after"
import { HowItWorks } from "@/components/how-it-works"
import { StatementBanner } from "@/components/statement-banner"
import { VideoSection } from "@/components/video-section"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustBadges />
      <BeforeAfter />
      <HowItWorks />
      <StatementBanner />
      <VideoSection />
      <Pricing />
      <Testimonials />
      <CtaSection />
      <Footer />
    </main>
  )
}
