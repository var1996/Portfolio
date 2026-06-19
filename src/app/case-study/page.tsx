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
import Footer from '@/components/Footer'

const SERVICES = [
  'CREATIVE DIRECTION',
  'VISUAL IDENTITY',
  'BRAND STRATEGY',
  'TONE OF VOICE',
  'BRAND SYSTEM',
]

const META = [
  { label: 'CLIENT',   value: 'ZIM AFRO' },
  { label: 'ROLE',     value: 'BRAND DESIGNER' },
  { label: 'TIMELINE', value: '6 WEEKS' },
  { label: 'TOOLS',    value: 'FIGMA & PROCREATE' },
]

export default function CaseStudy() {
  return (
    <div className="col-span-12 overflow-y-auto">

      {/* Featured image */}
      <div className="mt-8 aspect-video w-full relative overflow-hidden">
        <img
          src="/assets/casestudy_images/Case Study Cover Image.png"
          alt="Tamba 10 case study cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Project info */}
      <div className="px-12 grid grid-cols-[1fr_2fr] gap-x-16 gap-y-6 mt-10 pb-16">

        {/* Col 1: metadata */}
        <div className="flex flex-col gap-4 self-start">
          {META.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-0.5">
              <span className="font-body text-xs font-semibold uppercase text-pink">
                {label}
              </span>
              <span className="font-body text-xs font-semibold uppercase text-white">
                {value}
              </span>
            </div>
          ))}
        </div>

        {/* Col 2: summary + service tags */}
        <div className="flex flex-col gap-6">
          <p className="font-body text-[25px] leading-[1.3] font-regular text-white">
            Zim Afro T10, rebranded to Tamba 10, was reimagined from a cricket tournament
            into a full-scale sports and music festival. The rebrand built a new visual
            language, brand architecture, motion principles, campaign assets, and a scalable
            design system to hold it all together — transforming Tamba 10 from a sporting
            event into a cultural festival platform built to engage a new generation of fans.
          </p>
          <div className="flex gap-3 flex-wrap">
            {SERVICES.map((tag) => (
              <div
                key={tag}
                className="h-[33px] min-w-[151px] px-4 flex items-center justify-center font-body text-xs font-semibold uppercase tracking-wide text-white border border-yellow bg-yellow/30 rounded-[40px] whitespace-nowrap"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>

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
      <Footer />
    </div>
  )
}
