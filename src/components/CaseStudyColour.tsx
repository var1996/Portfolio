const COLOURS = [
  {
    bg: '#DCBE00',
    textColor: '#050609',
    category: 'PRIMARY',
    hex: '#DCBE00',
    name: 'Ashanti Gold',
    border: false,
    description:
      'Named for the gold-rich history of the Ashanti Empire (West Africa).',
  },
  {
    bg: '#E17B8F',
    textColor: '#050609',
    category: 'PRIMARY',
    hex: '#E17B8F',
    name: 'Namaqua Bloom',
    border: false,
    description:
      'Inspired by the wild spring flowers of the Namaqualand (Southern Africa)',
  },
  {
    bg: '#EDF2F4',
    textColor: '#050609',
    category: 'SECONDARY',
    hex: '#EDF2F4',
    name: 'Salt Basin',
    border: false,
    description:
      'Inspired by the Makgadikgadi Pan (Botswana) and the white-hot midday sun.',
  },
  {
    bg: '#2A0800',
    textColor: '#FFFFFF',
    category: 'TERTIARY',
    hex: '#2A0800',
    name: 'Iroko Heart',
    border: false,
    description:
      'Named after the dark, durable Iroko wood found across Tropical Africa.',
  },
  {
    bg: '#050609',
    textColor: '#FFFFFF',
    category: 'TERTIARY',
    hex: '#050609',
    name: 'Obscure Night',
    border: true,
    description:
      'The deep, clear sky of the Sahara at midnight.',
  },
]

export default function CaseStudyColour() {
  return (
    <div className="bg-black grid grid-cols-12 gap-6 pt-20 pb-24">

      {/* ── Section header ── */}
      <p className="col-start-2 col-span-7 font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
        COLOUR SYSTEM
      </p>

      <h2 className="col-start-2 col-span-7 font-body text-[38px] font-normal leading-[1.1] text-white">
        The colours that carry the brand
      </h2>

      <p className="col-start-2 col-span-7 font-body text-[18px] font-normal leading-[1.5] text-white">
        The colour palette was built to balance energy, culture, performance, and premium
        positioning. The system combines bold signature colours with supporting neutrals,
        creating flexibility across campaigns, digital platforms, merchandise, and event
        experiences.
      </p>

      {/* ── Colour Palette Grid — 5 cols within cols 2–11 ── */}
      <div className="col-start-2 col-span-10 grid grid-cols-5 gap-6 mt-20">
        {COLOURS.map((c) => (
          <div key={c.hex} className="flex flex-col gap-4">

            {/* Swatch card */}
            <div
              style={{
                backgroundColor: c.bg,
                color: c.textColor,
                border: c.border ? '1px solid rgba(255,255,255,0.08)' : undefined,
              }}
              className="h-[210px] rounded-[24px] flex flex-col items-center justify-center gap-2 px-4 text-center"
            >
              <p className="font-body text-xs font-semibold uppercase tracking-[0.08em]">
                {c.category}
              </p>
              <p className="font-body text-xs font-semibold">{c.hex}</p>
              <p className="font-body text-[15px] font-normal">{c.name}</p>
            </div>

            {/* Description */}
            <p className="font-body text-[15px] font-normal leading-[1.5] text-white/85">
              {c.description}
            </p>

          </div>
        ))}
      </div>

      {/* ── Application Imagery ── */}
      <div className="col-start-2 col-span-10 mt-24">
        <img
          src="/assets/casestudy_images/Colour images.png"
          alt="Colour system in application"
          className="w-full h-auto object-contain"
        />
      </div>

    </div>
  )
}
