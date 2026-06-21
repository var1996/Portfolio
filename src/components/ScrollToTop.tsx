'use client'

export default function ScrollToTop() {
  function handleClick() {
    document.getElementById('case-study-scroll')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-black flex justify-center py-4 border-t border-white/10">
      <button
        onClick={handleClick}
        aria-label="Back to top"
        className="group flex flex-col items-center gap-2 text-white/30 hover:text-white transition-colors duration-300"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="group-hover:-translate-y-1 transition-transform duration-300"
        >
          <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" />
          <path d="M16 21V11M11 16l5-5 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.14em]">
          Back to top
        </span>
      </button>
    </div>
  )
}
