import CaseStudyHero from '@/components/CaseStudyHero'
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

export default function CaseStudy() {
  return (
    <div id="case-study-scroll" className="col-span-12 overflow-y-auto overflow-x-hidden">
      <CaseStudyHero />
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
