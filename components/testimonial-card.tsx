import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
}

export function TestimonialCard({ quote, author, location, rating }: TestimonialCardProps) {
  return (
    <div className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? "fill-accent text-accent" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
      
      <blockquote className="text-foreground/90 text-lg leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground font-semibold">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </div>
  )
}
