import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  description: string
  features: string[]
  popular?: boolean
}

export function PricingCard({ title, price, description, features, popular }: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl p-8 transition-all duration-300",
        popular
          ? "bg-foreground text-background shadow-2xl scale-105 z-10"
          : "bg-card border border-border hover:shadow-xl"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            Most Popular
          </span>
        </div>
      )}

      <h3 className={cn(
        "text-xl font-semibold tracking-tight",
        popular ? "text-background" : "text-foreground"
      )}>
        {title}
      </h3>

      <div className="mt-4 mb-2">
        <span className={cn(
          "text-4xl font-serif font-normal tracking-tight",
          popular ? "text-background" : "text-foreground"
        )}>
          {price}
        </span>
      </div>

      <p className={cn(
        "text-sm leading-relaxed",
        popular ? "text-background/70" : "text-muted-foreground"
      )}>
        {description}
      </p>

      <ul className="mt-8 space-y-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={cn(
              "w-5 h-5 flex-shrink-0 mt-0.5",
              popular ? "text-accent" : "text-accent"
            )} />
            <span className={cn(
              "text-sm leading-relaxed",
              popular ? "text-background/90" : "text-foreground/80"
            )}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "mt-8 w-full h-12 text-base font-medium rounded-full transition-all",
          popular
            ? "bg-background text-foreground hover:bg-background/90"
            : "bg-foreground text-background hover:bg-foreground/90"
        )}
      >
        Book Now
      </Button>
    </div>
  )
}
