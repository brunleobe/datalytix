export function PartnersSection() {
  const partners = [
    { name: 'COMMVAULT', id: 1, logo: 'https://logo.clearbit.com/commvault.com' },
    { name: 'Symantec', id: 2, logo: 'https://logo.clearbit.com/symantec.com' },
    { name: 'AVG', id: 3, logo: 'https://logo.clearbit.com/avg.com' },
    { name: 'hp', id: 4, logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg' },
    { name: 'McAfee', id: 5, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/McAfee_Logo.svg' },
    { name: 'nimble storage', id: 6, logo: 'https://logo.clearbit.com/nimblestorage.com' },
    { name: 'RISING', id: 7, logo: 'https://upload.wikimedia.org/wikipedia/en/b/b3/Rising_Antivirus_logo.png' },
    { name: 'vmware', id: 8, logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
    { name: 'Microsoft', id: 9, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'IMS', id: 10, logo: 'https://logo.clearbit.com/iqvia.com' },
    { name: 'eset', id: 11, logo: 'https://logo.clearbit.com/eset.com' },
    { name: 'Double-Take', id: 12, logo: 'https://logo.clearbit.com/doubletake.com' },
    { name: 'Cyberoam', id: 13, logo: 'https://logo.clearbit.com/cyberoam.com' },
    { name: 'Bit9', id: 14, logo: 'https://logo.clearbit.com/carbonblack.com' },
    { name: 'CISCO', id: 15, logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
    { name: 'Novell', id: 16, logo: 'https://logo.clearbit.com/novell.com' },
    { name: 'FireEye', id: 17, logo: 'https://logo.clearbit.com/fireeye.com' },
    { name: 'RSA', id: 18, logo: 'https://logo.clearbit.com/rsa.com' },
    { name: 'Bitdefender', id: 19, logo: 'https://logo.clearbit.com/bitdefender.com' },
    { name: 'avast', id: 20, logo: 'https://logo.clearbit.com/avast.com' },
    { name: 'KASPERSKY', id: 21, logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Kaspersky_Lab_logo.svg' },
    { name: 'Norton', id: 22, logo: 'https://logo.clearbit.com/norton.com' },
    { name: 'panda', id: 23, logo: 'https://logo.clearbit.com/pandasecurity.com' },
    { name: 'ORACLE', id: 24, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
    { name: 'TATA COMMUNICATIONS', id: 25, logo: 'https://logo.clearbit.com/tatacommunications.com' },
  ];

  return (
    <section
      className="py-12 overflow-hidden border-y"
      style={{
        backgroundColor: '#ffffff',
        borderColor: 'rgba(0, 0, 0, 0.06)',
      }}
    >
      <div className="relative w-full max-w-[100vw] mx-auto flex items-center">
        {/* Gradient overlays for smooth entry/exit effect */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 md:w-48 z-10 pointer-events-none"
          style={{
            background: 'gradient(linear, left top, right top, from(#ffffff), to(transparent))',
            backgroundImage: 'linear-gradient(to right, #ffffff 0%, transparent 100%)',
          }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 md:w-48 z-10 pointer-events-none"
          style={{
            background: 'gradient(linear, right top, left top, from(#ffffff), to(transparent))',
            backgroundImage: 'linear-gradient(to left, #ffffff 0%, transparent 100%)',
          }}
        />

        {/* Marquee Container */}
        <div className="flex w-max animate-marquee">
          {/* First sequence of partners */}
          <div className="flex items-center">
            {partners.map((partner) => (
              <div
                key={`set1-${partner.id}`}
                className="flex-shrink-0 w-36 md:w-48 px-6 md:px-8 h-16 flex items-center justify-center group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-10 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors text-center uppercase tracking-wider">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Second sequence for infinite scroll */}
          <div className="flex items-center">
            {partners.map((partner) => (
              <div
                key={`set2-${partner.id}`}
                className="flex-shrink-0 w-36 md:w-48 px-6 md:px-8 h-16 flex items-center justify-center group cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center transition-all duration-300">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-10 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <span className="hidden text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors text-center uppercase tracking-wider">
                    {partner.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
