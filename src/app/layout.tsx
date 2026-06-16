import type { Metadata } from 'next'
import { Boldonse, TikTok_Sans } from 'next/font/google'
import './globals.css'

const boldonse = Boldonse({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
})

const tiktokSans = TikTok_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Design Portfolio',
  description: 'Design Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${boldonse.variable} ${tiktokSans.variable} h-full antialiased`}
    >
      <body className="font-body min-h-full">
        <div className="mx-8 grid grid-cols-12 gap-6">{children}</div>
      </body>
    </html>
  )
}
