"use client"

import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    username: "@d_swizzy34",
    handle: "d_swizzy34",
    content:
      "This is my garage!!! So happy to have my space back!",
    likes: 1,
    avatar: "D",
  },
  {
    username: "@theharleydavis",
    handle: "theharleydavis",
    content:
      "Insane switch up. So much space for activities!",
    likes: 1,
    avatar: "H",
  },
  {
    username: "@hskybeats",
    handle: "hskybeats",
    content:
      "Can actually put that engine puller to use now!",
    likes: 1,
    avatar: "H",
  },
  {
    username: "@the.blind.pro",
    handle: "the.blind.pro",
    content:
      "Came here through reddit! Keep it up guys",
    likes: 1,
    avatar: "T",
  },
  {
    username: "@jasonaribi24",
    handle: "jasonaribi24",
    content:
      "Insane!!!!",
    likes: 1,
    avatar: "J",
  },
  {
    username: "@jovankfrancis",
    handle: "jovankfrancis",
    content:
      "Fire",
    likes: 1,
    avatar: "J",
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} id="testimonials" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mb-16 text-center transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            What People Say
          </p>
          <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Real reviews, real results
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Here&apos;s what Phoenix homeowners are saying.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.username}
              className={`group rounded-2xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/30 hover:shadow-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.handle}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.username}</p>
                </div>
                {/* Instagram icon */}
                <svg
                  className="ml-auto h-5 w-5 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>

              {/* Content */}
              <p className="text-sm leading-relaxed text-foreground/80">{testimonial.content}</p>

              {/* Footer */}
              <div className="mt-4 flex items-center gap-2 text-muted-foreground">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <span className="text-xs">{testimonial.likes} likes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
