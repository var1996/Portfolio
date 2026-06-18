'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Queens from '@/components/Queens'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SCROLL_STEP = 120

// [start%, end%] of total scroll range for each queen layer fade.
// fadeIndex 0 = top layer (0.png). fadeIndex 9 is excluded — it never fades.
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
  const innerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Wheel + keyboard scroll hijack — calls ScrollTrigger.update() so GSAP
  // reacts immediately to programmatic scrollTop changes
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
        case 'ArrowDown':  el.scrollTop += SCROLL_STEP; break
        case 'ArrowUp':    el.scrollTop -= SCROLL_STEP; break
        case 'PageDown':   el.scrollTop += el.clientHeight; break
        case 'PageUp':     el.scrollTop -= el.clientHeight; break
        case 'Home':       el.scrollTop = 0; break
        case 'End':        el.scrollTop = el.scrollHeight; break
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

  // GSAP ScrollTrigger — one trigger per queen image, scoped to the inner scroller
  useEffect(() => {
    const el = innerRef.current
    const content = contentRef.current
    if (!el || !content) return

    // Teach ScrollTrigger how to read scroll position from the inner div
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

    const triggers = images
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
      triggers.forEach((t) => t.scrollTrigger?.kill())
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
        className="absolute top-4 left-[14px]"
      />

      <div className="flex-1 mt-16 mx-16 relative border-8 border-black border-b-0 rounded-t-2xl overflow-hidden flex flex-col">

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
  )
}
