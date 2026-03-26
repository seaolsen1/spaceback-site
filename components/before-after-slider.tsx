import Image from "next/image"

export function BeforeAfterSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4]">
        <Image
          src="/images/garage-before.jpg"
          alt="Cluttered garage before Spaceback transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          Before
        </div>
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4]">
        <Image
          src="/images/garage-after.jpg"
          alt="Organized garage after Spaceback transformation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">
          After
        </div>
      </div>
    </div>
  )
}
