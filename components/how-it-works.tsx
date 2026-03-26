"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, ClipboardList, Sparkles } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Book a Call",
    description:
      "Tell us about your space and goals. We&apos;ll discuss your vision and provide a transparent quote—no surprises.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "We Plan",
    description:
      "Our team creates a custom transformation plan tailored to your space, lifestyle, and budget.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Transform",
    description:
      "We execute the plan, leaving you with a functional, beautiful space that actually works for you.",
  },
]

export function HowItWorks() {
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
    <section ref={sectionRef} id="how-it-works" className="bg-card py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-20 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            The Process
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative text-center transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Number */}
              <span className="mb-6 block font-serif text-7xl text-primary/20 lg:text-8xl">
                {step.number}
              </span>

              {/* Icon */}
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <step.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="mb-4 font-serif text-2xl text-foreground">{step.title}</h3>
              <p className="leading-relaxed text-muted-foreground">{step.description}</p>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="absolute top-20 left-[calc(50%+4rem)] hidden h-px w-[calc(100%-8rem)] bg-border md:block lg:left-[calc(50%+5rem)] lg:w-[calc(100%-10rem)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
