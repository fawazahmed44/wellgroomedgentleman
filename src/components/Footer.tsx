import React from 'react';
import { Link } from '../context/RouterContext';
import { businessInfo } from '../data/siteData';
import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight, Clock, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#0E0D0C] border-t border-[#24201D] text-[#D1C9BC] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#24201D]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.12em] text-[#FAF4E8] uppercase block">
                The Well Groomed Gentleman
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CCA300] font-medium block mt-1">
                Barbershop & Men’s Spa • Coral Gables
              </span>
            </div>

            <p className="text-sm text-[#948D81] leading-relaxed max-w-sm font-light">
              Preserving the art of traditional barbering and delivering timeless cuts, shaves, and comprehensive grooming rituals on Miracle Mile since 2014.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={businessInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none border border-[#2E2925] flex items-center justify-center text-[#B0A99D] hover:text-[#FAF4E8] hover:border-[#CCA300] transition-colors"
                aria-label="The Well Groomed Gentleman on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={businessInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-none border border-[#2E2925] flex items-center justify-center text-[#B0A99D] hover:text-[#FAF4E8] hover:border-[#CCA300] transition-colors"
                aria-label="The Well Groomed Gentleman on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-[#787166] ml-2 tracking-wider uppercase">
                @wellgroomedgentleman
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/discounts" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Discounts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Services column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
              Services
            </span>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/classic-clipper-cut" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Classic Clipper Cut</span>
                  <span className="font-mono text-xs text-[#CCA300]">$40</span>
                </Link>
              </li>
              <li>
                <Link href="/services/signature-cut" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Signature Cut</span>
                  <span className="font-mono text-xs text-[#CCA300]">$55</span>
                </Link>
              </li>
              <li>
                <Link href="/services/fade-cut" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Fade Cut</span>
                  <span className="font-mono text-xs text-[#CCA300]">$50</span>
                </Link>
              </li>
              <li>
                <Link href="/services/hot-lather-shave" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Hot Lather Shave</span>
                  <span className="font-mono text-xs text-[#CCA300]">$45</span>
                </Link>
              </li>
              <li>
                <Link href="/services/facial-treatments" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Facial Treatments</span>
                  <span className="font-mono text-xs text-[#CCA300]">$75+</span>
                </Link>
              </li>
              <li>
                <Link href="/services/manicure" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Men’s Manicure</span>
                  <span className="font-mono text-xs text-[#CCA300]">$32</span>
                </Link>
              </li>
              <li>
                <Link href="/services/pedicure" className="text-[#A39C90] hover:text-[#FAF4E8] transition-colors flex items-center justify-between">
                  <span>Men’s Pedicure</span>
                  <span className="font-mono text-xs text-[#CCA300]">$55</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Column */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold block">
              Location & Hours
            </span>
            <div className="space-y-3 text-sm text-[#A39C90]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#CCA300] shrink-0 mt-0.5" />
                <span>
                  130 Miracle Mile<br />
                  Coral Gables, FL 33134
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#CCA300] shrink-0" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-[#FAF4E8] transition-colors">
                  {businessInfo.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#CCA300] shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-[#FAF4E8] transition-colors break-all">
                  {businessInfo.email}
                </a>
              </div>

              <div className="pt-2 border-t border-[#26221F] space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-[#CCA300] font-medium mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Hours of Operation</span>
                </div>
                <p className="flex justify-between">
                  <span>Mon – Fri:</span>
                  <span className="text-[#FAF4E8]">{businessInfo.hours.weekday}</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-[#FAF4E8]">{businessInfo.hours.saturday}</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-[#FAF4E8]">{businessInfo.hours.sunday}</span>
                </p>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="pt-3 flex flex-col gap-2">
              <Link
                href="/book-appointment"
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] bg-[#CCA300] text-[#141312] hover:bg-[#DFC15C] transition-colors shadow-sm hover:shadow-md hover:shadow-[#CCA300]/20"
              >
                Book Appointment
              </Link>
              <Link
                href="/gift-card"
                className="w-full py-2 text-center text-xs font-medium uppercase tracking-[0.16em] text-[#CCA300] border border-[#332E29] hover:border-[#CCA300] transition-colors"
              >
                Gift Cards
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736D62]">
          <p>
            © {new Date().getFullYear()} The Well Groomed Gentleman. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span>Coral Gables, Florida</span>
            <span>•</span>
            <span>Established 2014</span>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#FAF4E8] transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
