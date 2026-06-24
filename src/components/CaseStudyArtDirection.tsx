export default function CaseStudyArtDirection() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* Col 1 — header */}
      <div className="self-start mt-[50px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Built for the stands and the streets
        </h2>
      </div>

      {/* Col 2 — body */}
      <div className="flex flex-col gap-8 mt-[50px]">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The art direction embraced collision, between sport and sound, between global and
          proudly African, between high energy and rich culture. The mood board drew from
          Afro aesthetics, street photography, and contemporary African visual art,
          positioning Tamba10 as a brand that belongs as much to the festival as to the
          stadium.
        </p>
      </div>

      {/* Image — spans both columns */}
      <div className="col-span-2">
        <img
          src="/assets/art direction.png"
          alt="Art direction"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
