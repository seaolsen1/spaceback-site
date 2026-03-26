"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Phone } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/garage-banner.jpg"
          alt="Spaceback garage transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24 pb-16 lg:px-8 lg:pt-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p
            className={`mb-6 text-sm font-medium uppercase tracking-widest text-primary transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Phoenix, Arizona
          </p>

          {/* Headline */}
          <h1
            className={`font-serif text-5xl leading-[1.1] tracking-tight text-foreground transition-all delay-100 duration-700 sm:text-6xl md:text-7xl lg:text-8xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block">Take your</span>
            <span className="block text-primary">Space Back</span>
          </h1>

          {/* Subtext */}
          <p
            className={`mt-8 max-w-xl text-lg leading-relaxed text-foreground/70 transition-all delay-200 duration-700 sm:text-xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            We don&apos;t just haul junk—we transform cluttered spaces into functional, 
            organized environments that actually work for your life.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row sm:items-center transition-all delay-300 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="tel:+16025446035"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              <Phone className="h-5 w-5" />
              <span>Get a Free Quote</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-foreground/20 bg-background/50 px-8 py-4 text-base font-medium text-foreground backdrop-blur-sm transition-all hover:bg-background/80"
            >
              See How It Works
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all delay-500 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <a
            href="#trust"
            className="flex flex-col items-center gap-2 text-foreground/50 transition-colors hover:text-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}
