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
    icon: '/favicon.jpg',
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
