export default function CaseStudyDigital() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Heading ── */}
      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.1] text-white">
        Digital Applications. How we show up in the world
      </h2>

      {/* ════════════════ ROW 1 — SEAT ALLOCATION 1 + BODY TEXT ════════════════ */}

      {/* Seat Allocation 1 — cols 2–6 */}
      <div className="col-start-2 col-span-5 mt-16">
        <img
          src="/assets/casestudy_images/seat allocation 1.png"
          alt="Seat allocation 1"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Body text — cols 7–11 */}
      <div className="col-start-7 col-span-5 mt-16 self-center">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85">
          Merging the digital and physical touch-points by having tickets reflect seat allocation
          with aims of creating a more seamless and enjoyable user experience.
        </p>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white/85 mt-6">
          Different colours and patterns represent different tiers ie VVip, Vip.
        </p>
      </div>

      {/* ════════════════ ROW 2 — SEAT ALLOCATION 2 + SEAT ALLOCATION 3 ════════════════ */}

      {/* Seat Allocation 2 — cols 2–6 */}
      <div className="col-start-2 col-span-5 mt-16">
        <img
          src="/assets/casestudy_images/seat allocation 2.png"
          alt="Seat allocation 2"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Seat Allocation 3 — cols 8–11 */}
      <div className="col-start-7
       col-span-5 mt-16">
        <img
          src="/assets/casestudy_images/seat allocation 3.png"
          alt="Seat allocation 3"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ════════════════ ROW 3 — TYLA + BURNA ════════════════ */}

      {/* Tyla — cols 1–6, 600px tall */}
      <div className="col-start-1 col-span-6 mt-16">
        <img
          src="/assets/casestudy_images/TYla.png"
          alt="Tyla"
          className="w-full h-[600px] object-contain object-top"
        />
      </div>

      {/* Burna — cols 7–12, 600px tall */}
      <div className="col-start-7 col-span-6 mt-16">
        <img
          src="/assets/casestudy_images/Burna.png"
          alt="Burna"
          className="w-full h-[600px] object-contain object-top"
        />
      </div>

    </div>
  )
}
