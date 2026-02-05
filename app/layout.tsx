import React from "react"
import type { Metadata } from 'next'
import { Michroma, Space_Grotesk } from 'next/font/google'

import './globals.css'

const michroma = Michroma({ subsets: ['latin'], weight: '400' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LEDPickLab - Master Your Atmosphere',
  description: 'Precision-picked LED strips and task lighting for gamers, creators, and night-owls',
  generator: 'v0.app',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%238F00FF"/><circle cx="35" cy="35" r="6" fill="%23FF0000"/><circle cx="65" cy="35" r="6" fill="%2300FF00"/><circle cx="35" cy="65" r="6" fill="%230000FF"/><circle cx="65" cy="65" r="8" fill="%23FFFFFF"/></svg>',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${michroma.className} antialiased bg-background text-foreground`} style={{ fontFamily: `${spaceGrotesk.style.fontFamily}, ${michroma.style.fontFamily}` }}>
        {children}
      </body>
    </html>
  )
}
