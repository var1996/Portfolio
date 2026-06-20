import PlayingCard from '@/components/PlayingCard'

export default function Home() {
  return (
    <>
      <div className="col-start-1 col-span-3 flex items-center justify-center px-4 overflow-hidden">
        <p className="font-display uppercase text-[clamp(1.625rem,calc(2.2vw+10px),2.825rem)] leading-tight text-center">
          <span className="text-accent">Varsha</span><br />
          <span className="text-card">ranee</span>
        </p>
      </div>

      <PlayingCard />

      <div className="col-start-10 col-span-3 flex items-center justify-center px-4 overflow-hidden">
        <p className="font-display uppercase text-[clamp(1.625rem,calc(2.2vw+10px),2.825rem)] leading-tight text-center">
          <span className="text-card">Brand</span><br />
          <span className="text-accent">Designer</span>
        </p>
      </div>
    </>
  )
}
