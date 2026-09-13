import React from 'react';
import { Link } from '../context/RouterContext';
import { teamMembers, businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, Calendar, Scissors, Sparkles, MapPin } from 'lucide-react';

export const TeamPage: React.FC = () => {
  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              The Craftsmen & Specialists
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Our Master Team
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            Our resident barbers and grooming specialists represent decades of collective dedication to traditional scissor cutting, razor craftsmanship, and advanced men’s spa care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Link
              key={member.slug}
              href={`/team/${member.slug}`}
              className="group bg-[#181615] border border-[#2A2623] hover:border-[#CCA300]/60 p-5 transition-all duration-300 block flex flex-col justify-between"
            >
              <div>
                {/* Member Portrait */}
                <div className="aspect-[3/4] overflow-hidden bg-[#201D1B] mb-5 relative border border-[#2E2925]">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-50" />
                </div>

                <div className="space-y-1 mb-3">
                  <h2 className="font-serif text-2xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                    {member.name}
                  </h2>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#CCA300] font-medium">
                    {member.role}
                  </p>
                </div>

                <p className="text-xs text-[#9E978B] font-light leading-relaxed mb-4">
                  {member.verifiedInfo}
                </p>

                {/* Specialties tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#26221F]">
                  {member.specialties.map((spec, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] bg-[#11100F] border border-[#2B2724] text-[#C4BCB0]"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#26221F] flex items-center justify-between text-xs text-[#FAF4E8] group-hover:text-[#CCA300] uppercase tracking-[0.15em] font-medium">
                <span>View Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Career / Join the Team Note as on source site */}
        <div className="mt-24 bg-[#181615] border border-[#2A2623] p-8 md:p-12 text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
            Opportunities
          </span>
          <h3 className="font-serif text-3xl text-[#FAF4E8] font-light">
            Interested in Working With Us?
          </h3>
          <p className="text-sm text-[#A39C90] leading-relaxed font-light">
            We are always seeking passionate, talented master barbers and licensed grooming specialists to join our Miracle Mile family.
          </p>
          <div className="pt-2">
            <a
              href="mailto:info@thewellgroomedgentleman.com?subject=Job%20Opportunities"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] bg-[#221F1C] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] hover:text-[#CCA300] transition-colors"
            >
              <span>Get in Touch Regarding Careers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
