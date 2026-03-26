import Image from "next/image"

export function BeforeAfterSlider() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      <Image
        src="/images/garage-before.jpg"
        alt="Cluttered garage before Spaceback cleanout"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white text-2xl md:text-3xl font-serif">This is where we come in.</p>
        <p className="text-white/80 text-sm md:text-base mt-2">We turn garages like this into spaces you actually want to use.</p>
      </div>
    </div>
  )
}
