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
    body: 'Modern audiences crave shorter, high-intensity entertainment, expecting big moments to arrive quickly rather than unfolding over long sessions. Beyond the action itself, fans want a full experience, one that engages, excites, and entertains from start to finish.',
  },
  {
    id: '02',
    label: 'SPORT IS CHANGING ENTERTAINMENT',
    body: 'The biggest sporting events have evolved into cultural spectacles, blending sport with music and lifestyle. The Indian Premier League, for example, weaves cricket together with celebrity culture and live music, while the Basketball Africa League fuses basketball with broader entertainment and lifestyle elements, proving that modern sports properties are as much about the overall experience as they are about what happens on the field or court.',
  },
  {
    id: '03',
    label: "AFRICA'S YOUTH MARKET IS MASSIVE",
    body: 'Africa has one of the youngest populations in the world, with the majority of its people under the age of 25. This generation engages deeply with music, sport, and digital culture, making the continent a uniquely dynamic market for entertainment experiences that speak to all three.',
  },
  {
    id: '04',
    label: 'AFRICAN MUSIC IS GOING GLOBAL',
    body: 'Afrobeats and Amapiano are dominating global culture, with artists like Burna Boy, Wizkid, Davido, and Tyla selling out arenas worldwide. African culture is no longer niche — it is a global export, reshaping entertainment and lifestyle on the world stage.',
  },
]

function InsightCard({ id, label, body }: { id: string; label: string; body: string; isFirst?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
        {label}
      </p>
      <p className="font-body text-[18px] font-normal leading-[1.5] text-white">{body}</p>
    </div>
  )
}

export default function CaseStudyContext() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-6 gap-y-12 pt-12 pb-12">

      {/* ── Context ── */}
      <div className="self-start mt-[30px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          A League that lost it&apos;s roar
        </h2>
      </div>

      <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-white self-start mt-[30px]">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink mt-[4px]">
          CONTEXT
        </p>
        <p>
          A league with a hybrid format that blends cricket with the energy of African
          festival culture. Despite its potential, the league had struggled to hold its
          ground. It had gone two years without a tournament, lacked a clear identity,
          and was lost among the noise of global franchise leagues. The brand wasn&apos;t
          working hard enough for what the league could become.
        </p>
        <ol className="list-decimal pl-6 flex flex-col gap-3 marker:text-white">
          {SECTION1_LIST.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      {/* ── Purpose ── */}
      <div className="self-start mt-[15px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Reading the playing<br />field
        </h2>
      </div>

      <div className="flex flex-col gap-6 self-start mt-[15px]">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
          PURPOSE
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The rebrands mission was to give Zimbabweans, both at home and in the diaspora
          something powerful to unite around and feel genuinely proud of. The goal was to
          establish Zimbabwe as Africa&apos;s home ground for cricket and culture.
        </p>
      </div>

      {/* ── Research ── */}
      <div className="self-start" />

      <div className="flex flex-col gap-6 self-start">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
          RESEARCH &amp; MARKET INSIGHTS
        </p>
        <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-white">
          <p>
            The competitor analysis and market insights converged into three sharp conclusions
            each one a building block for the rebrand strategy. The analysis revealed a
            critical gap: no competitor in Africa was running a hybrid T10 cricket and culture
            format. This creates a powerful opportunity to position the league as something new.
          </p>
          <ol className="list-decimal pl-6 flex flex-col gap-4 marker:text-white">
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
        <div className="flex flex-col gap-10 mt-4">
          {INSIGHTS.map((insight, i) => (
            <InsightCard key={insight.id} {...insight} isFirst={i === 0} />
          ))}
        </div>
      </div>

    </div>
  )
}
