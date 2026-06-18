export default function CaseStudyPhysical() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Heading ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.1] text-white">
        Physical Applications. How we show up in the world
      </h2>

      {/* ── Body text ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-6 font-body text-[18px] font-normal leading-[1.5] text-white/85">
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
        <p>This ensures the brand is not just seen but experienced.</p>
      </div>

      {/* ── Group 53 image ── */}
      <div className="col-start-2 col-span-10 mt-16">
        <img
          src="/assets/casestudy_images/Group 53.png"
          alt="Physical applications"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
