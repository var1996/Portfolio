'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  return (
    <nav className="w-full px-8 py-3 flex items-center justify-between shrink-0">
      <div>
        <p className="font-display uppercase">Varsharanee</p>
        <p className="font-body">Brand Designer</p>
      </div>
      <Link href={isHome ? '/case-study' : '/'}>
        <button className="font-body text-sm rounded-xl bg-accent px-5 py-2 cursor-pointer transition-colors duration-200 hover:bg-accent/80 active:scale-95 transition-transform">
          {isHome ? 'Read Case Study' : 'Home'}
        </button>
      </Link>
    </nav>
  )
}
