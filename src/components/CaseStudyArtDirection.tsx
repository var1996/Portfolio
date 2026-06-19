export default function CaseStudyArtDirection() {
  return (
    <div className="bg-black px-12 grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Built for the stands and the streets
        </h2>
      </div>

      {/* Col 2 — body + image */}
      <div className="flex flex-col gap-8">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The art direction embraced collision, between sport and sound, between global and
          proudly African, between high energy and rich culture. The mood board drew from
          Afro aesthetics, street photography, and contemporary African visual art,
          positioning Tamba10 as a brand that belongs as much to the festival as to the
          stadium.
        </p>
        <img
          src="/assets/casestudy_images/6 Art Direction Images.png"
          alt="Art direction"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
