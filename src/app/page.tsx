import PlayingCard from '@/components/PlayingCard'

export default function Home() {
  return (
    <>
      <div className="col-start-1 col-span-3 flex items-center justify-center px-4 overflow-hidden">
        <p className="font-display uppercase text-white text-[clamp(1rem,2.2vw,2.2rem)] leading-tight text-center">
          Varsha<br />ranee
        </p>
      </div>

      <PlayingCard />

      <div className="col-start-10 col-span-3 flex items-center justify-center px-4 overflow-hidden">
        <p className="font-display uppercase text-white text-[clamp(1rem,2.2vw,2.2rem)] leading-tight text-center">
          Brand<br />Designer
        </p>
      </div>
    </>
  )
}
