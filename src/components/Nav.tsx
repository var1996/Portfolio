'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (isHome) return <div className="w-full shrink-0 invisible" style={{ height: 75 }} aria-hidden />

  return (
    <nav className="w-full px-8 py-3 flex items-center shrink-0">
      <Link href="/">
        <img
          src="/assets/casestudy_images/case study button.png"
          alt="Return home"
          height={58}
          className="cursor-pointer opacity-90 hover:opacity-100 brightness-100 hover:brightness-125 transition-all duration-200 h-[58px] w-auto"
        />
      </Link>
    </nav>
  )
}
