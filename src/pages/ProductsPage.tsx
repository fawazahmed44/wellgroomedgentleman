import React from 'react';
import { Link } from '../context/RouterContext';
import { productBrands, businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { Check, MapPin, Phone, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';

export const ProductsPage: React.FC = () => {
  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <div className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              The Grooming Apothecary
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Curated Products
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            We hand-selected a high-performance line of barbering and skincare products for our treatments to ensure an elevated experience and maximum results. Available for purchase in our Miracle Mile retail shop.
          </p>
        </div>

        {/* In-Store Retail Banner */}
        <div className="bg-[#181615] border border-[#2A2623] p-6 mb-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-[#CCA300]/40 flex items-center justify-center text-[#CCA300] shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-[#FAF4E8] font-medium">
                Miracle Mile Retail & Barber Apothecary
              </p>
              <p className="text-xs text-[#A39C90] font-light">
                All curated formulations are stocked and available directly at 130 Miracle Mile, Coral Gables.
              </p>
            </div>
          </div>
          <a
            href={`tel:${businessInfo.phoneRaw}`}
            className="text-xs uppercase tracking-[0.16em] text-[#CCA300] hover:text-[#FAF4E8] font-semibold transition-colors shrink-0"
          >
            Inquire By Phone: {businessInfo.phone}
          </a>
        </div>

        {/* Detailed Brand Lineup */}
        <div className="space-y-24">
          {productBrands.map((brand, index) => (
            <div
              key={brand.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center border-b border-[#24201D] pb-24"
            >
              {/* Image side */}
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[16/11] overflow-hidden border border-[#2A2623] bg-[#181615] group">
                  <img
                    src={brand.image}
                    alt={`${brand.name} at The Well Groomed Gentleman`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/70 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-[#141312]/90 border border-[#2F2A26] text-[10px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold">
                      {brand.subtitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Text / Details side */}
              <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div>
                  <span className="font-mono text-xs text-[#CCA300] tracking-widest block mb-2">
                    BRAND 0{index + 1}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[#9E978B] font-semibold block mb-1">
                    {brand.category}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF4E8] font-light">
                    {brand.name}
                  </h2>
                </div>

                <p className="text-base sm:text-lg text-[#BDB5A8] font-light leading-relaxed">
                  {brand.description}
                </p>

                <div className="space-y-3 pt-2">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#9E978B] font-semibold">
                    Featured Formulations & Essentials
                  </h3>
                  <ul className="space-y-2.5">
                    {brand.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[#D8D2C5] font-light">
                        <Check className="w-4 h-4 text-[#CCA300] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.16em] bg-[#1E1B19] border border-[#332E29] hover:border-[#CCA300] text-[#FAF4E8] transition-colors font-medium"
                  >
                    <span>Visit Shop In Coral Gables</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience with Treatment CTA */}
        <div className="mt-20 bg-[#181615] border border-[#2A2623] p-8 md:p-12 text-center max-w-3xl mx-auto space-y-6">
          <h3 className="font-serif text-3xl text-[#FAF4E8] font-light">
            Formulations Applied In Every Ritual
          </h3>
          <p className="text-sm text-[#A39C90] leading-relaxed font-light">
            Experience Reuzel pomades and Dr. Dennis Gross skincare firsthand during our Classic Clipper Cuts, Hot Lather Shaves, and Spa Facials.
          </p>
          <div className="pt-2">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors shadow-lg shadow-[#CCA300]/20"
            >
              <span>Explore Our Services Menu</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
