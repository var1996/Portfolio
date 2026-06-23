export default function CaseStudyDigital() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Digital Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — body text */}
      <div className="flex flex-col gap-4 font-body text-[18px] font-normal leading-[1.5] text-white/85 self-start">
        <p>
          Merging the digital and physical touch-points by having tickets reflect seat allocation
          with aims of creating a more seamless and enjoyable user experience.
        </p>
        <p>Different colours and patterns represent different tiers ie VVip, Vip.</p>
      </div>

      {/* Image — spans both columns */}
      <div className="col-span-2">
        <img
          src="/assets/digital.png"
          alt="Digital applications"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
