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
    <div className="bg-black px-[30px] flex items-end justify-between border-t border-white/10">

      {/* Copyright */}
      <p className="pb-10 font-body text-[15px] font-normal text-white/40">
        © 2026 Varsharanee
      </p>

      {/* Queens */}
      <div className="flex gap-6 items-end">

        {/* LinkedIn queen */}
        <div className="group relative w-[200px] h-[245px] overflow-hidden">
          <a
            href="https://www.linkedin.com/in/varsharanee-designer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="absolute -bottom-5 w-full"
          >
            <img
              src="/assets/queens/Linkedin Queen.png"
              alt="LinkedIn"
              className="w-full h-auto block transition-transform duration-500 ease-out group-hover:-translate-y-5"
            />
          </a>
        </div>

        {/* Postal / email queen */}
        <div className="relative">
          {emailOpen && (
            <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
              <button
                onClick={handleCopy}
                className="bg-[#8C0006]/80 backdrop-blur-sm border border-[#8C0006] rounded-xl px-4 py-2.5 font-body text-[13px] font-normal text-white whitespace-nowrap transition-colors hover:bg-[#8C0006] active:scale-95"
                aria-label="Copy email address"
              >
                {copied ? '✓ Copied!' : 'varsharanee.roopun@gmail.com'}
              </button>
              <div className="w-2 h-2 bg-[#8C0006]/80 border-r border-b border-[#8C0006] rotate-45 -mt-1" />
            </div>
          )}
          <div className="group relative w-[200px] h-[245px] overflow-hidden">
            <button
              onClick={handleEmailClick}
              aria-label="Show email address"
              className="absolute -bottom-5 w-full focus-visible:outline-none"
            >
              <img
                src="/assets/queens/postal queen.png"
                alt="Email"
                className="w-full h-auto block transition-transform duration-500 ease-out group-hover:-translate-y-5"
              />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
