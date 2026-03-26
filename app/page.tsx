import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { PricingCard } from "@/components/pricing-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { StickyCTA } from "@/components/sticky-cta"
import { VideoPlayer } from "@/components/video-player"
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
    quote: "This is my garage!!! So happy to have my space back!",
    author: "@d_swizzy34",
    location: "via Instagram",
    rating: 5,
  },
  {
    quote: "Insane switch up. So much space for activities!",
    author: "@theharleydavis",
    location: "via Instagram",
    rating: 5,
  },
  {
    quote: "Can actually put that engine puller to use now!",
    author: "@hskybeats",
    location: "via Instagram",
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
              Phoenix Metro Area
            </div>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-6 text-balance">
              Take your
              <br />
              <span className="text-muted-foreground">Space Back.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              We&apos;re not a junk removal company — we&apos;re a space transformation company.
              Keep what you love, remove what you don&apos;t, and enjoy a space that finally works for you.
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
              A simple, stress-free process to transform your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Free Estimate",
                description: "Call or text us. We\u2019ll ask a few questions about your space and give you a straight-up quote. No surprises.",
              },
              {
                step: "02",
                title: "We Handle Everything",
                description: "Our 2-man crew shows up, sorts, hauls, cleans, and organizes. You point, we lift. Donations get dropped off for you.",
              },
              {
                step: "03",
                title: "Enjoy Your Space",
                description: "Walk into a clean, organized space you\u2019ll actually want to use.",
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

      {/* Statement Banner */}
      <section className="py-20 px-6 bg-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-5xl text-background tracking-tight mb-4">
            Not just clean. Functional.
          </p>
          <p className="text-background/70 text-lg md:text-xl">
            We clear it, clean it, and organize it — so your space actually works for you.
          </p>
        </div>
      </section>

      {/* Our Work - Video */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground mb-4">
              See the transformation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real spaces. Real results. Watch the full before and after.
            </p>
          </div>

          <div className="max-w-xs mx-auto">
            <VideoPlayer />
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
              Choose the service level that fits your needs and budget. Free estimates, always.
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
      <section className="py-24 px-6 bg-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-background mb-6">
            Ready to take your space back?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-2xl mx-auto">
            Call or text for your free estimate. No pressure, no obligations — just honest pricing and real results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:6025446035">
              <Button className="bg-background text-foreground hover:bg-background/90 h-14 px-10 text-lg font-medium rounded-full">
                Call (602) 544-6035
                <Phone className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <a href="https://instagram.com/spacebackaz" target="_blank" rel="noopener noreferrer">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white/10 h-14 px-10 text-lg font-medium rounded-full">
                Follow @SpacebackAZ
              </Button>
            </a>
          </div>
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
