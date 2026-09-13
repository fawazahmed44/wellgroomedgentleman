import React from 'react';
import { Link } from '../context/RouterContext';
import { discounts, businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { Shield, GraduationCap, Dumbbell, Flame, CheckCircle, Calendar, ArrowRight, Info } from 'lucide-react';

export const DiscountsPage: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'veterans':
        return <Shield className="w-6 h-6 text-[#CCA300]" />;
      case 'first-responders':
        return <Flame className="w-6 h-6 text-[#CCA300]" />;
      case 'um-students-faculty':
        return <GraduationCap className="w-6 h-6 text-[#CCA300]" />;
      case 'anatomy-fitness':
        return <Dumbbell className="w-6 h-6 text-[#CCA300]" />;
      default:
        return <Shield className="w-6 h-6 text-[#CCA300]" />;
    }
  };

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              Community Appreciation
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Discounts & Promotions
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            We are proud to serve our local community in Coral Gables and Miami. We offer dedicated discounts across all haircut, shaving, and spa grooming services for our veterans, first responders, and local partners.
          </p>
        </div>

        {/* Instruction Notice Banner */}
        <div className="bg-[#181615] border border-[#2D2825] p-6 mb-16 flex items-start gap-4">
          <div className="p-2 border border-[#CCA300]/40 text-[#CCA300] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#FAF4E8] mb-1">
              How to Redeem Your Discount
            </h2>
            <p className="text-xs sm:text-sm text-[#B8B0A2] font-light leading-relaxed">
              Customers should notify their barber at checkout and bring their relevant ID (Military ID, Department badge, current CaneID, or Anatomy Fitness credentials) at the time of payment.
            </p>
          </div>
        </div>

        {/* Discounts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {discounts.map((item) => (
            <div
              key={item.id}
              className="bg-[#181615] border border-[#2A2623] p-8 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-12 h-12 border border-[#332E29] flex items-center justify-center bg-[#201D1B]">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-xl sm:text-2xl text-[#CCA300] font-light bg-[#221F1C] px-4 py-1.5 border border-[#332E29]">
                    {item.discount}
                  </span>
                </div>

                <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E978B] font-semibold block mb-1">
                  Applies to {item.scope}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF4E8] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A39C90] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#26221F]">
                <div className="flex items-start gap-2.5 text-xs text-[#CCA300] font-medium">
                  <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{item.requirement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Booking CTA Banner */}
        <div className="bg-[#181615] border border-[#2A2623] p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl text-[#FAF4E8] font-light">
            Ready to Reserve Your Chair?
          </h3>
          <p className="text-sm text-[#A39C90] leading-relaxed font-light">
            Book online anytime. Your promotional discount will be calculated and applied at our Miracle Mile checkout desk.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors inline-flex items-center justify-center gap-2 shadow-md shadow-[#CCA300]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-medium uppercase tracking-[0.18em] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] transition-colors"
            >
              <span>Explore Services</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
