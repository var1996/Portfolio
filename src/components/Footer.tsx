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
    <div className="bg-white px-12 grid grid-cols-[1fr_2fr] gap-x-16 border-t border-black/10 items-end">

      {/* Col 1: copyright */}
      <p className="pb-10 font-body text-[15px] font-normal text-black/40">
        © 2026 Varsharanee
      </p>

      {/* Col 2: queens, right-aligned */}
      <div className="flex justify-end gap-6 items-end">

        {/* LinkedIn queen */}
        <div className="self-end w-[140px]">
          <div className="relative overflow-hidden h-[160px] hover:h-[300px] transition-[height] duration-500 ease-out">
            <a
              href="https://www.linkedin.com/in/varsharanee-designer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="absolute inset-0"
            >
              <img
                src="/assets/casestudy_images/Linkedin Queen.png"
                alt="LinkedIn"
                className="absolute bottom-0 w-full h-auto object-contain"
              />
            </a>
          </div>
        </div>

        {/* Postal queen */}
        <div className="self-end w-[140px] relative">
          {emailOpen && (
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
              <button
                onClick={handleCopy}
                className="bg-black/10 backdrop-blur-sm border border-black/15 rounded-xl px-4 py-2.5 font-body text-[13px] font-normal text-black whitespace-nowrap transition-colors hover:bg-black/20 active:scale-95"
                aria-label="Copy email address"
              >
                {copied ? '✓ Copied!' : 'varsharanee.roopun@gmail.com'}
              </button>
              <div className="w-2 h-2 bg-black/10 border-r border-b border-black/15 rotate-45 -mt-1" />
            </div>
          )}
          <div className="relative overflow-hidden h-[160px] hover:h-[300px] transition-[height] duration-500 ease-out">
            <button
              onClick={handleEmailClick}
              aria-label="Show email address"
              className="absolute inset-0 w-full focus-visible:outline-none"
            >
              <img
                src="/assets/casestudy_images/Postal Queen.png"
                alt="Email"
                className="absolute bottom-0 w-full h-auto object-contain"
              />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}
