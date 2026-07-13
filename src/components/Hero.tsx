import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';


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
      className="-mt-16 relative w-full overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 80% 10%, rgba(22,101,52,0.55) 0%, rgba(5,18,10,1) 60%)',
        backgroundColor: '#05120a',
        minHeight: '100vh',
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

      <div className="wrap relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-12 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-48 lg:pb-28">
        {/* ── LEFT COLUMN ── */}
        <div className="flex-1 w-full max-w-2xl">
          {/* Eyebrow */}
          <p
            className="text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            style={{
              color: '#19874d',
              fontFamily: 'IBM Plex Mono, ui-monospace, monospace',
              fontSize: '0.78rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              margin: '0',



            }}
          >
            — IT Solutions Delivery · Lagos, Nigeria
          </p>

          {/* Headline */}
          <h1
            className="font-extrabold leading-[1.05]"
            style={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              fontSize: 'clamp(3rem, 7vw, 6.5rem)',
              color: '#f8fafd',
              margin: '22.4px 0px 25.6px',
            }}
          >
            Complex IT<br />
            problems,<br />
            engineered<br />
            into{' '}
            <span style={{ color: '#4ade80' }}>simple<br />solutions.</span>
          </h1>

          {/* Description */}
          <p
            className="text-white/60 text-base leading-relaxed max-w-md mb-10"
            style={{
              fontFamily: '"Space Grotesk", system-ui, sans-serif',
              fontSize: ' clamp(1.08rem, 1.4vw, 1.35rem)',
              color: '#b9bec6',
              margin: '22.4px 0px 25.6px',
              maxWidth: '46ch',
            }}
          >
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
          <div
            className="mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg"
            style={{
              color: '#fdf9fa',
              fontFamily: '"Instrument Sans", system-ui, sans-serif',

            }}>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                40<span className="text-[#3cd882]">+</span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                Years Combined Experience
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                3
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                OEM Certifications
              </div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white mb-2 font-mono">
                99.9<span className="text-[#3cd882]">%</span>
              </div>
              <div className="text-[9px] sm:text-[10px] font-semibold tracking-widest text-white/40 uppercase leading-relaxed font-mono">
                Delivery Uptime
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT COLUMN – Dashboard Card ── */}
        <div className="hidden lg:flex flex-1 justify-end w-full max-w-lg">
          <div className="relative w-full max-w-[480px]" style={{ paddingBottom: '100px' }}>

            {/* ── Big background card with hatch ── */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                height: '420px',
                background: 'rgba(8, 24, 14, 0.9)',
                border: '1px solid rgba(74,222,128,0.12)',
                boxShadow: '0 40px 100px rgba(0,0,0,0.55)',
              }}
            >
              {/* Data Center Image */}
              <img
                src="/datacenter_hero.png"
                alt="Photo · Data Center / Server Room"
                className="absolute inset-0 w-full h-full object-cover opacity-60 transition-opacity duration-700 hover:opacity-85"
              />

              {/* Dark gradient overlay to blend image edges */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, transparent 20%, rgba(8, 24, 14, 0.85) 100%)',
                }}
              />

              {/* Dense diagonal hatch fill */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    -45deg,
                    rgba(74,222,128,0.07) 0px,
                    rgba(74,222,128,0.07) 1px,
                    transparent 1px,
                    transparent 8px
                  )`,
                }}
              />
            </div>

            {/* ── Floating badge – top right ── */}
            <div
              className="absolute z-20 flex items-center gap-3 shadow-xl"
              style={{
                top: '24px',
                right: '-16px',
                background: '#ffffff',
                borderRadius: '14px',
                padding: '10px 18px 10px 10px',
              }}
            >
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#3cd882' }}
              >
                <svg viewBox="0 0 16 16" width="18" height="18" fill="none">
                  <path d="M8 12V4M4 8l4-4 4 4" stroke="#05120a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{ fontWeight: 600, fontSize: '0.9rem', color: '#0d1117', whiteSpace: 'nowrap' }}>
                BI &amp; Analytics live
              </span>
            </div>

            {/* ── Metric card – overlapping bottom-left ── */}
            <div
              className="absolute z-20 rounded-2xl overflow-hidden"
              style={{
                bottom: '8px',
                left: '-20px',
                width: '300px',
                background: 'rgba(8, 18, 12, 0.97)',
                border: '1px solid rgba(74,222,128,0.14)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.5)',
                padding: '20px 22px 18px',
              }}
            >
              {/* Label row */}
              <div className="flex items-center justify-between mb-3">
                <span style={{
                  fontFamily: 'IBM Plex Mono, monospace',
                  fontSize: '0.65rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)',
                  fontWeight: 500,
                }}>
                  Data Throughput
                </span>
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#3cd882' }} />
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1 mb-4">
                <span style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>2.4</span>
                <span style={{ fontSize: '1.6rem', fontWeight: 700, color: '#3cd882', lineHeight: 1 }}> TB/s</span>
              </div>

              {/* Sparkline */}
              <svg viewBox="0 0 260 52" className="w-full" fill="none">
                <defs>
                  <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3cd882" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#3cd882" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 C30 40, 45 28, 70 26 C95 24, 110 36, 135 30 C160 24, 175 10, 200 13 C225 16, 245 26, 260 22"
                  stroke="#3cd882" strokeWidth="2.5" strokeLinecap="round" fill="none"
                  className="hero-spark-line"
                />
                <path
                  d="M0 40 C30 40, 45 28, 70 26 C95 24, 110 36, 135 30 C160 24, 175 10, 200 13 C225 16, 245 26, 260 22 L260 52 L0 52 Z"
                  fill="url(#sg2)"
                />
              </svg>
            </div>

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
