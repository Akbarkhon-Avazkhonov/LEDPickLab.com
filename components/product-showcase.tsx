'use client'

import Image from 'next/image'

export default function ProductShowcase() {
  const products = [
    {
      name: 'Neon Pro RGB Strip',
      specs: '5M, WiFi-Enabled, 16M Colors',
      image: '/product-1.jpg',
    },
    {
      name: 'Cyber Cyan Task Lamp',
      specs: '1200 Lumens, USB-C Charging',
      image: '/product-2.jpg',
    },
    {
      name: 'Ultra Controller Pro',
      specs: 'App + Physical Controls',
      image: '/product-3.jpg',
    },
    {
      name: 'Smart Controller Hub',
      specs: '8 Zones, Voice Control',
      image: '/product-4.jpg',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-primary">
            Featured Products
          </h2>
          <p className="text-foreground/60 text-lg">
            Handpicked and tested for maximum glow potential
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <div
              key={idx}
              className="group relative rounded-xl overflow-hidden border border-secondary/30 hover:border-primary/50 transition bg-gradient-to-br from-card to-card/50 hover:neon-border-primary"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden bg-card/50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-40" />
              </div>

              {/* Light leak effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

              {/* Product content */}
              <div className="relative z-10 p-6">
                {/* Product name */}
                <h3 className="text-lg font-bold mb-2 group-hover:glow-text-primary transition">
                  {product.name}
                </h3>

                {/* Specs */}
                <p className="text-xs text-foreground/50 mb-4">
                  {product.specs}
                </p>

                {/* CTA Button */}
                <button className="w-full px-3 py-2 text-sm rounded-lg bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-background transition font-medium">
                  View Details
                </button>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none" style={{
                background: 'radial-gradient(circle at 50% 0%, rgba(143, 0, 255, 0.1), transparent 70%)',
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
