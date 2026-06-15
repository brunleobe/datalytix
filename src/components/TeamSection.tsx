export function TeamSection() {
  const team = [
    {
      role: 'Managing Director',
      department: 'Leadership',
    },
    {
      role: 'Head of Delivery',
      department: 'Professional Services',
    },
    {
      role: 'Lead Data Architect',
      department: 'Data & Analytics',
    },
    {
      role: 'Infrastructure Lead',
      department: 'Platforms',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white scroll-mt-24" id="team">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                — Our People
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              The team behind the<br className="hidden sm:inline" /> delivery.
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pb-2">
            {/* Subtitle */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              Business analysts, certified technologists and visionaries.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Photo Placeholder Card (Pure CSS diagonal stripes) */}
              <div
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-slate-100 flex items-center justify-center mb-5"
                style={{
                  background: 'linear-gradient(135deg, #07170c 0%, #0d2717 100%)',
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    rgba(60, 216, 130, 0.035) 0px,
                    rgba(60, 216, 130, 0.035) 1.5px,
                    transparent 1.5px,
                    transparent 12px
                  )`,
                }}
              >
                {/* Badge Overlay */}
                <div className="absolute bottom-5 left-5 px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center gap-2 shadow-2xl">
                  <span className="w-1.5 h-1.5 bg-[#3cd882] rounded-full animate-pulse"></span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-white uppercase font-mono">
                    Photo · Portrait
                  </span>
                </div>
              </div>

              {/* Member Meta */}
              <h3 className="text-base md:text-lg font-bold text-slate-800 mb-1 font-sans">
                {member.role}
              </h3>
              <p className="text-[10px] md:text-[11px] font-bold text-slate-400 tracking-[0.15em] uppercase font-mono">
                {member.department}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
