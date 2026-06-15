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
    <section className="py-20 md:py-28 bg-[#f8fafc] scroll-mt-24" id="values">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                — What Guides Us
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              Values demonstrated,<br className="hidden sm:inline" /> not declared.
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pb-2">
            {/* Subtitle */}
            <p className="text-slate-500 text-base md:text-lg leading-relaxed">
              The attributes our clients feel in every engagement.
            </p>
          </div>
        </div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100/80 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[200px]"
            >
              <div>
                {/* Card Top: Number and Accent Bar */}
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xs font-bold text-[#16a34a] font-mono">
                    {value.number}
                  </span>
                  <span className="w-6 h-[2px] bg-[#3cd882] rounded-full"></span>
                </div>
                
                {/* Heading */}
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 font-sans">
                  {value.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-500 text-[13px] md:text-[14px] leading-relaxed font-sans mt-auto">
                {value.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
