'use client'

import { useEffect, useRef } from 'react'

interface HeroProps {
  mousePosition: { x: number; y: number }
}

export default function Hero({ mousePosition }: HeroProps) {
  const lampRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!lampRef.current) return

    const rect = lampRef.current.getBoundingClientRect()
    const lampCenterX = rect.left + rect.width / 2
    const lampCenterY = rect.top + rect.height / 2

    const angle = Math.atan2(mousePosition.y - lampCenterY, mousePosition.x - lampCenterX)
    const distance = 30

    const x = Math.cos(angle) * distance
    const y = Math.sin(angle) * distance

    lampRef.current.style.transform = `translate(${x}px, ${y}px)`
  }, [mousePosition])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-8 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(143, 0, 255, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(143, 0, 255, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Light leak accent */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-light-leak" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="mb-6 inline-block">
          <span className="text-xs md:text-sm font-mono text-secondary glow-text-secondary px-3 py-1 border border-secondary/30 rounded-full">
            ► THE LAB IS OPEN
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight glow-text-primary">
          Master Your Atmosphere
        </h1>

        {/* Subheading */}
        <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
          Precision-picked LED strips and task lighting for gamers, creators, and night-owls. We test the glow so you can own the vibe.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-3 bg-primary text-background font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105">
            Explore Collection
          </button>
          <button className="px-8 py-3 border border-secondary/50 text-foreground rounded-full hover:border-secondary hover:glow-secondary transition">
            Watch Demo
          </button>
        </div>

        {/* Animated Lamp */}
        <div className="mt-20 flex justify-center">
          <div ref={lampRef} className="transition-transform duration-100 ease-out">
            <div className="relative w-48 h-64">
              {/* Lamp shade */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/10 rounded-t-3xl border-2 border-primary/50 glow-primary" />

              {/* Lamp stand */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-primary/40 to-primary/20 rounded-full" />

              {/* Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-secondary/40 rounded-full glow-secondary" />

              {/* Light glow */}
              <div className="absolute inset-0 rounded-t-3xl bg-gradient-to-b from-primary via-transparent to-transparent opacity-50 blur-xl" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="text-xs text-foreground/50 animate-bounce">
            ↓ SCROLL TO REVEAL ↓
          </div>
        </div>
      </div>
    </section>
  )
}
