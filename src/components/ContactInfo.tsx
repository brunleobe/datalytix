export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">

      {/* Email Us */}
      <div className="bg-white rounded-xl border border-slate-100 px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Email Us</p>
        <a href="mailto:kay@datalytixng.com" className="text-sm font-bold text-slate-800 hover:text-[#3cd882] transition-colors">
          kay@datalytixng.com
        </a>
      </div>

      {/* Call Us */}
      <div className="bg-white rounded-xl border border-slate-100 px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Call Us</p>
        <a href="tel:+2348034174300" className="text-sm font-bold text-slate-800 hover:text-[#3cd882] transition-colors">
          +234 (0) 803 417 4300
        </a>
      </div>

      {/* Visit Us */}
      <div className="bg-white rounded-xl border border-slate-100 px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Visit Us</p>
        <p className="text-sm font-bold text-slate-800">11 Kudirat Abiola Way, Oregun, Ikeja, Lagos, Nigeria</p>
      </div>

      {/* Office Hours */}
      <div className="bg-white rounded-xl border border-slate-100 px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-4">Office Hours</p>
        <div className="space-y-3">
          {[
            { day: 'Monday – Friday', hours: '8:00 – 17:00' },
            { day: 'Saturday', hours: 'By appointment' },
            { day: 'Sunday', hours: 'Closed' },
          ].map(({ day, hours }) => (
            <div key={day} className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-sans">{day}</span>
              <span className={`text-xs font-bold font-sans ${hours === 'Closed' ? 'text-slate-400' : 'text-slate-700'}`}>
                {hours}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Map Placeholder — links to Google Maps */}
      <a
        href="https://www.google.com/maps/search/?api=1&query=11+Kudirat+Abiola+Way%2C+Oregun%2C+Ikeja%2C+Lagos%2C+Nigeria"
        target="_blank"
        rel="noopener noreferrer"
        className="relative rounded-xl overflow-hidden h-44 flex items-end p-5 cursor-pointer hover:opacity-90 transition-opacity duration-300 group"
        style={{
          background: 'linear-gradient(135deg, #07170c 0%, #0d2717 100%)',
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(60,216,130,0.035) 0px,
            rgba(60,216,130,0.035) 1.5px,
            transparent 1.5px,
            transparent 12px
          )`,
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-150"
          style={{ background: 'radial-gradient(ellipse at 60% 60%, rgba(60,216,130,0.14) 0%, transparent 70%)' }}
        />
        {/* Label badge */}
        <div className="relative z-10 flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3cd882] animate-pulse" />
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/70 uppercase font-mono">
            Map · Lagos Office Location
          </span>
        </div>
        {/* Open-in-maps hint */}
        <span className="absolute top-4 right-4 text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-white/30 group-hover:text-[#3cd882]/70 transition-colors duration-300">
          Open in Maps ↗
        </span>
      </a>

    </div>
  );
}
