export default function CaseStudyTypography() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Type That Plays Both Roles
        </h2>
      </div>

      {/* Col 2 — body + image */}
      <div className="flex flex-col gap-8">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The typography system was built to balance personality with readability across
          all contexts. Campingo carries the expressive weight of headlines. Dark Gothique
          handles body copy with clarity and structure. Geist provides a modern alternative
          for digital-first environments. Together, they form a system that can shift from
          stadium hoardings to social graphics to editorial design.
        </p>
        <img
          src="/assets/casestudy_images/Image Typography.png"
          alt="Typography system"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
