"use client"

import { useEffect, useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Auto-play when visible
          if (videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay blocked, user needs to interact
            })
          }
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
              See Us In Action
            </p>
            <h2 className="font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
              Real transformations, real results
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Watch our latest project reels and see what&apos;s possible. From garages 
              to closets to entire homes—we&apos;ve transformed it all.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/spacebackaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Follow @SpacebackAZ
              </a>
            </div>
          </div>

          {/* Phone Frame with Video */}
          <div
            className={`flex justify-center transition-all delay-200 duration-700 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative h-[600px] w-[300px] rounded-[3rem] border-[8px] border-foreground/90 bg-foreground/90 p-2 shadow-2xl lg:h-[680px] lg:w-[340px]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 z-20 h-6 w-24 -translate-x-1/2 rounded-b-xl bg-foreground/90" />
                
                {/* Screen */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.3rem] bg-muted">
                  {/* Placeholder video content - using gradient as placeholder */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30">
                    <video
                      ref={videoRef}
                      className="h-full w-full object-cover"
                      loop
                      muted
                      playsInline
                      onPlay={() => setIsPlaying(true)}
                      onPause={() => setIsPlaying(false)}
                      poster="/images/garage-after.png"
                    >
                      <source src="/images/spaceback-video.mp4" type="video/mp4" />
                    </video>
                    
                    {/* Play button overlay */}
                    {!isPlaying && (
                      <button
                        onClick={togglePlay}
                        className="absolute inset-0 flex items-center justify-center bg-foreground/20 transition-colors hover:bg-foreground/30"
                      >
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                          <Play className="h-6 w-6 text-primary ml-1" />
                        </div>
                      </button>
                    )}

                    {/* Instagram-style content */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-20">
                      <p className="text-sm font-medium text-white">@SpacebackAZ</p>
                      <p className="mt-1 text-xs text-white/80">
                        Another garage transformation complete! 🔥
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -top-4 -right-4 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
