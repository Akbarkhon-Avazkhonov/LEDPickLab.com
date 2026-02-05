'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/hero'
import Navigation from '@/components/navigation'
import ProductShowcase from '@/components/product-showcase'
import Categories from '@/components/categories'
import Features from '@/components/features'
import Footer from '@/components/footer'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-background overflow-hidden">
      {/* Animated background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(143, 0, 255, 0.15), transparent 80%)`,
          transition: 'background 0.3s ease-out',
        }}
      />

      <Navigation />
      <Hero mousePosition={mousePosition} />
      <Categories />
      <ProductShowcase />
      <Features />
      <Footer />
    </main>
  )
}
