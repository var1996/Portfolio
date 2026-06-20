'use client'

import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
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
  const endingSpinnerRef  = useRef<HTMLDivElement>(null)
  const ctaRef            = useRef<HTMLDivElement>(null)
  const hasEndingFiredRef = useRef(false)

  const triggerEnding = useCallback(() => {
    if (hasEndingFiredRef.current) return
    hasEndingFiredRef.current = true

    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

    // Phase 1 — fade out card content, border, pip; simultaneously turn card black
    tl.to([cardBoxRef.current, qPipRef.current], { opacity: 0, duration: 0.9 })
    tl.to(wrapperRef.current, { backgroundColor: '#000000', duration: 0.9 }, 0)

    // Phase 2 — reveal ending queen rising; rests 20px from top so float never hides behind nav
    tl.to(
      endingQueenRef.current,
      { opacity: 1, y: 20, duration: 0.8, ease: 'power2.out' },
      '-=0.25'
    )

    // Phase 3 — scale to half + 360° card-flip spin; transformOrigin keeps head pinned at top
    tl.to(
      endingSpinnerRef.current,
      {
        scale: 0.5,
        rotateY: 360,
        duration: 1.5,
        ease: 'power3.inOut',
        transformOrigin: '50% 0%',
      },
      '+=0.1'
    )

    // Phase 4 — slide CTA up and fade in
    tl.to(
      ctaRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: 'power2.out',
        onComplete: () => {
          if (ctaRef.current) ctaRef.current.style.pointerEvents = 'auto'
          // Phase 5 — infinite gentle float on the queen card
          gsap.to(endingQueenRef.current, {
            y: '-=14',
            duration: 2.2,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
          })
        },
      },
      '-=0.35'
    )
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

  // GSAP — queen fades
  useEffect(() => {
    const el      = innerRef.current
    const content = contentRef.current
    const cardBox = cardBoxRef.current
    if (!el || !content || !cardBox) return

    // Set initial states — queen hidden 96px below its top-anchored resting position
    gsap.set(endingQueenRef.current, { opacity: 0, y: 96 })
    gsap.set(ctaRef.current, { opacity: 0, y: 32 })

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

      {/* Q-pip — wrapped for GSAP fade */}
      <div ref={qPipRef} className="absolute top-4 left-[13px] z-10">
        <Image
          src="/assets/q-pip.png"
          alt="Q pip"
          width={48}
          height={48}
        />
      </div>

      {/* Card layout */}
      <div className="flex-1 mt-16 mx-16 flex flex-col min-h-0">
        <div
          ref={cardBoxRef}
          className="flex-1 relative border-8 border-black border-b-0 rounded-t-2xl overflow-hidden flex flex-col min-h-0"
        >
          <div
            ref={innerRef}
            className="flex-1 min-h-0 overflow-y-scroll overflow-x-hidden scrollbar-hide"
          >
            <div ref={contentRef} className="p-8">
              {SECTIONS.map((text, i) => (
                <section
                  key={text}
                  className={i === SECTIONS.length - 1 ? 'mb-140' : 'mb-48'}
                >
                  <h2 className="font-display leading-normal text-center uppercase text-[4rem] text-black">
                    {text}
                  </h2>
                </section>
              ))}
            </div>
          </div>

          <Queens />
        </div>
      </div>

      {/* ── Ending queen — top-anchored so head (image top) appears first ── */}
      <div
        ref={endingQueenRef}
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{ perspective: '900px' }}
      >
        <div
          ref={endingSpinnerRef}
          className="relative"
          style={{
            transformStyle: 'preserve-3d',
            boxShadow: [
              '0 8px 24px rgba(212,175,55,0.25)',
              '0 24px 60px rgba(212,175,55,0.15)',
              '0 60px 120px rgba(0,0,0,0.8)',
            ].join(', '),
          }}
        >
          <img
            src="/assets/queens/ending queen.png"
            alt="Ending queen"
            className="w-full h-auto block"
            style={{
              borderRadius: '12px',
              filter: [
                'drop-shadow(0 4px 12px rgba(212,175,55,0.5))',
                'drop-shadow(0 16px 40px rgba(212,175,55,0.25))',
                'drop-shadow(0 40px 80px rgba(0,0,0,0.9))',
              ].join(' '),
            }}
          />

          {/* Card edge highlights + directional light sheen */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: '12px',
              boxShadow: [
                'inset 0 1px 0 rgba(255,255,255,0.24)',
                'inset 0 -1px 0 rgba(0,0,0,0.28)',
                'inset 1px 0 0 rgba(255,255,255,0.14)',
                'inset -1px 0 0 rgba(0,0,0,0.14)',
              ].join(', '),
              background: 'linear-gradient(148deg, rgba(255,255,255,0.13) 0%, rgba(255,255,255,0.03) 30%, transparent 52%, rgba(0,0,0,0.03) 72%, rgba(0,0,0,0.16) 100%)',
            }}
          />
        </div>
      </div>

      {/* ── CTA overlay ── */}
      <div
        ref={ctaRef}
        className="fixed inset-x-0 top-[calc(52%-50px)] z-50 flex justify-center pointer-events-none"
      >
        <Link href="/case-study" className="group flex items-center gap-2 bg-black/90 backdrop-blur-sm text-white font-body text-[13px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#740614] transition-colors duration-200">
          Read Case Study
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            className="group-hover:translate-x-0.5 transition-transform duration-200"
          >
            <path
              d="M2.5 6.5h8M6.5 2.5l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

    </div>
  )
}
