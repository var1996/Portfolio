const LESSONS = [
  {
    id: '01',
    title: 'Culture Isn’t a Layer, It’s the Foundation',
    body: 'The strongest design decisions on Tamba10 didn’t come from trends or references they came from genuine cultural insight. Authentic understanding of Zimbabwean and African audiences had to shape strategy from day one, not get added as decoration after the fact.',
  },
  {
    id: '02',
    title: 'A Name Can Do More Work Than a Logo',
    body: 'Naming “Tamba10” showed how much strategic weight a single word can carry cultural roots, dual meaning, global pronounceability, emotional ownership nall held in one name. It reframed naming as a serious strategic discipline, not just a creative exercise.',
  },
  {
    id: '03',
    title: 'Clarity Is a Creative Skill',
    body: 'Translating a layered brand strategy (vision, mission, creative platform, identity system) into something simple and emotionally resonant demanded hard editing. The best ideas weren’t the most complex ones they were the ones that could be explained in a single sentence.',
  },
  {
    id: '04',
    title: 'Identity Systems Need to Flex Across Contexts',
    body: 'Designing for a cricket festival fused with Afro music meant the brand had to feel at home on a scoreboard and on a stage. That called for a system built with flexibility from the start, rather than a single rigid look.',
  },
  {
    id: '05',
    title: 'Great Branding Builds Belonging, Not Just Recognition',
    body: 'The biggest shift was realising the goal wasn’t just to make Tamba10 look different it was to make people feel like it belonged to them. Success wasn’t measured by “does it look good,” but by “does it make people feel something.”',
  },
]

export default function CaseStudyClosing() {
  return (
    <div className="bg-black px-[30px] grid grid-cols-[1fr_2fr] gap-x-16 gap-y-12 pt-12 pb-12">

      {/* Left: section heading */}
      <div className="self-start">
        <h2 className="font-body text-[28px] font-normal leading-[1.1] text-white uppercase">
          Learning from this project
        </h2>
      </div>

      {/* Right: lessons */}
      <div className="flex flex-col">
        {LESSONS.map((lesson) => (
          <div key={lesson.id} className="py-8 flex flex-col gap-3">
            <p className="font-body text-[22px] font-normal leading-[1.2] text-white">
              {lesson.title}
            </p>
            <p className="font-body text-[18px] font-normal leading-[1.5] text-white/70">
              {lesson.body}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}
