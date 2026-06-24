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
      <div className="self-start mt-[65px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          The brand speaks. Here is how it sounds
        </h2>
      </div>

      <p className="font-body text-[18px] font-normal leading-[1.5] text-white self-start mt-[65px]">
        A brand identity isn&apos;t only what you see, it&apos;s what you hear, read, and feel
        when the brand communicates. Tamba10&apos;s tone of voice was built to be as distinctive
        as its visual system: culturally grounded, high-energy, and always speaking to the
        specific people it&apos;s for. This section covers the four voice pillars, the audience
        it speaks to, the visual content direction, and the rules that keep the voice consistent.
      </p>

      {/* ── Values Module ── */}
      <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-[30px] items-stretch">
        {VALUES_CARDS.map((v) => (
          <div key={v.name} className="flex flex-col h-full border border-black rounded-[16px] overflow-hidden">
            <div className="aspect-[3/4] bg-black/10 overflow-hidden w-full shrink-0">
              {v.img && <img src={v.img} alt={v.name} className="w-full h-full object-cover" />}
            </div>
            {/* Text block */}
            <div className="bg-[#D9B92C] p-4 flex flex-col gap-2 flex-1">
              <p className="font-body font-bold text-black text-[15px] leading-tight">{v.name}</p>
              <p className="font-body font-normal text-[11px] text-black leading-[1.5]">{v.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Voice Pillars ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          It is &ldquo;energetic&rdquo; never whispering, with sharp, momentum-driven
          language that moves at the speed of the game itself. It is
          &ldquo;inspiring&rdquo; consistently signalling that something bigger is
          possible, celebrating people and potential as much as performance, and
          connecting sport to a deep sense of pride and possibility. It is
          &ldquo;progressive&rdquo;, always looking forward, championing emerging African
          talent, embracing new formats, and actively challenging the outdated narratives
          that have long defined how the world sees Zimbabwe and Africa. And it is
          &ldquo;empowering&rdquo;, using language that is intentionally inclusive, leaning
          into &ldquo;we&rdquo; and &ldquo;our&rdquo; to reflect a collective movement where
          everyone feels genuine ownership and belonging.
        </p>
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

          {/* Left panel — full-bleed image, matches right panel's height */}
          <div className="relative md:w-[45%] md:border-r md:border-gray-500">
            <img
              src="/assets/casestudy_images/cricket boy.png"
              alt="Cricket audience"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Right panel */}
          <div className="flex flex-col md:w-[55%]">
            <div className="px-8 py-6">
              <h3 className="font-body font-normal text-[34px] leading-[1.1] text-yellow uppercase whitespace-nowrap">
                Who are we talking to?
              </h3>
            </div>
            <div className="border-t border-gray-500" />
            {AUDIENCE_ROWS.map((row, i) => (
              <div key={row.white} className={`flex flex-col${i < AUDIENCE_ROWS.length - 1 ? ' border-b border-gray-500' : ''}`}>
                <div className="px-8 pt-4 pb-1 flex flex-col gap-1">
                  <span className="font-body font-normal text-pink uppercase text-[12px] leading-tight">{row.white}</span>
                </div>
                <div className="px-8 pb-4 pt-0">
                  <p className="font-body font-normal text-white text-[15px] leading-[1.4]">{row.body}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}
