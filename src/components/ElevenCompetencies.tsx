import { Link } from 'react-router-dom';

export function ElevenCompetencies() {
  return (
    <section className="py-20 md:py-28 bg-[#f8fafc]">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-[#16a34a]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#16a34a] uppercase font-mono">
              The Full List
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#05120a] leading-[1.15] tracking-tight max-w-lg font-sans">
            Eleven competencies,<br />
            one standard of<br />
            delivery.
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-[24px] overflow-hidden border border-slate-200 bg-white shadow-md">
          {[
            { num: '01', title: 'Data Management & Replication', desc: 'Accurate, available data' },
            { num: '02', title: 'Business Intelligence & Analytics', desc: 'Insight that drives action' },
            { num: '03', title: 'Data Warehousing', desc: 'Scale & consistency' },
            { num: '04', title: 'Networking', desc: 'Connected by design' },
            { num: '05', title: 'High Availability', desc: 'Always on' },
            { num: '06', title: 'Disaster Recovery', desc: 'Continuity assured' },
            { num: '07', title: 'Unified Messaging & Comms', desc: 'One conversation' },
            { num: '08', title: 'Advanced Infrastructure', desc: 'Built to last' },
            { num: '09', title: 'Enterprise Resource Planning', desc: 'Run the business' },
            { num: '10', title: 'Shared Services', desc: 'Lower overhead' },
            { num: '11', title: 'Consulting Services', desc: 'Strategy first' },
          ].map((item, index) => {
            const borderRightClass = index % 2 === 0 ? 'md:border-r border-slate-100' : '';
            const borderBottomClass = index < 10 
              ? 'border-b border-slate-100' 
              : index === 10 
                ? 'border-b md:border-b-0 border-slate-100' 
                : 'border-b-0';
            
            return (
              <div 
                key={index} 
                className={`flex items-center justify-between p-6 sm:p-8 transition-all duration-300 bg-white hover:bg-[#05120a] group cursor-default ${borderRightClass} ${borderBottomClass}`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <span className="text-xs font-bold text-[#16a34a] font-mono shrink-0 transition-colors duration-300 group-hover:text-[#3cd882]">
                    {item.num}
                  </span>
                  <span className="font-bold text-[#05120a] text-sm sm:text-base truncate transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </span>
                </div>
                <span className="text-slate-400 text-xs sm:text-sm font-sans shrink-0 pl-4 font-medium transition-colors duration-300 group-hover:text-slate-400">
                  {item.desc}
                </span>
              </div>
            );
          })}

          {/* CTA Cell */}
          <Link 
            to="/contact" 
            className="flex items-center justify-between p-6 sm:p-8 bg-[#05120a] hover:bg-[#0c2518] transition-colors duration-300 group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <span className="text-[#3cd882] font-bold text-lg leading-none group-hover:translate-x-1 transition-transform duration-300">→</span>
              <span className="text-white font-extrabold text-sm sm:text-base">Talk to an expert</span>
            </div>
            <span className="text-[#3cd882]/85 text-xs font-bold tracking-wider font-mono">Get in touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
