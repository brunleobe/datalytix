import { Database, BarChart3, Layers, MessageSquare, Monitor, Settings } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Data Management & Replication',
      description: 'Reliable ingestion, replication and governance that keep your data accurate, available and trusted.',
      icon: Database,
    },
    {
      number: '02',
      title: 'Business Intelligence & Analytics',
      description: 'Dashboards, models and reporting that turn raw operational data into decisions leaders can act on.',
      icon: BarChart3,
    },
    {
      number: '03',
      title: 'Data Warehousing',
      description: 'Scalable warehouses and pipelines engineered for performance, consistency and long-term value.',
      icon: Layers,
    },
    {
      number: '04',
      title: 'Unified Messaging & Comms',
      description: 'Integrated communication platforms that connect teams across channels, sites and devices.',
      icon: MessageSquare,
    },
    {
      number: '05',
      title: 'Advanced Infrastructure',
      description: 'Networking, high availability and disaster recovery designed to keep operations resilient.',
      icon: Monitor,
    },
    {
      number: '06',
      title: 'Shared Services & Consulting',
      description: 'ERP, managed support and advisory that retire technical debt and unlock new efficiency.',
      icon: Settings,
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#f4f7f9] scroll-mt-24" id="what-we-do">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-6 h-[2px] bg-[#3cd882]"></span>
              <span className="text-xs font-bold tracking-[0.25em] text-[#3cd882] uppercase font-mono">
                What We Do
              </span>
            </div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight">
              Competencies that span the full data lifecycle.
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pt-10">
            {/* Description */}
            <p className="text-slate-600 text-base md:text-[17px] leading-relaxed font-sans">
              From the database to the boardroom — we design, build, deploy and support the systems your business runs on.
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col group"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl mb-3 transition-colors duration-300 group-hover:bg-[#3cd882]">
                  <Icon size={20} className="text-slate-600 group-hover:text-[#05120a] transition-colors duration-300" />
                </div>

                {/* Number */}
                <span className="text-xs font-bold text-[#3cd882] font-mono mb-3 block">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#05120a] mb-3 leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
