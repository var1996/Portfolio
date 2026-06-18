export default function CaseStudyPatterns() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Heading ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.1] text-white">
        Patterns and graphics
      </h2>

      {/* ── Introduction ── */}
      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white/85">
        Patterns and graphics bring the brand to life. Inspired by rhythm, movement, and African
        visual language, these elements add energy and flexibility across different touchpoints.
      </p>

      {/* ════════════════ SECTION 1 — ART DIRECTION GRAPHIC 1 ════════════════ */}

      <div className="col-start-2 col-span-6 mt-16 flex flex-col gap-4">
        <img
          src="/assets/casestudy_images/art direction graphic 1.png"
          alt="Art Direction Graphic 1"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-start-8 col-span-4 mt-16 self-center">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          This illustration captures the fluidity and energy of the sport, while subtly
          incorporating the &ldquo;T&rdquo; form from our custom typeface. The sense of movement
          reflects the dual nature of tamba10, where music and cricket intersect. The inclusion of
          the bat grounds the visual in the sport itself, creating a seamless blend of rhythm and
          play. This can be used in many visual aids both digital and physical.
        </p>
      </div>

      {/* ════════════════ T PATTERNS — INTRO ════════════════ */}

      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white/85 mt-16">
        The following patterns are built from the custom &ldquo;T&rdquo; form within the Tamba10
        typeface, transforming a single typographic element into a bold, expressive visual system.
        Repeated, rotated, and layered, the forms create a sense of rhythm and movement. This can
        be used in many visual aids both digital and physical.
      </p>

      {/* ── Tamba T1 (col 2) + Tamba T2 (col 11) — same row ── */}
      <div className="col-start-2 col-span-1 mt-16">
        <img
          src="/assets/casestudy_images/tamba-1.png"
          alt="Tamba T1"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-start-10 col-span-2 mt-16">
        <img
          src="/assets/casestudy_images/tamba-2.png"
          alt="Tamba T2"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Graphic 2 (cols 2–6) + Graphic 3 (cols 7–11) — same row, directly below T1/T2 ── */}
      <div className="col-start-2 col-span-5">
        <img
          src="/assets/casestudy_images/art direction graphic 2.png"
          alt="Art Direction Graphic 2"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-start-7 col-span-5">
        <img
          src="/assets/casestudy_images/art direction graphic 3.png"
          alt="Art Direction Graphic 3"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Tamba T3 — col 2, directly above Graphic 4 ── */}
      <div className="col-start-2 col-span-2 mt-16">
        <img
          src="/assets/casestudy_images/tamba-3.png"
          alt="Tamba T3"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Graphic 4 (cols 2–6) + Graphic 5 (cols 7–11) — same row, directly below T3 ── */}
      <div className="col-start-2 col-span-5">
        <img
          src="/assets/casestudy_images/art direction graphic 4.png"
          alt="Art Direction Graphic 4"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-start-7 col-span-5">
        <img
          src="/assets/casestudy_images/graphic 5.png"
          alt="Graphic 5"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Section captions — same row ── */}
      <p className="col-start-2 col-span-4 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-16">
        ARROWS, WAYFINDING
      </p>

      <p className="col-start-7 col-span-5 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-16">
        ARTIST AND PLAYER FRAMES
      </p>

      {/* ── Tamba T4 (col 2) + Arrow Graphic (cols 3–5) + Tamba T5 (col 7) + Artist Frames (cols 8–11) — same row ── */}
      <div className="col-start-2 col-span-1">
        <img
          src="/assets/casestudy_images/tamba t 4.png"
          alt="Tamba T4"
          className="w-[65px] h-[70px] object-contain"
        />
      </div>

      <div className="col-start-3 col-span-3">
        <img
          src="/assets/casestudy_images/arrow graphic.png"
          alt="Arrow graphic"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="col-start-7 col-span-1">
        <img
          src="/assets/casestudy_images/tamba t 5.png"
          alt="Tamba T5"
          className="w-[65px] h-[70px] object-contain"
        />
      </div>

      <div className="col-start-8 col-span-4">
        <img
          src="/assets/casestudy_images/Artist Frames.png"
          alt="Artist and player frames"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
