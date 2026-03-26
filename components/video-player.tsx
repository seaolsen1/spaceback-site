"use client"

import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showPlayButton, setShowPlayButton] = useState(true)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setShowPlayButton(false)
      }).catch(() => {
        // Still can't play, keep button visible
      })
    }
  }

  return (
    <div className="rounded-3xl overflow-hidden shadow-2xl bg-black border-[8px] border-foreground/10 relative">
      <video
        ref={videoRef}
        src="/images/spaceback-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="w-full aspect-[9/16] object-cover"
        onPlaying={() => setShowPlayButton(false)}
      />
      {showPlayButton && (
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
