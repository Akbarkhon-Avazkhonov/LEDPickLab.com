'use client'

export default function Categories() {
  const categories = [
    {
      id: 'strips',
      name: 'Strip Lab',
      description: 'RGB, COB, and Smart Strips',
      icon: '▬',
      color: 'from-secondary to-primary',
    },
    {
      id: 'lamps',
      name: 'Task Lamps',
      description: 'Desk & Ambient Lighting',
      icon: '◆',
      color: 'from-accent to-secondary',
    },
    {
      id: 'controllers',
      name: 'Smart Controllers',
      description: 'WiFi & Bluetooth Control',
      icon: '⚙',
      color: 'from-primary to-accent',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      description: 'Connectors & Power Supplies',
      icon: '◎',
      color: 'from-secondary to-accent',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-primary">
            The Lumen-Flow Navigation
          </h2>
          <p className="text-foreground/60 text-lg">
            Explore our glowing neon tubes of premium lighting solutions
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative overflow-hidden rounded-xl p-6 border border-secondary/30 bg-gradient-to-br ${category.color} bg-opacity-5 hover:border-primary/50 transition cursor-pointer neon-border`}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl mb-3 text-secondary group-hover:text-primary transition">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:glow-text-primary transition">
                  {category.name}
                </h3>
                <p className="text-sm text-foreground/60 group-hover:text-foreground/80 transition">
                  {category.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
