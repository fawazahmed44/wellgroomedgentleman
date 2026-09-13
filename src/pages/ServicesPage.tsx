import React, { useState } from 'react';
import { Link } from '../context/RouterContext';
import { services } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, Calendar, Sparkles, Check, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cuts-shaves' | 'grooming'>('all');
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const cutsAndShaves = services.filter((s) => s.category === 'cuts-shaves');
  const groomingServices = services.filter((s) => s.category === 'grooming');

  const displayedCuts = activeCategory === 'all' || activeCategory === 'cuts-shaves';
  const displayedGrooming = activeCategory === 'all' || activeCategory === 'grooming';

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              The Service Directory
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Services
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            A comprehensive offering of traditional barber craftsmanship and refined spa grooming. Each treatment is tailored with unmatched precision, premium botanicals, and unhurried dedication.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-16 border-b border-[#26221F] pb-6">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
              activeCategory === 'all'
                ? 'bg-[#CCA300] text-[#141312] font-semibold shadow-sm shadow-[#CCA300]/20'
                : 'text-[#9E978B] hover:text-[#FAF4E8] border border-[#2E2925]'
            }`}
          >
            All Services ({services.length})
          </button>
          <button
            onClick={() => setActiveCategory('cuts-shaves')}
            className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
              activeCategory === 'cuts-shaves'
                ? 'bg-[#CCA300] text-[#141312] font-semibold shadow-sm shadow-[#CCA300]/20'
                : 'text-[#9E978B] hover:text-[#FAF4E8] border border-[#2E2925]'
            }`}
          >
            Cuts & Shaves ({cutsAndShaves.length})
          </button>
          <button
            onClick={() => setActiveCategory('grooming')}
            className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-colors ${
              activeCategory === 'grooming'
                ? 'bg-[#CCA300] text-[#141312] font-semibold shadow-sm shadow-[#CCA300]/20'
                : 'text-[#9E978B] hover:text-[#FAF4E8] border border-[#2E2925]'
            }`}
          >
            Grooming & Spa ({groomingServices.length})
          </button>
        </div>

        {/* SECTION 1: CUTS & SHAVES */}
        {displayedCuts && (
          <div className="mb-24">
            <div className="flex items-baseline justify-between border-b border-[#282420] pb-4 mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#CCA300] font-semibold block mb-1">
                  01 // Precision Craftsmanship
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
                  Cuts & Shaves
                </h2>
              </div>
              <span className="text-xs text-[#948D81] font-mono tracking-wider">
                6 Services
              </span>
            </div>

            <div className="divide-y divide-[#24201D]">
              {cutsAndShaves.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setHoveredService(service.slug)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#181615]/70 px-4 -mx-4 transition-all duration-300"
                >
                  <div className="flex items-start md:items-center gap-6 md:w-3/5">
                    {/* Hover Image Preview */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-[#201D1B] border border-[#2D2825] group-hover:border-[#CCA300]/60 transition-colors">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A39C90] mt-1 font-light leading-relaxed max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-2/5 pt-2 md:pt-0">
                    <span className="font-mono text-xl sm:text-2xl text-[#CCA300] font-semibold">
                      {service.price}
                    </span>
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF4E8] border border-[#332E29] group-hover:border-[#CCA300] group-hover:bg-[#CCA300] group-hover:text-[#141312] transition-all">
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: GROOMING & SPA */}
        {displayedGrooming && (
          <div className="mb-24">
            <div className="flex items-baseline justify-between border-b border-[#282420] pb-4 mb-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#CCA300] font-semibold block mb-1">
                  02 // Restorative Spa Care
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
                  Grooming
                </h2>
              </div>
              <span className="text-xs text-[#948D81] font-mono tracking-wider">
                7 Services
              </span>
            </div>

            <div className="divide-y divide-[#24201D]">
              {groomingServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setHoveredService(service.slug)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#181615]/70 px-4 -mx-4 transition-all duration-300"
                >
                  <div className="flex items-start md:items-center gap-6 md:w-3/5">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-[#201D1B] border border-[#2D2825] group-hover:border-[#CCA300]/60 transition-colors">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#A39C90] mt-1 font-light leading-relaxed max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-6 md:w-2/5 pt-2 md:pt-0">
                    <span className="font-mono text-lg sm:text-xl text-[#CCA300] font-semibold text-right">
                      {service.price}
                    </span>
                    <div className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium text-[#FAF4E8] border border-[#332E29] group-hover:border-[#CCA300] group-hover:bg-[#CCA300] group-hover:text-[#141312] transition-all">
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Booking Banner */}
        <div className="bg-[#181615] border border-[#2A2623] p-8 md:p-12 text-center max-w-4xl mx-auto space-y-6">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
            Ready For Your Appointment?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
            Experience Tailored Excellence
          </h2>
          <p className="text-sm text-[#A39C90] max-w-lg mx-auto font-light leading-relaxed">
            Select your preferred barber or service specialist, date, and time through our official booking portal.
          </p>
          <div className="pt-2">
            <Link
              href="/book-appointment"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors shadow-lg shadow-[#CCA300]/20"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book An Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
