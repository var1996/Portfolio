const SPECIMEN = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!?<>,.'

const CAMPINGO = "'Bree Serif', serif"
const GOTHIQUE = "'Nunito', sans-serif"
const GEIST    = "'Inter', sans-serif"

const WEIGHTS = [
  { label: 'light',      w: 300 },
  { label: 'bold',       w: 700 },
  { label: 'thin',       w: 100 },
  { label: 'regular',    w: 400 },
  { label: 'semi bold',  w: 600 },
  { label: 'extra bold', w: 800 },
]

function WeightList({ font }: { font: string }) {
  return (
    <div className="flex flex-col gap-[3px] items-end">
      {WEIGHTS.map((wt) => (
        <span
          key={wt.label}
          style={{
            fontFamily: font,
            fontWeight: wt.w,
            fontSize: '15px',
            lineHeight: '1.5',
            color: '#D6587A',
          }}
        >
          {wt.label}
        </span>
      ))}
    </div>
  )
}

export default function CaseStudyTypography() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-20 pb-24">

      {/* Fonts */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Bree+Serif&family=Nunito:wght@100;200;300;400;600;700;800;900&family=Inter:wght@100;300;400;600;700;800;900&display=swap');`}</style>

      {/* Col 1 */}
      <div className="self-start">
        <h2 className="font-body text-[38px] font-normal leading-[1.1] text-white">
          Type that plays both roles
        </h2>
      </div>

      {/* Col 2 */}
      <div className="flex flex-col gap-8 self-start">
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          The typography system was built to balance personality with readability across
          all contexts. Campingo carries the expressive weight of headlines. Dark Gothique
          handles body copy with clarity and structure. Geist provides a modern alternative
          for digital-first environments. Together, they form a system that can shift from
          stadium hoardings to social graphics to editorial design.
        </p>

        {/* ── Specimen card ── */}
        <div style={{ border: '28px solid #D9B92C', padding: '44px 44px' }} className="bg-black">

          {/* ─ Row 1: Title / Campingo ─ */}
          <div className="grid grid-cols-[80px_110px_1fr_90px] gap-x-4 items-start">
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-body text-white font-bold text-[11px] uppercase tracking-[0.1em]">Title</span>
              <span className="font-body text-white/40 font-normal text-[11px]">Campingo</span>
            </div>

            <div style={{ fontFamily: CAMPINGO, fontSize: '72px', color: '#D9B92C', fontWeight: 400, lineHeight: 1 }}>
              Tt
            </div>

            <div style={{ fontFamily: CAMPINGO, fontSize: '32px', color: '#D9B92C', fontWeight: 400, lineHeight: 1.25, wordBreak: 'break-all' }}>
              {SPECIMEN}
            </div>

            <div />
          </div>

          <div className="h-[88px]" />

          {/* ─ Row 2: Body / Dark Gothique ─ */}
          <div className="grid grid-cols-[80px_110px_1fr_90px] gap-x-4 items-start">
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-body text-white font-bold text-[11px] uppercase tracking-[0.1em]">Body</span>
              <span className="font-body text-white/40 font-normal text-[11px]">Dark Gothique</span>
            </div>

            <div style={{ fontFamily: GOTHIQUE, fontSize: '60px', color: '#ffffff', fontWeight: 400, lineHeight: 1 }}>
              Tt
            </div>

            <div style={{ fontFamily: GOTHIQUE, fontSize: '24px', color: '#ffffff', fontWeight: 400, lineHeight: 1.3, wordBreak: 'break-all' }}>
              {SPECIMEN}
            </div>

            <WeightList font={GOTHIQUE} />
          </div>

          <div className="h-[88px]" />

          {/* ─ Row 3: Alternative Text / Geist ─ */}
          <div className="grid grid-cols-[80px_110px_1fr_90px] gap-x-4 items-start">
            <div className="flex flex-col gap-1 pt-2">
              <span className="font-body text-white font-bold text-[11px] uppercase tracking-[0.1em]">Alternative Text</span>
              <span className="font-body text-white/40 font-normal text-[11px]">Geist</span>
            </div>

            <div style={{ fontFamily: GEIST, fontSize: '60px', color: '#ffffff', fontWeight: 400, lineHeight: 1 }}>
              Tt
            </div>

            <div style={{ fontFamily: GEIST, fontSize: '24px', color: '#ffffff', fontWeight: 400, lineHeight: 1.3, wordBreak: 'break-all' }}>
              {SPECIMEN}
            </div>

            <WeightList font={GEIST} />
          </div>

        </div>
      </div>

    </div>
  )
}
