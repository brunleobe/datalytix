import { Hero } from '../components/Hero';
import { InfoSection } from '../components/InfoSection';
import { ServicesSection } from '../components/ServicesSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { PartnersSection } from '../components/PartnersSection';

export function Home() {
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
