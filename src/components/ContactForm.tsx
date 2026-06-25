import { useState } from 'react';

export function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'Data Management & Analytics',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const isValid =
    form.name.trim() !== '' &&
    form.email.trim() !== '' &&
    form.subject.trim() !== '' &&
    form.message.trim() !== '';

  const inputClass =
    'w-full font-sans text-1rem text-slate-800 rounded-[11px] py-[0.85rem] px-4 border border-slate-300 bg-slate-50 transition-[border-color,box-shadow,background] duration-300 focus:outline-none focus:border-[#3cd882] focus:ring-2 focus:ring-[#3cd882]/20 placeholder-slate-400';

  const inputStyle = {
    fontFamily: "'Instrument Sans', system-ui, sans-serif",
    fontSize: '1rem',
  };

  const labelClass =
    'block text-[0.72rem] display-block tracking-widest font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 font-mono';

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm" style={{ padding: '30.72px', borderWidth: '0.8px' }}>
      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

        {/* Row 1: Full Name + Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label className={labelClass}>Company</label>
            <input
              type="text"
              name="company"
              placeholder="Company Ltd."
              className={inputClass}
              style={{
                ...inputStyle,
                fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                color: "#646970",
                fontSize: "1rem",

              }}
            />
          </div>
        </div>

        {/* Row 2: Work Email + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Work Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input
              type="tel"
              name="phone"
              placeholder="+234 ..."
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        {/* Row 3: Service dropdown */}
        <div>
          <label className={labelClass}>What Can We Help With?</label>
          <div className="relative">
            <select
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className={`${inputClass} appearance-none pr-10`}
              style={inputStyle}
            >
              <option value="Data Management & Analytics">Data Management & Analytics</option>
              <option value="Data Warehousing">Data Warehousing</option>
              <option value="Business Intelligence">Business Intelligence</option>
              <option value="Infrastructure & Networking">Infrastructure & Networking</option>
              <option value="Disaster Recovery & High Availability">Disaster Recovery & High Availability</option>
              <option value="Enterprise Applications / ERP">Enterprise Applications / ERP</option>
              <option value="Consulting & Strategy">Consulting & Strategy</option>
              <option value="Something else">Something else</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Project Details */}
        <div>
          <label className={labelClass}>Project Details</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="A few lines about your goals, timeline and current setup..."
            required
            className={`${inputClass} resize-none`}
            style={inputStyle}
          />
        </div>

        {/* Send Button */}
        <button
          type="submit"
          disabled={!isValid}
          className="w-full font-semibold px-[1.6em] py-[0.95em] rounded-[100px] flex items-center 
         justify-center gap-2 text-sm transition-all duration-300 bg-[#35ce6f] text-[#05120a] 
         shadow-lg shadow-[#45de7f]/50 cursor-pointer active:scale-[0.98]"
        >
          Send message &nbsp;→
        </button>

        {/* Privacy Note */}
        <p className="text-center text-[11px] text-slate-400 font-sans">
          We respect your privacy. Your details are only used to respond to your enquiry.
        </p>
      </form>
    </div>
  );
}
