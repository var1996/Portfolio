import CaseStudyIntro from '@/components/CaseStudyIntro'
import CaseStudyContext from '@/components/CaseStudyContext'
import CaseStudyBrand from '@/components/CaseStudyBrand'
import CaseStudyCreative from '@/components/CaseStudyCreative'
import CaseStudyVoice from '@/components/CaseStudyVoice'
import CaseStudyColour from '@/components/CaseStudyColour'
import CaseStudyTypography from '@/components/CaseStudyTypography'
import CaseStudyArtDirection from '@/components/CaseStudyArtDirection'
import CaseStudyPatterns from '@/components/CaseStudyPatterns'
import CaseStudyDigital from '@/components/CaseStudyDigital'
import CaseStudyPhysical from '@/components/CaseStudyPhysical'
import CaseStudyClosing from '@/components/CaseStudyClosing'
import ScrollToTop from '@/components/ScrollToTop'
import Footer from '@/components/Footer'

const SERVICES = [
  'CREATIVE DIRECTION',
  'VISUAL IDENTITY',
  'BRAND STRATEGY',
  'TONE OF VOICE',
  'BRAND SYSTEM',
]

const META = [
  { label: 'CLIENT',   value: 'ZIM AFRO 10' },
  { label: 'ROLE',     value: 'BRAND DESIGNER' },
  { label: 'TIMELINE', value: '6 WEEKS' },
  { label: 'TOOLS',    value: 'FIGMA & PROCREATE' },
]

export default function CaseStudy() {
  return (
    <div id="case-study-scroll" className="col-span-12 overflow-y-auto overflow-x-hidden">

      {/* Hero */}
      <section
        aria-label="Project hero"
        className="relative mx-[30px] flex flex-col justify-between overflow-hidden rounded-2xl"
        style={{ minHeight: '100svh' }}
      >
        {/* Background image — no animation */}
        <img
          src="/assets/casestudy_images/Case Study Cover Image.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,0.96) 100%)' }}
        />

        {/* Top: title */}
        <div className="relative z-10 p-10 pt-10">
          <h1 className="font-display uppercase text-yellow m-0 leading-[1.1] text-[clamp(3rem,8vw,9rem)]">
            Rebranding<br />of Zim Afro T10
          </h1>
        </div>

        {/* Bottom: info panel */}
        <div className="relative z-10 pl-0 pr-10 pb-10 flex justify-between items-end gap-8">

          {/* Left: description + tags */}
          <div style={{ maxWidth: '60ch' }}>
            <p className="font-body text-white text-[18px] leading-[1.65] mb-6">
              Zim Afro T10, rebranded to Tamba 10, was reimagined from a cricket tournament
              into a full-scale sports and music festival. The rebrand built a new visual
              language, brand architecture, campaign assets, and a scalable design system —
              transforming Tamba 10 from a sporting event into a cultural festival platform
              built to engage a new generation of fans.
            </p>
            <ul className="flex flex-wrap gap-2 list-none m-0 p-0">
              {SERVICES.map((tag) => (
                <li key={tag}>
                  <span className="border border-yellow text-yellow w-[160px] inline-flex items-center justify-center py-1.5 rounded-full font-body text-[11px] font-semibold tracking-[0.06em] uppercase">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: metadata */}
          <div className="flex flex-col gap-3 text-left shrink-0">
            {META.map(({ label, value }) => (
              <div key={label}>
                <p className="font-body text-[11px] font-semibold uppercase tracking-[0.08em] text-pink m-0">{label}</p>
                <p className="font-body text-[13px] text-white m-0">{value}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CaseStudyIntro />
      <CaseStudyContext />
      <CaseStudyBrand />
      <CaseStudyCreative />
      <CaseStudyVoice />
      <CaseStudyColour />
      <CaseStudyTypography />
      <CaseStudyArtDirection />
      <CaseStudyPatterns />
      <CaseStudyDigital />
      <CaseStudyPhysical />
      <CaseStudyClosing />
      <ScrollToTop />
      <Footer />
    </div>
  )
}
