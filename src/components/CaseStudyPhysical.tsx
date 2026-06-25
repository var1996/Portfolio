export default function CaseStudyPhysical() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* Col 1 — header */}
      <div className="self-start mt-[75px]">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Physical Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — body */}
      <div className="flex flex-col gap-8 self-start mt-[75px]">
        <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-white/85">
          <p>
            The physical world. We wanted the brand to show up everywhere — as something people can
            wear, touch, and be part of. The brand extends into physical spaces:
          </p>
          <ul className="flex flex-col gap-2 pl-1">
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-white/85 inline-block" />
              <span>Merchandise like bats, hats, and apparel</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-white/85 inline-block" />
              <span>Stadium experiences including signage and wayfinding</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-white/85 inline-block" />
              <span>Everyday touchpoints like tickets, posters, and packaging</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Image — spans both columns */}
      <div className="col-span-2">
        <img
          src="/assets/merch.jpg"
          alt="Merchandise"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
