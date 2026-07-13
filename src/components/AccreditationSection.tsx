export function AccreditationSection() {
  const accreditations = [
    { name: 'Oracle', status: 'CERTIFIED' },
    { name: 'Microsoft', status: 'CERTIFIED' },
    { name: 'Thomson Reuters', status: 'PARTNER' },
    { name: 'Dell Technologies', status: 'SOLUTIONS' },
    { name: 'Cisco', status: 'NETWORKING' },
    { name: 'VMware', status: 'VIRTUALISATION' },
  ];

  // Duplicate for seamless marquee loop
  const marqueeItems = [...accreditations, ...accreditations];

  return (
    <section
      className="relative py-20 md:py-28 overflow-hidden scroll-mt-24"
      id="accreditations"
      style={{ background: 'linear-gradient(135deg, #05120a 0%, #071510 50%, #05120a 100%)' }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Green ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(60,216,130,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header Row */}
        <div className="mb-14 md:mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <span className="w-6 h-[2px] bg-[#3cd882]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#3cd882] uppercase font-mono">
              Certified & Trusted
            </span>
          </div>
          {/* Heading */}
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl"
            style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
          >
            Accredited across the platforms{' '}
            <span className="text-[#3cd882]">our clients rely on.</span>
          </h2>
        </div>

        {/* Marquee Strip */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #05120a, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #05120a, transparent)' }}
          />

          <div className="flex gap-5 accreditation-marquee">
            {marqueeItems.map((badge, idx) => (
              <div
                key={idx}
                className="group flex-shrink-0 relative px-6 py-4 rounded-2xl flex items-center gap-3.5 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(60,216,130,0.2)]"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(74,222,128,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover fill overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: 'rgba(60,216,130,0.07)' }}
                />

                {/* Animated green dot */}
                <span className="relative flex-shrink-0 w-2.5 h-2.5">
                  <span className="absolute inset-0 rounded-full bg-[#3cd882] animate-ping opacity-30"></span>
                  <span className="relative block w-2.5 h-2.5 rounded-full bg-[#3cd882]"></span>
                </span>

                {/* Text metadata */}
                <div className="relative flex flex-col pr-1 min-w-[90px]">
                  <span className="text-sm font-bold text-white/90 group-hover:text-white font-sans leading-tight tracking-wide transition-colors duration-200">
                    {badge.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#3cd882]/50 group-hover:text-[#3cd882]/80 uppercase leading-none mt-1 transition-colors duration-200">
                    {badge.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .accreditation-marquee {
          animation: marquee 22s linear infinite;
          width: max-content;
        }
        .accreditation-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
