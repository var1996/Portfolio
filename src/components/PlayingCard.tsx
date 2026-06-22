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
  const wrapperRef     = useRef<HTMLDivElement>(null)
  const innerRef       = useRef<HTMLDivElement>(null)
  const contentRef     = useRef<HTMLDivElement>(null)
  const cardBoxRef     = useRef<HTMLDivElement>(null)
  const qPipRef        = useRef<HTMLDivElement>(null)
  // outer: slides up from below, then scales to 0.47
  const backCardRef    = useRef<HTMLDivElement>(null)
  // inner: the actual rotating element (preserve-3d)
  const flipCardRef    = useRef<HTMLDivElement>(null)
  // the two faces inside flipCardRef
  const backFaceRef    = useRef<HTMLDivElement>(null)
  const endingFaceRef  = useRef<HTMLDivElement>(null)
  const bottomPanelRef = useRef<HTMLDivElement>(null)

  const hasEndingFiredRef = useRef(false)
  const isEndingActiveRef = useRef(false)
  const endingTl          = useRef<gsap.core.Timeline | null>(null)
  const floatTween        = useRef<gsap.core.Tween | null>(null)

  const triggerEnding = useCallback(() => {
    if (hasEndingFiredRef.current) return
    hasEndingFiredRef.current = true
    isEndingActiveRef.current = true

    const tl = gsap.timeline({
      onComplete: () => {
        if (bottomPanelRef.current) bottomPanelRef.current.style.pointerEvents = 'auto'
        floatTween.current = gsap.to(backCardRef.current, {
          y: '-=5', duration: 2.2, ease: 'sine.inOut', yoyo: true, repeat: -1,
        })
      },
    })

    tl
      // Fade original card + bg to black while back card slides up from below
      .to([cardBoxRef.current, qPipRef.current], { opacity: 0, duration: 0.35, ease: 'power2.out' })
      .to(backCardRef.current, { y: '0%', duration: 0.7, ease: 'power2.out' }, '<')
      .to(wrapperRef.current, { backgroundColor: '#000000', duration: 0.7 }, '<')
      // Single seamless 180° spin — back face folds away, ending queen unfolds into view
      .to(flipCardRef.current, { rotationY: 180, duration: 0.65, ease: 'power2.inOut' })
      // Zoom out + panel rises simultaneously
      .to(backCardRef.current, { scale: 0.47, duration: 0.85, ease: 'power2.out', transformOrigin: '50% 0%' }, '<')
      .to(bottomPanelRef.current, { y: 0, duration: 0.85, ease: 'power2.out' }, '<')

    endingTl.current = tl
  }, [])

  const triggerReverse = useCallback(() => {
    if (!isEndingActiveRef.current) return
    isEndingActiveRef.current = false
    hasEndingFiredRef.current = false

    if (bottomPanelRef.current) bottomPanelRef.current.style.pointerEvents = 'none'

    // Kill float and snap accumulated y back before reversing the timeline
    floatTween.current?.kill()
    floatTween.current = null
    gsap.set(backCardRef.current, { y: 0 })

    endingTl.current?.reverse()
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

  // GSAP — initial states + queen scroll fades
  useEffect(() => {
    const el      = innerRef.current
    const content = contentRef.current
    const cardBox = cardBoxRef.current
    if (!el || !content || !cardBox) return

    // All 3-D setup done via GSAP to avoid the inline-CSS flash on first render
    gsap.set(backCardRef.current,   { y: '100%' })
    gsap.set(flipCardRef.current,   { rotationY: 0, transformStyle: 'preserve-3d' })
    // Back face: front faces the viewer at 0°; hide when rotated past 90°
    gsap.set(backFaceRef.current,   { backfaceVisibility: 'hidden' })
    // Ending queen: pre-rotated 180° so it starts facing away; appears when flipCard reaches 180°
    gsap.set(endingFaceRef.current, { rotationY: 180, backfaceVisibility: 'hidden' })
    gsap.set(bottomPanelRef.current, { y: '100%' })

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
              {SECTIONS.map((text, i) => (
                <section key={text} className={i === SECTIONS.length - 1 ? 'mb-140' : 'mb-48'}>
                  <h2 className="font-abril leading-[1.1] text-center uppercase text-[84px] text-black">
                    {text}
                  </h2>
                </section>
              ))}
            </div>
          </div>
          <Queens />
        </div>
      </div>

      {/*
        CSS perspective lives on a static wrapper so it's never animated.
        backCardRef slides up + scales.
        flipCardRef (preserve-3d) rotates 0→180°:
          - backFaceRef visible at 0°, hidden at 180°  (backfaceVisibility:hidden, no pre-rotation)
          - endingFaceRef hidden at 0°, visible at 180° (backfaceVisibility:hidden, pre-rotated 180° via GSAP)
        No inline CSS transforms = no first-render flash.
      */}
      <div className="absolute inset-0 z-[11] pointer-events-none" style={{ perspective: '1200px' }}>
        <div ref={backCardRef} className="absolute inset-0">
          <div ref={flipCardRef} className="absolute inset-0">
            <div ref={backFaceRef} className="absolute inset-x-0 top-0">
              <img src="/assets/back card.png" alt="" className="w-full h-auto block" />
            </div>
            <div ref={endingFaceRef} className="absolute inset-x-0 top-0">
              <img
                src="/assets/queens/ending queen.png"
                alt="Ending queen"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Case study panel — rises from below */}
      <div
        ref={bottomPanelRef}
        className="absolute inset-x-0 bottom-0 pointer-events-none z-20"
        style={{ backgroundColor: 'rgba(0,0,0,0.78)' }}
      >
        <div className="flex items-center gap-8 px-8 pb-8 pt-0">
          <img
            src="/assets/casestudy_images/Case Study Cover Image.png"
            alt="Tamba10"
            style={{ width: 360, height: 180, objectFit: 'cover', borderRadius: 16, flexShrink: 0 }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1, minWidth: 0 }}>
<p className="font-body text-white text-[22px] leading-[1.35]">
              Full rebrand of Zimbabwe&apos;s<br />T10 cricket festival
            </p>
            <Link
              href="/case-study"
              className="self-start group flex items-center gap-2 text-white hover:text-black font-body text-[15px] font-semibold uppercase tracking-[0.1em] px-6 py-3 rounded-full transition-colors duration-200 bg-white/10 hover:bg-[#DCBE00]"
            >
              Read Case Study
              <svg width="12" height="12" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                <path d="M2.5 6.5h8M6.5 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
