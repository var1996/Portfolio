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
        <button className="font-body rounded-xl bg-accent px-6 py-2">
          {isHome ? 'Case Study' : 'Home'}
        </button>
      </Link>
    </nav>
  )
}
