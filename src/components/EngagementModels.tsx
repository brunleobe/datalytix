export function EngagementModels() {
  const models = [
    {
      badge: 'ADVISORY',
      title: 'Strategic Consulting',
      desc: 'Innovative thinkers and unrivalled problem solvers, vendor-neutral by principle.',
      points: [
        'Strategy & roadmaps',
        'Technology evaluation',
        'Requirements gathering'
      ]
    },
    {
      badge: 'BUILD',
      title: 'Professional Services',
      desc: 'Credentialed developers and delivery experts who design, build and deploy.',
      points: [
        'Solution design',
        'Integration & deployment',
        'Testing & QA'
      ]
    },
    {
      badge: 'RUN',
      title: 'Managed Support',
      desc: 'On-site engineers and backend support that keep solutions performing.',
      points: [
        '24/7 monitoring',
        'Maintenance & updates',
        'Continuous improvement'
      ]
    }
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#05120a]">
      {/* Subtle Background Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(60,216,130,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,216,130,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"
        style={{
          maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-[#16a34a]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
                How We Work Together
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight font-sans">
              Engagement models<br />
              that fit your team.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pb-2">
            <p className="text-slate-400 text-sm sm:text-base md:text-[17px] leading-relaxed font-sans font-medium">
              Available on an hourly, half-day, full-day or full-project basis — in person or virtual.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, idx) => (
            <div 
              key={idx}
              className="rounded-3xl p-8 bg-[#0b1710]/95 border border-[#163622]/40 shadow-2xl transition-all duration-300 hover:border-[#3cd882]/40 hover:-translate-y-1 flex flex-col justify-between min-h-[340px]"
            >
              <div>
                {/* Badge */}
                <span className="text-xs font-bold tracking-[0.2em] text-[#3cd882] font-mono block mb-4 uppercase">
                  {model.badge}
                </span>
                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
                  {model.title}
                </h3>
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans font-medium">
                  {model.desc}
                </p>
              </div>

              {/* Points Checklist */}
              <ul className="space-y-3 pt-4 border-t border-slate-800/40">
                {model.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start text-xs sm:text-sm text-slate-300 font-sans font-medium">
                    <span className="text-[#3cd882] mr-3 font-mono font-extrabold select-none">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
