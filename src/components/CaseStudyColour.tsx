const COLOURS = [
  {
    bg: '#DCBE00',
    textColor: '#050609',
    category: 'PRIMARY',
    hex: '#DCBE00',
    name: 'Ashanti Gold',
    border: false,
    description: 'Named for the gold-rich history of the Ashanti Empire (West Africa).',
  },
  {
    bg: '#E17B8F',
    textColor: '#050609',
    category: 'PRIMARY',
    hex: '#E17B8F',
    name: 'Namaqua Bloom',
    border: false,
    description: 'Inspired by the wild spring flowers of the Namaqualand (Southern Africa)',
  },
  {
    bg: '#EDF2F4',
    textColor: '#050609',
    category: 'SECONDARY',
    hex: '#EDF2F4',
    name: 'Salt Basin',
    border: false,
    description: 'Inspired by the Makgadikgadi Pan (Botswana) and the white-hot midday sun.',
  },
  {
    bg: '#2A0800',
    textColor: '#FFFFFF',
    category: 'TERTIARY',
    hex: '#2A0800',
    name: 'Iroko Heart',
    border: false,
    description: 'Named after the dark, durable Iroko wood found across Tropical Africa.',
  },
  {
    bg: '#050609',
    textColor: '#FFFFFF',
    category: 'TERTIARY',
    hex: '#050609',
    name: 'Obscure Night',
    border: true,
    description: 'The deep, clear sky of the Sahara at midnight.',
  },
]

const PALETTE_IMAGES = [
  { src: '/assets/queens/Palette 1.png', alt: 'Woman in yellow dress with bananas' },
  { src: '/assets/queens/palette 2.png', alt: 'Pink salt lake with swimmers' },
  { src: '/assets/queens/palette 3.png', alt: 'Ornate carved white archway' },
  { src: '/assets/queens/palette 4.png', alt: 'Woven textile basket columns' },
]

export default function CaseStudyColour() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* ── Intro ── */}
      <div className="self-start">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          The colours that carry the brand
        </h2>
      </div>

      <div className="flex flex-col gap-12 self-start">
        <div className="flex flex-col gap-6">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
            COLOUR SYSTEM
          </p>
          <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
            The colour palette was built to balance energy, culture, performance, and premium
            positioning. The system combines bold signature colours with supporting neutrals,
            creating flexibility across campaigns, digital platforms, merchandise, and event
            experiences.
          </p>
        </div>

        {/* Colour swatch grid — 5 in a row */}
        <div className="grid grid-cols-5 gap-[3px]">
          {COLOURS.map((c) => (
            <div key={c.hex} className="flex flex-col gap-4">
              <div
                style={{
                  backgroundColor: c.bg,
                  color: c.textColor,
                  border: c.border ? '1px solid rgba(255,255,255,0.15)' : undefined,
                }}
                className="aspect-[8/5] rounded-[16px] flex flex-col items-center pt-3 gap-1 px-2"
              >
                <p className="font-body text-xs font-semibold uppercase tracking-[0.08em]">
                  {c.category}
                </p>
                <p className="font-body text-sm font-bold">{c.hex}</p>
                <p className="font-body text-[15px] font-normal">{c.name}</p>
              </div>
              <p className="font-body text-[12px] font-normal leading-[1.5] text-white/85 px-[2px]">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-up palette image row */}
        <div className="grid grid-cols-4 gap-[3px]">
          {PALETTE_IMAGES.map((img) => (
            <div key={img.src} className="aspect-[4/5] overflow-hidden rounded-[16px]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
