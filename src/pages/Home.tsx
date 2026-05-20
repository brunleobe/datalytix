import { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { InfoSection } from '../components/InfoSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { PartnersSection } from '../components/PartnersSection';

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
      <InfoSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PartnersSection />
    </>
  );
}
