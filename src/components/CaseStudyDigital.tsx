export default function CaseStudyDigital() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Col 1 — header */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Digital Applications. How we show up in the world
        </h2>
      </div>

      {/* Col 2 — all content */}
      <div className="flex flex-col gap-8 self-start">

        {/* Body text */}
        <div className="flex flex-col gap-4 font-body text-[18px] font-normal leading-[1.5] text-white/85">
          <p>
            Merging the digital and physical touch-points by having tickets reflect seat allocation
            with aims of creating a more seamless and enjoyable user experience.
          </p>
          <p>Different colours and patterns represent different tiers ie VVip, Vip.</p>
        </div>

        {/* Digital Tickets — 3 in a row */}
        <div className="grid grid-cols-3 gap-4">
          <img src="/assets/queens/Digital Ticket 2.png" alt="Digital Ticket 2" className="w-full h-auto object-contain" />
          <img src="/assets/queens/Digital Ticket 3.png" alt="Digital Ticket 3" className="w-full h-auto object-contain" />
          <img src="/assets/queens/Digital Ticket 4.png" alt="Digital Ticket 4" className="w-full h-auto object-contain" />
        </div>

        {/* Seating — 3 in a row */}
        <div className="grid grid-cols-3 gap-4">
          <img src="/assets/queens/seating 1.png" alt="Seating 1" className="w-full h-auto object-contain" />
          <img src="/assets/queens/seating 2.png" alt="Seating 2" className="w-full h-auto object-contain" />
          <img src="/assets/queens/seating 3.png" alt="Seating 3" className="w-full h-auto object-contain" />
        </div>

        {/* Tyla + Burna */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/assets/casestudy_images/TYla.png"
            alt="Tyla"
            className="w-full h-auto object-contain"
          />
          <img
            src="/assets/casestudy_images/Burna.png"
            alt="Burna"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>

    </div>
  )
}
