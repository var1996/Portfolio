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
  'Currently in Bangkok',
]

export default function PlayingCard() {
  const wrapperRef        = useRef<HTMLDivElement>(null)
  const innerRef          = useRef<HTMLDivElement>(null)
  const contentRef        = useRef<HTMLDivElement>(null)
  const cardBoxRef        = useRef<HTMLDivElement>(null)
  const qPipRef           = useRef<HTMLDivElement>(null)
  const lastHeadingRef    = useRef<HTMLHeadingElement>(null)
  // the card that slides up and flips
  const backCardRef       = useRef<HTMLDivElement>(null)
  const flipCardRef       = useRef<HTMLDivElement>(null)
  // two faces on the flip card
  const backFaceRef       = useRef<HTMLDivElement>(null)   // back pattern — visible at 0°
  const caseStudyFaceRef  = useRef<HTMLDivElement>(null)   // case study — visible at 180°

  const hasEndingFiredRef = useRef(false)
  const isEndingActiveRef = useRef(false)
  const endingTl          = useRef<gsap.core.Timeline | null>(null)

  const triggerEnding = useCallback(() => {
    if (hasEndingFiredRef.current) return
    hasEndingFiredRef.current = true
    isEndingActiveRef.current = true

    const tl = gsap.timeline({
      onComplete: () => {
        if (caseStudyFaceRef.current) caseStudyFaceRef.current.style.pointerEvents = 'auto'
      },
    })

    tl
      // Phase 1 — content fades, card slides up, bg goes black
      .to([cardBoxRef.current, qPipRef.current], { opacity: 0, duration: 0.35, ease: 'power2.out' })
      .to(backCardRef.current, { y: '0%', duration: 0.7, ease: 'power2.out' }, '<')
      .to(wrapperRef.current, { backgroundColor: '#000000', duration: 0.7 }, '<')
      // Phase 2 — single flip 0°→180°: back pattern → case study
      .to(flipCardRef.current, { rotationY: 180, duration: 0.65, ease: 'power2.inOut' })

    endingTl.current = tl
  }, [])

  const triggerReverse = useCallback(() => {
    if (!isEndingActiveRef.current) return
    isEndingActiveRef.current = false
    hasEndingFiredRef.current = false

    if (caseStudyFaceRef.current) caseStudyFaceRef.current.style.pointerEvents = 'none'
    endingTl.current?.reverse()

    const el      = innerRef.current
    const heading = lastHeadingRef.current
    if (el && heading) {
      const elRect      = el.getBoundingClientRect()
      const headingRect = heading.getBoundingClientRect()
      const headingCenter = headingRect.top + headingRect.height / 2
      const elCenter       = elRect.top + elRect.height / 2
      el.scrollTop += headingCenter - elCenter
      ScrollTrigger.update()
    }
  }, [])

  // Wheel + keyboard scroll hijack
  useEffect(() => {
    const el = innerRef.current
    if (!el) return

    const checkBottom = () => {
      if (el.scrollTop + el.clientHeight >= el.scrollHeight - 10) triggerEnding()
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (isEndingActiveRef.current) {
        if (e.deltaY < 0) triggerReverse()
        return
      }
      el.scrollTop += e.deltaY
      ScrollTrigger.update()
      checkBottom()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (isEndingActiveRef.current) {
        if (e.key === 'ArrowUp' || e.key === 'PageUp') triggerReverse()
        return
      }
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
  }, [triggerEnding, triggerReverse])

  // GSAP initial states + queen scroll fades
  useEffect(() => {
    const el      = innerRef.current
    const content = contentRef.current
    const cardBox = cardBoxRef.current
    if (!el || !content || !cardBox) return

    gsap.set(backCardRef.current,      { y: '100%', transformStyle: 'preserve-3d' })
    gsap.set(flipCardRef.current,      { rotationY: 0, transformStyle: 'preserve-3d' })
    gsap.set(backFaceRef.current,      { backfaceVisibility: 'hidden' })
    gsap.set(caseStudyFaceRef.current, { rotationY: 180, backfaceVisibility: 'hidden' })

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
    ).sort((a, b) =>
      Number(a.getAttribute('data-queens-image')) - Number(b.getAttribute('data-queens-image'))
    )

    const queenTriggers = images
      .filter(img => Number(img.getAttribute('data-queens-image')) !== 9)
      .map(img => {
        const fadeIndex = Number(img.getAttribute('data-queens-image'))
        const [startPercent, endPercent] = QUEEN_FADES[fadeIndex] ?? [0, 10]

        return gsap.fromTo(img, { opacity: 1 }, {
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
        })
      })

    return () => {
      queenTriggers.forEach(t => t.scrollTrigger?.kill())
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
      <div
        ref={wrapperRef}
        className="col-start-4 col-span-6 flex flex-col rounded-t-3xl relative overflow-hidden"
        style={{ backgroundColor: '#FFF4E5' }}
      >
        {/* Q-pip */}
        <div ref={qPipRef} className="absolute top-[1px] left-[13px] z-10">
          <img src="/q-pip.png" alt="Q pip" width={48} height={48} />
        </div>

        {/* Scrollable card content */}
        <div className="flex-1 mt-16 mx-16 flex flex-col min-h-0">
          <div
            ref={cardBoxRef}
            className="flex-1 relative border-[16px] border-black border-b-0 rounded-t-2xl overflow-hidden flex flex-col min-h-0"
            style={{ backgroundColor: '#FFF4E5' }}
          >
            <div ref={innerRef} className="flex-1 min-h-0 overflow-y-scroll overflow-x-hidden scrollbar-hide">
              <div ref={contentRef} className="pt-[22px] px-8 pb-8">
                {SECTIONS.map((text, i) => {
                  const isLast = i === SECTIONS.length - 1
                  return (
                    <section key={text} className={isLast ? 'mb-140' : 'mb-48'}>
                      <h2
                        ref={isLast ? lastHeadingRef : undefined}
                        className="font-abril leading-[0.9] text-center uppercase text-[84px] text-black"
                      >
                        {text}
                      </h2>
                    </section>
                  )
                })}
              </div>
            </div>
            <Queens />
          </div>
        </div>

        {/* Flip card — one card, two faces */}
        <div className="absolute inset-0 z-[11] pointer-events-none" style={{ perspective: '1200px' }}>
          <div ref={backCardRef} className="absolute inset-0">
            <div ref={flipCardRef} className="absolute inset-0">

              {/* Face 1 — back pattern, visible at 0° */}
              <div ref={backFaceRef} className="absolute inset-x-0 top-0">
                <img src="/assets/back card.png" alt="" className="w-full block"
                  style={{ aspectRatio: '2642/3386', objectFit: 'cover', objectPosition: 'top' }} />
              </div>

              {/* Face 2 — case study, visible at 180° */}
              <div ref={caseStudyFaceRef} className="absolute inset-x-0 top-0 pointer-events-none">
                <div className="relative">
                  <img src="/assets/final case study card.png" alt="Case Study" className="w-full block"
                    style={{ aspectRatio: '2642/3386', objectFit: 'cover', objectPosition: 'top' }} />
                  <div className="absolute inset-x-0 flex justify-center" style={{ top: 'calc(63% + 60px)' }}>
                    <Link
                      href="/case-study"
                      className="bg-black text-white font-display uppercase tracking-widest text-[13px] px-7 py-3 rounded-full border border-white/30 hover:bg-[#740614] hover:text-white transition-colors duration-200"
                    >
                      Read Case Study
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  )
}
