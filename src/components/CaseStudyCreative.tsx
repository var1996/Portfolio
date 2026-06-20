const BRAND_VALUES = [
  {
    id: '01',
    label: 'THE BACKBENDER',
    body: 'Effort & intensity, the relentless energy to create fast, electric cricket experiences.',
  },
  {
    id: '02',
    label: 'THE SWEET SPOTTER',
    body: 'Balance, hitting the sweet spot between music, cricket, and opportunity for emerging talent.',
  },
  {
    id: '03',
    label: 'THE FAST BOWLER',
    body: 'Momentum, using music, sport, and culture into one continental force, constantly running toward potential.',
  },
  {
    id: '04',
    label: 'THE CREASE POPPER',
    body: 'Boldness, breaking boundaries and raising Zimbabwe and Africa onto the global stage.',
  },
]

function ValueCard({ id, label, body }: { id: string; label: string; body: string }) {
  return (
    <div className="border-t border-white/20 pt-6 flex flex-col gap-4">
      <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-pink">
        {id} {label}
      </p>
      <p className="font-body text-[18px] font-normal leading-[1.5] text-white">{body}</p>
    </div>
  )
}

export default function CaseStudyCreative() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* ── Creative Platform ── */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Creative Platform
        </h2>
      </div>

      <div>
        <img
          src="/assets/casestudy_images/3 Creative Platorm Images.png"
          alt="Creative platform"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Brand Values ── */}
      <div />

      <div className="flex flex-col gap-6">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.08em] text-yellow">
          BRAND VALUES
        </p>
        <div className="grid grid-cols-2 gap-6">
          {BRAND_VALUES.map((v) => (
            <ValueCard key={v.id} {...v} />
          ))}
        </div>
      </div>

    </div>
  )
}
