import { Check } from 'lucide-react';

interface ServiceCategory {
  title: string;
  items: string[];
}

export function ServicesSection() {
  const services: ServiceCategory[] = [
    {
      title: 'Network Solutions',
      items: [
        'Unified Communication',
        'Business Process Management',
        'IT Consulting & Outsourcing',
        'Content Management',
        'Access Control',
        'Video Surveillance',
      ],
    },
    {
      title: 'Infrastructure Solution',
      items: [
        'Data Centre Solution',
        'IT Service Management',
        'It Operations Management Solution',
        'Converged Platforms and Storage Solution',
        'Business Enterprise Software',
        'Business Intelligence & Analytics Solution',
        'Data Management & Real Time Replication solution',
        'IT Automation Solution',
      ],
    },
    {
      title: 'Security Solution',
      items: [
        'Network Access Control',
        'Unified Threat Management Solution',
        'Multifactor Authentication',
        'Encryption',
        'Endpoint and Email Security',
        'DNS Security',
      ],
    },
  ];

  return (
    <section id="what-we-do" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-semibold text-slate-800 mb-10 tracking-wide text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#46b5ca] p-10 text-white flex flex-col shadow-sm">
              <h3 className="text-2xl font-bold mb-8 font-serif tracking-wide">
                {service.title}
              </h3>
              <ul className="space-y-5">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start text-base">
                    <Check size={22} className="text-slate-900 mr-4 shrink-0" strokeWidth={3} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
