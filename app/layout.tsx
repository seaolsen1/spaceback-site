import type { Metadata, Viewport } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerif = DM_Serif_Display({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Spaceback | Space Transformation in Phoenix, AZ',
  description: 'Transform your cluttered spaces into functional, organized environments. Spaceback is Phoenix\'s premier space transformation company. Not junk removal — real transformation.',
  keywords: ['space transformation', 'garage organization', 'Phoenix Arizona', 'home organization', 'decluttering'],
  openGraph: {
    title: 'Spaceback | Take Your Space Back',
    description: 'Phoenix\'s premier space transformation company. Not junk removal — real transformation.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#f8faf7',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
