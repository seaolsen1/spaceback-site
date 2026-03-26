"use client"

import { useEffect, useRef, useState } from "react"

export function StatementBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h2 className="font-serif text-4xl leading-tight tracking-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Not just clean.
            <br />
            <span className="italic">Functional.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80">
            We believe your space should serve you. Every corner with purpose, 
            every item with a home. That&apos;s the Spaceback difference.
          </p>
        </div>
      </div>
    </section>
  )
}
