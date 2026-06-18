'use client'

import { useState } from 'react'

export default function Footer() {
  const [emailOpen, setEmailOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  function handleEmailClick() {
    setEmailOpen((prev) => !prev)
    setCopied(false)
  }

  async function handleCopy() {
    await navigator.clipboard.writeText('varsharanee.roopun@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-black grid grid-cols-12 gap-6 border-t border-white/10">

      {/* Copyright — col 2 */}
      <p className="col-start-2 col-span-4 self-end font-body text-[15px] font-normal text-white/40">
        © 2026 Varsharanee
      </p>

      {/* LinkedIn queen — col 9 */}
      <div className="col-start-9 col-span-2 flex justify-center">
        <a
          href="https://www.linkedin.com/in/varsharanee-designer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="block"
        >
          <img
            src="/assets/queens/Linkedin Queen.png"
            alt="LinkedIn"
            className="w-full h-auto object-contain transition-transform duration-300 ease-out translate-y-6 hover:translate-y-2"
          />
        </a>
      </div>

      {/* Postal queen — col 11 */}
      <div className="col-start-11 col-span-2 flex justify-center relative">
        <button
          onClick={handleEmailClick}
          aria-label="Show email address"
          className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
        >
          <img
            src="/assets/queens/postal queen.png"
            alt="Email"
            className="w-full h-auto object-contain transition-transform duration-300 ease-out translate-y-6 hover:translate-y-2"
          />
        </button>

        {/* Email tooltip — floats above the queen */}
        {emailOpen && (
          <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <button
              onClick={handleCopy}
              className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-2.5 font-body text-[13px] font-normal text-white whitespace-nowrap transition-colors hover:bg-white/20 active:scale-95"
              aria-label="Copy email address"
            >
              {copied ? '✓ Copied!' : 'varsharanee.roopun@gmail.com'}
            </button>
            {/* Arrow */}
            <div className="w-2 h-2 bg-white/10 border-r border-b border-white/15 rotate-45 -mt-1" />
          </div>
        )}
      </div>

    </div>
  )
}
