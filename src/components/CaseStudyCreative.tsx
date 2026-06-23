

export default function CaseStudyCreative() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* ── Creative Platform ── */}
      <div className="self-start">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Turning strategy into a look and feel
        </h2>
      </div>

      <div className="col-span-2">
        <img
          src="/assets/creative.png"
          alt="Creative platform"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
