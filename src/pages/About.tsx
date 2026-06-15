import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OurStorySection } from '../components/OurStorySection';
import { ValuesSection } from '../components/ValuesSection';
import { StatsSection } from '../components/StatsSection';
import { TeamSection } from '../components/TeamSection';
import { AccreditationSection } from '../components/AccreditationSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { PartnersSection } from '../components/PartnersSection';
import { AboutCta } from '../components/AboutCta';

export function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="bg-[#05120a] min-h-screen">
      {/* Premium Hero Header */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#05120a]">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0b2414_1px,transparent_1px),linear-gradient(to_bottom,#0b2414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_85%,transparent_100%)]"></div>

        {/* Glow on the Right */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#3cd882]/15 rounded-full blur-[130px] pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] text-slate-500 uppercase mb-8 font-mono">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-slate-700">/</span>
            <span className="text-slate-400">About</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl tracking-tight">
            We hold integrity at our core —<br className="hidden md:inline" /> and let our <span className="text-[#3cd882]">work prove it.</span>
          </h1>

          <p className="text-base md:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Datalytix NG is an <span className="text-slate-200 font-medium">information-technology solutions delivery company</span> with over 40 years of combined experience, helping organisations bring simple solutions to complex IT problems.
          </p>
        </div>
      </section>

      {/* Main Sections */}
      <OurStorySection />

      {/* Values Section */}
      <ValuesSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Team Section */}
      <TeamSection />

      {/* Accreditation Section */}
      <AccreditationSection />

      {/* About CTA Section */}
      <AboutCta />

    </div>
  );
}
