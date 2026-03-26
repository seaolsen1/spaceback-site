"use client"

import { useRef, useState, useEffect } from "react"
import { Play } from "lucide-react"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
  }, [])

  useEffect(() => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, show play button
        setIsPlaying(false)
      })
    }
  }, [isMobile])

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl bg-black border-[8px] border-foreground/10 relative">
      <video
        ref={videoRef}
        src="/images/spaceback-video.mp4"
        muted
        loop
        playsInline
        className="w-full aspect-[9/16] object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <button
          onClick={handlePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40"
        >
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl">
            <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
          </div>
        </button>
      )}
    </div>
  )
}
