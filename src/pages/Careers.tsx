import { Mail, Briefcase, FileText } from 'lucide-react';

export function Careers() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-50 py-12 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-800 mb-2 md:mb-0">Careers</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Left Column: Text */}
          <div className="md:w-1/3 text-center md:text-right flex flex-col md:items-end">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Join our team</h2>
            <p className="text-base text-slate-500 leading-relaxed mb-8 max-w-xs">
              You think you have what it takes to work with us? Fill the form below and send us your CV. We are always looking for great talent to join our innovative team!
            </p>
            <div className="mt-8 flex flex-col items-center md:items-end gap-4 text-slate-400">
              <div className="flex items-center gap-3">
                <span className="text-base">Innovate with data</span>
                <Briefcase size={20} className="text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base">Grow your career</span>
                <FileText size={20} className="text-primary" />
              </div>
              <div className="flex items-center gap-3">
                <span className="text-base">Reach out anytime</span>
                <Mail size={20} className="text-primary" />
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="md:w-2/3">
            <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">First Name (required):</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border border-slate-200 p-3 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" 
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">Last Name (required):</label>
                    <input 
                      type="text" 
                      required
                      className="w-full border border-slate-200 p-3 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone No */}
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">Phone No (required):</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full border border-slate-200 p-3 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" 
                    />
                  </div>
                  {/* Your Email */}
                  <div>
                    <label className="block text-sm text-slate-500 mb-2">Your Email (required):</label>
                    <input 
                      type="email" 
                      required
                      className="w-full border border-slate-200 p-3 text-base focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors rounded-sm" 
                    />
                  </div>
                </div>

                {/* Upload Resume */}
                <div>
                  <label className="block text-xs text-slate-500 mb-2">Upload Resume:</label>
                  <div className="flex items-center gap-3">
                    <input 
                      type="file" 
                      accept=".pdf,.doc,.docx"
                      className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-slate-700 hover:file:bg-slate-100 transition-colors cursor-pointer" 
                    />
                  </div>
                </div>

                {/* Recaptcha Placeholder */}
                <div className="text-xs text-slate-400 py-2">
                  [recaptcha]
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="bg-[#4CBAD1] hover:bg-[#3ba6bc] text-white px-8 py-2.5 text-sm font-medium transition-colors cursor-pointer rounded-sm shadow-sm"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
