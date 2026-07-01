import { useEffect } from 'react';
import { ContactHero } from '../components/ContactHero';
import { ContactForm } from '../components/ContactForm';
import { ContactInfo } from '../components/ContactInfo';
import { WhatHappensNext } from '../components/WhatHappensNext';
import { ScrollReveal } from '../components/ScrollReveal';

export function Contact() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* ── Premium Dark Hero ── */}
      <ContactHero />

      {/* ── 2-Column Body ── */}
      <ScrollReveal animation="fade-up">
        <section className="py-16 md:py-24 bg-[#f4f7f9]" id="contact-form">
          <div className="container mx-auto px-5 sm:px-6 lg:px-12 max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* ── LEFT: Form Card ── */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* ── RIGHT: Info + Map Panel ── */}
              <div className="lg:col-span-5">
                <ContactInfo />
              </div>

            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ── What Happens Next Section ── */}
      <ScrollReveal animation="fade-up">
        <WhatHappensNext />
      </ScrollReveal>
    </div>
  );
}

