export default function CaseStudyBrand() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          The words that run the brand
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
        <div className="grid grid-cols-2 gap-6 items-start">
          <img
            src="/assets/casestudy_images/3 Vision Image.png"
            alt="Vision"
            className="w-full h-auto object-contain"
          />
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            This vision reflects three ideas. First, unity, bringing people together through
            sport and music. Second, African talent, celebrating the players, artists, and
            creators shaping the continent&apos;s future. And lastly, rhythm, the pace, energy,
            and excitement that define both music and cricket.
          </p>
        </div>
        <img
          src="/assets/casestudy_images/3 Vision Explaination.png"
          alt="Vision explanation"
          className="w-full h-auto object-contain"
        />
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
        <div className="grid grid-cols-2 gap-6 items-start">
          <img
            src="/assets/casestudy_images/3 Mission Image.png"
            alt="Mission"
            className="w-full h-auto object-contain"
          />
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            The goal is not just to host matches, but to create a destination, a place where
            sport, entertainment, and community come together, a homeground. This vision stakes
            Zimbabwe&apos;s claim on the continental stage, not as a participant, but as the host
            of something the world comes to.
          </p>
        </div>
      </div>

      {/* ── Tagline ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          TAGLINE
        </p>
        <div className="grid grid-cols-2 gap-6 items-start">
          <img
            src="/assets/casestudy_images/3 Tagline image.png"
            alt="Tagline"
            className="w-full h-auto object-contain"
          />
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            With the mission and vision defined, the creative platform needed a headline one
            phrase that could carry the whole brand on a stadium screen, on a t-shirt, and in
            a conversation. It had to land in two places at once.
          </p>
        </div>
      </div>

      {/* ── Tagline meanings — full-width two-col ── */}
      <div className="col-span-2 grid grid-cols-2 gap-6">
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
      </div>

    </div>
  )
}
