export function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">

      {/* Email Us */}
      <div className="bg-white rounded-xl border-[1px] solid border-[#d5d8db] rounded-[18px] px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Email Us</p>
        <a
          href="mailto:kay@datalytixng.com"
          className="text-[1.2rem] font-[600] text-slate-800 hover:text-[#3cd882] transition-colors"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          kay@datalytixng.com
        </a>
      </div>

      {/* Call Us */}
      <div className="bg-white rounded-xl border-[1px] solid border-[#d5d8db] rounded-[18px] px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Call Us</p>
        <a
          href="tel:+2348034174300"
          className="text-[1.2rem] font-[600] text-slate-800 hover:text-[#3cd882] transition-colors"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          +234 (0) 803 417 4300
        </a>
      </div>

      {/* Visit Us */}
      <div className="bg-white rounded-xl border-[1px] solid border-[#d5d8db] rounded-[18px] px-6 py-5">
        <p className="text-[9px] font-bold tracking-[0.25em] uppercase text-[#3cd882] font-mono mb-1">Visit Us</p>
        <p
          className="text-[1.2rem] font-[600] text-slate-800"
          style={{ fontFamily: "'Space Grotesk', system-ui, sans-serif" }}
        >
          11 Kudirat Abiola Way, Oregun, Ikeja, Lagos, Nigeria
        </p>
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

      {/* Map Embed - Dark Style */}
      <div className="relative rounded-xl overflow-hidden h-44 border border-slate-100 shadow-sm group">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3812838965683!2d3.3643761749836154!3d6.599446893399066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93c52a0a2df3%3A0xaad579040fa781eb!2s11%20Kudirat%20Abiola%20Way%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1719149000000!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: 'grayscale(1) invert(0.9) contrast(1.2) brightness(0.9)'
          }}
          allowFullScreen={false}
          loading="lazy"
          title="Datalytix Lagos Office Location"
        ></iframe>

        {/* Label badge */}
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 bg-black/85 backdrop-blur-sm rounded-lg border border-white/10 pointer-events-none">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3cd882] animate-pulse" />
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/70 uppercase font-mono">
            Map · Lagos Office Location
          </span>
        </div>

        {/* Open-in-maps hint link */}
        <a
          href="https://www.google.com/maps/search/?api=1&query=11+Kudirat+Abiola+Way%2C+Oregun%2C+Ikeja%2C+Lagos%2C+Nigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-10 text-[9px] font-bold tracking-[0.2em] uppercase font-mono text-white/40 bg-black/60 backdrop-blur-sm px-2 py-1 rounded border border-white/10 hover:text-[#3cd882] transition-colors duration-300"
        >
          Open in Maps ↗
        </a>
      </div>

    </div>
  );
}
