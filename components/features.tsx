'use client'

export default function Features() {
  const features = [
    {
      title: 'Precision Tested',
      description: 'Every product tested for color accuracy, brightness, and lifespan',
      icon: '✓',
    },
    {
      title: 'Smart Integration',
      description: 'Seamless WiFi & Bluetooth connectivity with app control',
      icon: '◈',
    },
    {
      title: 'Energy Efficient',
      description: '90% more efficient than traditional lighting solutions',
      icon: '⚡',
    },
    {
      title: '24/7 Support',
      description: 'Expert team ready to help you set up your perfect vibe',
      icon: '◎',
    },
  ]

  return (
    <section className="py-20 px-4 md:px-8 relative">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-primary">
            Why Choose LEDPickLab
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            We&apos;re not just selling lights—we&apos;re engineering the perfect atmosphere for your space
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-xl border border-secondary/30 hover:border-primary/50 transition bg-gradient-to-br from-card/50 to-card/20 hover:neon-border-primary"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-xl" />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-4xl mb-4 text-secondary group-hover:text-primary transition group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:glow-text-primary transition">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
