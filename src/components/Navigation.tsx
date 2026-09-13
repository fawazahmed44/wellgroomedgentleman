import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { businessInfo } from '../data/siteData';
import { Menu, X, ArrowRight, Calendar, Gift, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navigation: React.FC = () => {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Discounts', href: '/discounts' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      {/* Top micro bar for telephone & location */}
      <div className={`hidden lg:block bg-[#0E0D0C] text-[#A39C90] text-[11px] border-b border-[#23201D] tracking-wider transition-all duration-300 ${
        isScrolled ? 'h-0 py-0 opacity-0 overflow-hidden border-none' : 'py-2 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-[#CCA300] transition-colors">
              <MapPin className="w-3.5 h-3.5 text-[#CCA300]" />
              130 Miracle Mile, Coral Gables, FL 33134
            </span>
            <span className="text-[#36312C]">•</span>
            <span className="text-[#8A8478]">Open Today: 8:00 AM – 8:00 PM</span>
          </div>
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${businessInfo.phoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-[#FAF4E8] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#CCA300]" />
              {businessInfo.phone}
            </a>
            <Link 
              href="/gift-card" 
              className="hover:text-[#CCA300] transition-colors flex items-center gap-1 font-medium"
            >
              <Gift className="w-3.5 h-3.5 text-[#CCA300]" />
              Gift Cards
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141312]/95 backdrop-blur-md py-3.5 border-b border-[#2E2A26] shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-[#141312]/95 via-[#141312]/75 to-transparent py-5 lg:top-[33px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex flex-col focus:outline-none"
            aria-label="The Well Groomed Gentleman - Home"
          >
            <span className="font-serif text-lg sm:text-xl md:text-2xl tracking-[0.12em] text-[#FAF4E8] font-normal uppercase group-hover:text-[#CCA300] transition-colors">
              The Well Groomed Gentleman
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-[#CCA300] font-medium -mt-0.5">
              Coral Gables • Est. 2014
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 ${
                    isActive ? 'text-[#CCA300]' : 'text-[#D1C9BC] hover:text-[#FAF4E8]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#CCA300]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/gift-card"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs uppercase tracking-[0.15em] font-medium text-[#D1C9BC] hover:text-[#CCA300] transition-colors"
            >
              <Gift className="w-3.5 h-3.5 text-[#CCA300]" />
              Gift Card
            </Link>

            <Link
              href="/book-appointment"
              id="nav-book-appointment-btn"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#141312] bg-[#CCA300] hover:bg-[#DFC15C] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#CCA300]/25"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 xl:hidden">
            <Link
              href="/book-appointment"
              className="sm:hidden px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#141312] bg-[#CCA300]"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EDE7DC] hover:text-[#CCA300] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#100F0E]/98 backdrop-blur-xl pt-28 pb-12 px-6 flex flex-col justify-between overflow-y-auto xl:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#CCA300] font-semibold border-b border-[#282420] pb-3">
                Navigation
              </span>
              <nav className="flex flex-col gap-5">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.href || (link.href !== '/' && currentPath.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between text-2xl font-serif tracking-wide py-1 transition-colors ${
                        isActive ? 'text-[#CCA300]' : 'text-[#FAF4E8] hover:text-[#CCA300]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ArrowRight className="w-4 h-4 text-[#CCA300]/50" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-[#282420] flex flex-col gap-3">
                <Link
                  href="/book-appointment"
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#141312] bg-[#CCA300] hover:bg-[#DFC15C] transition-colors"
                >
                  Book Appointment
                </Link>
                <Link
                  href="/gift-card"
                  className="w-full py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#EDE7DC] border border-[#332E29] hover:border-[#CCA300] transition-colors"
                >
                  Purchase Gift Card
                </Link>
              </div>
            </div>

            <div className="pt-8 border-t border-[#221F1C] flex flex-col gap-2 text-xs text-[#8A8478]">
              <div className="flex items-center gap-2 text-[#CCA300]">
                <MapPin className="w-3.5 h-3.5" />
                <span>130 Miracle Mile, Coral Gables, FL 33134</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#CCA300]" />
                <a href={`tel:${businessInfo.phoneRaw}`} className="hover:text-white transition-colors">
                  {businessInfo.phone}
                </a>
              </div>
              <p className="mt-2 text-[11px] text-[#635E56]">Monday–Friday 8am–8pm • Saturday 8am–7pm • Sunday 9am–6pm</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
