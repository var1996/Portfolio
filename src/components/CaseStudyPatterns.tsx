export default function CaseStudyPatterns() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Patterns and graphics
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          Patterns and graphics bring the brand to life. Inspired by rhythm, movement, and African
          visual language, these elements add energy and flexibility across different touchpoints.
        </p>
        <div className="grid grid-cols-2 gap-6 items-center">
          <img
            src="/assets/casestudy_images/art direction graphic 1.png"
            alt="Art Direction Graphic 1"
            className="w-full h-auto object-contain"
          />
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
            This illustration captures the fluidity and energy of the sport, while subtly
            incorporating the &ldquo;T&rdquo; form from our custom typeface. The sense of movement
            reflects the dual nature of tamba10, where music and cricket intersect. The inclusion of
            the bat grounds the visual in the sport itself, creating a seamless blend of rhythm and
            play. This can be used in many visual aids both digital and physical.
          </p>
        </div>
      </div>

      {/* ── T Patterns ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          T PATTERNS
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          The following patterns are built from the custom &ldquo;T&rdquo; form within the Tamba10
          typeface, transforming a single typographic element into a bold, expressive visual system.
          Repeated, rotated, and layered, the forms create a sense of rhythm and movement.
        </p>

        <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 items-end">
          <img src="/assets/casestudy_images/tamba-1.png" alt="Tamba T1" className="w-[65px] h-[70px] object-contain" />
          <img src="/assets/casestudy_images/art direction graphic 2.png" alt="Graphic 2" className="w-full h-auto object-contain" />
          <img src="/assets/casestudy_images/art direction graphic 3.png" alt="Graphic 3" className="w-full h-auto object-contain" />
          <img src="/assets/casestudy_images/tamba-2.png" alt="Tamba T2" className="w-[65px] h-[70px] object-contain" />
        </div>

        <div className="flex flex-col gap-0">
          <img src="/assets/casestudy_images/tamba-3.png" alt="Tamba T3" className="w-[65px] h-[70px] object-contain" />
          <div className="grid grid-cols-2 gap-6">
            <img src="/assets/casestudy_images/art direction graphic 4.png" alt="Graphic 4" className="w-full h-auto object-contain" />
            <img src="/assets/casestudy_images/graphic 5.png" alt="Graphic 5" className="w-full h-auto object-contain" />
          </div>
        </div>
      </div>

      {/* ── Arrows + Artist Frames ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          ARROWS &amp; WAYFINDING
        </p>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-end gap-2">
              <img src="/assets/casestudy_images/tamba t 4.png" alt="Tamba T4" className="w-[65px] h-[70px] object-contain shrink-0" />
              <img src="/assets/casestudy_images/arrow graphic.png" alt="Arrow graphic" className="flex-1 min-w-0 h-auto object-contain" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
              ARTIST AND PLAYER FRAMES
            </p>
            <div className="flex items-end gap-2">
              <img src="/assets/casestudy_images/tamba t 5.png" alt="Tamba T5" className="w-[65px] h-[70px] object-contain shrink-0" />
              <img src="/assets/casestudy_images/Artist Frames.png" alt="Artist and player frames" className="flex-1 min-w-0 h-auto object-contain" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
