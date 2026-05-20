import { useState, useRef } from 'react';
import { Mail, MessageCircle, MapPin, Briefcase, FileText, Send, User, AtSign, Type, MessageSquare, CheckCircle } from 'lucide-react';

export function ContactAndCareers() {
  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Careers Form State
  const [careerForm, setCareerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    resume: null as File | null
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const isContactFormValid =
    contactForm.name.trim() !== '' &&
    contactForm.email.trim() !== '' &&
    contactForm.subject.trim() !== '' &&
    contactForm.message.trim() !== '';

  const isCareerFormValid =
    careerForm.firstName.trim() !== '' &&
    careerForm.lastName.trim() !== '' &&
    careerForm.email.trim() !== '' &&
    careerForm.resume !== null;

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCareerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCareerForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCareerForm(prev => ({ ...prev, resume: file }));
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-slate-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Connect With Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you have a question about our services or you're ready to join our innovative team, we're here to listen and grow together.
          </p>
        </div>
      </section>

      {/* Contact Info Quick Grid */}
      <section className="py-16 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <Mail size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Email Us</h3>
              <p className="text-slate-500 mb-4">Our team is here to help.</p>
              <a href="mailto:kay@datalytixng.com" className="text-primary font-semibold hover:underline">kay@datalytixng.com</a>
            </div>

            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Call Us</h3>
              <p className="text-slate-500 mb-4">Mon-Fri from 8am to 5pm.</p>
              <p className="text-primary font-semibold">08034174300, 08187245441</p>
            </div>

            <div className="group p-8 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Visit Us</h3>
              <p className="text-slate-500 mb-4">Come say hello at our office.</p>
              <p className="text-primary font-medium">11 Kudirat Abiola Way, Oregun, Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dual Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col gap-32 max-w-4xl mx-auto">

            {/* Careers Section */}
            <div id="careers" className="scroll-mt-24 bg-white p-10 md:p-16 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -z-0 transition-transform group-hover:scale-110 duration-700"></div>

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Careers</span>
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">Join the Team</h2>
                  <p className="text-slate-600 text-lg">We're always looking for talented individuals who are passionate about data and innovation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <Briefcase size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 text-lg">Innovate with Data</h4>
                      <p className="text-slate-500">Work on cutting-edge analytics and BI solutions for global clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1 text-lg">Growth Focused</h4>
                      <p className="text-slate-500">We invest in your career development and continuous learning.</p>
                    </div>
                  </div>
                </div>

                <form className="space-y-6 pt-10 border-t border-slate-100" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 block">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={careerForm.firstName}
                        onChange={handleCareerChange}
                        placeholder="First Name"
                        required
                        className="w-full bg-slate-50 border border-transparent rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 block">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={careerForm.lastName}
                        onChange={handleCareerChange}
                        placeholder="Last Name"
                        required
                        className="w-full bg-slate-50 border border-transparent rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 block">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={careerForm.email}
                      onChange={handleCareerChange}
                      placeholder="Email Address"
                      required
                      className="w-full bg-slate-50 border border-transparent rounded-lg py-3 px-4 focus:ring-2 focus:ring-primary/20 focus:bg-white focus:border-primary outline-none transition-all"
                    />
                  </div>

                  <div
                    onClick={triggerFileUpload}
                    className={`p-8 rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer text-center group/file ${careerForm.resume
                        ? 'border-green-400 bg-green-50'
                        : 'border-slate-200 bg-slate-50 hover:border-primary/40'
                      }`}
                  >
                    {careerForm.resume ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle className="text-green-500 mb-2" size={40} />
                        <p className="text-sm font-bold text-green-700 mb-1">Resume Uploaded!</p>
                        <p className="text-xs text-green-600 truncate max-w-xs">{careerForm.resume.name}</p>
                      </div>
                    ) : (
                      <div>
                        <FileText className="mx-auto text-slate-400 group-hover/file:text-primary transition-colors mb-3" size={40} />
                        <p className="text-sm font-bold text-slate-700 mb-1">Upload your CV/Resume</p>
                        <p className="text-xs text-slate-400">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                    )}
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isCareerFormValid}
                    className={`w-full font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${isCareerFormValid
                        ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 cursor-pointer'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                      }`}
                  >
                    Apply Now
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Form Section */}
            <div id="contact-form" className="scroll-mt-24">
              <div className="mb-10 text-center">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                <h2 className="text-4xl font-bold text-slate-800 mb-4">Send us a Message</h2>
                <p className="text-slate-600 text-lg">Have a specific inquiry? Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="text"
                        name="name"
                        value={contactForm.name}
                        onChange={handleContactChange}
                        placeholder="John Doe"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="text-sm font-semibold text-slate-700 mb-2 block">Email Address</label>
                    <div className="relative">
                      <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        type="email"
                        name="email"
                        value={contactForm.email}
                        onChange={handleContactChange}
                        placeholder="john@example.com"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Subject</label>
                  <div className="relative">
                    <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                      type="text"
                      name="subject"
                      value={contactForm.subject}
                      onChange={handleContactChange}
                      placeholder="How can we help?"
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700 mb-2 block">Message</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 text-slate-400" size={18} />
                    <textarea
                      name="message"
                      value={contactForm.message}
                      onChange={handleContactChange}
                      rows={6}
                      placeholder="Tell us more about your needs..."
                      required
                      className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!isContactFormValid}
                  className={`w-full font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform ${isContactFormValid
                      ? 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 hover:-translate-y-1 cursor-pointer'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Social Footer Block */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <p className="text-slate-500 mb-6 font-medium">Stay connected with us on social media</p>
          <div className="flex justify-center gap-4">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
              <a key={social} href="#" className="px-6 py-2 border border-slate-200 rounded-full text-slate-600 hover:border-primary hover:text-primary hover:shadow-sm transition-all duration-300 text-sm font-bold">
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

