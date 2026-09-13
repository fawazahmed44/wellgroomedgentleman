import React from 'react';
import { Link } from '../context/RouterContext';
import { businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { MapPin, Calendar, Clock, Scissors, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-20">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              Our Story & Ethos
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Preserving Tradition. <br />
            Defining Refinement.
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            Located on Miracle Mile in Coral Gables since 2014, The Well Groomed Gentleman was founded to honor classic barber craftsmanship while delivering modern spa therapies for the discerning man.
          </p>
        </div>

        {/* Narrative Section with Real Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-28">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeader
              number="01"
              badge="The Sanctuary"
              title="A Space Founded for Gentlemen"
              subtitle="Coral Gables, Florida"
            />
            <div className="space-y-4 text-[#BDB5A8] text-base leading-relaxed font-light">
              <p>
                Welcome to The Well Groomed Gentleman. We preserve the art of traditional barbering by delivering timeless cuts and shaves with unmatched precision.
              </p>
              <p>
                We offer a comprehensive selection of grooming and spa services to cater to the refined, modern gentleman. We aim to foster a community among gentlemen in our welcoming space and have been proudly located on Miracle Mile in Coral Gables since 2014.
              </p>
              <p>
                Every detail of our establishment—from our custom leather barber chairs and dedicated wash bays to our open courtyard patio and private treatment suites—is curated to ensure relaxation and elevated confidence.
              </p>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#26221F]">
              <div>
                <span className="font-serif text-3xl text-[#CCA300] block font-light">2014</span>
                <span className="text-[11px] uppercase tracking-wider text-[#948D81]">Established</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#CCA300] block font-light">130</span>
                <span className="text-[11px] uppercase tracking-wider text-[#948D81]">Miracle Mile</span>
              </div>
              <div>
                <span className="font-serif text-3xl text-[#CCA300] block font-light">7</span>
                <span className="text-[11px] uppercase tracking-wider text-[#948D81]">Days a Week</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden border border-[#2B2724] bg-[#181615]">
                <img
                  src="/assets/images/clean-barber-chairs.jpg"
                  alt="Clean barber chairs at The Well Groomed Gentleman"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#181615] border border-[#332E29] p-6 max-w-xs shadow-2xl hidden sm:block">
                <span className="text-xs uppercase tracking-[0.2em] text-[#CCA300] font-semibold block mb-1">
                  Craftsmanship
                </span>
                <p className="text-xs text-[#A39C90] font-light leading-relaxed">
                  Precision scissor cuts, straight-razor hot lather shaves, and personalized grooming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars of Experience */}
        <div className="py-20 border-t border-[#24201D] mb-28">
          <SectionHeader
            number="02"
            badge="The Standards"
            title="The Well Groomed Pillars"
            subtitle="Precision & Hospitality"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#181615] border border-[#2A2623] p-8 space-y-4">
              <div className="w-10 h-10 border border-[#CCA300]/40 flex items-center justify-center text-[#CCA300]">
                <Scissors className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#FAF4E8]">
                Traditional Barbering
              </h3>
              <p className="text-sm text-[#A39C90] leading-relaxed font-light">
                Preserving timeless barber techniques dating back centuries. Warm lather, hot towel compresses, and straight-razor precision that modern automated tools cannot duplicate.
              </p>
            </div>

            <div className="bg-[#181615] border border-[#2A2623] p-8 space-y-4">
              <div className="w-10 h-10 border border-[#CCA300]/40 flex items-center justify-center text-[#CCA300]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#FAF4E8]">
                Modern Grooming & Spa
              </h3>
              <p className="text-sm text-[#A39C90] leading-relaxed font-light">
                Comprehensive spa care formulated specifically for men, including in-chair express facials with Dr. Dennis Gross skincare, manicures, pedicures, and PHYTO scalp treatments.
              </p>
            </div>

            <div className="bg-[#181615] border border-[#2A2623] p-8 space-y-4">
              <div className="w-10 h-10 border border-[#CCA300]/40 flex items-center justify-center text-[#CCA300]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-2xl text-[#FAF4E8]">
                Community of Gentlemen
              </h3>
              <p className="text-sm text-[#A39C90] leading-relaxed font-light">
                More than an appointment—a trusted gathering place. From relaxing in our courtyard patio to conversation over refreshments, we foster an authentic brotherhood in Coral Gables.
              </p>
            </div>
          </div>
        </div>

        {/* Real Location Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#171514] border border-[#2B2724] p-8 md:p-12">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
              Destination
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
              Miracle Mile, Coral Gables
            </h2>
            <p className="text-[#A39C90] text-sm md:text-base leading-relaxed font-light">
              Centrally located on Coral Gables’ historic Miracle Mile, our location offers seamless accessibility, convenient street and garage parking, and proximity to Miami’s finest dining and business districts.
            </p>
            <div className="space-y-2 text-sm text-[#D1C9BC] font-light">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#CCA300]" />
                <span>130 Miracle Mile, Coral Gables, FL 33134</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#CCA300]" />
                <span>Monday–Friday 8am–8pm • Saturday 8am–7pm • Sunday 9am–6pm</span>
              </p>
            </div>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/book-appointment"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors inline-flex items-center gap-2 shadow-md shadow-[#CCA300]/20"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Your Appointment</span>
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] border border-[#332E29] hover:border-[#CCA300] text-[#FAF4E8] transition-colors"
              >
                <span>View Contact & Map</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-[4/3] overflow-hidden border border-[#2F2A26]">
              <img
                src="/assets/images/patio-lounge.jpg"
                alt="Courtyard patio lounge on Miracle Mile"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
