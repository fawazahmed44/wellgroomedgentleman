import React from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { services, businessInfo } from '../data/siteData';
import { Service } from '../types';
import { ScrollReveal } from '../components/ScrollReveal';
import { ArrowLeft, ArrowRight, Calendar, Check, Clock, Sparkles, Scissors, MapPin } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 bg-[#141312]">
        <h1 className="font-serif text-4xl text-[#FAF4E8] mb-4">Service Not Found</h1>
        <p className="text-[#A39C90] text-sm mb-6">The requested service could not be located in our menu.</p>
        <Link
          href="/services"
          className="px-6 py-3 text-xs uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] font-semibold"
        >
          View All Services
        </Link>
      </div>
    );
  }

  // Related services in same category or adjacent
  const relatedServices = services
    .filter((s) => s.slug !== service.slug && (s.category === service.category || true))
    .slice(0, 3);

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-24 md:pt-28 pb-24">
      {/* Back Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E978B] hover:text-[#CCA300] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Main Service Content Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left / Top: Hero Image */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/11] sm:aspect-[16/10] overflow-hidden border border-[#2D2825] bg-[#181615]">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover object-center"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="px-3.5 py-1 text-[11px] uppercase tracking-[0.25em] bg-[#141312]/90 border border-[#CCA300]/40 text-[#CCA300] font-semibold backdrop-blur-sm">
                  {service.categoryLabel}
                </span>
                <span className="text-xs text-[#FAF4E8] bg-[#141312]/90 px-3 py-1 border border-[#332E29] backdrop-blur-sm">
                  130 Miracle Mile, Coral Gables
                </span>
              </div>
            </div>
          </div>

          {/* Right: Service Details & Booking Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-b border-[#26221F] pb-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#CCA300] font-semibold block mb-2">
                {service.categoryLabel}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF4E8] font-light tracking-tight mb-4">
                {service.name}
              </h1>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-2xl sm:text-3xl text-[#CCA300] font-semibold">
                  {service.price}
                </span>
              </div>
            </div>

            {/* Real Description from source website */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#9E978B] font-semibold">
                Overview & Description
              </h2>
              <p className="text-base sm:text-lg text-[#D8D2C5] font-light leading-relaxed">
                {service.fullDescription}
              </p>
            </div>

            {/* Inclusions */}
            {service.inclusions && service.inclusions.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-xs uppercase tracking-[0.2em] text-[#9E978B] font-semibold">
                  What’s Included
                </h3>
                <ul className="space-y-2.5">
                  {service.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#BDB5A8] font-light">
                      <Check className="w-4 h-4 text-[#CCA300] shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action CTAs */}
            <div className="pt-6 space-y-3 border-t border-[#26221F]">
              <Link
                href="/book-appointment"
                id={`book-${service.slug}`}
                className="w-full py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#CCA300]/20"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This Service Now</span>
              </Link>

              <div className="flex items-center justify-between text-xs text-[#9E978B] px-1 pt-1">
                <span>Direct Inquiries:</span>
                <a href={`tel:${businessInfo.phoneRaw}`} className="text-[#CCA300] hover:text-[#FAF4E8] transition-colors">
                  {businessInfo.phone}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Related Services Section */}
        <ScrollReveal delay={0.15} className="mt-28 pt-16 border-t border-[#26221F]">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block mb-1">
                Complementary Care
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF4E8] font-light">
                Related Services
              </h2>
            </div>
            <Link
              href="/services"
              className="text-xs uppercase tracking-[0.16em] text-[#CCA300] hover:text-[#FAF4E8] transition-colors inline-flex items-center gap-1.5"
            >
              <span>Explore All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/services/${rel.slug}`}
                className="group bg-[#181615] border border-[#2A2623] hover:border-[#CCA300]/50 p-5 transition-all block"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#201D1B] mb-4">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-serif text-xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                    {rel.name}
                  </h3>
                  <span className="font-mono text-sm text-[#CCA300] font-semibold">{rel.price}</span>
                </div>
                <p className="text-xs text-[#A39C90] line-clamp-2 font-light">{rel.shortDescription}</p>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
