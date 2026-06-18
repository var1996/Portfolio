'use client'

// DOM order = bottom of visual stack → top.
// GSAP targets images via data-queens-image={fadeIndex}.
// fadeIndex 0 fades first (topmost layer), 9 fades last.
const IMAGES = [
  { src: '/assets/queens/3-thai-3.png', alt: 'Thai queen 3', fadeIndex: 9 },
  { src: '/assets/queens/3-thai-2.png', alt: 'Thai queen 2', fadeIndex: 8 },
  { src: '/assets/queens/3-thai-1.png', alt: 'Thai queen 1', fadeIndex: 7 },
  { src: '/assets/queens/2-aus-3.png', alt: 'Aus queen 3', fadeIndex: 6 },
  { src: '/assets/queens/2-aus-2.png', alt: 'Aus queen 2', fadeIndex: 5 },
  { src: '/assets/queens/2-aus-1.png', alt: 'Aus queen 1', fadeIndex: 4 },
  { src: '/assets/queens/1-zim-3.png', alt: 'Zim queen 3', fadeIndex: 3 },
  { src: '/assets/queens/1-zim-2.png', alt: 'Zim queen 2', fadeIndex: 2 },
  { src: '/assets/queens/1-zim-1.png', alt: 'Zim queen 1', fadeIndex: 1 },
  { src: '/assets/queens/0.png', alt: 'Base queen', fadeIndex: 0 },
]

export default function Queens() {
  return (
    <div className="absolute translate-y-24 bottom-0 inset-x-0 grid pointer-events-none">
      {IMAGES.map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          loading="eager"
          data-queens-image={img.fadeIndex}
          className="row-start-1 col-start-1 w-full h-auto block"
        />
      ))}
    </div>
  )
}
