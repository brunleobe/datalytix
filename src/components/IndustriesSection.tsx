export function IndustriesSection() {
  const industries = [
    {
      number: '01',
      name: 'Banking & Financial Services',
      description: 'Secure data platforms, regulatory reporting and analytics for high-volume institutions.',
      tag: 'compliance',
    },
    {
      number: '02',
      name: 'Telecommunications',
      description: 'High-availability infrastructure and unified communications at national scale.',
      tag: 'consulting',
    },
    {
      number: '03',
      name: 'Government & Public Sector',
      description: 'Data warehousing and shared-services platforms for transparent, efficient delivery.',
      tag: 'forensic consulting',
    },
    {
      number: '04',
      name: 'Oil, Gas & Energy',
      description: 'Resilient systems and disaster recovery for mission-critical operations.',
      tag: 'managed services',
    },
    {
      number: '05',
      name: 'Healthcare',
      description: 'Integrated records, replication and analytics that support better patient outcomes.',
      tag: 'security & compliance',
    },
    {
      number: '06',
      name: 'Retail & Logistics',
      description: 'BI and process automation that streamline supply, inventory and customer insight.',
      tag: 'supply chain & logistics',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white scroll-mt-24" id="industries">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2px] bg-[#3cd882]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#3cd882] uppercase font-mono">
                Industries Served
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              Trusted across the sectors that move the economy.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            {/* Description */}
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-sans">
              We bring deep regulatory and operational understanding to each industry we work in.
            </p>
          </div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {industries.map((ind, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl p-8 h-80 md:h-[400px] flex flex-col justify-between overflow-hidden shadow-lg group cursor-pointer transition-all duration-300 hover:-translate-y-1"
              style={{
                backgroundColor: '#05120a',
                border: '1px solid rgba(74, 222, 128, 0.12)',
              }}
            >
              {/* Diagonal hatch pattern */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-80"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    rgba(74,222,128,0.03) 0px,
                    rgba(74,222,128,0.03) 1px,
                    transparent 1px,
                    transparent 12px
                  )`,
                }}
              />
              
              {/* Subtle green glow inside card */}
              <div 
                className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full pointer-events-none transition-all duration-500 opacity-20 group-hover:opacity-40"
                style={{
                  background: 'radial-gradient(circle, rgba(74,222,128,0.4) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
              />

              {/* Number at top-left */}
              <span className="relative z-10 text-sm font-bold text-[#3cd882] font-mono">
                {ind.number}
              </span>

              {/* Title, description, and tag at bottom-left */}
              <div className="relative z-10 mt-auto flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-snug transition-colors duration-300 group-hover:text-[#3cd882]">
                  {ind.name}
                </h3>
                <div className="overflow-hidden transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="text-sm text-white/60 leading-relaxed font-sans">
                    {ind.description}
                  </p>
                </div>
                {ind.tag && (
                  <div
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-mono self-start mt-1.5 transition-all duration-300"
                    style={{
                      backgroundColor: 'rgba(5, 18, 10, 0.65)',
                      border: '1px solid rgba(74, 222, 128, 0.18)',
                    }}
                  >
                    <span className="text-[#3cd882] font-bold lowercase">{ind.tag[0]}</span>
                    <span className="text-white/50 tracking-[0.2em] ml-0.5 lowercase">
                      {ind.tag.slice(1)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
