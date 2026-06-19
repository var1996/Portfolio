export default function CaseStudyPhysical() {
  return (
    <div className="bg-white px-12 grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-black">
          Physical Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — body + image */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-black/85">
          <p>
            The physical world. We wanted the brand to show up everywhere — as something people can
            wear, touch, and be part of. The brand extends into physical spaces:
          </p>
          <ul className="flex flex-col gap-2 pl-1">
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-black/85 inline-block" />
              <span>Merchandise like bats, hats, and apparel</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-black/85 inline-block" />
              <span>Stadium experiences including signage and wayfinding</span>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 mt-[0.55em] w-1 h-1 rounded-full bg-black/85 inline-block" />
              <span>Everyday touchpoints like tickets, posters, and packaging</span>
            </li>
          </ul>
          <p>This ensures the brand is not just seen but experienced.</p>
        </div>
        <img
          src="/assets/casestudy_images/Group 53.png"
          alt="Physical applications"
          className="w-full h-auto object-contain mt-4"
        />
      </div>

    </div>
  )
}
