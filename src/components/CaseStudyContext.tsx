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
          The competitor analysis and market insights converged on a clear conclusion: no
          competitor in Africa is running a hybrid T10 cricket and culture format, creating
          a powerful opening for Tamba10 to own an entirely new space. Africa&apos;s
          youngest-in-the-world population is deeply engaged with music, sport, and digital
          culture, making it a uniquely dynamic market for exactly this kind of
          proposition. Modern audiences demand shorter, high-intensity entertainment with
          big moments and full experiences, and the most successful sports properties in
          the world have already answered that call. Meanwhile, Afrobeats and Amapiano are
          reshaping global culture, signalling that Africa is no longer a niche market but
          a powerful export redefining entertainment worldwide. The opportunity is real,
          the timing is right, and Tamba10 is positioned to lead it.
        </p>
      </div>

    </div>
  )
}
