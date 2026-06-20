'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) return <div className="w-full px-8 py-3 shrink-0 invisible" aria-hidden><img src="/q-pip.png" width={48} height={48} alt="" /></div>

  return (
    <nav className="w-full px-8 py-3 flex items-center shrink-0">
      <Link href="/">
        <img
          src="/assets/casestudy_images/case study button.png"
          alt="Return home"
          height={48}
          className="cursor-pointer opacity-90 hover:opacity-100 transition-opacity duration-200 h-12 w-auto"
        />
      </Link>
    </nav>
  )
}
