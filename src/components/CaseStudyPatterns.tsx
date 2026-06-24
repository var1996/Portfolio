export default function CaseStudyPatterns() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* ── Intro ── */}
      <div className="self-start mt-[55px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          The marks we leave
        </h2>
      </div>

      <div className="flex flex-col gap-8 mt-[55px]">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          Patterns and graphics bring the brand to life. Inspired by rhythm, movement, and African
          visual language, these elements add energy and flexibility across different touchpoints.
        </p>
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
            This illustration captures the fluidity and energy of the sport, while subtly
            incorporating the &ldquo;T&rdquo; form from our custom typeface. The sense of movement
            reflects the dual nature of tamba10, where music and cricket intersect. The inclusion of
            the bat grounds the visual in the sport itself, creating a seamless blend of rhythm and
            play. This can be used in many visual aids both digital and physical.
          </p>
        <div className="grid grid-cols-2 gap-6 items-center">
          <img
            src="/assets/casestudy_images/art direction graphic 1.png"
            alt="Art Direction Graphic 1"
            className="w-full h-auto object-contain"
          />
      
        </div>
      </div>

      {/* ── T Patterns ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          The following patterns are built from the custom &ldquo;T&rdquo; form within the Tamba10
          typeface, transforming a single typographic element into a bold, expressive visual system.
          Repeated, rotated, and layered, the forms create a sense of rhythm and movement.
        </p>

        <div className="grid grid-cols-2 gap-6 items-start">
          <img src="/assets/casestudy_images/art direction graphic 4.png" alt="Graphic 4" className="w-full h-auto object-contain" />
          <img src="/assets/casestudy_images/graphic 5.png" alt="Graphic 5" className="w-full h-auto object-contain" />
        </div>
      </div>

    </div>
  )
}
