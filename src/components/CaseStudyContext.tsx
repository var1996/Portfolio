const SECTION1_LIST = [
  'Weak or inconsistent commercial support',
  'Lost among global sport franchises',
  'Lack of clear identity',
  'No tournament in two years',
]

const SECTION3_FINDINGS = [
  "Competitors in both sport and culture hold events annually, Tamba10 didn't. Consistency is a competitive advantage waiting to be claimed.",
  'There is no competitor running the exact T10 format in Africa. The category is wide open on the continent.',
  'A hybrid sport + culture format in Africa is an untapped opportunity gap. No one is doing both well, in one event, with one brand.',
]

const INSIGHTS = [
  {
    id: '01',
    label: 'ATTENTION SPANS ARE SHRINKING',
    bullets: [
      'Modern audiences prefer shorter, high-intensity entertainment',
      'Fans want big moments quickly — not long sessions',
      "People don't just want sport; they want an experience",
    ],
  },
  {
    id: '02',
    label: 'SPORT IS CHANGING ENTERTAINMENT',
    bullets: [
      'The biggest sporting events now combine sport, music, and culture',
      'Indian Premier League mixes cricket with celebrity culture and music',
      'Basketball Africa League blends basketball with entertainment and lifestyle',
    ],
  },
  {
    id: '03',
    label: "AFRICA'S YOUTH MARKET IS MASSIVE",
    bullets: [
      'Africa has one of the youngest populations in the world',
      'The majority of the population is under 25',
      'Young audiences engage heavily with music, sport, and digital culture',
    ],
  },
  {
    id: '04',
    label: 'AFRICAN MUSIC IS GOING GLOBAL',
    bullets: [
      'Afrobeats and Amapiano are dominating global culture',
      'Burna Boy, Wizkid, Davido, Tyla are selling out arenas worldwide',
      'African culture is no longer niche — it is a global export',
    ],
  },
]

function InsightCard({ id, label, bullets }: { id: string; label: string; bullets: string[] }) {
  return (
    <div className="border-t border-black/20 pt-6 flex flex-col gap-4">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
        {id} {label}
      </p>
      <ul className="flex flex-col gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3 font-body text-[18px] font-normal leading-[1.5] text-black">
            <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-black inline-block" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CaseStudyContext() {
  return (
    <div className="bg-white px-[30px] grid grid-cols-[1fr_2fr] gap-x-6 gap-y-12 pt-20 pb-24">

      {/* ── Context ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-black">
          A League that lost it&apos;s roar
        </h2>
      </div>

      <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-black self-start">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          CONTEXT
        </p>
        <p>
          A league with a hybrid format that blends cricket with the energy of African
          festival culture. Despite its potential, the league had struggled to hold its
          ground. It had gone two years without a tournament, lacked a clear identity,
          and was lost among the noise of global franchise leagues. The brand wasn&apos;t
          working hard enough for what the league could become.
        </p>
        <ol className="list-decimal pl-6 flex flex-col gap-3 marker:text-black">
          {SECTION1_LIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      {/* ── Purpose ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-black">
          Why now, why this?
        </h2>
      </div>

      <div className="flex flex-col gap-6 self-start">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          PURPOSE
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-black">
          The rebrands mission was to give Zimbabweans, both at home and in the diaspora
          something powerful to unite around and feel genuinely proud of. The goal was to
          establish Zimbabwe as Africa&apos;s home ground for cricket and culture.
        </p>
      </div>

      {/* ── Quote ── */}
      <p className="col-start-2 font-body text-xs font-semibold uppercase tracking-[0.08em] text-gold">
        &ldquo;TO GIVE ZIMBABWEANS, BOTH AT HOME AND ABROAD, SOMETHING POWERFUL TO UNITE
        AROUND AND FEEL PROUD OF.&rdquo;
      </p>

      {/* ── Research ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-black">
          Reading the Playing Field
        </h2>
      </div>

      <div className="flex flex-col gap-6 self-start">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          RESEARCH &amp; MARKET INSIGHTS
        </p>
        <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-black">
          <p>
            The competitor analysis and market insights converged into three sharp conclusions
            each one a building block for the rebrand strategy. The analysis revealed a
            critical gap: no competitor in Africa was running a hybrid T10 cricket and culture
            format. This creates a powerful opportunity to position the league as something new.
          </p>
          <ol className="list-decimal pl-6 flex flex-col gap-4 marker:text-black">
            {SECTION3_FINDINGS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <p>
            Beyond competitors, the research surfaced four macro forces shaping the
            entertainment and sport landscape. Together, they made the case for Tamba10&apos;s
            brand strategy.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 mt-4">
          {INSIGHTS.map((insight) => (
            <InsightCard key={insight.id} {...insight} />
          ))}
        </div>
      </div>

    </div>
  )
}
