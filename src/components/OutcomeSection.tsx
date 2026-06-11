import { useState } from 'react';

export function OutcomeSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const data = [
    { label: '01', height: 'h-[35%]', color: '#3cd882', value: '+28% Efficiency' },
    { label: '02', height: 'h-[50%]', color: '#2d3139', value: '+48% Pipelines' },
    { label: '03', height: 'h-[42%]', color: '#3cd882', value: '+35% Speed' },
    { label: '04', height: 'h-[65%]', color: '#2d3139', value: '+72% Security' },
    { label: '05', height: 'h-[60%]', color: '#3cd882', value: '+60% Uptime' },
    { label: '06', height: 'h-[80%]', color: '#2d3139', value: '+92% Scale' },
    { label: '07', height: 'h-[80%]', color: '#3cd882', value: '+95% Value' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f7f9] scroll-mt-24" id="outcome">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2px] bg-[#3cd882]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#3cd882] uppercase font-mono">
                The Outcome
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              Measurable gains, <br className="hidden sm:inline" />
              quarter after quarter.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            {/* Description */}
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-sans">
              Representative impact across recent data and infrastructure engagements.
            </p>
          </div>
        </div>

        {/* Bar Chart Container */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl h-80 flex items-end justify-between gap-2 sm:gap-4 md:gap-6 px-4 md:px-10 border-b border-slate-200 pb-4 relative">
            
            {/* Tooltip Overlay */}
            {hoveredIdx !== null && (
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#05120a] text-white px-4 py-2 rounded-lg text-xs font-mono shadow-xl border border-emerald-950/20 transition-all duration-300 animate-fade-in"
              >
                Quarter {data[hoveredIdx].label} Impact: <span className="text-[#3cd882] font-bold">{data[hoveredIdx].value}</span>
              </div>
            )}

            {/* Bars */}
            {data.map((bar, idx) => (
              <div 
                key={idx} 
                className="flex-1 flex flex-col items-center gap-4 h-full justify-end group cursor-pointer"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Bar Element */}
                <div 
                  className={`w-full rounded-t-lg transition-all duration-500 origin-bottom ${bar.height} group-hover:scale-y-[1.03] group-hover:opacity-90`}
                  style={{
                    backgroundColor: bar.color,
                    boxShadow: hoveredIdx === idx ? `0 0 20px ${bar.color}44` : 'none',
                  }}
                />

                {/* X Axis Label */}
                <span 
                  className="text-[11px] font-mono tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors duration-300 font-semibold"
                  style={{ fontFamily: 'var(--f-mono)' }}
                >
                  Q{bar.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
