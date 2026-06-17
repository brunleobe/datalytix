export function OurStorySection() {
  return (
    <section className="py-20 md:py-28 bg-[#fafafa] scroll-mt-24" id="our-story">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with overlay badge */}
          <div className="lg:col-span-5 relative w-full aspect-[3/2] sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl shadow-xl group border border-slate-200/50">
            <img
              src="/office.png"
              alt="Datalytix office workspace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay badge */}
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2.5 shadow-2xl">
              <span className="w-2 h-2 bg-[#3cd882] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-white uppercase font-mono">
                Photo · Office
              </span>
            </div>
          </div>

          {/* Right Column: Copy content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                — Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.2] tracking-tight mb-8">
              A partner certified across the platforms that matter.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 text-slate-600 text-base md:text-[17px] leading-relaxed mb-8">
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
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                — The Datalytix NG Team
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
