"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Essentials",
    price: "$199–349",
    description: "Perfect for single spaces",
    features: [
      "Single room or space",
      "Declutter & organize",
      "Basic storage solutions",
      "2-4 hour service",
      "Before & after photos",
    ],
    popular: false,
  },
  {
    name: "Transform",
    price: "$349–599",
    description: "Our most popular package",
    features: [
      "Multiple rooms or large space",
      "Complete reorganization",
      "Custom storage systems",
      "Half-day service",
      "Design consultation",
      "90-day support",
    ],
    popular: true,
  },
  {
    name: "Total Reset",
    price: "$1,299+",
    description: "Whole-home transformation",
    features: [
      "Entire home service",
      "Professional design plan",
      "Premium storage solutions",
      "Multi-day project",
      "Priority scheduling",
      "Lifetime support",
      "Maintenance plan included",
    ],
    popular: false,
  },
]

export function Pricing() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="pricing" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Transparent Pricing
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Investment in your space
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Every project is unique. These ranges give you an idea—we&apos;ll provide an exact quote after hearing about your space.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={cn(
                "relative flex flex-col rounded-2xl bg-card p-8 transition-all duration-700",
                tier.popular
                  ? "border-2 border-primary shadow-xl lg:-mt-4 lg:pb-12"
                  : "border border-border",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium uppercase tracking-wider text-primary-foreground">
                  Most Popular
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-foreground">{tier.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tier.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="font-serif text-4xl tracking-tight text-foreground lg:text-5xl">
                  {tier.price}
                </span>
              </div>

              {/* Features */}
              <ul className="mb-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="tel:+16025446035"
                className={cn(
                  "flex items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-medium transition-all hover:scale-[1.02]",
                  tier.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-secondary/80"
                )}
              >
                <Phone className="h-4 w-4" />
                <span>Get Your Quote</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
