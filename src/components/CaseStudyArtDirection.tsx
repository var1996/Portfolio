export default function CaseStudyArtDirection() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Header + body — cols 2–8 ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-6">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Built for the stands and the streets
        </h2>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The art direction embraced collision, between sport and sound, between global and
          proudly African, between high energy and rich culture. The mood board drew from
          Afro aesthetics, street photography, and contemporary African visual art,
          positioning Tamba10 as a brand that belongs as much to the festival as to the
          stadium.
        </p>
      </div>

      {/* ── Art direction image — cols 2–11 ── */}
      <div className="col-start-2 col-span-10 mt-16">
        <img
          src="/assets/casestudy_images/6 Art Direction Images.png"
          alt="Art direction"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
