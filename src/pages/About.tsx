import { useEffect } from 'react';
import { WhoWeAreSection } from '../components/WhoWeAreSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { PartnersSection } from '../components/PartnersSection';

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="bg-[#05120a] min-h-screen">
      {/* Premium Hero Header */}
      <section className="relative py-20 md:py-28 overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(5, 18, 10, 0.95) 0%, rgba(10, 25, 15, 0.95) 100%)' }}>
        {/* Decorative background grid and shapes */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px),linear-gradient(to_bottom,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3cd882]/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#3cd882]/30 bg-[#3cd882]/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#3cd882] animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#3cd882] uppercase font-mono">
              About Us
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-3xl mx-auto">
            Simplifying Complex IT Problems
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Datalytix NG is a premier technology solutions delivery partner. We deliver world-class infrastructure, replication, analytics, and messaging systems designed to keep operations resilient.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <WhoWeAreSection />
      
      {/* Why Choose Us & Client Reviews */}
      <WhyChooseUsSection />

      {/* Partners alignment */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl text-center mb-6">
          <p className="text-[#16a34a] font-bold tracking-widest uppercase text-xs">Our Technology Partners</p>
          <h2 className="text-2xl font-bold text-slate-800 mt-2">Certified across leading industry providers</h2>
        </div>
        <PartnersSection />
      </div>
    </div>
  );
}
