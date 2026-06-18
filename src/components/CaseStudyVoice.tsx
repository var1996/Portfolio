const PILLARS = [
  {
    id: '01',
    label: 'ENERGETIC',
    body: 'The brand never whispers. It commands the room. Every word should feel like it belongs on a big screen, punchy, fast-paced, built for momentum.',
    bullets: [
      'Short sentences. Strong verbs. No passive voice.',
      'Language that moves like the game itself',
      'Never corporate, never flat',
    ],
  },
  {
    id: '02',
    label: 'INSPIRING',
    body: 'Tamba10 exists to lift people, young dreamers, diaspora fans, future athletes. The voice should consistently signal that something bigger is possible.',
    bullets: [
      'Speak to potential, not just performance',
      'Celebrate people, not just results',
      'Connect sport to a sense of pride and possibility',
    ],
  },
  {
    id: '03',
    label: 'PROGRESSIVE',
    body: 'This is a brand looking forward championing African talent, embracing new formats, and refusing to be defined by how things have always been done.',
    bullets: [
      'Forward-looking language, not nostalgic',
      'Champion the new and the emerging',
      'Challenge outdated narratives about Zimbabwe and Africa',
    ],
  },
  {
    id: '04',
    label: 'EMPOWERING',
    body: "The brand gives its audience a sense of ownership and belonging. Whether you're in Harare or London, Tamba10 is yours. The voice reflects that.",
    bullets: [
      '"We" and "our" — inclusive, collective',
      'Celebrate community as much as excellence',
      'Make everyone feel like they belong to the movement',
    ],
  },
]

const AUDIENCE_CARDS = [
  {
    caption: 'THE CORE FAN',
    title: 'The Cricket Lover',
    body: 'Speaks cricket. Lives for the stats, the players, the rivalries. The voice earns their respect through knowledge and energy.',
  },
  {
    caption: 'THE CULTURE SEEKER',
    title: 'The Rhythm Lover',
    body: 'Here for the music, the fashion, the vibe. Drawn in by culture and then surprised by how much they love the game.',
  },
  {
    caption: 'THE GLOBAL AFRICAN',
    title: 'The Distant Supporter',
    body: 'Diaspora. Far from home but deeply connected. The voice gives them something to belong to, wherever they are.',
  },
  {
    caption: 'THE FUTURE PLAYER',
    title: 'The Dreamer',
    body: 'Young, ambitious, watching from the boundary. The voice signals that the stage is being built for them.',
  },
]

function PillarCard({
  id,
  label,
  body,
  bullets,
}: {
  id: string
  label: string
  body: string
  bullets: string[]
}) {
  return (
    <div className="border-t border-white/20 pt-6 flex flex-col gap-4">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
        {id} {label}
      </p>
      <p className="font-body text-[18px] font-normal leading-[1.5] text-white">{body}</p>
      <ul className="flex flex-col gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 font-body text-[18px] font-normal leading-[1.5] text-white">
            <span className="shrink-0 mt-[0.3em]">•</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function AudienceCard({
  caption,
  title,
  body,
}: {
  caption: string
  title: string
  body: string
}) {
  return (
    <div className="bg-yellow rounded-[30px] p-6 min-h-[210px] flex flex-col gap-2">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white">
        {caption}
      </p>
      <p className="font-body text-[18px] font-normal text-black">{title}</p>
      <p className="font-body text-[15px] font-normal leading-[1.4] text-white mt-1">{body}</p>
    </div>
  )
}

export default function CaseStudyVoice() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Section Header ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.1] text-white">
        The brand speaks. Here is how it sounds
      </h2>
      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white">
        A brand identity isn&apos;t only what you see, it&apos;s what you hear, read, and feel
        when the brand communicates. Tamba10&apos;s tone of voice was built to be as distinctive
        as its visual system: culturally grounded, high-energy, and always speaking to the
        specific people it&apos;s for. This section covers the four voice pillars, the audience
        it speaks to, the visual content direction, and the rules that keep the voice
        consistent.
      </p>

      {/* ════════════════ BRAND VALUES ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        BRAND VALUES
      </p>

      {/* Supporting copy */}
      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white">
        The brand values weren&apos;t listed as abstract nouns. They were given characters,
        each one drawn from a cricket term and translated into a human archetype. This was
        a deliberate creative decision: the language of the sport becomes the language of
        the brand.
      </p>

      {/* Brand Values Image — cols 2–11 */}
      <div className="col-start-2 col-span-10 mt-16">
        <img
          src="/assets/casestudy_images/50.png"
          alt="Brand value archetypes"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ════════════════ FOUR VOICE PILLARS ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        THE FOUR VOICE PILLARS
      </p>

      {/* Pillars grid — 2-col, left=01+03, right=02+04 */}
      <div className="col-start-2 col-span-10 grid grid-cols-2 gap-x-6 gap-y-16">
        {PILLARS.map((p) => (
          <PillarCard key={p.id} {...p} />
        ))}
      </div>

      {/* ════════════════ VOICE PRINCIPLE QUOTE ════════════════ */}

      <p className="col-start-2 col-span-10 text-center font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        &ldquo;WHO THE VOICE SPEAKS TO, THE BRAND SPEAKS LOUDLY, MOVES FAST, AND ALWAYS SOUNDS
        LIKE IT BELONGS TO THE PEOPLE&rdquo;
      </p>

      {/* ════════════════ AUDIENCE INTRODUCTION ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        WHO THE VOICE SPEAKS TO
      </p>

      {/* Supporting copy */}
      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white">
        The tone shifts in register depending on who&apos;s in the room but the four pillars
        stay constant. Four audience archetypes define who Tamba10 is speaking to at any
        given moment. Below are the four archetypes.
      </p>

      {/* ════════════════ AUDIENCE ARCHETYPE CARDS ════════════════ */}

      <div className="col-start-2 col-span-10 grid grid-cols-4 gap-6 mt-16">
        {AUDIENCE_CARDS.map((c) => (
          <AudienceCard key={c.caption} {...c} />
        ))}
      </div>

      {/* ════════════════ PERSONA SECTION ════════════════ */}

      <div className="col-start-2 col-span-10 mt-24">
        <img
          src="/assets/casestudy_images/3 Persona Image.png"
          alt="Audience personas"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
