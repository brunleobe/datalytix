import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Partner {
  name: string;
  id: number;
}

export function PartnersSection() {
  const [currentPage, setCurrentPage] = useState(0);

  const partners: Partner[] = [
    { name: 'COMMVAULT', id: 1 },
    { name: 'Symantec', id: 2 },
    { name: 'AVG', id: 3 },
    { name: 'hp', id: 4 },
    { name: 'McAfee', id: 5 },
    { name: 'nimble storage', id: 6 },
    { name: 'RISING', id: 7 },
    { name: 'vmware', id: 8 },
    { name: 'Microsoft', id: 9 },
    { name: 'IMS', id: 10 },
    { name: 'eset', id: 11 },
    { name: 'Double-Take', id: 12 },
    { name: 'Cyberoam', id: 13 },
    { name: 'Bit9', id: 14 },
    { name: 'CISCO', id: 15 },
    { name: 'Novell', id: 16 },
    { name: 'FireEye', id: 17 },
    { name: 'RSA', id: 18 },
    { name: 'Bitdefender', id: 19 },
    { name: 'avast', id: 20 },
    { name: 'KASPERSKY', id: 21 },
    { name: 'Norton', id: 22 },
    { name: 'panda', id: 23 },
    { name: 'ORACLE', id: 24 },
    { name: 'TATA COMMUNICATIONS', id: 25 },
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visiblePartners = partners.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-16 bg-white border-t border-slate-100 mt-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with Title and Nav Buttons */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-semibold text-slate-700 tracking-wide">
            Our Partners
          </h2>
          <div className="flex items-center space-x-2">
            <button 
              onClick={prevPage}
              className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors rounded-sm cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={nextPage}
              className="w-8 h-8 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors rounded-sm cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {visiblePartners.map((partner) => (
            <div
              key={partner.id}
              className="bg-slate-50 border border-slate-100 h-24 flex items-center justify-center p-4 group hover:shadow-sm transition-shadow cursor-pointer"
            >
              {/* Using text as placeholder since logos are missing */}
              <div className="bg-white w-full h-full flex items-center justify-center rounded-sm text-center px-2">
                <span className="text-lg font-bold text-slate-400 group-hover:text-slate-600 transition-colors leading-tight">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
