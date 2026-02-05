'use client'

export default function ProductShowcase() {
  const products = [
    {
      name: 'Neon Pro RGB Strip',
      price: '$89.99',
      color: 'primary',
      specs: '5M, WiFi-Enabled, 16M Colors',
      image: '✨',
    },
    {
      name: 'Cyber Cyan Task Lamp',
      price: '$129.99',
      color: 'secondary',
      specs: '1200 Lumens, USB-C Charging',
      image: '◆',
    },
    {
      name: 'Ultra Controller Pro',
      price: '$49.99',
      color: 'accent',
      specs: 'App + Physical Controls',
      image: '⚙',
    },
    {
      name: 'Smart Controller Hub',
      price: '$199.99',
      color: 'primary',
      specs: '8 Zones, Voice Control',
      image: '◎',
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
              {/* Light leak effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

              {/* Product content */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Icon/Image */}
                <div className="text-5xl mb-4 opacity-60 group-hover:opacity-100 transition group-hover:glow-text-primary">
                  {product.image}
                </div>

                {/* Product name */}
                <h3 className="text-lg font-bold mb-2 group-hover:glow-text-primary transition">
                  {product.name}
                </h3>

                {/* Specs */}
                <p className="text-xs text-foreground/50 mb-4 flex-grow">
                  {product.specs}
                </p>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-secondary/20">
                  <span className="font-bold text-primary glow-text-primary">
                    {product.price}
                  </span>
                  <button className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/50 hover:bg-primary hover:text-background transition">
                    Add
                  </button>
                </div>
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
