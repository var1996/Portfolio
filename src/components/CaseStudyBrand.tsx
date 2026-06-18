export default function CaseStudyBrand() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Section header — cols 2–8 ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-5">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          The words that run the brand
        </h2>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The mission, the vision, and the tagline are the skeleton of the brand.
          Everything else is built on top of them.
        </p>
      </div>

      {/* ════════════════ VISION ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        VISION
      </p>

      {/* Image — cols 2–7, ~60% */}
      <div className="col-start-2 col-span-6 self-start">
        <img
          src="/assets/casestudy_images/3 Vision Image.png"
          alt="Vision"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Body — cols 8–11, ~40%, top aligned */}
      <p className="col-start-8 col-span-4 self-start font-body text-[18px] font-normal leading-[1.5] text-white">
        This vision reflects three ideas. First, unity, bringing people together through
        sport and music. Second, African talent, celebrating the players, artists, and
        creators shaping the continent&apos;s future. And lastly, rhythm, the pace, energy,
        and excitement that define both music and cricket.
      </p>

      {/* Vision Explanation Image — cols 3–10 */}
      <div className="col-start-3 col-span-8 mt-24">
        <img
          src="/assets/casestudy_images/3 Vision Explaination.png"
          alt="Vision explanation"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Supporting copy — ~50% of content, left aligned beneath image */}
      <p className="col-start-3 col-span-5 font-body text-[18px] font-normal leading-[1.5] text-white">
        The mission fuses both worlds in a single breath sport and sound, ambition and
        identity. It&apos;s not about running a cricket league. It&apos;s about creating
        a movement.
      </p>

      {/* ════════════════ MISSION ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        MISSION
      </p>

      {/* Image — cols 2–7 */}
      <div className="col-start-2 col-span-6 self-start">
        <img
          src="/assets/casestudy_images/3 Mission Image.png"
          alt="Mission"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Body — cols 8–11 */}
      <p className="col-start-8 col-span-4 self-start font-body text-[18px] font-normal leading-[1.5] text-white">
        The goal is not just to host matches, but to create a destination, a place where
        sport, entertainment, and community come together, a homeground. This vision stakes
        Zimbabwe&apos;s claim on the continental stage, not as a participant, but as the host
        of something the world comes to.
      </p>

      {/* ════════════════ TAGLINE ════════════════ */}

      {/* Caption */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow mt-24">
        TAGLINE
      </p>

      {/* Image — cols 2–7 */}
      <div className="col-start-2 col-span-6 self-start">
        <img
          src="/assets/casestudy_images/3 Tagline image.png"
          alt="Tagline"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Body — cols 8–11 */}
      <p className="col-start-8 col-span-4 self-start font-body text-[18px] font-normal leading-[1.5] text-white">
        With the mission and vision defined, the creative platform needed a headline one
        phrase that could carry the whole brand on a stadium screen, on a t-shirt, and in
        a conversation. It had to land in two places at once.
      </p>

      {/* ════════════════ TAGLINE MEANINGS ════════════════ */}

      {/* Cricket Meaning — cols 2–6 */}
      <div className="col-start-2 col-span-5 flex flex-col gap-4 mt-24">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          CRICKET MEANING
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          In cricket, a match is the game itself the competition, the contest, the moment
          everything is on the line. UNMATCHED says this league and the experience it
          delivers are beyond comparison. No other match comes close.
        </p>
      </div>

      {/* Cultural Meaning — cols 7–11 */}
      <div className="col-start-7 col-span-5 flex flex-col gap-4 mt-24">
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
  )
}
