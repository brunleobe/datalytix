export function WhatHappensNext() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-[#05120a] border-t border-slate-900">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px),linear-gradient(to_bottom,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)]" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl relative z-10">

        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-[#3cd882] font-mono text-[10px] font-bold tracking-[0.3em] uppercase mb-4 block">
            — What Happens Next
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-[0.94rem] text-[#a6abb3] leading-tight tracking-tight"
            style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif" }}
          >
            From first message to first milestone.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {[
            {
              num: '01',
              title: 'We listen',
              desc: 'A short discovery call to understand your challenge from the inside out.',
            },
            {
              num: '02',
              title: 'We scope',
              desc: 'A clear recommendation — approach, timeline and the right engagement model.',
            },
            {
              num: '03',
              title: 'We deliver',
              desc: 'Engineers on site and backend support, with continuous communication throughout.',
            },
          ].map(({ num, title, desc }) => (
            <div key={num} className="group flex flex-col">
              {/* Horizontal separator line */}
              <div className="h-[2px] bg-[#3cd882] w-full mb-6 transform origin-left transition-transform duration-500 group-hover:scale-x-105" />
              <span className="text-[#3cd882] font-mono text-xs font-bold tracking-wider mb-2 block">{num}</span>
              <h3
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif" }}
              >{title}</h3>
              <p
                className="text-slate-400 text-sm leading-relaxed"
                style={{ fontFamily: "'Instrument Sans', system-ui, sans-serif" }}
              >{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
