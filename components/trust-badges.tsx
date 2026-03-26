"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Clock, ThumbsUp } from "lucide-react"

const badges = [
  {
    icon: Shield,
    title: "Stress-Free Process",
    description: "You point, we do the heavy lifting",
  },
  {
    icon: Clock,
    title: "Done in One Session",
    description: "Most jobs completed same day",
  },
  {
    icon: ThumbsUp,
    title: "We Handle Everything",
    description: "Sort, haul, donate, and organize",
  },
]

export function TrustBadges() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="trust" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`flex flex-col items-center text-center transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <badge.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-xl text-foreground">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
