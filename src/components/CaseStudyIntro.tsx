import Image from 'next/image'

const FEATURE_CARDS = [
  {
    id: '01',
    label: 'CULTURALLY ROOTED',
    body: 'Drawn from the local language. It signals this is a brand that belongs to Zimbabwe and Africa, not one imposed from outside.',
  },
  {
    id: '02',
    label: 'GLOBALLY LEGIBLE',
    body: 'Short, rhythmic, and easy to say in any language it travels well for diaspora audiences in other parts of the world.',
  },
  {
    id: '03',
    label: 'DUAL MEANING',
    body: '"Play" speaks to cricket. "Dance" speaks to culture. Both meanings are true at the same time. The name is a foundational layer within the brand strategy.',
  },
  {
    id: '04',
    label: 'RALLYING POINT',
    body: "Tamba gives people something to chant, wear, and own. It's a word you can feel proud to say out loud.",
  },
  {
    id: '05',
    label: 'FORMAT FUSED',
    body: 'Punchy, it has natural momentum that compliments the T10 format.',
  },
  {
    id: '06',
    label: 'BUILT FOR ENERGY',
    body: 'By merging "tamba" and "10" into one word, the format becomes inseparable from the brand.',
  },
]

const RESPONSE_CARDS = [
  {
    id: '01',
    label: 'PRIDE',
    body: 'Fans feel proud to associate with Tamba10, to wear it, share it, and call it their own.',
  },
  {
    id: '02',
    label: 'BELONGING',
    body: "Whether you're in Harare, London, or Brisbane. The name creates a shared identity across the diaspora.",
  },
  {
    id: '03',
    label: 'HOPE',
    body: 'For young Zimbabweans, it signals opportunity and progress. A modern, ambitious version of home.',
  },
]

function Card({
  id,
  label,
  body,
  labelColor,
}: {
  id: string
  label: string
  body: string
  labelColor: string
}) {
  return (
    <div className="border-t border-white/20 pt-6 flex flex-col gap-4">
      <p className={`font-body text-xs font-semibold uppercase tracking-[0.08em] ${labelColor}`}>
        {id} {label}
      </p>
      <p className="font-body text-[18px] font-normal leading-[1.6] text-white">
        {body}
      </p>
    </div>
  )
}

export default function CaseStudyIntro() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Intro heading — cols 2–8 ── */}
      <h1 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.2]">
        <span className="text-white">From Zim Afro T10 to </span>
        <span className="text-gold">TAMBA10</span>
        <span className="text-white">:</span>
        <br />
        <span className="text-white">A name that moves</span>
      </h1>

      {/* ── Intro body — cols 2–8 ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-5 font-body text-[18px] font-normal leading-[1.6] text-white">
        <p>
          This rebrand required a new name. The old name, Zim Afro T10, was simply
          descriptive and geographic. It told you where the league was from. But it
          carried no feeling, cultural weight or invitation.
        </p>
        <p>
          The rename to Tamba10 was one of the most deliberate decisions in this project.
        </p>
      </div>

      {/* ── Section title: Anatomy — cols 2–8 ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.2] text-white mt-20">
        Anatomy of the name
      </h2>

      {/* ── Anatomy body — cols 2–8 ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-8 font-body text-[18px] font-normal leading-[1.6] text-white">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose mb-3">
            Tamba: To play. To dance.
          </p>
          <p>
            Drawn from local Zimbabwean language, tamba captures the dual soul of this
            league. The athletic play on the pitch and the rhythmic, joyful movement that
            fills the stands. It&apos;s a word that belongs to the people the brand is for.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-rose mb-3">
            10: The format. The pulse.
          </p>
          <p>
            T10 is the cricket format. Fast, electrifying, and built for a generation with
            an appetite for high-intensity entertainment. Fused into the name itself, 10
            isn&apos;t a category label anymore; it becomes part of the brand&apos;s identity.
          </p>
        </div>
      </div>

      {/* ── Quote — cols 2–8, centered ── */}
      <p className="col-start-4 col-span-7 text-center font-body text-xs font-semibold uppercase tracking-[0.08em] text-white/50 mt-20">
        &ldquo;TAMBA&rdquo; CAPTURES MOVEMENT, RHYTHM, AND JOY — THE TWO WORLDS BEING BROUGHT
        TOGETHER IN A SINGLE WORD.
      </p>

      {/* ── Logo — cols 2–8, centered ── */}
      <div className="col-start-4 col-span-7 flex justify-center mt-8">
        <Image
          src="/assets/casestudy_images/1 tamba logo.png"
          alt="Tamba10 Logo"
          width={1200}
          height={400}
          className="w-[75%] h-auto"
        />
      </div>

      {/* ── Section title: Feature cards — cols 2–8 ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.2] text-white mt-20">
        A name that carries its soul
      </h2>

      {/* ── Feature cards — cols 2–11, 3-col inner grid ── */}
      <div className="col-start-2 col-span-10 grid grid-cols-3 gap-6">
        {FEATURE_CARDS.map((card) => (
          <Card key={card.id} {...card} labelColor="text-rose" />
        ))}
      </div>

      {/* ── Section title: Emotional responses — cols 2–8 ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.2] text-white mt-20">
        The Emotional Responses Evoked
      </h2>

      {/* ── Response cards — cols 2–11, 3-col inner grid ── */}
      <div className="col-start-2 col-span-10 grid grid-cols-3 gap-6">
        {RESPONSE_CARDS.map((card) => (
          <Card key={card.id} {...card} labelColor="text-gold" />
        ))}
      </div>

    </div>
  )
}
