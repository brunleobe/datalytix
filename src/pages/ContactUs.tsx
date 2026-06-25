import { ContactHero } from '../components/ContactHero';
import { ContactInfo } from '../components/ContactInfo';
import { ContactForm } from '../components/ContactForm';

export function ContactUs() {
  return (
    <div className="bg-white">
      <ContactHero />

      {/* Main Content: Info sidebar + Form */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left column: contact details */}
          <div className="lg:w-1/3">
            <ContactInfo />
          </div>

          {/* Right column: message form */}
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
