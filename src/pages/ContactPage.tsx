import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { MapPin, Phone, Mail, Clock, Calendar, ArrowUpRight, CheckCircle2, MessageSquare, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry submission with immediate user confirmation
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              Get in Touch
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Contact & Concierge
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            We invite you to visit our barbershop and gentlemen’s spa located on Coral Gables’ historic Miracle Mile. Walk-ins are welcomed, appointments are recommended.
          </p>
        </div>

        {/* Contact Information & Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#181615] border border-[#2A2623] p-8 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
                Flagship Details
              </span>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 border border-[#332E29] flex items-center justify-center text-[#CCA300] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9E978B] block mb-1 font-medium">
                      Location
                    </span>
                    <p className="text-[#FAF4E8] text-base leading-snug">
                      130 Miracle Mile<br />
                      Coral Gables, FL 33134
                    </p>
                    <a
                      href="https://maps.google.com/?q=130+Miracle+Mile+Coral+Gables+FL+33134"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#CCA300] hover:text-[#FAF4E8] transition-colors mt-2 font-medium"
                    >
                      <span>Get Directions on Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-[#26221F]">
                  <div className="w-9 h-9 border border-[#332E29] flex items-center justify-center text-[#CCA300] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9E978B] block mb-1 font-medium">
                      Telephone
                    </span>
                    <a
                      href={`tel:${businessInfo.phoneRaw}`}
                      className="text-[#FAF4E8] text-base hover:text-[#CCA300] transition-colors font-medium"
                    >
                      {businessInfo.phone}
                    </a>
                    <p className="text-xs text-[#9E978B] mt-0.5 font-light">
                      Concierge assistance & phone bookings
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-4 border-t border-[#26221F]">
                  <div className="w-9 h-9 border border-[#332E29] flex items-center justify-center text-[#CCA300] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#9E978B] block mb-1 font-medium">
                      Electronic Mail
                    </span>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-[#FAF4E8] text-base hover:text-[#CCA300] transition-colors break-all font-medium"
                    >
                      {businessInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="pt-6 border-t border-[#26221F]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#CCA300] font-semibold mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Hours of Operation</span>
                </div>
                <div className="space-y-2 text-sm text-[#B8B0A2]">
                  <div className="flex justify-between py-1 border-b border-[#24201D]">
                    <span>Monday – Friday</span>
                    <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.weekday}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-[#24201D]">
                    <span>Saturday</span>
                    <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.saturday}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span>Sunday</span>
                    <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/book-appointment"
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#CCA300]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Online (24/7)</span>
                </Link>
              </div>
            </div>

            {/* Careers card */}
            <div className="bg-[#181615] border border-[#2A2623] p-6">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold block mb-1">
                Careers
              </span>
              <h3 className="font-serif text-xl text-[#FAF4E8] mb-2">
                Interested in Working With Us?
              </h3>
              <p className="text-xs text-[#9E978B] font-light leading-relaxed mb-4">
                We welcome inquiries from master barbers, stylists, and spa professionals passionate about traditional service standards.
              </p>
              <a
                href="mailto:info@thewellgroomedgentleman.com?subject=Job%20Opportunities"
                className="text-xs uppercase tracking-[0.16em] text-[#CCA300] hover:text-[#FAF4E8] font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Email Us at info@thewellgroomedgentleman.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-[#181615] border border-[#2A2623] p-8 md:p-10">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block mb-2">
              Direct Message
            </span>
            <h2 className="font-serif text-3xl text-[#FAF4E8] font-light mb-6">
              Send an Inquiry
            </h2>

            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-14 h-14 border border-[#CCA300] rounded-full mx-auto flex items-center justify-center text-[#CCA300]">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl text-[#FAF4E8]">Message Received</h3>
                <p className="text-sm text-[#B8B0A2] max-w-md mx-auto font-light leading-relaxed">
                  Thank you for reaching out to The Well Groomed Gentleman. A member of our concierge desk will review your inquiry and respond promptly.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs uppercase tracking-[0.18em] border border-[#38322C] text-[#CCA300] hover:text-[#FAF4E8] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#A39C90] block font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. James Harrison"
                      className="w-full px-4 py-3 bg-[#11100F] border border-[#2D2824] focus:border-[#CCA300] text-[#FAF4E8] text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#A39C90] block font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. james@example.com"
                      className="w-full px-4 py-3 bg-[#11100F] border border-[#2D2824] focus:border-[#CCA300] text-[#FAF4E8] text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#A39C90] block font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 786-000-0000"
                      className="w-full px-4 py-3 bg-[#11100F] border border-[#2D2824] focus:border-[#CCA300] text-[#FAF4E8] text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-[0.15em] text-[#A39C90] block font-medium">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#11100F] border border-[#2D2824] focus:border-[#CCA300] text-[#FAF4E8] text-sm focus:outline-none transition-colors"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Appointment Question">Appointment Question</option>
                      <option value="Grooming & Spa Consultation">Grooming & Spa Consultation</option>
                      <option value="Career Opportunities">Career Opportunities</option>
                      <option value="Private Events">Private Events</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.15em] text-[#A39C90] block font-medium">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How may we assist you today?"
                    className="w-full px-4 py-3 bg-[#11100F] border border-[#2D2824] focus:border-[#CCA300] text-[#FAF4E8] text-sm focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#CCA300]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Concierge</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Map / Directions Display */}
        <div className="border border-[#2A2623] bg-[#181615] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block mb-1">
                Miracle Mile Map
              </span>
              <h3 className="font-serif text-2xl text-[#FAF4E8]">
                130 Miracle Mile, Coral Gables, FL 33134
              </h3>
            </div>
            <a
              href="https://maps.google.com/?q=130+Miracle+Mile+Coral+Gables+FL+33134"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] bg-[#221F1C] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] transition-colors shrink-0"
            >
              <span>Open in Maps</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#CCA300]" />
            </a>
          </div>

          <div className="w-full h-80 bg-[#11100F] border border-[#2A2623] relative overflow-hidden flex items-center justify-center">
            {/* Interactive Map Iframe */}
            <iframe
              title="The Well Groomed Gentleman Location Map"
              src="https://maps.google.com/maps?q=130%20Miracle%20Mile,%20Coral%20Gables,%20FL%2033134&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 filter invert-[0.9] hue-rotate-[180deg] contrast-[1.2]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
