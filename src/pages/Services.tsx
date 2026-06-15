import { useEffect } from 'react';
import { ServicesHero } from '../components/ServicesHero';
import { CompetencyDetailedList } from '../components/CompetencyDetailedList';
import { ElevenCompetencies } from '../components/ElevenCompetencies';
import { EngagementModels } from '../components/EngagementModels';
import { DeliverySection } from '../components/DeliverySection';
import { OutcomeSection } from '../components/OutcomeSection';
import { CtaSection } from '../components/CtaSection';

export function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="bg-[#05120a] min-h-screen">
      {/* Premium Hero Header */}
      <ServicesHero />

      {/* Alternating detailed competency sections */}
      <CompetencyDetailedList />

      {/* Eleven Competencies List */}
      <ElevenCompetencies />

      {/* Engagement Models */}
      <EngagementModels />

      {/* Methodology Section */}
      <DeliverySection />

      {/* Outcome Section */}
      <OutcomeSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
}
