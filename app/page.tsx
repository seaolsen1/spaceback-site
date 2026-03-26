import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { PricingCard } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StickyCTA } from "@/components/sticky-cta"
import { ArrowRight, MapPin, Clock, Truck, Phone } from "lucide-react"

const pricingPlans = [
  {
    title: "Quick Haul",
    price: "$199–$349",
    description: "Clear it, load it, haul it. Same-day service for easy jobs.",
    features: [
      "Remove all trash, junk & unwanted items",
      "Sweep-out included",
      "Same-day haul-away",
      "Up to ½ garage worth of junk",
      "No sorting needed — just haul it away",
    ],
  },
  {
    title: "Standard Clean-Out + Sorting",
    price: "$349–$599",
    description: "Clear it, clean it, and help get items organized.",
    features: [
      "Everything in Quick Haul, plus:",
      "Keep / Trash / Donate sorting",
      "Donation drop-off (Goodwill, Savers, etc.)",
      "Value ID — we flag resellable items",
      "Basic reorganizing of items staying",
      "Up to full 1-car garage",
    ],
    popular: true,
  },
  {
    title: "Premium Organize + Clean-Out",
    price: "$1,299+",
    description: "Full reset of the garage. It looks brand new.",
    features: [
      "Everything in Standard, plus:",
      "Full sorting system with labels",
      "Garage layout improvement",
      "Wipe down all surfaces",
      "Optional shelving installation",
      "Heavy lifting & rearranging",
      "Up to full 2-car garage",
      "Before & after photos included",
    ],
  },
]

const testimonials = [
  {
    quote: "They came in, sorted everything, hauled away what we didn't need, and organized the rest. Our garage looks brand new.",
    author: "Satisfied Customer",
    location: "Tempe, AZ",
    rating: 5,
  },
  {
    quote: "Stress-free from start to finish. They handled everything and even dropped donations off for us. Highly recommend.",
    author: "Happy Homeowner",
    location: "Mesa, AZ",
    rating: 5,
  },
  {
    quote: "I can finally park in my garage again. The before and after is unreal. Worth every penny.",
    author: "Repeat Client",
    location: "Phoenix, AZ",
    rating: 5,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <span className="font-serif text-2xl tracking-tight text-foreground">Spaceback</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Our Work</a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a>
          </div>
          <a href="tel:6025446035">
            <Button variant="outline" className="rounded-full px-6 border-foreground/20 hover:bg-foreground hover:text-background transition-all">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">(602) 544-6035</span>
              <span className="sm:hidden">Call</span>
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-secondary text-foreground px-4 py-2 rounded-full text-sm mb-8">
              <MapPin className="w-4 h-4" />
              Serving Tempe, Mesa & the Phoenix Metro Area
            </div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-6 text-balance">
              Reclaim your garage.
              <br />
              <span className="text-muted-foreground">Reclaim your space.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Professional garage cleanout and organization for Arizona homeowners.
              Keep what you want, remove what you don&apos;t, and organize your space for maximum use.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <a href="tel:6025446035" className="w-full sm:w-auto">
                <Button className="bg-foreground text-background hover:bg-foreground/90 h-14 px-8 text-base font-medium rounded-full w-full">
                  Get Your Free Estimate
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#pricing" className="w-full sm:w-auto">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground h-14 px-8 text-base font-medium w-full">
                  See Pricing
                </Button>
              </a>
            </div>
          </div>

          {/* Before/After Slider */}
          <BeforeAfterSlider />

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Same-Day Available</p>
                <p className="text-sm text-muted-foreground">Fast scheduling for quick hauls</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">We Haul Everything</p>
                <p className="text-sm text-muted-foreground">Junk removal & donation drop-off</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground">5-Star Results</p>
                <p className="text-sm text-muted-foreground">Trusted by Arizona homeowners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="services" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              How it works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A simple, stress-free process to transform your garage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Free Estimate",
                description: "Call or text us. We\u2019ll ask a few questions about your garage and give you a straight-up quote. No surprises.",
              },
              {
                step: "02",
                title: "We Handle Everything",
                description: "Our 2-man crew shows up, sorts, hauls, cleans, and organizes. You point, we lift. Donations get dropped off for you.",
              },
              {
                step: "03",
                title: "Enjoy Your Space",
                description: "Walk into a clean, organized garage you\u2019ll actually want to use. Park your car inside again.",
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="text-7xl font-serif text-border mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work - Video Gallery */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              See the transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real garages. Real results. Watch the full before and after.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl relative">
              <video
                src="/images/spaceback-before.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full aspect-[9/16] max-h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-lg font-semibold">Real work. Real results.</p>
                <p className="text-white/70 text-sm">Watch the full before &amp; after</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              Transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the service level that fits your garage and budget. Free estimates, always.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            {pricingPlans.map((plan) => (
              <PricingCard key={plan.title} {...plan} />
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12 text-sm">
            Final pricing depends on garage size and clutter level. Call for your free estimate.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              What homeowners say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from Arizona families who got their space back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.author} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-6">
            Ready to get your space back?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Call or text for your free estimate. No pressure, no obligations — just honest pricing and a clean garage.
          </p>
          <a href="tel:6025446035">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground h-14 px-10 text-lg font-medium rounded-full">
              Call (602) 544-6035
              <Phone className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-lg">S</span>
            </div>
            <span className="font-serif text-xl tracking-tight text-foreground">Spaceback</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://instagram.com/spacebackaz" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
            <a href="tel:6025446035" className="hover:text-foreground transition-colors">(602) 544-6035</a>
            <span>&copy; 2026 Spaceback. Tempe, AZ</span>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  )
}
