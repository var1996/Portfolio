'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
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

// Last 8% of scroll: card shrinks, case-study panel reveals
const CARD_COLLAPSE_RANGE: [number, number] = [92, 100]

const SECTIONS = [
  'my name means queen of rain',
  'Born and raised in Zimbabwe',
  'At 18, moved to Australia',
  'Currently based in Thailand',
]

export default function PlayingCard() {
  const innerRef        = useRef<HTMLDivElement>(null)
  const contentRef      = useRef<HTMLDivElement>(null)
  const cardBoxRef      = useRef<HTMLDivElement>(null)
  const caseStudyRef    = useRef<HTMLDivElement>(null)
  const caseStudyInnerRef = useRef<HTMLDivElement>(null)

  // Wheel + keyboard scroll hijack
  useEffect(() => {
    const el = innerRef.current
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      el.scrollTop += e.deltaY
      ScrollTrigger.update()
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
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  // GSAP ScrollTrigger — queen fades + card collapse
  useEffect(() => {
    const el             = innerRef.current
    const content        = contentRef.current
    const cardBox        = cardBoxRef.current
    const caseStudy      = caseStudyRef.current
    const caseStudyInner = caseStudyInnerRef.current
    if (!el || !content || !cardBox || !caseStudy || !caseStudyInner) return

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
      el.parentElement!.querySelectorAll<HTMLImageElement>('[data-queens-image]')
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

    // Card collapse + case-study reveal over the final scroll stretch
    const [collapseStart, collapseEnd] = CARD_COLLAPSE_RANGE

    const collapseTimeline = gsap.timeline({
      scrollTrigger: {
        scroller: el,
        trigger: content,
        start: () => {
          const scrollable = el.scrollHeight - el.clientHeight
          return `top+=${(collapseStart / 100) * scrollable}px top`
        },
        end: () => {
          const scrollable = el.scrollHeight - el.clientHeight
          return `top+=${(collapseEnd / 100) * scrollable}px top`
        },
        scrub: true,
        invalidateOnRefresh: true,
      },
    })

    collapseTimeline
      .to(cardBox,        { flexGrow: 0.6, ease: 'none' }, 0)
      .to(caseStudy,      { flexGrow: 0.4, ease: 'none' }, 0)
      .to(caseStudyInner, { opacity: 1,    ease: 'none' }, 0)

    return () => {
      queenTriggers.forEach((t) => t.scrollTrigger?.kill())
      collapseTimeline.scrollTrigger?.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div className="col-start-4 col-span-6 flex flex-col bg-card rounded-t-3xl relative">

      <Image
        src="/assets/q-pip.png"
        alt="Q pip"
        width={48}
        height={48}
        className="absolute top-4 left-[13px]"
      />

      {/* Layout container: card box + case-study panel stacked vertically */}
      <div className="flex-1 mt-16 mx-16 flex flex-col min-h-0">

        {/* Card visual — starts full size, shrinks on scroll-complete */}
        <div
          ref={cardBoxRef}
          className="relative border-8 border-black border-b-0 rounded-t-2xl overflow-hidden flex flex-col min-h-0"
          style={{ flexGrow: 1, flexBasis: 0 }}
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

        {/* Case-study panel — starts invisible, revealed on scroll-complete */}
        <div
          ref={caseStudyRef}
          className="overflow-hidden flex flex-col min-h-0"
          style={{ flexGrow: 0, flexBasis: 0 }}
        >
          <div ref={caseStudyInnerRef} className="p-8 opacity-0">
            <h3 className="font-display uppercase text-[2rem] text-black">
              Case Study
            </h3>
          </div>
        </div>

      </div>
    </div>
  )
}
