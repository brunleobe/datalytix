import { Link } from 'react-router-dom';

export function ConsultationCta() {
  return (
    <section className="py-20 md:py-28 bg-[#f4f7f9] scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div
          className="relative rounded-[32px] overflow-hidden text-center border border-white/5 px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-24"
          style={{
            color: '#fafafa',
            backgroundColor: '#0a0d0c',
            boxShadow: '0 30px 60px rgba(10, 13, 19, 0.3)'
          }}
        >
          {/* Single glow layer, centered behind subtitle/button area */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[70%] pointer-events-none rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(60, 216, 130, 0.28) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6">
              <span className="w-6 h-[1.5px]" style={{ backgroundColor: 'rgba(60, 216, 130, 0.6)' }}></span>
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase font-mono"
                style={{ color: 'rgba(60, 216, 130, 0.8)' }}
              >
                Let's talk
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight max-w-3xl">
              Find the right solution <br className="hidden md:inline" /> for your challenge.
            </h2>

            {/* Subtitle */}
            <p className="text-[#cfd9d3] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10 opacity-90">
              Book a complimentary consultation and we'll map the fastest route to <br className="hidden md:inline" /> the outcome you need.
            </p>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 group"
              style={{
                backgroundColor: '#3cd882',
                color: '#0a0f0d',
                boxShadow: '0 0 40px rgba(60, 216, 130, 0.5)',
              }}
            >
              Book a consultation <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
