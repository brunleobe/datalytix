import { Mail, MessageCircle, Home } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function ContactUs() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-800 mb-2 md:mb-0">Contact us</h1>

        </div>
      </div>

      {/* Contact Info Blocks */}
      <div className="container mx-auto px-4 max-w-7xl py-12 border-b border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Email */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Mail className="text-primary shrink-0" size={32} />
            <div>
              <p className="text-sm text-slate-400 mb-1">Have any questions?</p>
              <p className="font-semibold text-slate-700">kay@datalytixng.com</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <MessageCircle className="text-primary shrink-0" size={32} />
            <div>
              <p className="text-sm text-slate-400 mb-1">Call us</p>
              <p className="font-semibold text-slate-700">08034174300, 08187245441</p>
            </div>
          </div>
          {/* Address */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Home className="text-primary shrink-0" size={32} />
            <div>
              <p className="text-sm text-slate-400 mb-1">Address</p>
              <p className="font-semibold text-slate-700">11 Kudirat Abiola Way, Oregun, Ikeja, Lagos</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content: Message & Form */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left Column: Text & Socials */}
          <div className="md:w-1/3 text-center md:text-right flex flex-col md:items-end">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 font-serif">Write a message</h2>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              If you got any questions, please do not hesitate to send us a message. We reply within <span className="underline">24 hours !</span>
            </p>
            <p className="text-sm text-slate-500 mb-4">Our profiles in social media:</p>
            <div className="flex justify-center md:justify-end gap-2">
              <a href="#" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="md:w-2/3">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs text-slate-500 mb-2">Name:</label>
                  <input type="text" className="w-full border border-slate-200 p-2 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2">E-mail address:</label>
                  <input type="email" className="w-full border border-slate-200 p-2 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-2">Subject:</label>
                  <input type="text" className="w-full border border-slate-200 p-2 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 mb-2">Message:</label>
                <textarea rows={5} className="w-full border border-slate-200 p-2 text-sm focus:outline-none focus:border-primary transition-colors"></textarea>
              </div>

              <div className="text-xs text-slate-400">
                [recaptcha]
              </div>

              <button type="button" className="bg-[#4CBAD1] hover:bg-[#3ba6bc] text-white px-8 py-2.5 text-sm font-medium transition-colors cursor-pointer rounded-sm">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
