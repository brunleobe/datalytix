export function StatsSection() {
  const stats = [
    {
      value: '40',
      suffix: '+',
      label: 'Years combined experience',
    },
    {
      value: '3',
      suffix: '',
      label: 'OEM certifications held',
    },
    {
      value: '120',
      suffix: '+',
      label: 'Projects delivered',
    },
    {
      value: '11',
      suffix: '',
      label: 'Core competencies',
    },
  ];

  return (
    <section className="relative py-24 md:py-32 bg-[#05120a] overflow-hidden" id="stats">
      {/* Background Grid Lines */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)]"></div> */}

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header Row */}
        <div className="mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-[0.78rem] font-bold tracking-[0.25em] text-[#19874d] inline-flex uppercase font-mono"
              style={{
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
              }}
            >
              — By the Numbers
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Experience you can measure.
          </h2>
        </div>

        {/* Stats Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Green Divider */}
              <div className="w-full h-[1.5px] bg-[#3cd882] mb-8"></div>

              {/* Stat Value */}
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-sans tracking-tight">
                {stat.value}
              </div>

              {/* Suffix (stacked vertically below the number) */}
              {stat.suffix ? (
                <div className="text-xl font-bold text-[#3cd882] mb-2 font-sans">
                  {stat.suffix}
                </div>
              ) : (
                // Spacing placeholder to keep layout aligned
                <div className="text-xl font-bold text-transparent mb-2 select-none font-sans">
                  &nbsp;
                </div>
              )}

              {/* Stat Label */}
              <div className="text-xs md:text-sm text-slate-400 leading-normal tracking-wide font-sans mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
