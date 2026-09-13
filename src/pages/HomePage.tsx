import React from 'react';
import { Link } from '../context/RouterContext';
import { services, teamMembers, discounts, productBrands, businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { ArrowRight, Calendar, Sparkles, MapPin, Clock, Shield, Scissors, Sparkle } from 'lucide-react';
import { motion } from 'motion/react';

export const HomePage: React.FC = () => {
  const cutsAndShaves = services.filter((s) => s.category === 'cuts-shaves');
  const groomingServices = services.filter((s) => s.category === 'grooming');

  return (
    <div className="bg-[#141312] text-[#EDE7DC]">
      {/* =========================================================================
          HERO SECTION
          Cinematic, luxury editorial hero with authentic barber gold accents
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background Image with warm obsidian gradient scrims */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-barber-chairs.jpg"
            alt="Classic Barber Chairs at The Well Groomed Gentleman in Coral Gables"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.38] contrast-[1.12]"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-[#141312]/50 to-[#141312]/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#141312]/40 to-[#141312]/95" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Subtle Motif Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 border border-[#CCA300]/40 bg-[#141312]/85 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-[#CCA300] font-semibold">
              Miracle Mile • Coral Gables • Since 2014
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#FAF4E8] tracking-tight font-normal leading-[1.05] mb-6 uppercase"
          >
            The Well Groomed <br className="hidden sm:inline" />
            <span className="italic font-light text-[#DFC15C]">Gentleman</span>
          </motion.h1>

          {/* Slogan from original website */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-lg text-[#C4BCB0] tracking-[0.22em] uppercase max-w-2xl mx-auto font-light mb-10"
          >
            Traditional Barbering. Modern Grooming. Timeless Style.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <Link
              href="/book-appointment"
              id="hero-book-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-all duration-300 shadow-lg shadow-[#CCA300]/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>

            <Link
              href="/services"
              id="hero-services-cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#FAF4E8] border border-[#38332E] hover:border-[#CCA300] hover:text-[#CCA300] transition-all duration-300 bg-[#141312]/60 backdrop-blur-sm"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bottom indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-[#827B70] text-[10px] uppercase tracking-[0.25em] flex flex-col items-center gap-2">
          <span>Scroll To Discover</span>
          <div className="w-px h-6 bg-gradient-to-b from-[#CCA300] to-transparent animate-pulse" />
        </div>
      </section>

      {/* Editorial Highlights Ribbon */}
      <div className="border-y border-[#26221F] bg-[#100F0E] py-4 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8 text-[11px] uppercase tracking-[0.24em] text-[#A39C90] whitespace-nowrap font-medium">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span>Traditional Hot Lather Straight Razor Shaves</span>
          </div>
          <span className="text-[#36312C] hidden md:inline">•</span>
          <div className="hidden md:flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span>Open-Air Courtyard Patio & Private Lounge</span>
          </div>
          <span className="text-[#36312C] hidden lg:inline">•</span>
          <div className="hidden lg:flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span>130 Miracle Mile • Coral Gables</span>
          </div>
          <span className="text-[#36312C] hidden sm:inline">•</span>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span>Master Artisans Established 2014</span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 01: BRAND INTRO
          Factual editorial storytelling grounded strictly in source website text
         ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#24201D] relative bg-[#141312]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Editorial narrative */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                number="01"
                badge="Heritage & Community"
                title="Preserving the Art of Traditional Barbering"
                subtitle="Miracle Mile • Coral Gables"
              />

              <div className="space-y-5 text-[#BDB5A8] text-base md:text-lg leading-relaxed font-light">
                <p>
                  Welcome to <strong className="text-[#FAF4E8] font-medium">The Well Groomed Gentleman</strong>. We preserve the art of traditional barbering by delivering timeless cuts and shaves with unmatched precision.
                </p>
                <p>
                  We offer a comprehensive selection of grooming and spa services to cater to the refined, modern gentleman. We aim to foster a community among gentlemen in our welcoming space and have been proudly located on Miracle Mile in Coral Gables since 2014.
                </p>
              </div>

              {/* Factual Highlights Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#2A2622]">
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#CCA300] font-light">2014</span>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#9E978B] mt-1 font-medium">
                    Serving Coral Gables
                  </p>
                </div>
                <div>
                  <span className="font-serif text-3xl sm:text-4xl text-[#CCA300] font-light">130</span>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#9E978B] mt-1 font-medium">
                    Miracle Mile Address
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#CCA300] hover:text-[#FAF4E8] transition-colors font-semibold"
                >
                  <span>Learn About Our Story</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Real Image Composition with Asymmetric Double Frame */}
            <div className="lg:col-span-6">
              <div className="relative group p-2">
                {/* Decorative border offset */}
                <div className="absolute inset-0 border border-[#CCA300]/25 -translate-x-2 -translate-y-2 pointer-events-none transition-transform group-hover:translate-x-0 group-hover:translate-y-0 duration-500" />
                
                <div className="relative aspect-[4/5] overflow-hidden border border-[#2B2724] bg-[#1A1817]">
                  <img
                    src="/assets/images/barber-stations-side.jpg"
                    alt="Interior view of barber stations at The Well Groomed Gentleman"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-70" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#141312]/90 backdrop-blur-md border border-[#2E2A26] flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[#CCA300] font-semibold">
                        Miracle Mile Barber Sanctuary
                      </p>
                      <p className="text-[11px] text-[#A39C90] mt-0.5">Precision stations & bespoke grooming chairs</p>
                    </div>
                    <Scissors className="w-4 h-4 text-[#CCA300]" />
                  </div>
                </div>

                {/* Floating secondary badge */}
                <div className="hidden sm:block absolute -top-4 -right-4 bg-[#1B1917] border border-[#CCA300]/50 p-4 shadow-2xl">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#CCA300] font-semibold block">
                    Bespoke Spa
                  </span>
                  <span className="text-xs text-[#FAF4E8] font-serif italic">
                    In-Chair & Private Suites
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 02: SIGNATURE SERVICES DIRECTORY
          Organized into CUTS & SHAVES and GROOMING with exact prices and links
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#100F0E] border-b border-[#24201D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              number="02"
              badge="Curated Treatments"
              title="Signature Services"
              subtitle="Precision Barbering & Men's Spa"
              description="Each service is delivered with dedicated craftsmanship, luxury botanicals, and meticulous attention to detail."
              className="mb-0"
            />
            <Link
              href="/services"
              className="self-start md:self-end inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] border border-[#332E29] hover:border-[#CCA300] text-[#EDE7DC] hover:text-[#CCA300] transition-colors bg-[#141312]/60"
            >
              <span>View Full Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Subsection: Cuts & Shaves */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8 border-b border-[#26221F] pb-3">
              <span className="font-serif text-2xl text-[#FAF4E8] tracking-wide">
                Cuts & Shaves
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#CCA300]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cutsAndShaves.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative bg-[#171514] border border-[#292522] hover:border-[#CCA300]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    {/* Image Header */}
                    <div className="aspect-[16/10] overflow-hidden mb-5 bg-[#1F1C1A]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-mono text-base text-[#CCA300] font-semibold shrink-0">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#9E978B] leading-relaxed line-clamp-2 mb-4 font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#24201D] flex items-center justify-between text-xs text-[#CCA300] uppercase tracking-[0.16em] font-medium">
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Subsection: Grooming & Spa */}
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-[#26221F] pb-3">
              <span className="font-serif text-2xl text-[#FAF4E8] tracking-wide">
                Grooming & Spa
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-[#CCA300]/40 to-transparent" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groomingServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative bg-[#171514] border border-[#292522] hover:border-[#CCA300]/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    <div className="aspect-[16/10] overflow-hidden mb-5 bg-[#1F1C1A]">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="font-serif text-xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                        {service.name}
                      </h3>
                      <span className="font-mono text-sm text-[#CCA300] font-semibold shrink-0 text-right">
                        {service.price}
                      </span>
                    </div>

                    <p className="text-xs text-[#9E978B] leading-relaxed line-clamp-2 mb-4 font-light">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#24201D] flex items-center justify-between text-xs text-[#CCA300] uppercase tracking-[0.16em] font-medium">
                    <span>View Service</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03: MASTER BARBERS (Team Preview)
          Featuring verified team members from the source site
         ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#24201D] bg-[#141312]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              number="03"
              badge="Artisans of the Craft"
              title="Our Master Team"
              subtitle="Coral Gables Barbers & Specialists"
              description="Meet the experienced professionals dedicated to precision haircuts, traditional hot lather shaves, and refined spa grooming."
              className="mb-0"
            />
            <Link
              href="/team"
              className="self-start md:self-end inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.18em] border border-[#332E29] hover:border-[#CCA300] text-[#EDE7DC] hover:text-[#CCA300] transition-colors"
            >
              <span>View All Team Members</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.slice(0, 4).map((member) => (
              <Link
                key={member.slug}
                href={`/team/${member.slug}`}
                className="group relative bg-[#181615] border border-[#2B2724] hover:border-[#CCA300]/70 p-4 transition-all duration-300 block"
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#201D1B] mb-4 relative">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312] via-transparent to-transparent opacity-65" />
                </div>
                <h3 className="font-serif text-lg text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#CCA300] font-medium mt-0.5">
                  {member.role}
                </p>
                <div className="mt-3 pt-2 border-t border-[#26221F] flex items-center justify-between text-[11px] text-[#948D81]">
                  <span>Meet {member.name}</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04: HIGH-PERFORMANCE PRODUCTS PREVIEW
          Reuzel, Dr. Dennis Gross, and Cymbiotika
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#100F0E] border-b border-[#24201D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            number="04"
            badge="Curated Formulations"
            title="High-Performance Products"
            subtitle="Barbering, Skincare & Vitality"
            description="We hand-selected a high-performance line of barbering and skincare products for our treatments to ensure an elevated experience and maximum results. Available in our retail shop."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-[#171514] border border-[#2A2623] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/11] overflow-hidden mb-6 bg-[#201D1B]">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold block mb-1">
                    {brand.category}
                  </span>
                  <h3 className="font-serif text-2xl text-[#FAF4E8] mb-2">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-[#A39C90] leading-relaxed font-light mb-6">
                    {brand.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#26221F]">
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#FAF4E8] hover:text-[#CCA300] transition-colors font-medium"
                  >
                    <span>View Catalog Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05: ATMOSPHERE & COURTYARD PATIO
          Visual preview into the lounge, patio, and amenities with asymmetric bento
         ========================================================================= */}
      <section className="py-24 md:py-32 border-b border-[#24201D] bg-[#141312] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeader
                number="05"
                badge="The Environment"
                title="A Gathering Place for Gentlemen"
                subtitle="Miracle Mile Courtyard & Lounge"
              />
              <p className="text-[#B5AEA1] text-base leading-relaxed font-light">
                Step off Miracle Mile into an atmosphere conceived for relaxation. Unwind with curated refreshments in our private lounge, enjoy the Florida breeze on our open-air courtyard patio, or settle into our handcrafted barber chairs for an unhurried ritual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors shadow-md shadow-[#CCA300]/20"
                >
                  <span>Explore Gallery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.18em] border border-[#332E29] hover:border-[#CCA300] text-[#FAF4E8] hover:text-[#CCA300] transition-colors"
                >
                  <span>Visit Location</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] overflow-hidden border border-[#2A2623] group">
                  <img
                    src="/assets/images/patio-lounge.jpg"
                    alt="Courtyard patio at The Well Groomed Gentleman"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[16/10] overflow-hidden border border-[#2A2623] group">
                  <img
                    src="/assets/images/barber-lounge-cocktails.jpg"
                    alt="Lounge refreshments at The Well Groomed Gentleman"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[16/10] overflow-hidden border border-[#2A2623] group">
                  <img
                    src="/assets/images/mens-lounge-interior.jpg"
                    alt="Gentlemen's lounge interior"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden border border-[#2A2623] group">
                  <img
                    src="/assets/images/clean-barber-chairs.jpg"
                    alt="Barber chair stations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06: COMMUNITY DISCOUNTS
          Veterans, First Responders, UM Students & Faculty, Anatomy Fitness
         ========================================================================= */}
      <section className="py-24 md:py-32 bg-[#100F0E] border-b border-[#24201D]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeader
            number="06"
            badge="Local Community"
            title="Discounts & Promotions"
            subtitle="Honoring Our Neighbors & Heroes"
            description="We are proud to serve the local community in Coral Gables and Miami. Please notify your barber during checkout and bring your relevant ID."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discounts.map((item) => (
              <div
                key={item.id}
                className="bg-[#171514] border border-[#2A2623] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-[#CCA300]/15 border border-[#CCA300]/40 text-[#CCA300] text-xs font-mono font-semibold tracking-wider mb-4">
                    {item.discount}
                  </div>
                  <h3 className="font-serif text-xl text-[#FAF4E8] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#9E978B] leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>
                <p className="text-[11px] text-[#CCA300] border-t border-[#24201D] pt-3 font-medium">
                  {item.requirement}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/discounts"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#CCA300] hover:text-[#FAF4E8] transition-colors font-medium"
            >
              <span>Read Full Discount Terms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 07: APPOINTMENT CALL TO ACTION GATEWAY
         ========================================================================= */}
      <section className="relative py-28 overflow-hidden bg-[#141312]">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero-barber-chairs.jpg"
            alt=""
            className="w-full h-full object-cover filter brightness-[0.22] contrast-[1.12]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141312] via-[#141312]/85 to-[#141312]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#CCA300] font-semibold">
            Reserve Your Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#FAF4E8] tracking-tight font-light leading-tight">
            Elevate Your Grooming Standard
          </h2>
          <p className="text-sm md:text-base text-[#BDB5A8] max-w-2xl mx-auto font-light leading-relaxed">
            Appointments available Monday through Sunday. Experience the unmatched precision of Coral Gables’ premier barbering and spa destination.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-all duration-300 shadow-xl shadow-[#CCA300]/25"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
            <Link
              href="/gift-card"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] border border-[#38332E] hover:border-[#CCA300] text-[#FAF4E8] transition-all duration-300"
            >
              <span>Purchase Gift Card</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
