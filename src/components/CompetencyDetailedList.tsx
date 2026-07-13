interface BulletPoint {
  boldText: string;
  normalText: string;
}

interface CompetencySectionProps {
  indexStr: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: BulletPoint[];
  gradientFrom: string;
  gradientTo: string;
  floatingLabel: string;
  floatingMetric: string;
  floatingMetricLabel: string;
  isImageLeft: boolean;
  image: string;
}

function CompetencyRow({
  eyebrow,
  title,
  description,
  bullets,
  gradientFrom,
  gradientTo,
  floatingLabel,
  floatingMetric,
  floatingMetricLabel,
  isImageLeft,
  image
}: CompetencySectionProps) {
  const graphicCol = (
    <div className="lg:col-span-5 flex items-center justify-center order-2 lg:order-none">
      <div
        className="relative w-full aspect-[4/3] max-w-md rounded-[32px] overflow-hidden flex items-center justify-center p-8 shadow-xl border border-slate-100/50 group cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
        }}
      >
        {/* Competency illustration image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply transition-all duration-700 group-hover:scale-105 group-hover:opacity-80 pointer-events-none"
        />
        {/* Hatch Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #000 0px,
              #000 1px,
              transparent 1px,
              transparent 12px
            )`,
          }}
        />

        {/* Soft Radial Ambient Highlight */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>

        {/* Floating Label (Bottom Left) */}
        <div className="absolute bottom-6 left-6 bg-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-[#16a34a] animate-pulse"></span>
          <span className="text-[10px] font-extrabold tracking-widest text-slate-700 font-mono">
            {floatingLabel}
          </span>
        </div>

        {/* Floating Metric Card (Bottom Right) */}
        <div className="absolute bottom-10 right-3 sm:right-6 bg-white px-3 sm:px-5 py-3 sm:py-4 rounded-2xl shadow-2xl border border-slate-100/60 flex flex-col gap-1 min-w-[110px] sm:min-w-[140px] animate-float-reverse">
          <span className="text-3xl font-black text-slate-800 leading-none">
            {floatingMetric}
          </span>
          <span className="text-[9px] font-bold tracking-wider text-slate-400 font-mono uppercase leading-tight">
            {floatingMetricLabel}
          </span>
        </div>
      </div>
    </div>
  );

  const textCol = (
    <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-none">
      {/* Eyebrow */}
      <div className="flex items-center gap-2.5 mb-5">
        <span className="w-6 h-[2px] bg-[#16a34a]"></span>
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
          {eyebrow}
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight mb-6 font-sans">
        {title}
      </h2>

      {/* Paragraph */}
      <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8 font-sans">
        {description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-4">
        {bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm md:text-base leading-relaxed">
            <span className="text-[#16a34a] font-bold text-lg leading-none mt-0.5">→</span>
            <span className="font-sans">
              <strong className="text-[#05120a] font-extrabold">{bullet.boldText}</strong> — {bullet.normalText}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-100 last:border-b-0">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {isImageLeft ? (
            <>
              {graphicCol}
              {textCol}
            </>
          ) : (
            <>
              {textCol}
              {graphicCol}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function CompetencyDetailedList() {
  const competenciesData: CompetencySectionProps[] = [
    {
      indexStr: '01',
      eyebrow: '01 - DATA & ANALYTICS',
      title: 'Data Management, BI & Analytics',
      description: 'We help you analyse, present and manage data so its full value is realised — turning operational records into the insight that drives decisions.',
      bullets: [
        {
          boldText: 'Data management & replication',
          normalText: 'accurate, available and governed data across systems.'
        },
        {
          boldText: 'Business intelligence',
          normalText: 'dashboards and reporting leaders actually use.'
        },
        {
          boldText: 'Advanced analytics',
          normalText: 'predictive models and risk assessment.'
        }
      ],
      gradientFrom: '#e2ece9',
      gradientTo: '#eef4f2',
      floatingLabel: 'PHOTO · ANALYST DASHBOARDS',
      floatingMetric: '68%',
      floatingMetricLabel: 'LESS TIME ON DATA PREP',
      isImageLeft: true,
      image: '/competency_analytics.png'
    },
    {
      indexStr: '02',
      eyebrow: '02 - STORAGE & PIPELINES',
      title: 'Data Warehousing & Pipelines',
      description: 'Scalable warehouses and automated pipelines engineered for performance, storage consistency, and long-term analytical value.',
      bullets: [
        {
          boldText: 'Cloud data warehousing',
          normalText: 'modern infrastructure setups on AWS, Azure, and Google Cloud.'
        },
        {
          boldText: 'ETL/ELT pipeline automation',
          normalText: 'resilient, self-healing data flows to ingest operational feeds.'
        },
        {
          boldText: 'Structured modeling',
          normalText: 'clean data tables designed for downstream analysis.'
        }
      ],
      gradientFrom: '#e0e7ff',
      gradientTo: '#f5f7ff',
      floatingLabel: 'DB · AUTOMATED SCHEDULING',
      floatingMetric: '99.9%',
      floatingMetricLabel: 'ETL PIPELINE UPTIME',
      isImageLeft: false,
      image: '/competency_pipeline.png'
    },
    {
      indexStr: '03',
      eyebrow: '03 - RESILIENCE & NETWORKS',
      title: 'Advanced Infrastructure & Comms',
      description: 'High-availability architecture, network design, disaster recovery drills, and unified communications built for resilient operations.',
      bullets: [
        {
          boldText: 'High availability clusters',
          normalText: 'redundant server environments and automated failovers.'
        },
        {
          boldText: 'Unified communications',
          normalText: 'platforms that connect operational teams across sites seamlessly.'
        },
        {
          boldText: 'Disaster recovery planning',
          normalText: 'automated snapshots and regular failback simulation testing.'
        }
      ],
      gradientFrom: '#e0f2fe',
      gradientTo: '#f0f9ff',
      floatingLabel: 'SRV · FAILOVER COMPLETED',
      floatingMetric: '< 5m',
      floatingMetricLabel: 'RECOVERY POINT OBJECTIVE',
      isImageLeft: true,
      image: '/competency_infrastructure.png'
    },
    {
      indexStr: '04',
      eyebrow: '04 - SHARED SERVICES & CONSULTING',
      title: 'Shared Services & ERP Consulting',
      description: 'Rollout advice, database engine updates, and certified ERP consulting designed to retire legacy tech debt and scale productivity.',
      bullets: [
        {
          boldText: 'ERP implementation advisory',
          normalText: 'expert setup and migration strategies for Oracle and Microsoft systems.'
        },
        {
          boldText: 'Managed IT administration',
          normalText: 'SLA-backed systems support, server updates, and tuning.'
        },
        {
          boldText: 'Technical debt modernization',
          normalText: 'gradual code rewrite, database optimization, and cloud scaling.'
        }
      ],
      gradientFrom: '#fae8ff',
      gradientTo: '#fdf4ff',
      floatingLabel: 'ERP · ORACLE INTEGRATION',
      floatingMetric: '-35%',
      floatingMetricLabel: 'TECH DEBT REDUCTION',
      isImageLeft: false,
      image: '/competency_erp.png'
    }
  ];

  return (
    <div className="bg-white">
      {competenciesData.map((section, idx) => (
        <CompetencyRow key={idx} {...section} />
      ))}
    </div>
  );
}
