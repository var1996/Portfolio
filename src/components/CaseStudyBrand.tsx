export default function CaseStudyBrand() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          The words that lay the foundation of the brand
        </h2>
      </div>

      <p className="font-body text-[18px] font-normal leading-[1.5] text-white self-start">
        The mission, the vision, and the tagline are the skeleton of the brand.
        Everything else is built on top of them.
      </p>

      {/* ── Vision ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          VISION
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          This vision reflects three ideas. First, unity, bringing people together through
          sport and music. Second, African talent, celebrating the players, artists, and
          creators shaping the continent&apos;s future. And lastly, rhythm, the pace, energy,
          and excitement that define both music and cricket.
        </p>
        <div className="bg-yellow p-8 flex items-center justify-center rounded-[16px]">
          <p className="font-body font-semibold uppercase text-black text-center leading-tight text-[22px]">
            Become a unifying force that takes African talent out of bounds, where rhythm meets the pitch.
          </p>
        </div>
        {/* Coded Vision Explanation */}
        <div className="bg-yellow px-8 py-10 flex flex-col gap-10 items-center text-center rounded-[16px]">

          {/* Line 1 */}
          <div className="flex flex-col items-center gap-3 w-full">
            <p className="font-body font-semibold uppercase text-black text-[22px] leading-tight">
              BECOME A <span className="text-pink underline decoration-pink decoration-2">UNIFYING FORCE</span> THAT TAKES
            </p>
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-4 bg-black/40" />
                <p className="font-body text-[9px] font-semibold uppercase tracking-wide text-black/60 text-center">COMMUNITY<br />BRINGING PEOPLE TOGETHER</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-px h-4 bg-black/40" />
                <p className="font-body text-[9px] font-semibold uppercase tracking-wide text-black/60 text-center">POWERFUL SPIN FORCE<br />FORCE TO BE RECKONED WITH</p>
              </div>
            </div>
          </div>

          {/* Line 2 */}
          <div className="flex flex-col items-center w-full pb-16">
            <p className="font-body font-semibold uppercase text-black text-[22px] leading-tight">
              AFRICAN TALENT{' '}
              <span className="relative inline-block">
                <span className="text-pink underline decoration-pink decoration-2">OUT OF BOUNDS</span>
                <span className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pt-1">
                  <span className="block w-px h-4 bg-black/40" />
                  <span className="font-body text-[9px] font-semibold uppercase tracking-wide text-black/60 text-center whitespace-nowrap">
                    SCORING HIGH IN CRICKET<br />GOING FURTHER THAN EXPECTED<br />EXPLORING OUTSIDE THE KNOWN
                  </span>
                </span>
              </span>
              {' '}, WHERE
            </p>
          </div>

          {/* Line 3 */}
          <div className="flex flex-col items-center w-full pb-16">
            <p className="font-body font-semibold uppercase text-black text-[22px] leading-tight">
              WHERE{' '}
              <span className="relative inline-block">
                <span className="text-pink underline decoration-pink decoration-2">RHYTHM</span>
                <span className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pt-1">
                  <span className="block w-px h-4 bg-black/40" />
                  <span className="font-body text-[9px] font-semibold uppercase tracking-wide text-black/60 text-center whitespace-nowrap">PACE</span>
                </span>
              </span>
              {' '}MEETS THE{' '}
              <span className="relative inline-block">
                <span className="text-pink underline decoration-pink decoration-2">PITCH.</span>
                <span className="absolute top-full left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pt-1">
                  <span className="block w-px h-4 bg-black/40" />
                  <span className="font-body text-[9px] font-semibold uppercase tracking-wide text-black/60 text-center whitespace-nowrap">
                    CRICKET PITCH<br />MUSIC PITCH
                  </span>
                </span>
              </span>
            </p>
          </div>

        </div>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The mission fuses both worlds in a single breath sport and sound, ambition and
          identity. It&apos;s not about running a cricket league. It&apos;s about creating a movement.
        </p>
      </div>

      {/* ── Mission ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          MISSION
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The goal is not just to host matches, but to create a destination, a place where
          sport, entertainment, and community come together, a homeground. This vision stakes
          Zimbabwe&apos;s claim on the continental stage, not as a participant, but as the host
          of something the world comes to.
        </p>
        <div className="bg-yellow p-8 flex items-center justify-center rounded-[16px]">
          <p className="font-body font-semibold uppercase text-black text-center leading-tight text-[22px]">
            To establish Zimbabwe as Africa&apos;s home ground for cricket and culture
          </p>
        </div>
      </div>

      {/* ── Tagline ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          With the mission and vision defined, the creative platform needed a headline one
          phrase that could carry the whole brand on a stadium screen, on a t-shirt, and in
          a conversation. It had to land in two places at once.
        </p>
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          TAGLINE
        </p>
        <div className="bg-yellow p-8 flex items-center justify-center rounded-[16px]">
          <p className="font-display uppercase leading-none text-[clamp(3rem,7vw,6rem)] text-center">
            <span className="text-pink">UN</span><span className="text-black">MATCHED</span>
          </p>
        </div>
      </div>

      {/* ── Tagline meanings ── */}
      <div />

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
            CULTURAL MEANING
          </p>
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            In everyday language, unmatched means without rival, without comparison, in a
            league of its own. It&apos;s a declaration of ambition for everything Tamba10
            represents, the talent, the energy, the cultural experience.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
            CRICKET MEANING
          </p>
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            In cricket, a match is the game itself the competition, the contest, the moment
            everything is on the line. UNMATCHED says this league and the experience it
            delivers are beyond comparison. No other match comes close.
          </p>
        </div>
      </div>

    </div>
  )
}
