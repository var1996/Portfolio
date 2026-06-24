import Image from 'next/image'

export default function CaseStudyIntro() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-6 gap-y-12 pt-12 pb-12 mt-[80px]">

      {/* ── Anatomy ── */}
      <div className="self-start mt-[25px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Anatomy of the name
        </h2>
      </div>

      <div className="flex flex-col gap-8 self-start mt-[25px]">
        <p className="font-body text-[18px] font-normal leading-[1.6] text-white">
          This rebrand required a new name. The old name, Zim Afro T10, was simply
          descriptive and geographic. It told you where the league was from. But it
          carried no feeling, cultural weight or invitation. Drawn from local Zimbabwean
          language, tamba captures the dual soul of this league. The athletic play on the
          pitch and the rhythmic, joyful movement that fills the stands. It&apos;s a word
          that belongs to the people the brand is for. T10 is the cricket format. Fast,
          electrifying, and built for a generation with an appetite for high-intensity
          entertainment. Fused into the name itself, 10 isn&apos;t a category label
          anymore; it becomes part of the brand&apos;s identity.
        </p>
      </div>

      {/* ── Quote + Logo ── */}
      <div />

      <div className="flex flex-col gap-8 -mt-[10px]">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-gold">
          &ldquo;TAMBA&rdquo; CAPTURES MOVEMENT, RHYTHM, AND JOY — THE TWO WORLDS BEING BROUGHT
          TOGETHER IN A SINGLE WORD.
        </p>
        <div className="w-[60%]">
          <Image
            src="/assets/casestudy_images/1 tamba logo.png"
            alt="Tamba10 Logo"
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* ── A name that carries its soul ── */}
      <div className="self-start mt-[80px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
         Carrying the soul of the brand and what shaped it
        </h2>
      </div>

      <div className="flex flex-col gap-6 mt-[80px]">
        <p className="font-body text-[18px] font-normal leading-[1.6] text-white">
          Drawn from the local language. It signals this is a brand that belongs to
          Zimbabwe and Africa, not one imposed from outside. Short, rhythmic, and easy to
          say in any language it travels well for diaspora audiences in other parts of the
          world. &quot;Play&quot; speaks to cricket. &quot;Dance&quot; speaks to culture.
          Both meanings are true at the same time. The name is a foundational layer within
          the brand strategy. Tamba gives people something to chant, wear, and own.
        </p>
      </div>

    </div>
  )
}
