'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-secondary/20 bg-gradient-to-t from-background to-transparent">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 p-8 rounded-xl border border-secondary/30 bg-gradient-to-r from-primary/10 to-secondary/10">
          <h3 className="text-2xl font-bold mb-4 glow-text-primary">
            Join the Lab
          </h3>
          <p className="text-foreground/70 mb-6">
            Get early access to new products and exclusive deals
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your glow-mail"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-secondary/30 text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition neon-border"
            />
            <button className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/50 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-lg mb-4 glow-text-primary">LEDPickLab</h4>
            <p className="text-sm text-foreground/60">
              Engineering the perfect atmosphere since 2024. Master your vibe.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Products</h5>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  LED Strips
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Task Lamps
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Controllers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Support</h5>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Follow Us</h5>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  YouTube
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition">
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60">
          <p>&copy; 2024 LEDPickLab. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
