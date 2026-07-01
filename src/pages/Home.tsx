import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { WhoWeAreSection } from '../components/WhoWeAreSection';
import { ServicesSection } from '../components/ServicesSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { DeliverySection } from '../components/DeliverySection';
import { OutcomeSection } from '../components/OutcomeSection';
import { CtaSection } from '../components/CtaSection';
import { PartnersSection } from '../components/PartnersSection';
import { ScrollReveal } from '../components/ScrollReveal';

export function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Delay slightly to ensure content is rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <ScrollReveal animation="fade-up">
        <PartnersSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <WhoWeAreSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <ServicesSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <IndustriesSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <DeliverySection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <OutcomeSection />
      </ScrollReveal>
      <ScrollReveal animation="fade-up">
        <CtaSection />
      </ScrollReveal>
    </>
  );
}

