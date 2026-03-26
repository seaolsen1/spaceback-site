export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex flex-col items-center gap-2 md:items-start">
            <span className="font-serif text-2xl tracking-tight text-primary">Spaceback</span>
            <p className="text-sm text-muted-foreground">Phoenix, Arizona</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href="#testimonials" className="text-muted-foreground transition-colors hover:text-foreground">
              Reviews
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </nav>

          {/* Contact */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href="tel:+16025446035"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              (602) 544-6035
            </a>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Spaceback. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
