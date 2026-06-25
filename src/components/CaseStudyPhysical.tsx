export default function CaseStudyPhysical() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12 mt-[20px]">

      {/* Col 1 — header */}
      <div className="self-start mt-[85px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Physical Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — body */}
      <div className="flex flex-col gap-8 self-start mt-[85px]">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          The brand extends seamlessly into the physical world, showing up as something
          people can wear, touch, and genuinely be part of. From merchandise like bats,
          hats, and apparel to the full sweep of the stadium experience, including signage
          and wayfinding. Every touchpoint is an opportunity to deepen connection. Even the
          everyday details, like tickets, posters, and packaging, are treated as meaningful
          moments where the brand can leave a lasting impression.
        </p>
      </div>

      {/* Image — spans both columns */}
      <div className="col-span-2 -mt-8">
        <img
          src="/assets/merch.jpg"
          alt="Merchandise"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
