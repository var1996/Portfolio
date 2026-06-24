const PILLARS = [
  {
    id: '01',
    label: 'ENERGETIC',
    body: 'The brand never whispers; it owns the room. Every word should land with impact, carrying the energy of a headline on a giant screen, bold, immediate, and impossible to ignore. The voice is sharp, confident, and driven by momentum, moving with the speed and intensity of the game itself. Sentences are concise. Verbs do the heavy lifting. Every line pushes forward, creating a sense of action and anticipation. There is no room for passive language, corporate jargon, or empty filler. The tone is dynamic, commanding, and cinematic, built to capture attention instantly and keep it.',
    bullets: [],
  },
  {
    id: '02',
    label: 'INSPIRING',
    body: 'Tamba10 exists to lift people, young dreamers, diaspora fans, future athletes and everything it does is shaped by that purpose. The voice consistently signals that something bigger is possible, speaking to potential rather than just performance, celebrating people rather than just results, and connecting sport to a deep sense of pride and possibility.',
    bullets: [],
  },
  {
    id: '03',
    label: 'PROGRESSIVE',
    body: 'The brand looks forward, championing African talent, embracing new formats, and refusing to be defined by how things have always been done. The language is never nostalgic; it champions what is emerging, celebrates what is next, and actively challenges the outdated narratives that have long defined how the world sees Zimbabwe and Africa.',
    bullets: [],
  },
  {
    id: '04',
    label: 'EMPOWERING',
    body: "Tamba10 gives its audience a genuine sense of ownership and belonging, whether you're in Harare or London. The voice is intentionally inclusive, leaning into \"we\" and \"our\" to reflect a collective movement rather than a distant brand. Community is celebrated just as much as excellence, and everyone, wherever they are in the world, is made to feel like they are part of something that truly belongs to them.",
    bullets: [],
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

function PillarCard({ id, label, body, bullets }: { id: string; label: string; body: string; bullets: string[]; isFirst?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
        {label}
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

function AudienceCard({ caption, title }: { caption: string; title: string }) {
  return (
    <div className="bg-yellow rounded-[30px] p-6 flex flex-col gap-2">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-white">
        {caption}
      </p>
      <p className="font-body text-[18px] font-normal text-black">{title}</p>
    </div>
  )
}

const VALUES_CARDS = [
  {
    name: 'The Bend Backer',
    img: '/assets/queens/Back Bender.png',
    body: 'The Bend Backer represents effort and intensity — the relentless energy required to create fast, electric cricket experiences.',
  },
  {
    name: 'The Sweet Spotter',
    img: '/assets/queens/Sweet Spotter.png',
    body: 'We hit the sweet spot between music and cricket and create opportunity of emerging African talent.',
  },
  {
    name: 'The Fast Bowler',
    img: '/assets/queens/The fast Bowler.png',
    body: 'The Fast Bowler represents momentum — constantly pushing forward and striving toward greater potential.',
  },
  {
    name: 'The Crease Popper',
    img: '/assets/queens/Creaser popper.png',
    body: 'Crease Popper represents boldness — breaking boundaries and placing Zimbabwe and African talent onto the global stage.',
  },
]

const AUDIENCE_ROWS = [
  { white: 'THE CRICKET LOVER', pink: 'The Core Fan', body: 'Speaks cricket. Lives for the stats, the players, the rivalries. The voice earns their respect through knowledge and energy.' },
  { white: 'THE RHYTHM LOVER', pink: 'The Culture Seeker', body: 'Here for the music, the fashion, the vibe. Drawn in by culture and then surprised by how much they love the game.' },
  { white: 'THE DISTANT SUPPORTER', pink: 'The Global African', body: 'Diaspora. Far from home but deeply connected. The voice gives them something to belong to, wherever they are.' },
  { white: 'THE DREAMER', pink: 'The Future Player', body: 'Young, ambitious, watching from the boundary. The voice signals that the stage is being built for them.' },
]


export default function CaseStudyVoice() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* ── Brand Voice Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
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

      {/* ── Values Module ── */}
      <div />

      <div className="border border-black rounded-[16px] overflow-hidden">
        {/* 4-column sub-grid */}
        <div className="bg-[#D9B92C] grid grid-cols-2 md:grid-cols-4 gap-[30px] p-[20px]">
          {VALUES_CARDS.map((v) => (
            <div key={v.name} className="flex flex-col border border-black rounded-[16px] overflow-hidden">
              {/* Image placeholder — swap src when ready */}
              <div className="aspect-[3/4] bg-black/10 overflow-hidden w-full">
                {v.img && <img src={v.img} alt={v.name} className="w-full h-full object-cover" />}
              </div>
              {/* Text block */}
              <div className="bg-[#D9B92C] p-4 flex flex-col gap-2">
                <p className="font-body font-bold text-black text-[15px] leading-tight">{v.name}</p>
                <p className="font-body font-normal text-[11px] text-black leading-[1.5]">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Voice Pillars ── */}
      <div />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-10">
          {PILLARS.map((p, i) => (
            <PillarCard key={p.id} {...p} isFirst={i === 0} />
          ))}
        </div>
      </div>

      {/* ── Quote ── */}
      <p className="col-start-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
        &ldquo;THE BRAND SPEAKS LOUDLY, MOVES FAST, AND ALWAYS SOUNDS
        LIKE IT BELONGS TO THE PEOPLE&rdquo;
      </p>

      {/* ── Audience ── */}
      <div />

      <div className="flex flex-col gap-8">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The tone shifts in register depending on who&apos;s in the room but the four pillars
          stay constant. Four audience archetypes define who Tamba10 is speaking to at any
          given moment.
        </p>

        {/* Audience split module */}
        <div className="border border-white overflow-hidden flex flex-col md:flex-row rounded-[16px]">

          {/* Left panel */}
          <div className="flex flex-col md:w-[55%] md:border-r md:border-gray-500">
            <div className="px-10 py-10">
              <h3 className="font-body font-normal text-[34px] leading-[1.1] text-yellow uppercase">
                Who are we<br />talking to?
              </h3>
            </div>
            <div className="border-t border-gray-500" />
            {AUDIENCE_ROWS.map((row, i) => (
              <div key={row.white} className={`flex flex-col${i < AUDIENCE_ROWS.length - 1 ? ' border-b border-gray-500' : ''}`}>
                <div className="px-8 py-7 flex flex-col gap-2">
                  <span className="font-body font-normal text-white uppercase text-[20px] leading-tight">{row.white}</span>
                  <span className="font-body font-normal text-[15px] leading-tight" style={{ color: '#D6587A' }}>{row.pink}</span>
                </div>
                <div className="px-8 pb-7 pt-0">
                  <p className="font-body font-normal text-white text-[15px] leading-[1.5]">{row.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right panel — full-bleed image */}
          <div className="relative min-h-[500px] md:w-[45%]">
            <img
              src="/assets/casestudy_images/cricket boy.png"
              alt="Cricket audience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>

    </div>
  )
}
