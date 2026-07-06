import { useEffect, useRef, useState } from 'react';

function useCountUp(target: number, duration = 1800, started = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let startTime: number | null = null;

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOutQuart(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  started,
  delay,
}: {
  value: string;
  suffix: string;
  label: string;
  started: boolean;
  delay: number;
}) {
  const [delayedStart, setDelayedStart] = useState(false);
  const numericTarget = parseInt(value, 10);
  const count = useCountUp(numericTarget, 1800, delayedStart);

  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setDelayedStart(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  return (
    <div className="flex flex-col">
      {/* Green Divider */}
      <div className="w-full h-[1.5px] bg-[#3cd882] mb-8"></div>

      {/* Stat Value */}
      <div className="text-[0.98rem] md:text-5xl font-bold text-white mb-2 font-sans tracking-tight">
        {delayedStart ? count : 0}
      </div>

      {/* Suffix */}
      {suffix ? (
        <div className="text-xl font-bold text-[#3cd882] mb-2 font-sans">
          {suffix}
        </div>
      ) : (
        <div className="text-xl font-bold text-transparent mb-2 select-none font-sans">
          &nbsp;
        </div>
      )}

      {/* Stat Label */}
      <div className="text-xs md:text-sm text-slate-400 leading-normal tracking-wide font-sans mt-1">
        {label}
      </div>
    </div>
  );
}

export function StatsSection() {
  const stats = [
    { value: '40', suffix: '+', label: 'Years combined experience' },
    { value: '3', suffix: '', label: 'OEM certifications held' },
    { value: '120', suffix: '+', label: 'Projects delivered' },
    { value: '11', suffix: '', label: 'Core competencies' },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#05120a] overflow-hidden"
      id="stats"
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">

        {/* Header Row */}
        <div className="mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span
              className="text-[0.78rem] font-normal tracking-[0.25em] text-[#44de7f] inline-flex items-center uppercase font-mono"
              style={{ fontFamily: "'IBM Plex Mono', ui-monospace, monospace", gap: '0.6em' }}
            >
              — By the Numbers
            </span>
          </div>
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Experience you can measure.
          </h2>
        </div>

        {/* Stats Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {stats.map((stat, idx) => (
            <StatCard
              key={idx}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              started={started}
              delay={idx * 120}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
