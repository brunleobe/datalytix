export function ValuesSection() {
  const values = [
    {
      number: '01',
      title: 'Integrity',
      description: 'A core value, shown by our engineers on site and our backend support every day.',
    },
    {
      number: '02',
      title: 'Communication',
      description: 'Continuous dialogue keeps expectations managed and surprises off the table.',
    },
    {
      number: '03',
      title: 'Problem-solving',
      description: 'We fall in love with the challenge first, then engineer the simplest path through it.',
    },
    {
      number: '04',
      title: 'Partnership',
      description: 'Vendor-neutral by principle — the right answer for you, not for a vendor.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#fdf9fa] scroll-mt-24" id="values">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[0.78rem] font-normal tracking-[0.25em] text-[#16a34a] uppercase font-mono margin-top-[1rem]">
                — What Guides Us
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-[34.816px] max-w-[16ch] sm:text-4xl font-semibold md:text-5xl font-semibold margin-top-[1rem] text-[#05120a] leading-[1.15] tracking-tight">
              Values demonstrated,<br className="hidden sm:inline" /> not declared.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-2">
            {/* Subtitle */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              The attributes our clients feel in every<br /> engagement.
            </p>
          </div>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden bg-white border border-[#dbd6d7] rounded-2xl py-[1.8rem] px-[1.5rem] shadow-sm hover:shadow-2xl transition-all duration-400 flex flex-col justify-between min-h-[200px] cursor-default hover:-translate-y-1.5 hover:border-[#3cd882]/40"
              style={{ transition: 'border-color 0.4s ease, transform 0.35s ease, box-shadow 0.35s ease' }}
            >
              {/* Dark overlay - fades in on hover using pseudo approach with after */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #05120a 0%, #0a2015 100%)' }}
              />

              <div className="relative z-10">
                {/* Card Top: Number and Accent Bar */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-bold text-[#16a34a] group-hover:text-[#3cd882] font-mono transition-colors duration-300">
                    {value.number}
                  </span>
                  <span className="w-6 h-[2px] bg-[#3cd882] rounded-full group-hover:w-10 group-hover:shadow-[0_0_8px_rgba(60,216,130,0.6)] transition-all duration-300"></span>
                </div>

                {/* Heading */}
                <h3 className="text-[1.3rem] md:text-xl font-semibold text-slate-800 group-hover:text-white mb-3 font-sans transition-colors duration-300">
                  <span style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
                    {value.title}
                  </span>
                </h3>
              </div>

              {/* Description */}
              <p className="relative z-10 text-slate-500 group-hover:text-white/60 text-[13px] md:text-[14px] leading-relaxed font-sans mt-auto transition-colors duration-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
