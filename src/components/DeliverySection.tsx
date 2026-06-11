export function DeliverySection() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand the business challenge from the inside out before recommending an approach.',
    },
    {
      number: '02',
      title: 'Design',
      description: 'The right technology, platforms and tools — selected for your business, not ours.',
    },
    {
      number: '03',
      title: 'Deliver',
      description: 'Engineers on site and backend support keep momentum and quality high throughout.',
    },
    {
      number: '04',
      title: 'Sustain',
      description: 'Continuous communication and managed support keep solutions performing long after launch.',
    },
  ];

  return (
    <section 
      className="py-20 md:py-28 relative overflow-hidden scroll-mt-24"
      style={{
        backgroundColor: '#0d0d0e',
        backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '60px 100%',
      }}
      id="how-we-deliver"
    >
      {/* Radial overlay to make grid fade at edges */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 20%, #0d0d0e 95%)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Heading and Chart Card */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-6 h-[2px]" style={{ backgroundColor: '#b5c1b8' }}></span>
                <span 
                  className="text-xs font-bold tracking-[0.25em] uppercase font-mono"
                  style={{ color: '#b5c1b8' }}
                >
                  How We Deliver
                </span>
              </div>
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.15] tracking-tight">
                A delivery cycle built on communication.
              </h2>
            </div>

            {/* Project Health Chart Card */}
            <div 
              className="rounded-2xl p-6 flex flex-col gap-6 shadow-2xl transition-all duration-500 hover:scale-[1.02] border"
              style={{
                backgroundColor: 'rgba(14, 14, 16, 0.85)',
                backdropFilter: 'blur(8px)',
                borderColor: 'rgba(181, 193, 184, 0.08)',
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">
                  Project Health
                </span>
                <span 
                  className="text-[10px] uppercase font-mono tracking-widest flex items-center gap-1.5 font-bold"
                  style={{ color: '#b5c1b8' }}
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full animate-ping"
                    style={{ backgroundColor: '#b5c1b8' }}
                  ></span>
                  On Track
                </span>
              </div>

              {/* Chart SVG */}
              <div className="w-full h-44 relative">
                <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                  <defs>
                    <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#3cd882" floodOpacity="0.4" />
                    </filter>
                  </defs>

                  {/* Horizontal grid lines */}
                  <line x1="0" y1="40" x2="400" y2="40" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="80" x2="400" y2="80" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />

                  {/* Faint secondary dashed line */}
                  <path 
                    d="M 10 145 C 80 135, 120 120, 180 115 C 240 110, 300 95, 390 90" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.15)" 
                    strokeWidth="2" 
                    strokeDasharray="4 4" 
                  />

                  {/* Glowing green line */}
                  <path 
                    d="M 10 140 C 60 125, 120 95, 180 80 C 240 65, 300 35, 390 20" 
                    fill="none" 
                    stroke="#3cd882" 
                    strokeWidth="3.5" 
                    filter="url(#glow-green)"
                  />

                  {/* Glowing end point */}
                  <circle cx="390" cy="20" r="4.5" fill="#3cd882" />
                  <circle cx="390" cy="20" r="9" fill="transparent" stroke="#3cd882" strokeWidth="1.5" className="animate-ping origin-center" style={{ transformOrigin: '390px 20px' }} />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Description and Process Steps */}
          <div className="lg:col-span-7 flex flex-col gap-8 lg:pt-14">
            <p className="text-slate-400 text-base md:text-[17px] leading-relaxed max-w-xl">
              Demonstrated by our engineers on site and our backend support — every day.
            </p>

            {/* Steps Container */}
            <div className="flex flex-col">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="group py-6 border-t border-slate-800/60 first:border-t-0 flex flex-col md:flex-row gap-4 md:gap-8 transition-all duration-300 hover:pl-2"
                >
                  {/* Step Number */}
                  <span 
                    className="text-sm font-bold font-mono tracking-wider transition-colors duration-300"
                    style={{ color: '#b5c1b8' }}
                  >
                    {step.number}
                  </span>

                  {/* Step Info */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-[#3cd882]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
