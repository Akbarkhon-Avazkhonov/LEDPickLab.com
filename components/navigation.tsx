'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-secondary/20">
      <nav className="backdrop-blur-md bg-background/80 px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl md:text-2xl font-bold glow-text-primary">
          LEDPickLab
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#strips" className="text-sm text-foreground/80 hover:text-primary transition">
            Strip Lab
          </Link>
          <Link href="#lamps" className="text-sm text-foreground/80 hover:text-primary transition">
            Task Lamps
          </Link>
          <Link href="#controllers" className="text-sm text-foreground/80 hover:text-primary transition">
            Smart Controllers
          </Link>
          <Link href="#accessories" className="text-sm text-foreground/80 hover:text-primary transition">
            Accessories
          </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-4 py-2 rounded-full border border-secondary/30 text-sm text-foreground/80 hover:border-secondary transition glow-secondary hover:glow-secondary">
            Cart (0)
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-secondary/20 bg-background/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="#strips"
              className="block text-sm text-foreground/80 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Strip Lab
            </Link>
            <Link
              href="#lamps"
              className="block text-sm text-foreground/80 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Task Lamps
            </Link>
            <Link
              href="#controllers"
              className="block text-sm text-foreground/80 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Smart Controllers
            </Link>
            <Link
              href="#accessories"
              className="block text-sm text-foreground/80 hover:text-primary transition py-2"
              onClick={() => setIsOpen(false)}
            >
              Accessories
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
