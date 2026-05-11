import { useState } from 'react';
import { Quote, User, Plus, Minus } from 'lucide-react';

interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

export function WhyChooseUsSection() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordions: AccordionItem[] = [
    {
      id: 1,
      title: 'Recognised and Certified',
      content:
        "We are an Information Technology Solutions Delivery Company certified across multiple OEM's such as Oracle, Microsoft, Thomson Reuters and much more.",
    },
    {
      id: 2,
      title: 'Awesome Proficiency',
      content: 'We are a highly proficient company with specialities in Data Warehousing, Business Intelligence & Analytics, Networking, Disaster Recovery, Data Management & Replication, High Availability, Enterprise Resource Planning, Consulting Services.',
    },
    {
      id: 3,
      title: 'Vast Experience',
      content: 'Our experienced team of consultants will capture, analyze, predict and visualize information to help you solve your most critical business challenges.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Column: Testimonial */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 tracking-wide">
              What our customers say?
            </h2>
            <div className="bg-slate-50 p-8 rounded-sm relative">
              <Quote
                size={48}
                className="text-slate-200 fill-slate-200 absolute top-4 left-4"
              />
              <p className="text-[#4CBAD1] text-base leading-relaxed mb-6 relative z-10 pl-6">
                We are an Information Technology Solutions Delivery Company certified across
                multiple OEM's such as Oracle, Microsoft, Thomson Reuters etc. with
                competencies in Business Intelligence and Analytics, Data Warehousing, Unified
                Messaging and Communication, Advanced infrastructure and Shared services
                solutions. Our Strength lies in our vast experience in the industry with combined
                experience of over 40 years helping us bring provide simple solutions to complex
                IT problems.
              </p>
              <div className="flex items-center text-slate-500 pl-6 text-base">
                <User size={18} className="mr-2" />
                <span className="font-semibold text-slate-700">Freesiatech</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-8 tracking-wide">
              Why choose Datalytix NG?
            </h2>
            <div className="space-y-2">
              {accordions.map((item) => {
                const isOpen = openAccordion === item.id;
                return (
                  <div key={item.id} className="bg-slate-50">
                    <button
                      className="w-full flex items-center justify-between p-4 focus:outline-none"
                      onClick={() => toggleAccordion(item.id)}
                    >
                      <div className="flex items-center space-x-4">
                        <span
                          className={`font-bold text-base ${isOpen ? 'text-[#4CBAD1]' : 'text-slate-800'
                            }`}
                        >
                          {item.id}
                        </span>
                        <span
                          className={`font-semibold text-base ${isOpen ? 'text-[#4CBAD1]' : 'text-slate-700'
                            }`}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="text-slate-400">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pl-12 text-base text-slate-500 leading-relaxed">
                        {item.content}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
