import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animated line chart path helper
function SparkLine() {
  return (
    <svg viewBox="0 0 200 50" className="w-full h-10" fill="none">
      <defs>
        <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 38 C20 38, 30 20, 50 22 C70 24, 80 35, 100 30 C120 25, 130 10, 150 14 C170 18, 185 28, 200 24"
        stroke="#4ade80"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        className="hero-spark-line"
      />
      <path
        d="M0 38 C20 38, 30 20, 50 22 C70 24, 80 35, 100 30 C120 25, 130 10, 150 14 C170 18, 185 28, 200 24 L200 50 L0 50 Z"
        fill="url(#sparkGrad)"
      />
    </svg>
  );
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle particle / dot-grid effect on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: { x: number; y: number; r: number; speed: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.3 + 0.1,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.005;
      dots.forEach((dot) => {
        dot.y -= dot.speed * 0.4;
        if (dot.y < 0) dot.y = canvas.height;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(74, 222, 128, ${dot.alpha + 0.1 * Math.sin(t + dot.x)})`;
        ctx.fill();
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 80% 10%, rgba(22,101,52,0.55) 0%, rgba(5,18,10,1) 60%)',
        backgroundColor: '#05120a',
        minHeight: 'calc(100vh - 64px)',
      }}
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      />

      {/* Diagonal hatch overlay (right side card feel) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(74,222,128,0.025) 0px,
            rgba(74,222,128,0.025) 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="container mx-auto px-6 lg:px-10 relative z-10 flex flex-col lg:flex-row items-center gap-12 py-20 lg:py-28">
        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            style={{ color: 'rgba(74,222,128,0.7)' }}
          >
            — IT Solutions Delivery · Lagos, Nigeria
          </p>

          {/* Headline */}
          <h1 className="font-extrabold leading-[1.05] text-white mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}>
            Complex IT<br />
            problems,<br />
            engineered<br />
            into{' '}
            <span style={{ color: '#4ade80' }}>simple<br />solutions.</span>
          </h1>

          {/* Description */}
          <p className="text-white/60 text-base leading-relaxed max-w-md mb-10">
            Datalytix NG is an information-technology solutions delivery company certified across Oracle, Microsoft and
            Thomson Reuters — turning enterprise data into clarity, confidence and measurable outcomes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
              style={{
                background: '#3cd882',
                color: '#05120a',
                boxShadow: '0 0 24px rgba(60, 216, 130, 0.45)',
              }}
            >
              Explore our services <ArrowRight size={16} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm text-white/80 border border-white/20 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Why Datalytix
            </Link>
          </div>

          {/* Stats / Metrics */}
          <div className="mt-16 grid grid-cols-3 gap-6 md:gap-8 max-w-lg">
            <div>
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                40<span className="text-[#3cd882]">+</span>
              </div>
              <div className="text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                Years Combined Experience
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                3
              </div>
              <div className="text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                OEM Certifications
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-2 font-mono">
                99.9<span className="text-[#3cd882]">%</span>
              </div>
              <div className="text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                Delivery Uptime
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN – Dashboard Card ── */}
        <div className="flex-1 flex justify-center lg:justify-end w-full max-w-lg">
          <div className="relative w-full max-w-md">

            {/* Floating badge */}
            <div
              className="absolute -top-4 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold shadow-2xl"
              style={{ background: '#fff', color: '#111' }}
            >
              <span className="w-4 h-4 rounded-sm bg-[#4ade80] flex items-center justify-center">
                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5" fill="none">
                  <polyline points="1,7 4,4 6,6 9,2" stroke="#05120a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              BI &amp; Analytics live
            </div>

            {/* Main card */}
            <div
              className="rounded-2xl p-6 pt-10 overflow-hidden"
              style={{
                background: 'rgba(10,30,18,0.85)',
                border: '1px solid rgba(74,222,128,0.15)',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(74,222,128,0.1)',
              }}
            >
              {/* Hatch pattern inside card */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    rgba(74,222,128,0.04) 0px,
                    rgba(74,222,128,0.04) 1px,
                    transparent 1px,
                    transparent 10px
                  )`,
                }}
              />

              {/* Metric */}
              <div className="relative z-10">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-1">Data Throughput</p>
                <div className="flex items-end gap-3 mb-4">
                  <span className="text-5xl font-extrabold text-white leading-none">2.4</span>
                  <span className="text-2xl font-bold text-white/60 mb-1">TB/s</span>
                  <span className="ml-auto flex items-center gap-1 text-xs font-semibold text-[#4ade80]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4ade80] animate-pulse" />
                    LIVE
                  </span>
                </div>

                {/* Sparkline */}
                <div className="mb-5">
                  <SparkLine />
                </div>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  {['PRETO', 'DATA CENTER', 'SERVER ROOM'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold tracking-widest uppercase text-white/40"
                    >
                      {tag} {tag !== 'SERVER ROOM' && <span className="text-white/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow beneath card */}
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-16 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse, rgba(74,222,128,0.25) 0%, transparent 70%)',
                filter: 'blur(12px)',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero-draw {
          from { stroke-dashoffset: 400; }
          to { stroke-dashoffset: 0; }
        }
        .hero-spark-line {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          animation: hero-draw 2.4s ease forwards;
        }
      `}</style>
    </section>
  );
}
