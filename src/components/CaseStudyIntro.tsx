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

function Card({ id, label, body, labelColor }: { id: string; label: string; body: string; labelColor: string }) {
  return (
    <div className="border-t border-white/20 pt-6 flex flex-col gap-4">
      <p className={`font-body text-xs font-semibold uppercase tracking-[0.08em] ${labelColor}`}>
        {id} {label}
      </p>
      <p className="font-body text-[18px] font-normal leading-[1.6] text-white">{body}</p>
    </div>
  )
}

export default function CaseStudyIntro() {
  return (
    <div className="bg-black px-12 grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Name Intro ── */}
      <div className="self-start">
        <h1 className="font-body text-[38px] font-normal leading-[1.2]">
          <span className="text-white">From Zim Afro T10 to </span>
          <span className="text-gold">TAMBA10</span>
          <span className="text-white">:</span>
          <br />
          <span className="text-white">A name that moves</span>
        </h1>
      </div>

      <div className="flex flex-col gap-5 font-body text-[18px] font-normal leading-[1.6] text-white self-start">
        <p>
          This rebrand required a new name. The old name, Zim Afro T10, was simply
          descriptive and geographic. It told you where the league was from. But it
          carried no feeling, cultural weight or invitation.
        </p>
        <p>The rename to Tamba10 was one of the most deliberate decisions in this project.</p>
      </div>

      {/* ── Anatomy ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Anatomy of the name
        </h2>
      </div>

      <div className="flex flex-col gap-8 self-start">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          ANATOMY OF THE NAME
        </p>
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-rose mb-3">
            Tamba: To play. To dance.
          </p>
          <p className="font-body text-[18px] font-normal leading-[1.6] text-white">
            Drawn from local Zimbabwean language, tamba captures the dual soul of this
            league. The athletic play on the pitch and the rhythmic, joyful movement that
            fills the stands. It&apos;s a word that belongs to the people the brand is for.
          </p>
        </div>
        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-rose mb-3">
            10: The format. The pulse.
          </p>
          <p className="font-body text-[18px] font-normal leading-[1.6] text-white">
            T10 is the cricket format. Fast, electrifying, and built for a generation with
            an appetite for high-intensity entertainment. Fused into the name itself, 10
            isn&apos;t a category label anymore; it becomes part of the brand&apos;s identity.
          </p>
        </div>
      </div>

      {/* ── Quote + Logo ── */}
      <div className="col-start-2 flex flex-col gap-8">
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
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          A name that carries its soul
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {FEATURE_CARDS.map((card) => (
          <Card key={card.id} {...card} labelColor="text-rose" />
        ))}
      </div>

      {/* ── Emotional Responses ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          The Emotional Responses Evoked
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {RESPONSE_CARDS.map((card) => (
          <Card key={card.id} {...card} labelColor="text-gold" />
        ))}
      </div>

    </div>
  )
}
