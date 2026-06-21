'use client'

import { useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Queens from '@/components/Queens'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_STEP = 120

const QUEEN_FADES: Record<number, [number, number]> = {
  0: [0,   10],
  1: [10,  20],
  2: [20,  30],
  3: [35,  45],
  4: [45,  55],
  5: [55,  65],
  6: [65,  75],
  7: [75,  85],
  8: [85,  90],
}

const SECTIONS = [
  'my name means queen of rain',
  'Born and raised in Zimbabwe',
  'At 18, moved to Australia',
  'Currently based in Thailand',
]

export default function PlayingCard() {
  const wrapperRef        = useRef<HTMLDivElement>(null)
  const innerRef          = useRef<HTMLDivElement>(null)
  const contentRef        = useRef<HTMLDivElement>(null)
  const cardBoxRef        = useRef<HTMLDivElement>(null)
  const qPipRef           = useRef<HTMLDivElement>(null)
  const endingQueenRef    = useRef<HTMLDivElement>(null)

  const bottomPanelRef    = useRef<HTMLDivElement>(null)
  const hasEndingFiredRef = useRef(false)

  const triggerEnding = useCallback(() => {
    if (hasEndingFiredRef.current) return
    hasEndingFiredRef.current = true

    // Phase 1 — crossfade (all simultaneous)
    gsap.to([cardBoxRef.current, qPipRef.current], { opacity: 0, duration: 0.45, ease: 'power2.inOut' })
    gsap.to(wrapperRef.current, { backgroundColor: '#000000', duration: 0.45, ease: 'power2.inOut' })
    gsap.to(endingQueenRef.current, {
      opacity: 1,
      duration: 0.45,
      ease: 'power2.inOut',
      onComplete: () => {
        // Phase 2 — zoom out + panel rises simultaneously
        gsap.to(endingQueenRef.current, { scale: 0.78, duration: 0.85, ease: 'power2.out', transformOrigin: '50% 0%' })
        gsap.to(bottomPanelRef.current, {
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          onComplete: () => {
            if (bottomPanelRef.current) bottomPanelRef.current.style.pointerEvents = 'auto'
            gsap.to(endingQueenRef.current, { y: '-=12', duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
          },
        })
      },
    })
  }, [])

  // Wheel + keyboard scroll hijack
  useEffect(() => {
    const el = innerRef.current
    if (!el) return

    const checkBottom = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) {
        triggerEnding()
      }
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      el.scrollTop += e.deltaY
      ScrollTrigger.update()
      checkBottom()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowDown': el.scrollTop += SCROLL_STEP; break
        case 'ArrowUp':   el.scrollTop -= SCROLL_STEP; break
        case 'PageDown':  el.scrollTop += el.clientHeight; break
        case 'PageUp':    el.scrollTop -= el.clientHeight; break
        case 'Home':      el.scrollTop = 0; break
        case 'End':       el.scrollTop = el.scrollHeight; break
      }
      ScrollTrigger.update()
      checkBottom()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [triggerEnding])

  // GSAP — queen fades + initial state
  useEffect(() => {
    const el      = innerRef.current
    const content = contentRef.current
    const cardBox = cardBoxRef.current
    if (!el || !content || !cardBox) return

    gsap.set(endingQueenRef.current,   { opacity: 0, y: 0 })
    gsap.set(bottomPanelRef.current,   { y: '100%' })

    ScrollTrigger.scrollerProxy(el, {
      scrollTop(value) {
        if (arguments.length) el.scrollTop = value as number
        return el.scrollTop
      },
      getBoundingClientRect() {
        return { top: 0, left: 0, width: el.clientWidth, height: el.clientHeight }
      },
    })

    const images = Array.from(
      cardBox.querySelectorAll<HTMLImageElement>('[data-queens-image]')
    ).sort(
      (a, b) =>
        Number(a.getAttribute('data-queens-image')) -
        Number(b.getAttribute('data-queens-image'))
    )

    const queenTriggers = images
      .filter((img) => Number(img.getAttribute('data-queens-image')) !== 9)
      .map((img) => {
        const fadeIndex = Number(img.getAttribute('data-queens-image'))
        const [startPercent, endPercent] = QUEEN_FADES[fadeIndex] ?? [0, 10]

        return gsap.fromTo(
          img,
          { opacity: 1 },
          {
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              scroller: el,
              trigger: content,
              start: () => {
                const scrollable = el.scrollHeight - el.clientHeight
                return `top+=${(startPercent / 100) * scrollable}px top`
              },
              end: () => {
                const scrollable = el.scrollHeight - el.clientHeight
                return `top+=${(endPercent / 100) * scrollable}px top`
              },
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        )
      })

    return () => {
      queenTriggers.forEach((t) => t.scrollTrigger?.kill())
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={wrapperRef} className="col-start-4 col-span-6 flex flex-col bg-card rounded-t-3xl relative overflow-hidden">

      {/* Pattern texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/assets/queens/pattern.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'multiply',
          opacity: 0.8,
        }}
      />

      {/* Q-pip */}
      <div ref={qPipRef} className="absolute top-[1px] left-[13px] z-10">
        <img src="/q-pip.png" alt="Q pip" width={48} height={48} />
      </div>

      {/* Card layout */}
      <div className="flex-1 mt-16 mx-16 flex flex-col min-h-0">
        <div
          ref={cardBoxRef}
          className="flex-1 relative border-8 border-black border-b-0 rounded-t-2xl overflow-hidden flex flex-col min-h-0 bg-card"
        >
          <div
            ref={innerRef}
            className="flex-1 min-h-0 overflow-y-scroll overflow-x-hidden scrollbar-hide"
          >
            <div ref={contentRef} className="pt-[22px] px-8 pb-8">
              {SECTIONS.map((text, i) => (
                <section
                  key={text}
                  className={i === SECTIONS.length - 1 ? 'mb-140' : 'mb-48'}
                >
                  <h2 className="font-abril leading-normal text-center uppercase text-[84px] text-black">
                    {text}
                  </h2>
                </section>
              ))}
            </div>
          </div>

          <Queens />
        </div>
      </div>

      {/* ── Ending queen — fades in at card position, then zooms out ── */}
      <div
        ref={endingQueenRef}
        className="absolute inset-x-0 top-0 pointer-events-none z-10"
      >
        <img

          src="/assets/queens/ending queen.png"
          alt="Ending queen"
          className="w-full h-auto block"
          style={{ borderRadius: '12px' }}
        />
      </div>

      {/* ── Case study panel — rises from below ── */}
      <div
        ref={bottomPanelRef}
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
        style={{ backgroundColor: '#000', borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <div className="flex items-center gap-4 px-5 py-4">
          <img
            src="/assets/queens/creative.png"
            alt="Tamba10"
            style={{ width: 72, height: 72, objectFit: 'cover', borderRadius: 10, flexShrink: 0 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1, minWidth: 0 }}>
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.12em] text-yellow">
              Case Study · Tamba10
            </p>
            <p className="font-body text-white text-[12px] leading-[1.4]" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
              Full brand identity for Zimbabwe&apos;s premier T10 cricket and culture festival
            </p>
            <Link
              href="/case-study"
              className="self-start group flex items-center gap-1.5 text-white font-body text-[11px] font-semibold uppercase tracking-[0.1em] px-4 py-1.5 rounded-full transition-colors duration-200"
              style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
            >
              Read Case Study
              <svg width="10" height="10" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
