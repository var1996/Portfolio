import type { Metadata } from 'next'
import { Boldonse, TikTok_Sans, Abril_Fatface } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'

const boldonse = Boldonse({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const tiktokSans = TikTok_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const abrilFatface = Abril_Fatface({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-abril',
})

export const metadata: Metadata = {
  title: 'Varsharanee | Brand Designer',
  description: 'Brand DesignPortfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${boldonse.variable} ${tiktokSans.variable} ${abrilFatface.variable} antialiased`}
    >
      <body className="bg-black text-white font-body h-screen overflow-hidden flex flex-col">
        <Nav />
        <div className="flex-1 grid grid-cols-12 auto-rows-fr gap-6 px-8 overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  )
}
