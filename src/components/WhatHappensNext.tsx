export function WhatHappensNext() {
  const steps = [
    {
      num: '01',
      title: 'We listen',
      desc: 'A short discovery call to understand your challenge from the inside out.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="23"/>
          <line x1="8" y1="23" x2="16" y2="23"/>
        </svg>
      ),
    },
    {
      num: '02',
      title: 'We scope',
      desc: 'A clear recommendation — approach, timeline and the right engagement model.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18"/>
          <path d="M9 21V9"/>
        </svg>
      ),
    },
    {
      num: '03',
      title: 'We deliver',
      desc: 'Engineers on site and backend support, with continuous communication throughout.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#05120a]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px),linear-gradient(to_bottom,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)]" />

      {/* Ambient glow top-left */}
      <div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(60,216,130,0.07) 0%, transparent 65%)' }}
      />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-6 h-[2px] bg-[#3cd882]" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#3cd882] uppercase font-mono">
                What Happens Next
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-white leading-[1.05] tracking-tight"
              style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
            >
              From first message<br className="hidden sm:inline" /> to first{' '}
              <span className="text-[#3cd882]">milestone.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-white/35 text-base md:text-lg leading-relaxed max-w-sm">
              A focused, three-step process — designed to move fast without cutting corners.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {steps.map(({ num, title, desc, icon }, idx) => (
            <div
              key={num}
              className="group relative rounded-2xl overflow-hidden flex flex-col gap-5 p-7 cursor-default transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(60,216,130,0.1)]"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.14)',
              }}
            >
              {/* Top sweep bar */}
              <div
                className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                style={{ background: 'linear-gradient(90deg, #3cd882, transparent)' }}
              />

              {/* Corner glow */}
              <div
                className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(circle at bottom right, rgba(60,216,130,0.08), transparent 70%)' }}
              />

              {/* Step number + icon row */}
              <div className="flex items-center justify-between relative z-10">
                <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#3cd882]/60 group-hover:text-[#3cd882] transition-colors duration-300">
                  {num}
                </span>
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: 'rgba(60,216,130,0.08)',
                    border: '1px solid rgba(60,216,130,0.15)',
                    color: '#3cd882',
                  }}
                >
                  {icon}
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-[1px] w-full"
                style={{ background: 'rgba(255,255,255,0.06)' }}
              />

              {/* Text */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3
                  className="text-lg font-bold text-white/90 group-hover:text-white transition-colors duration-300 leading-snug"
                  style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-white/35 group-hover:text-white/50 text-sm leading-relaxed transition-colors duration-300">
                  {desc}
                </p>
              </div>

              {/* Bottom connector arrow (not last card) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: '#05120a', border: '1px solid rgba(60,216,130,0.2)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3cd882" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
