import { Link } from 'react-router-dom';

export function ServicesHero() {
  return (
    <section className="-mt-16 relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#05120a]">
      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,rgba(60,216,130,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,216,130,0.12)_1px,transparent_1px)] bg-[size:40px_40px]"
        style={{
          maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
        }}
      />

      {/* Right Radial Green Glow */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(60, 216, 130, 0.15) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-left">
        {/* Breadcrumbs */}
        <div className="text-[10px] md:text-xs tracking-[0.25em] text-slate-500 font-mono mb-8 uppercase flex items-center gap-2">
          <Link to="/" className="hover:text-[#3cd882] transition-colors">Home</Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">Services</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-extrabold text-white mb-8 leading-[1.1] tracking-tight max-w-4xl font-sans">
          Services that span the <span className="text-[#3cd882]">full</span> <br className="hidden md:inline" />
          <span className="text-[#3cd882]">data lifecycle.</span>
        </h1>
        <p className="text-sm sm:text-base md:text-[17px] text-slate-400 max-w-2xl leading-relaxed font-sans font-medium">
          Eleven core competencies, one delivery standard. We design, build,
          deploy and support the enterprise systems your business depends on —
          vendor-neutral and outcome-led.
        </p>
      </div>
    </section>
  );
}
