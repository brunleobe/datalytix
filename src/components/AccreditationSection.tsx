export function AccreditationSection() {
  const accreditations = [
    {
      name: 'Oracle',
      status: 'CERTIFIED',
    },
    {
      name: 'Microsoft',
      status: 'CERTIFIED',
    },
    {
      name: 'Thomson Reuters',
      status: 'PARTNER',
    },
    {
      name: 'Dell Technologies',
      status: 'SOLUTIONS',
    },
    {
      name: 'Cisco',
      status: 'NETWORKING',
    },
    {
      name: 'VMware',
      status: 'VIRTUALISATION',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f8fafc] scroll-mt-24" id="accreditations">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

        {/* Header Row */}
        <div className="mb-12 md:mb-16">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
              — Certified & Trusted
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-tight tracking-tight max-w-3xl">
            Accredited across the platforms our clients rely on.
          </h2>
        </div>

        {/* Accreditations Flexwrap container */}
        <div className="flex flex-wrap gap-4 md:gap-6 justify-start items-center">
          {accreditations.map((badge, idx) => (
            <div
              key={idx}
              className="px-6 py-4 bg-white border border-slate-100 rounded-full flex items-center gap-3.5 shadow-sm hover:shadow-md hover:border-slate-200/60 transition-all duration-300"
            >
              {/* Green Dot indicator */}
              <span className="w-2 h-2 rounded-full bg-[#3cd882] shrink-0"></span>

              {/* Text metadata */}
              <div className="flex flex-col pr-2">
                <span className="text-sm font-bold text-slate-800 font-sans leading-tight">
                  {badge.name}
                </span>
                <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase leading-none mt-1">
                  {badge.status}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
