"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))
      setSliderPosition(percent)
    },
    []
  )

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] max-w-2xl mx-auto rounded-xl overflow-hidden cursor-ew-resize select-none shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src="/images/garage-after.jpg"
          alt="Clean, organized garage after Spaceback transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 right-4 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          After
        </div>
      </div>

      {/* Before Image (Foreground with clip) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src="/images/garage-before.jpg"
          alt="Cluttered garage before Spaceback cleanout"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-semibold tracking-wide shadow-lg">
          Before
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/90 z-10"
        style={{ left: `calc(${sliderPosition}% - 1px)` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-white/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-foreground"
          >
            <path d="m15 18-6-6 6-6" />
            <path d="m9 18 6-6-6-6" />
          </svg>
        </div>
      </div>
    </div>
  )
}
