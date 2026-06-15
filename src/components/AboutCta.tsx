import { Link } from 'react-router-dom';

export function AboutCta() {
  return (
    <section className="pb-20 md:pb-28 bg-white scroll-mt-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div
          className="relative rounded-[32px] overflow-hidden text-center border border-white/5"
          style={{
            padding: '61.44px',
            fontSize: '16.32px',
            color: '#fafafa',
            backgroundColor: '#0a0d0c',
            boxShadow: '0 30px 60px rgba(10, 13, 19, 0.3)',
          }}
        >
          {/* Radial glow centered behind content */}
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
                Work with us
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-[1.15] tracking-tight max-w-3xl">
              Let's solve your next <br className="hidden md:inline" /> challenge together.
            </h2>

            {/* Subtitle */}
            <p className="text-[#cfd9d3] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-10 opacity-90">
              Bring us the problem. We'll bring the experience, the certifications and the partner mindset.
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
              Get in touch <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
