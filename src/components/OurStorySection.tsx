export function OurStorySection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] scroll-mt-24" id="our-story">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Image with overlay badge */}
          <div className="lg:col-span-5 relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-md border border-slate-200/50 group">
            <img
              src="/office.png"
              alt="Datalytix office workspace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-black/85 backdrop-blur-sm rounded-md border border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#3cd882] rounded-[1px]"></span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-[#a1a1aa] uppercase font-mono flex items-center">
                Photo &nbsp;·&nbsp; Office
              </span>
            </div>
          </div>

          {/* Right Column: Copy content */}
          <div className="lg:col-span-7 lg:pl-4">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#19874d] uppercase font-mono">
                — OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl sm:text-6xl font-black text-[#0a0a0a] leading-[1.08] tracking-tighter max-w-xl"
              style={{
                fontFamily: "'Space Grotesk', system-ui, sans-serif",
                margin: '1rem 0 1.3rem',
                maxWidth: '16ch',
                fontSize: 'clamp(1.9rem, 3.4vw, 3rem)',
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: '-0.02em',
              }}>
              A partner certified across the platforms that matter.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-5 text-slate-500 text-[15px] sm:text-base leading-relaxed mb-6">
              <p>
                We are an IT solutions delivery company certified across multiple OEMs — including Oracle,
                Microsoft and Thomson Reuters — with competencies in data management, business intelligence and
                analytics, data warehousing, unified communications, advanced infrastructure and shared services.
              </p>
              <p>
                Our strength lies in vast industry experience. Over 40 years combined helps us bring simple
                solutions to complex IT problems — and the discipline to deliver them on time and on budget.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold tracking-[0.25em] text-[#19874d] uppercase font-mono">
                — THE DATALYTIX NG TEAM
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
