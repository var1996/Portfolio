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

function PillarCard({ id, label, body, bullets }: { id: string; label: string; body: string; bullets: string[] }) {
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

function AudienceCard({ caption, title, body }: { caption: string; title: string; body: string }) {
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

const VALUES_CARDS = [
  {
    name: 'The Bend Backer',
    img: '/assets/queens/Back Bender.png',
    body: (
      <>The Bend Backer represents <strong>effort and intensity</strong> — the relentless energy required to create <strong>fast, electric cricket experiences.</strong></>
    ),
  },
  {
    name: 'The Sweet Spotter',
    img: '/assets/queens/Sweet Spotter.png',
    body: (
      <>We hit the <strong>sweet spot between music and cricket</strong> and create <strong>opportunity of emerging African talent.</strong></>
    ),
  },
  {
    name: 'The Fast Bowler',
    img: '/assets/queens/The fast Bowler.png',
    body: (
      <>The Fast Bowler represents <strong>momentum</strong> — constantly pushing forward and striving toward <strong>greater potential.</strong></>
    ),
  },
  {
    name: 'The Crease Popper',
    img: '/assets/queens/Creaser popper.png',
    body: (
      <>Crease Popper represents <strong>boldness</strong> — breaking boundaries and placing <strong>Zimbabwe and African talent</strong> onto the <strong>global stage.</strong></>
    ),
  },
]

const BRAND_VALUES = [
  { id: '01', label: 'THE BACKBENDER', body: 'Effort & intensity, the relentless energy to create fast, electric cricket experiences.' },
  { id: '02', label: 'THE SWEET SPOTTER', body: 'Balance, hitting the sweet spot between music, cricket, and opportunity for emerging talent.' },
  { id: '03', label: 'THE FAST BOWLER', body: 'Momentum, using music, sport, and culture into one continental force, constantly running toward potential.' },
  { id: '04', label: 'THE CREASE POPPER', body: 'Boldness, breaking boundaries and raising Zimbabwe and Africa onto the global stage.' },
]

export default function CaseStudyVoice() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Brand Voice Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          The brand speaks. Here is how it sounds
        </h2>
      </div>

      <p className="font-body text-[18px] font-normal leading-[1.5] text-white self-start">
        A brand identity isn&apos;t only what you see, it&apos;s what you hear, read, and feel
        when the brand communicates. Tamba10&apos;s tone of voice was built to be as distinctive
        as its visual system: culturally grounded, high-energy, and always speaking to the
        specific people it&apos;s for. This section covers the four voice pillars, the audience
        it speaks to, the visual content direction, and the rules that keep the voice consistent.
      </p>

      {/* ── Brand Values ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          BRAND VALUES
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The brand values weren&apos;t listed as abstract nouns. They were given characters,
          each one drawn from a cricket term and translated into a human archetype. This was
          a deliberate creative decision: the language of the sport becomes the language of
          the brand.
        </p>
        <div className="flex flex-col">
          {BRAND_VALUES.map((v) => (
            <div key={v.id} className="border-t border-white/20 py-5 flex flex-col gap-2">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
                {v.id} {v.label}
              </p>
              <p className="font-body text-[18px] font-normal leading-[1.5] text-white">{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Values Module ── */}
      <div />

      <div className="border border-black">
        {/* Header bar */}
        <div className="bg-[#D9B92C] border-b border-black px-4 py-2">
          <p className="font-body font-bold text-black uppercase text-sm tracking-widest">VALUES</p>
        </div>
        {/* 4-column sub-grid */}
        <div className="bg-[#D9B92C] grid grid-cols-2 md:grid-cols-4 gap-[30px] p-[20px]">
          {VALUES_CARDS.map((v) => (
            <div key={v.name} className="flex flex-col border border-black">
              {/* Image placeholder — swap src when ready */}
              <div className="aspect-[3/4] bg-black/10 overflow-hidden w-full">
                {v.img && <img src={v.img} alt={v.name} className="w-full h-full object-cover" />}
              </div>
              {/* Text block */}
              <div className="bg-[#D9B92C] p-4 flex flex-col gap-2">
                <p className="font-body font-bold text-black text-[15px] leading-tight">{v.name}</p>
                <p className="font-body text-[11px] text-black leading-[1.5]">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Voice Pillars ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          THE FOUR VOICE PILLARS
        </p>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10">
          {PILLARS.map((p) => (
            <PillarCard key={p.id} {...p} />
          ))}
        </div>
      </div>

      {/* ── Quote ── */}
      <p className="col-start-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
        &ldquo;WHO THE VOICE SPEAKS TO, THE BRAND SPEAKS LOUDLY, MOVES FAST, AND ALWAYS SOUNDS
        LIKE IT BELONGS TO THE PEOPLE&rdquo;
      </p>

      {/* ── Audience ── */}
      <div />

      <div className="flex flex-col gap-8">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          WHO THE VOICE SPEAKS TO
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The tone shifts in register depending on who&apos;s in the room but the four pillars
          stay constant. Four audience archetypes define who Tamba10 is speaking to at any
          given moment. Below are the four archetypes.
        </p>
        <div className="grid grid-cols-2 gap-6">
          {AUDIENCE_CARDS.map((c) => (
            <AudienceCard key={c.caption} {...c} />
          ))}
        </div>
        <img
          src="/assets/casestudy_images/3 Persona Image.png"
          alt="Audience personas"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
