import React from 'react';
import { businessInfo } from '../data/siteData';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { Gift, ExternalLink, Shield, Sparkles, Check, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '../context/RouterContext';

export const GiftCardPage: React.FC = () => {
  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-24 md:pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <ScrollReveal className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              The Gift of Craftsmanship
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Gentlemen’s Gift Cards
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            Give the experience of timeless barbering, hot lather shaves, and comprehensive men’s spa care on Coral Gables’ Miracle Mile.
          </p>
        </ScrollReveal>

        {/* Gift Card Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Card Mockup Visual */}
          <ScrollReveal delay={0.05} className="lg:col-span-6">
            <div className="relative aspect-[1.586/1] max-w-lg mx-auto bg-gradient-to-br from-[#24201D] via-[#1B1817] to-[#121110] border border-[#CCA300]/50 p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-black/80">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-[0.35em] text-[#CCA300] font-semibold block mb-1">
                    Official Gift Certificate
                  </span>
                  <span className="font-serif text-xl sm:text-2xl text-[#FAF4E8] uppercase tracking-wider block">
                    The Well Groomed Gentleman
                  </span>
                </div>
                <div className="w-10 h-10 border border-[#CCA300]/40 flex items-center justify-center text-[#CCA300]">
                  <Gift className="w-5 h-5" />
                </div>
              </div>

              {/* Card Center Chip & Embellishment */}
              <div className="my-6 flex items-center justify-between border-y border-[#2E2824] py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-7 border border-[#52493E] bg-gradient-to-r from-[#94771C]/30 to-[#CCA300]/25" />
                  <span className="text-[10px] font-mono tracking-widest text-[#A39C90]">
                    MIRACLE MILE • EST. 2014
                  </span>
                </div>
                <span className="text-xs font-serif italic text-[#CCA300]">
                  Bespoke Grooming
                </span>
              </div>

              {/* Card Footer */}
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#857E73] block">
                    Redeemable At
                  </span>
                  <span className="text-xs text-[#E0DDD5]">
                    130 Miracle Mile, Coral Gables, FL
                  </span>
                </div>
                <span className="text-[11px] font-mono text-[#CCA300] tracking-wider">
                  Meevo e-Gift
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Details & CTA side */}
          <ScrollReveal delay={0.15} className="lg:col-span-6 space-y-6">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
              Digital & Physical Gift Cards
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF4E8] font-light">
              An Unmatched Experience
            </h2>
            <p className="text-base text-[#C4BCB0] font-light leading-relaxed">
              Available instantly online as an e-gift card or in-store on Miracle Mile as a physical card. Gift cards can be applied toward any service—from Classic Clipper Cuts and Hot Lather Shaves to Manicures, Pedicures, and skincare retail products.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#E0DDD5]">
                <Check className="w-4 h-4 text-[#CCA300] shrink-0" />
                <span>Instantly delivered via email or printed at home</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E0DDD5]">
                <Check className="w-4 h-4 text-[#CCA300] shrink-0" />
                <span>Customizable monetary amounts</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E0DDD5]">
                <Check className="w-4 h-4 text-[#CCA300] shrink-0" />
                <span>Valid for haircuts, shaves, spa therapies, and retail apothecary</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#E0DDD5]">
                <Check className="w-4 h-4 text-[#CCA300] shrink-0" />
                <span>No expiration date or maintenance fees</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={businessInfo.giftCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="purchase-meevo-giftcard-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-all shadow-lg shadow-[#CCA300]/20"
              >
                <Gift className="w-4 h-4" />
                <span>Purchase Gift Card Online</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>

              <a
                href={`tel:${businessInfo.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] border border-[#38322C] hover:border-[#CCA300] text-[#FAF4E8] transition-colors"
              >
                <span>Call For Physical Card</span>
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Popular Service Recommendations For Gift Cards */}
        <ScrollReveal className="border-t border-[#26221F] pt-16">
          <SectionHeader
            number="01"
            badge="Inspiration"
            title="Ideal Services for Gifting"
            subtitle="Recommended Treatment Packages"
            description="Our most popular recipient rituals for birthdays, anniversaries, Father's Day, and milestone celebrations."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#181615] border border-[#2A2623] p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#CCA300] font-semibold">
                The Heritage Ritual
              </span>
              <h4 className="font-serif text-2xl text-[#FAF4E8]">Hot Lather Shave</h4>
              <p className="font-mono text-lg text-[#CCA300]">$45</p>
              <p className="text-xs text-[#A39C90] font-light leading-relaxed">
                A ritual dating back centuries with warm whipped lather, hot towel compresses, facial steam, and straight-razor perfection.
              </p>
            </div>

            <div className="bg-[#181615] border border-[#2A2623] p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#CCA300] font-semibold">
                The Signature Refresh
              </span>
              <h4 className="font-serif text-2xl text-[#FAF4E8]">Signature Cut</h4>
              <p className="font-mono text-lg text-[#CCA300]">$55</p>
              <p className="text-xs text-[#A39C90] font-light leading-relaxed">
                Precision scissors and clippers tailored to personal style, complete with scalp shampoo rinse and styling finish.
              </p>
            </div>

            <div className="bg-[#181615] border border-[#2A2623] p-6 space-y-3">
              <span className="text-[10px] uppercase tracking-wider text-[#CCA300] font-semibold">
                The Executive Treatment
              </span>
              <h4 className="font-serif text-2xl text-[#FAF4E8]">Facial Treatments</h4>
              <p className="font-mono text-lg text-[#CCA300]">$75+</p>
              <p className="text-xs text-[#A39C90] font-light leading-relaxed">
                Dr. Dennis Gross luxury anti-aging and hydrating formulations delivered in-chair or inside our private spa suite.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};
