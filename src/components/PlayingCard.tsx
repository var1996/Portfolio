'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Queens from '@/components/Queens'
import Footer from '@/components/Footer'
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
  // outer: slides up, becomes the ending queen card in the fan
  const backCardRef    = useRef<HTMLDivElement>(null)
  // inner: rotates 0→180° to reveal the ending queen face
  const flipCardRef    = useRef<HTMLDivElement>(null)
  const backFaceRef    = useRef<HTMLDivElement>(null)
  const endingFaceRef  = useRef<HTMLDivElement>(null)
  // fan elements that appear after the flip
  const fanBackRef     = useRef<HTMLDivElement>(null)   // back card fans left
  const fanCaseRef     = useRef<HTMLDivElement>(null)   // case study card fans right
  // footer portal
  const footerRef      = useRef<HTMLDivElement>(null)

  const hasEndingFiredRef = useRef(false)
  const isEndingActiveRef = useRef(false)
  const endingTl          = useRef<gsap.core.Timeline | null>(null)

  // Portal needs to mount client-side
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const triggerEnding = useCallback(() => {
    if (hasEndingFiredRef.current) return
    hasEndingFiredRef.current = true
    isEndingActiveRef.current = true

    // backCardRef starts at y:'100%' which puts it at/below the viewport bottom,
    // so overflow:visible won't leak anything before the slide-up begins.
    // We set it here so the fan (Phase 3) can extend beyond the card bounds.
    if (wrapperRef.current) wrapperRef.current.style.overflow = 'visible'

    const tl = gsap.timeline({
      onComplete: () => {
        // Allow clicks on the case study card
        if (fanCaseRef.current) fanCaseRef.current.style.pointerEvents = 'auto'
      },
    })

    tl
      // Phase 1 — original card fades, back card slides up, bg goes black
      .to([cardBoxRef.current, qPipRef.current], { opacity: 0, duration: 0.35, ease: 'power2.out' })
      .to(backCardRef.current, { y: '0%', duration: 0.7, ease: 'power2.out' }, '<')
      .to(wrapperRef.current, { backgroundColor: '#000000', duration: 0.7 }, '<')
      // Phase 2 — seamless 180° flip reveals ending queen
      .to(flipCardRef.current, { rotationY: 180, duration: 0.65, ease: 'power2.inOut' })
      // Phase 3 — fan: back card and case study card appear, all three spread open
      //           footer rises from below simultaneously
      .to([fanBackRef.current, fanCaseRef.current], { opacity: 1, duration: 0.2 })
      .to(fanBackRef.current, {
        rotation: -22, scale: 0.6, duration: 0.8, ease: 'power2.out', transformOrigin: '50% 100%',
      }, '<')
      .to(backCardRef.current, {
        rotation: -6, scale: 0.6, duration: 0.8, ease: 'power2.out', transformOrigin: '50% 100%',
      }, '<')
      .to(fanCaseRef.current, {
        rotation: 18, scale: 0.6, duration: 0.8, ease: 'power2.out', transformOrigin: '50% 100%',
      }, '<')
      .to(footerRef.current, { y: '0%', duration: 0.8, ease: 'power2.out' }, '<')

    endingTl.current = tl
  }, [])

  const triggerReverse = useCallback(() => {
    if (!isEndingActiveRef.current) return
    isEndingActiveRef.current = false
    hasEndingFiredRef.current = false

    if (fanCaseRef.current) fanCaseRef.current.style.pointerEvents = 'none'

    endingTl.current?.reverse()
    // Restore clipping once the reverse completes so the back card
    // can't be seen below the card on future forward plays.
    endingTl.current?.eventCallback('onReverseComplete', () => {
      if (wrapperRef.current) wrapperRef.current.style.overflow = 'hidden'
    })
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

    gsap.set(backCardRef.current,    { y: '100%', transformStyle: 'preserve-3d' })
    gsap.set(flipCardRef.current,    { rotationY: 0, transformStyle: 'preserve-3d' })
    gsap.set(backFaceRef.current,    { backfaceVisibility: 'hidden' })
    gsap.set(endingFaceRef.current,  { rotationY: 180, backfaceVisibility: 'hidden' })
    // Fan elements start hidden, stacked at card position
    gsap.set(fanBackRef.current,     { opacity: 0, rotation: 0 })
    gsap.set(fanCaseRef.current,     { opacity: 0, rotation: 0 })
    // Footer starts below viewport
    if (footerRef.current) gsap.set(footerRef.current, { y: '100%' })

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

  // Sync footer initial state once portal mounts
  useEffect(() => {
    if (mounted && footerRef.current) {
      gsap.set(footerRef.current, { y: '100%' })
    }
  }, [mounted])

  return (
    <>
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
          Flip card — slides up then spins 180°.
          After the flip it becomes the "ending queen" card in the fan (z-[11]).
        */}
        <div className="absolute inset-0 z-[11] pointer-events-none" style={{ perspective: '1200px' }}>
          <div ref={backCardRef} className="absolute inset-0">
            <div ref={flipCardRef} className="absolute inset-0">
              <div ref={backFaceRef} className="absolute inset-x-0 top-0">
                <img src="/assets/back card.png" alt="" className="w-full h-auto block" />
              </div>
              <div ref={endingFaceRef} className="absolute inset-x-0 top-0">
                <img src="/assets/queens/ending queen.png" alt="Ending queen" className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </div>

        {/* Fan — back card (fans left, behind) */}
        <div ref={fanBackRef} className="absolute inset-0 z-[10] pointer-events-none">
          <img src="/assets/back card.png" alt="" className="w-full h-auto block" />
        </div>

        {/* Fan — case study card (fans right, in front) */}
        <div ref={fanCaseRef} className="absolute inset-0 z-[13] pointer-events-none">
          <Link href="/case-study" className="block">
            <img src="/Case Study card.png" alt="Case Study" className="w-full h-auto block" />
          </Link>
        </div>
      </div>

      {/* Footer portal — renders at body level so overflow:hidden on the card doesn't clip it */}
      {mounted && createPortal(
        <div
          ref={footerRef}
          style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 50 }}
        >
          <Footer />
        </div>,
        document.body
      )}
    </>
  )
}
