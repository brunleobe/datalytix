export function ContactHero() {
  return (
    <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#05120a]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px),linear-gradient(to_bottom,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)]" />
      {/* Right-side green glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] bg-[#3cd882]/15 rounded-full blur-[100px] sm:blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-8 font-mono">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="text-slate-700">/</span>
          <span className="text-slate-400">Contact</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight max-w-3xl">
          Let's start a <span className="text-[#3cd882]">conversation.</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
          Tell us about the challenge you're solving. We'll come back within one
          business day with the right people and a clear next step.
        </p>
      </div>
    </section>
  );
}
