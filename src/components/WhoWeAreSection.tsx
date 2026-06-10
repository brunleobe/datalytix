export function WhoWeAreSection() {
  const stats = [
    {
      value: '40',
      suffix: '+',
      label: 'Years of combined industry experience',
    },
    {
      value: '120',
      suffix: '+',
      label: 'Enterprise projects delivered',
    },
    {
      value: '11',
      suffix: '',
      label: 'Core technology competencies',
    },
    {
      value: '99.98',
      suffix: '%',
      label: 'Average solution uptime',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-white scroll-mt-24" id="who-we-are">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Top Row: Two Column Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-24">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2px] bg-[#3cd882]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                Who We Are
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              A solutions partner that holds integrity at its core.
            </h2>
          </div>
          
          <div className="lg:col-span-5 lg:pt-10">
            {/* Description */}
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-sans">
              Every engagement runs through a comprehensive project-management cycle built on continuous
              communication — so expectations are managed and deliverables land on time, on budget.
            </p>
          </div>
        </div>

        {/* Bottom Row: Stats Grid with Green Line Separators */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Green Divider */}
              <div className="w-full h-[1.5px] bg-[#3cd882] mb-6"></div>
              
              {/* Stat Value */}
              <div className="text-3xl md:text-4xl font-bold text-slate-800 font-sans mb-3 flex items-baseline">
                {stat.value}
                {stat.suffix && (
                  <span className="text-[#3cd882] font-semibold ml-0.5">{stat.suffix}</span>
                )}
              </div>
              
              {/* Stat Label */}
              <div className="text-xs md:text-sm text-slate-500 leading-normal max-w-[200px] font-sans">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
