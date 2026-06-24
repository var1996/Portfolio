const SECTION1_LIST = [
  'Weak or inconsistent commercial support',
  'Lost among global sport franchises',
  'Lack of clear identity',
  'No tournament in two years',
]

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

      {/* ── Purpose / Research ── */}
      <div className="self-start mt-[70px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Reading the playing<br />field
        </h2>
      </div>

      <div className="flex flex-col gap-6 self-start mt-[70px]">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The competitor analysis and market insights converged into three sharp conclusions
          each one a building block for the rebrand strategy. The analysis revealed a
          critical gap: no competitor in Africa was running a hybrid T10 cricket and culture
          format. This creates a powerful opportunity to position the league as something
          new. Beyond competitors, the research surfaced four macro forces shaping the
          entertainment and sport landscape. Together, they made the case for Tamba10&apos;s
          brand strategy.
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white mt-4">
          Africa&apos;s youngest-in-the-world population, with most people under 25,
          represents a uniquely dynamic market shaped by music, sport, and digital culture
          and the world is already feeling its influence. Modern audiences crave shorter,
          high-intensity entertainment with big moments and full experiences, a shift
          reflected in properties like the IPL and Basketball Africa League, which blend
          sport with celebrity, live music, and lifestyle. Africa is primed to lead this
          evolution: Afrobeats and Amapiano are reshaping global culture, with artists like
          Burna Boy, Wizkid, and Tyla selling out arenas worldwide, proving that African
          culture is no longer niche, it is a powerful global export.
        </p>
      </div>

    </div>
  )
}
