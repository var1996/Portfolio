export default function CaseStudyDigital() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Digital Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — seat allocation images + body */}
      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-2 gap-6 items-center">
          <img
            src="/assets/casestudy_images/seat allocation 1.png"
            alt="Seat allocation 1"
            className="w-full h-auto object-contain"
          />
          <div className="flex flex-col gap-4 font-body text-[18px] font-normal leading-[1.5] text-white/85">
            <p>
              Merging the digital and physical touch-points by having tickets reflect seat allocation
              with aims of creating a more seamless and enjoyable user experience.
            </p>
            <p>Different colours and patterns represent different tiers ie VVip, Vip.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <img
            src="/assets/casestudy_images/seat allocation 2.png"
            alt="Seat allocation 2"
            className="w-full h-auto object-contain"
          />
          <img
            src="/assets/casestudy_images/seat allocation 3.png"
            alt="Seat allocation 3"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Full-width row — Tyla + Burna */}
      <div className="col-span-2 grid grid-cols-2">
        <img
          src="/assets/casestudy_images/TYla.png"
          alt="Tyla"
          className="w-full h-[600px] object-contain object-top"
        />
        <img
          src="/assets/casestudy_images/Burna.png"
          alt="Burna"
          className="w-full h-[600px] object-contain object-top"
        />
      </div>

    </div>
  )
}
