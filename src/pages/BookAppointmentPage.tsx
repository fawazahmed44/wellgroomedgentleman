import React, { useState } from 'react';
import { services, businessInfo, teamMembers } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { Calendar, ExternalLink, Phone, Clock, MapPin, Check, Scissors, Sparkles, ArrowRight } from 'lucide-react';

export const BookAppointmentPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cuts-shaves' | 'grooming'>('all');
  const [selectedService, setSelectedService] = useState<string>(services[0].slug);

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter((s) => s.category === selectedCategory);

  const activeServiceObj = services.find((s) => s.slug === selectedService) || services[0];

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              Online Reservations
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Book an Appointment
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            Schedule your haircut, traditional hot lather shave, or rejuvenating spa therapy with our master barbers and specialists.
          </p>
        </div>

        {/* Primary Booking Gateway Hero Box */}
        <div className="bg-[#181615] border border-[#2D2824] p-8 md:p-12 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
                Official Scheduling System
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
                Direct Meevo Appointment Gateway
              </h2>
              <p className="text-[#C4BCB0] text-sm md:text-base leading-relaxed font-light max-w-2xl">
                Select your service, choose your preferred barber or aesthetician, and reserve real-time available time slots directly through our official booking portal.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="primary-meevo-booking-btn"
                  className="inline-flex items-center gap-3 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-all duration-300 shadow-xl shadow-[#CCA300]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Launch Meevo Booking Portal</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={`tel:${businessInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#CCA300]" />
                  <span>Call {businessInfo.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-[#11100F] border border-[#2A2623] p-6 space-y-3 text-xs">
              <div className="flex items-center gap-2 text-[#CCA300] font-semibold uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Appointment Hours</span>
              </div>
              <div className="flex justify-between text-[#B8B0A2]">
                <span>Mon – Fri:</span>
                <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.weekday}</span>
              </div>
              <div className="flex justify-between text-[#B8B0A2]">
                <span>Saturday:</span>
                <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.saturday}</span>
              </div>
              <div className="flex justify-between text-[#B8B0A2]">
                <span>Sunday:</span>
                <span className="text-[#FAF4E8] font-medium">{businessInfo.hours.sunday}</span>
              </div>
              <div className="pt-3 border-t border-[#24201D] text-[#9E978B] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#CCA300] shrink-0" />
                <span>130 Miracle Mile, Coral Gables, FL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Service Pre-Selector */}
        <div className="mb-20">
          <SectionHeader
            number="01"
            badge="Interactive Selector"
            title="Browse Menu Before Booking"
            subtitle="Prepare Your Treatment Selection"
            description="Select any service below to review its inclusions, exact price, and description before transitioning into our reservation portal."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* List of services to click */}
            <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-2 custom-scrollbar">
              {services.map((srv) => {
                const isSelected = srv.slug === selectedService;
                return (
                  <button
                    key={srv.slug}
                    onClick={() => setSelectedService(srv.slug)}
                    className={`w-full text-left p-4 border transition-all duration-200 flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'bg-[#221F1C] border-[#CCA300] shadow-md'
                        : 'bg-[#181615] border-[#2A2623] hover:border-[#38322C]'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#9E978B] block mb-0.5">
                        {srv.categoryLabel}
                      </span>
                      <p className={`font-serif text-lg leading-snug ${isSelected ? 'text-[#CCA300]' : 'text-[#FAF4E8]'}`}>
                        {srv.name}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-[#CCA300] shrink-0">
                      {srv.price}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Service Detailed Preview Card */}
            <div className="lg:col-span-7 bg-[#181615] border border-[#2A2623] p-8 flex flex-col justify-between">
              <div>
                <div className="aspect-[16/9] overflow-hidden mb-6 bg-[#201D1B] border border-[#2A2623]">
                  <img
                    src={activeServiceObj.image}
                    alt={activeServiceObj.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block mb-1">
                      {activeServiceObj.categoryLabel}
                    </span>
                    <h3 className="font-serif text-3xl text-[#FAF4E8]">
                      {activeServiceObj.name}
                    </h3>
                  </div>
                  <span className="font-mono text-2xl text-[#CCA300]">
                    {activeServiceObj.price}
                  </span>
                </div>

                <p className="text-sm text-[#C4BCB0] leading-relaxed font-light mb-6">
                  {activeServiceObj.fullDescription}
                </p>

                {activeServiceObj.inclusions && (
                  <div className="space-y-2 mb-8">
                    <span className="text-xs uppercase tracking-[0.16em] text-[#9E978B] font-semibold block">
                      Included In Treatment
                    </span>
                    {activeServiceObj.inclusions.map((inc, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#D8D2C5] font-light">
                        <Check className="w-3.5 h-3.5 text-[#CCA300] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-[#26221F]">
                <a
                  href={businessInfo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#CCA300]/20"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve {activeServiceObj.name} in Meevo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Walk-in & Direct Assistance note */}
        <div className="border border-[#2A2623] bg-[#181615] p-8 text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold">
            Walk-Ins & Inquiries
          </span>
          <h4 className="font-serif text-2xl text-[#FAF4E8]">
            Walk-ins Welcomed Everyday
          </h4>
          <p className="text-xs text-[#A39C90] font-light max-w-md mx-auto leading-relaxed">
            Strolling Miracle Mile? We welcome walk-ins based on immediate barber chair availability. You may also call us directly at {businessInfo.phone} to inquire about current wait times.
          </p>
        </div>
      </div>
    </div>
  );
};
