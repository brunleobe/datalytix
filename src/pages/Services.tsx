import { useEffect } from 'react';
import { ServicesHero } from '../components/ServicesHero';
import { CompetencyDetailedList } from '../components/CompetencyDetailedList';
import { ElevenCompetencies } from '../components/ElevenCompetencies';
import { EngagementModels } from '../components/EngagementModels';
import { ConsultationCta } from '../components/ConsultationCta';
import { ScrollReveal } from '../components/ScrollReveal';

export function Services() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, []);

  return (
    <div className="bg-[#05120a] min-h-screen">
      {/* Premium Hero Header */}
      <ServicesHero />

      {/* Alternating detailed competency sections */}
      <ScrollReveal animation="fade-up">
        <CompetencyDetailedList />
      </ScrollReveal>

      {/* Eleven Competencies List */}
      <ScrollReveal animation="fade-up">
        <ElevenCompetencies />
      </ScrollReveal>

      {/* Engagement Models */}
      <ScrollReveal animation="fade-up">
        <EngagementModels />
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal animation="fade-up">
        <ConsultationCta />
      </ScrollReveal>

    </div>
  );
}
