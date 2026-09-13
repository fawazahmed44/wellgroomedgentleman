import React from 'react';
import { Link } from '../context/RouterContext';
import { teamMembers, services, businessInfo } from '../data/siteData';
import { ArrowLeft, Calendar, Scissors, Phone, MapPin, Check, ArrowRight } from 'lucide-react';

interface TeamMemberDetailPageProps {
  slug: string;
}

export const TeamMemberDetailPage: React.FC<TeamMemberDetailPageProps> = ({ slug }) => {
  const member = teamMembers.find((m) => m.slug === slug);

  if (!member) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 bg-[#141312]">
        <h1 className="font-serif text-4xl text-[#FAF4E8] mb-4">Team Member Not Found</h1>
        <p className="text-[#A39C90] text-sm mb-6">The requested team profile does not exist.</p>
        <Link
          href="/team"
          className="px-6 py-3 text-xs uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] font-semibold"
        >
          View All Team Members
        </Link>
      </div>
    );
  }

  // Other team members
  const otherMembers = teamMembers.filter((m) => m.slug !== member.slug).slice(0, 3);

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-28 pb-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E978B] hover:text-[#CCA300] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Barbers & Specialists</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Member Portrait */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden border border-[#2A2623] bg-[#181615] shadow-2xl">
              <img
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                className="w-full h-full object-cover object-top"
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="px-3.5 py-1 text-[11px] uppercase tracking-[0.25em] bg-[#141312]/90 border border-[#CCA300]/40 text-[#CCA300] font-semibold backdrop-blur-sm">
                  {member.role}
                </span>
                <span className="text-xs text-[#FAF4E8] bg-[#141312]/90 px-3 py-1 border border-[#332E29] backdrop-blur-sm">
                  Coral Gables, FL
                </span>
              </div>
            </div>
          </div>

          {/* Member Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="border-b border-[#26221F] pb-6">
              <span className="text-[11px] uppercase tracking-[0.28em] text-[#CCA300] font-semibold block mb-2">
                Master Barber / Specialist Profile
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#FAF4E8] font-light tracking-tight mb-3">
                {member.name}
              </h1>
              <p className="text-base sm:text-lg text-[#CCA300] font-light">
                {member.role} • Miracle Mile Flagship
              </p>
            </div>

            {/* Factual Information */}
            <div className="space-y-4">
              <h2 className="text-xs uppercase tracking-[0.2em] text-[#9E978B] font-semibold">
                About {member.name}
              </h2>
              <p className="text-base sm:text-lg text-[#D8D2C5] font-light leading-relaxed">
                {member.verifiedInfo} Dedicated to precision, classic techniques, and ensuring every client leaves with exceptional style and restored confidence.
              </p>
            </div>

            {/* Specialties */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#9E978B] font-semibold">
                Areas of Expertise & Focus
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {member.specialties.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3.5 bg-[#181615] border border-[#2A2623] flex items-center gap-3 text-sm text-[#EDE7DC]"
                  >
                    <Scissors className="w-4 h-4 text-[#CCA300] shrink-0" />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="pt-6 space-y-4 border-t border-[#26221F]">
              <div className="bg-[#181615] border border-[#2F2A26] p-6 space-y-4">
                <h4 className="font-serif text-xl text-[#FAF4E8]">
                  Schedule an Appointment with {member.name}
                </h4>
                <p className="text-xs text-[#A39C90] font-light leading-relaxed">
                  Book directly through our Meevo scheduling portal or contact our concierge desk to request {member.name} by name.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/book-appointment"
                    className="flex-1 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#CCA300]/20"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Reserve Online</span>
                  </Link>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="py-3 px-6 text-center text-xs font-medium uppercase tracking-[0.2em] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] hover:text-[#CCA300] transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Concierge</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="mt-28 pt-16 border-t border-[#26221F]">
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block mb-1">
                The Collective
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF4E8] font-light">
                Meet Other Barbers & Specialists
              </h2>
            </div>
            <Link
              href="/team"
              className="text-xs uppercase tracking-[0.16em] text-[#CCA300] hover:text-[#FAF4E8] transition-colors inline-flex items-center gap-1.5"
            >
              <span>View All Team Members</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherMembers.map((other) => (
              <Link
                key={other.slug}
                href={`/team/${other.slug}`}
                className="group bg-[#181615] border border-[#2A2623] hover:border-[#CCA300]/60 p-4 transition-all block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#201D1B] mb-3">
                  <img
                    src={other.image}
                    alt={other.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-serif text-xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                  {other.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#CCA300] font-medium">
                  {other.role}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
