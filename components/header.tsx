"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-serif text-2xl tracking-tight text-primary">Spaceback</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#how-it-works" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              How It Works
            </a>
            <a href="#pricing" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              Reviews
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+16025446035"
              className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 md:flex"
            >
              <Phone className="h-4 w-4" />
              <span>(602) 544-6035</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 md:hidden",
            isMobileMenuOpen ? "max-h-64 pt-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4 pb-4">
            <a 
              href="#how-it-works" 
              className="text-base font-medium text-foreground/70 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#pricing" 
              className="text-base font-medium text-foreground/70 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#testimonials" 
              className="text-base font-medium text-foreground/70 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="tel:+16025446035"
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" />
              <span>Call (602) 544-6035</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
