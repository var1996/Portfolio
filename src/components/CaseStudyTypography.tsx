export default function CaseStudyTypography() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Header + body — cols 2–8 ── */}
      <div className="col-start-2 col-span-7 flex flex-col gap-6">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Type That Plays Both Roles
        </h2>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The typography system was built to balance personality with readability across
          all contexts. Campingo carries the expressive weight of headlines. Dark Gothique
          handles body copy with clarity and structure. Geist provides a modern alternative
          for digital-first environments. Together, they form a system that can shift from
          stadium hoardings to social graphics to editorial design.
        </p>
      </div>

      {/* ── Typography image — cols 2–11 ── */}
      <div className="col-start-2 col-span-10 mt-16">
        <img
          src="/assets/casestudy_images/Image Typography.png"
          alt="Typography system"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
