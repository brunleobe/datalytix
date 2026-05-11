import type { ReactNode } from 'react';
import { Users, Target, RefreshCw } from 'lucide-react';

interface InfoSectionItem {
  title: string;
  icon: ReactNode;
  content: string;
}

export function InfoSection() {
  const sections: InfoSectionItem[] = [
    {
      title: 'Who We Are',
      icon: <Users size={32} className="text-primary mb-4 mx-auto" />,
      content:
        "We are an Information Technology Solutions Delivery Company certified across multiple OEM's such as Oracle, Microsoft and others, with competencies in Data Management, Business Intelligence and Analytics, Data Warehousing, Unified Messaging and Communication, Advanced Infrastructure and Shared services solutions. Our Strength lies in our vast experience in the Industry with combined experience of over 40 years helping us provide simple solutions to complex IT problems.",
    },
    {
      title: 'Our Approach',
      icon: <Target size={32} className="text-primary mb-4 mx-auto" />,
      content:
        "At Datalytix NG, we are currently updating and researching knowledge on products and services to ensure we are step ahead of the competition in providing complete solution to suit the business model of our clients. We are dedicated to supporting our client's business with superior technical and consultative approach resulting in efficient and effective solutions to their information technology needs. We utilize a three phased approach of Analysis, Design and Implementation to align technology with achievement of the strategic operational objectives",
    },
    {
      title: 'Our Process',
      icon: <RefreshCw size={32} className="text-primary mb-4 mx-auto" />,
      content:
        "All project contracted to Datalytix NG goes through a comprehensive project management cycle that has at its core continuous communication with the client to ensure that expectation are managed and deliverables achieved within time and on budget. We are a company that holds integrity as a core value and this attribute is demonstrated by our engineers on site and backend office support.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <div key={index} className="text-center px-2">
              {/* Icon Placeholder (In original these were small graphics) */}
              <div className="flex justify-center h-16 items-center">
                {section.icon}
              </div>

              <h2 className="text-xl font-bold text-secondary mb-6 tracking-wide">
                {section.title}
              </h2>

              <p className="text-sm text-slate-500 leading-relaxed text-justify">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
