import React, { useState, useEffect, useRef } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { businessInfo } from '../data/siteData';
import {
  MoreVertical,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Calendar,
  Gift,
  Phone,
  MapPin,
  Scissors,
  Sparkles,
  Users,
  Image,
  ShoppingBag,
  Tag,
  Clock,
  Compass,
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

interface SubNavItem {
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag?: string;
}

interface NavCategory {
  id: string;
  name: string;
  href?: string;
  subItems?: SubNavItem[];
}

export const Navigation: React.FC = () => {
  const { currentPath } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  // Default first category expanded on mobile for immediate visual discovery
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>('services');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [currentPath]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMouseEnter = (catId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(catId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  // Structured, categorized navigation options for a modern luxury UX
  const navCategories: NavCategory[] = [
    {
      id: 'services',
      name: 'Services',
      href: '/services',
      subItems: [
        {
          name: 'All Treatments & Pricing',
          href: '/services',
          description: 'Explore full bespoke menu of cuts, shaves & spa care',
          icon: Scissors,
          tag: 'Full Menu',
        },
        {
          name: 'Haircuts & Styling',
          href: '/services/signature-cut',
          description: 'Precision shear work, custom scissor fade & blow styling',
          icon: Scissors,
        },
        {
          name: 'Straight Razor Shaves',
          href: '/services/classic-straight-razor-shave',
          description: 'Aromatic hot towels, badger brush lather & straight razor finish',
          icon: Sparkles,
        },
        {
          name: 'Facials & Skincare',
          href: '/services/deep-cleansing-facial',
          description: 'Deep pore cleansing, steam extraction & customized mask rituals',
          icon: Sparkles,
        },
        {
          name: 'Massage & Nail Care',
          href: '/services/executive-manicure',
          description: 'Therapeutic muscle relief, executive manicures & pedicures',
          icon: Clock,
        },
      ],
    },
    {
      id: 'the-house',
      name: 'The House',
      subItems: [
        {
          name: 'Our Heritage & Story',
          href: '/about',
          description: 'Miracle Mile flagship founded in 2014, barber traditions & lounge',
          icon: Compass,
        },
        {
          name: 'Master Barbers & Team',
          href: '/team',
          description: 'Meet our experienced barbers, master stylists & spa therapists',
          icon: Users,
          tag: 'Artisans',
        },
        {
          name: 'Studio Gallery & Courtyard',
          href: '/gallery',
          description: 'Tour our vintage Belmont chairs, courtyard patio & private spa suites',
          icon: Image,
        },
      ],
    },
    {
      id: 'apothecary',
      name: 'Apothecary & Perks',
      subItems: [
        {
          name: 'Curated Grooming Products',
          href: '/products',
          description: '18.21 Man Made, Moroccanoil, Truefitt & Hill retail apothecary',
          icon: ShoppingBag,
          tag: 'In-Store',
        },
        {
          name: 'Gift Cards',
          href: '/gift-card',
          description: 'Physical & digital gift vouchers delivered instantly for all occasions',
          icon: Gift,
        },
        {
          name: 'Community Discounts',
          href: '/discounts',
          description: 'Special 10%–20% privileges for Military, CaneID, First Responders & Anatomy',
          icon: Tag,
        },
      ],
    },
    {
      id: 'contact',
      name: 'Contact',
      href: '/contact',
    },
  ];

  const isCategoryActive = (category: NavCategory) => {
    if (category.href && currentPath === category.href) return true;
    if (category.subItems) {
      return category.subItems.some((sub) => currentPath === sub.href || (sub.href !== '/' && currentPath.startsWith(sub.href)));
    }
    return false;
  };

  return (
    <>
      {/* Modern, Categorized Luxury Navigation Header */}
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-[100vw] ${
          isScrolled
            ? 'h-16 sm:h-18 bg-[#141312]/92 backdrop-blur-xl border-b border-[#CCA300]/25 shadow-2xl shadow-black/70'
            : 'h-18 sm:h-20 bg-[#141312]/85 backdrop-blur-md border-b border-white/[0.05]'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto h-full px-3 sm:px-6 lg:px-10 flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Brand Mark with Generous Negative Space & Responsive Scaling */}
          <div className="flex items-center min-w-0 flex-1 pr-1.5 sm:pr-4 lg:flex-initial lg:mr-8 xl:mr-12">
            <Link
              href="/"
              className="group flex flex-col focus:outline-none min-w-0 max-w-full"
              aria-label="The Well Groomed Gentleman - Home"
            >
              <span className="font-serif text-[12px] sm:text-base md:text-xl tracking-[0.04em] sm:tracking-[0.14em] text-[#FAF4E8] font-normal uppercase group-hover:text-[#CCA300] transition-colors leading-tight truncate">
                The Well Groomed Gentleman
              </span>
              <span className="text-[7px] sm:text-[9px] uppercase tracking-[0.16em] sm:tracking-[0.3em] text-[#CCA300] font-medium mt-0.5 leading-none truncate">
                Coral Gables • Est. 2014
              </span>
            </Link>
          </div>

          {/* Categorized Desktop Navigation (Minimal 4 Top-Level Options with Rich Sub-Menus) */}
          <div ref={navContainerRef} className="hidden lg:flex items-center gap-7 xl:gap-9">
            <nav className="flex items-center gap-6 xl:gap-8 text-[12px] tracking-[0.16em] uppercase font-medium" aria-label="Main Navigation">
              {navCategories.map((category) => {
                const hasSub = Boolean(category.subItems && category.subItems.length > 0);
                const isOpen = openDropdown === category.id;
                const active = isCategoryActive(category);

                return (
                  <div
                    key={category.id}
                    className="relative"
                    onMouseEnter={() => hasSub && handleMouseEnter(category.id)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {hasSub ? (
                      <button
                        type="button"
                        onClick={() => setOpenDropdown(isOpen ? null : category.id)}
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        className={`group inline-flex items-center gap-1.5 py-2.5 transition-colors duration-200 outline-none cursor-pointer whitespace-nowrap ${
                          active || isOpen ? 'text-[#CCA300]' : 'text-[#D6CEBF] hover:text-[#FAF4E8]'
                        }`}
                      >
                        <span>{category.name}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-300 text-[#CCA300]/80 group-hover:text-[#CCA300] ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                        {(active || isOpen) && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#CCA300]"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>
                    ) : (
                      <Link
                        href={category.href || '#'}
                        className={`relative py-2.5 transition-colors duration-200 whitespace-nowrap ${
                          active ? 'text-[#CCA300]' : 'text-[#D6CEBF] hover:text-[#FAF4E8]'
                        }`}
                      >
                        {category.name}
                        {active && (
                          <motion.span
                            layoutId="activeNavIndicator"
                            className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#CCA300]"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </Link>
                    )}

                    {/* Rich Modern Dropdown Panel */}
                    <AnimatePresence>
                      {hasSub && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.98 }}
                          transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                          className={`absolute top-full pt-3 z-50 ${
                            category.id === 'services' ? 'left-0 sm:-left-6 w-[410px]' : 'left-0 w-[360px]'
                          }`}
                        >
                          <div className="bg-[#171514] border border-[#2D2824] p-3.5 shadow-2xl shadow-black/90 relative overflow-hidden backdrop-blur-2xl">
                            {/* Gold top accent line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#CCA300]/30 via-[#CCA300] to-[#CCA300]/30" />

                            <div className="space-y-1">
                              {category.subItems?.map((item) => {
                                const SubIcon = item.icon;
                                const isSubActive = currentPath === item.href;
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={`group flex items-start gap-3.5 p-2.5 transition-all duration-200 border border-transparent ${
                                      isSubActive
                                        ? 'bg-[#221F1C] border-[#CCA300]/30'
                                        : 'hover:bg-[#201D1B] hover:border-[#2F2925]'
                                    }`}
                                  >
                                    <div className="w-8 h-8 rounded-none border border-[#332E29] group-hover:border-[#CCA300] bg-[#121110] flex items-center justify-center text-[#CCA300] shrink-0 mt-0.5 transition-colors">
                                      <SubIcon className="w-3.5 h-3.5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-center justify-between gap-2">
                                        <span className="font-serif text-sm text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors tracking-normal normal-case">
                                          {item.name}
                                        </span>
                                        {item.tag && (
                                          <span className="text-[9px] px-1.5 py-0.5 uppercase tracking-widest text-[#CCA300] bg-[#24201D] border border-[#38322D] font-mono shrink-0">
                                            {item.tag}
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-[11px] text-[#9E978B] font-light leading-snug mt-0.5 normal-case tracking-normal group-hover:text-[#BFB7A8] transition-colors">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Dropdown Footer with Quick Context */}
                            <div className="mt-3 pt-2.5 border-t border-[#26221F] flex items-center justify-between text-[10px] uppercase tracking-wider text-[#8A8478] px-1">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
                                Coral Gables Miracle Mile
                              </span>
                              <Link
                                href={category.href || '/services'}
                                onClick={() => setOpenDropdown(null)}
                                className="text-[#CCA300] hover:text-[#DFC15C] inline-flex items-center gap-1 font-semibold group"
                              >
                                <span>Overview</span>
                                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Desktop Right CTAs - Single-Line Phone Badge & Premium Booking Button */}
          <div className="hidden lg:flex items-center gap-3 sm:gap-4 shrink-0">
            
            {/* Phone Number: Guaranteed Strict Single Line With whitespace-nowrap & Clean Frame */}
            <a
              href={`tel:${businessInfo.phoneRaw}`}
              className="whitespace-nowrap hidden xl:inline-flex items-center gap-2 px-3 py-1.5 border border-[#2D2824] bg-[#1A1817]/90 hover:border-[#CCA300]/60 hover:bg-[#221F1C] text-[#D1C9BC] hover:text-[#CCA300] transition-colors"
              title="Call The Well Groomed Gentleman Concierge"
            >
              <Phone className="w-3 h-3 text-[#CCA300] shrink-0" />
              <span className="whitespace-nowrap font-mono text-[11px] font-medium tracking-wider text-[#FAF4E8]">
                {businessInfo.phone}
              </span>
            </a>

            {/* Gift Card Quick Link */}
            <Link
              href="/gift-card"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] uppercase tracking-[0.14em] font-medium text-[#D1C9BC] hover:text-[#CCA300] transition-colors whitespace-nowrap"
            >
              <Gift className="w-3 h-3 text-[#CCA300] shrink-0" />
              <span className="hidden md:inline whitespace-nowrap">Gift Card</span>
            </Link>

            {/* Primary Action Button: Book Now */}
            <Link
              href="/book-appointment"
              id="nav-book-appointment-btn"
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.16em] text-[#141312] bg-[#CCA300] hover:bg-[#DFC15C] transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#CCA300]/20 whitespace-nowrap shrink-0"
            >
              <Calendar className="w-3 h-3 shrink-0" />
              <span className="whitespace-nowrap">Book Now</span>
            </Link>
          </div>

          {/* MOBILE & TABLET ONLY: Modern 3-Dots Kebab Menu Trigger & Direct Action */}
          <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden shrink-0">
            {/* Mobile Direct Book Pill */}
            <Link
              href="/book-appointment"
              className="px-2.5 sm:px-3 py-1.5 text-[9.5px] sm:text-[10.5px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-[#141312] bg-[#CCA300] hover:bg-[#DFC15C] active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              Book
            </Link>

            {/* Modern 3-Dots Kebab Menu Trigger (Borderless, small delicate dots, no square box, no text) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 flex items-center justify-center text-[#CCA300] hover:text-[#FAF4E8] active:scale-90 transition-transform shrink-0 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close navigation options' : 'Open navigation options'}
              title="Navigation Options"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#FAF4E8]" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-[2.5px] py-1" aria-hidden="true">
                  <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                  <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                  <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Golden Scroll-Progress Indicator Bar at bottom of navbar */}
        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#CCA300]/15 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#CCA300]/50 via-[#CCA300] to-[#DFC15C] origin-left"
            style={{ scaleX }}
          />
        </div>
      </header>

      {/* MOBILE ONLY: Modern Kebab Menu Slide-over Drawer with Options Inside Options */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Slide-over Kebab Drawer from Right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[88vw] max-w-md bg-[#141312] border-l border-[#2E2A27] shadow-2xl flex flex-col justify-between overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-[#26221F] bg-[#181615] sticky top-0 z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex flex-col items-center justify-center gap-[2px] text-[#CCA300]" aria-hidden="true">
                      <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                      <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                      <span className="w-1 h-1 rounded-full bg-[#CCA300]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-serif text-[#FAF4E8] uppercase tracking-wider block font-semibold leading-tight">
                        Flagship Options
                      </span>
                      <span className="text-[9px] uppercase tracking-[0.25em] text-[#CCA300] block leading-tight">
                        Miracle Mile • Est. 2014
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 border border-[#332E29] bg-[#121110] text-[#D1C9BC] hover:text-[#CCA300] transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Direct Phone Action: Guaranteed Single-Line */}
                <div className="mt-3.5 pt-3 border-t border-[#26221F] flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#8A8478]">
                    Concierge Line:
                  </span>
                  <a
                    href={`tel:${businessInfo.phoneRaw}`}
                    className="whitespace-nowrap font-mono text-xs font-semibold text-[#CCA300] hover:text-[#DFC15C] flex items-center gap-1.5"
                  >
                    <Phone className="w-3 h-3 shrink-0" />
                    <span>{businessInfo.phone}</span>
                  </a>
                </div>
              </div>

              {/* Categorized Options List ("Options ke andar Options") */}
              <div className="p-5 space-y-3 flex-1">
                <span className="text-[9.5px] uppercase tracking-[0.3em] text-[#8C8477] font-semibold block px-1">
                  Categorized Directory
                </span>

                <div className="space-y-2.5">
                  {navCategories.map((category) => {
                    const hasSub = Boolean(category.subItems && category.subItems.length > 0);
                    const isExpanded = mobileExpandedCat === category.id;
                    const active = isCategoryActive(category);

                    if (!hasSub) {
                      return (
                        <Link
                          key={category.id}
                          href={category.href || '#'}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between p-3.5 border bg-[#181615] transition-all ${
                            active
                              ? 'border-[#CCA300]/50 text-[#CCA300]'
                              : 'border-[#282420] text-[#FAF4E8] hover:border-[#3D3732]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-[#CCA300]" />
                            <span className="font-serif text-base tracking-wide">{category.name}</span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#CCA300]/60" />
                        </Link>
                      );
                    }

                    return (
                      <div
                        key={category.id}
                        className={`border transition-colors ${
                          isExpanded ? 'border-[#CCA300]/40 bg-[#181615]' : 'border-[#282420] bg-[#181615]'
                        }`}
                      >
                        {/* Main Category Header Button */}
                        <button
                          type="button"
                          onClick={() => setMobileExpandedCat(isExpanded ? null : category.id)}
                          className="w-full flex items-center justify-between p-3.5 text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
                            <span
                              className={`font-serif text-base tracking-wide ${
                                active || isExpanded ? 'text-[#CCA300]' : 'text-[#FAF4E8]'
                              }`}
                            >
                              {category.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[9px] uppercase tracking-widest text-[#7C7569] font-mono">
                              {category.subItems?.length} items
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-[#CCA300] transition-transform duration-300 ${
                                isExpanded ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </button>

                        {/* Expandable Sub-Options Accordion */}
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.22, ease: 'easeOut' }}
                              className="overflow-hidden border-t border-[#26221F] bg-[#121110] divide-y divide-[#201D1B]"
                            >
                              {category.subItems?.map((sub) => {
                                const SubIcon = sub.icon;
                                const isSubActive = currentPath === sub.href;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex items-center justify-between p-3 transition-colors ${
                                      isSubActive
                                        ? 'bg-[#1C1A18] text-[#CCA300]'
                                        : 'hover:bg-[#191715] text-[#D1C9BC] hover:text-[#FAF4E8]'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3 min-w-0 pr-2">
                                      <div className="w-7 h-7 flex items-center justify-center border border-[#2E2A27] bg-[#161413] text-[#CCA300] shrink-0">
                                        <SubIcon className="w-3.5 h-3.5" />
                                      </div>
                                      <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                          <span className="text-sm font-medium block truncate">
                                            {sub.name}
                                          </span>
                                          {sub.tag && (
                                            <span className="text-[8px] px-1 py-0.2 uppercase tracking-widest text-[#CCA300] bg-[#221F1D] border border-[#3A332E] font-mono shrink-0">
                                              {sub.tag}
                                            </span>
                                          )}
                                        </div>
                                        <span className="text-[10.5px] text-[#8C8477] block leading-tight truncate mt-0.5">
                                          {sub.description}
                                        </span>
                                      </div>
                                    </div>
                                    <ChevronRight className="w-3.5 h-3.5 text-[#8C8477] shrink-0" />
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer with Quick Primary Actions */}
              <div className="p-5 border-t border-[#26221F] bg-[#181615] space-y-3">
                <Link
                  href="/book-appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#141312] bg-[#CCA300] hover:bg-[#DFC15C] transition-colors flex items-center justify-center gap-2 shadow-md shadow-black/40"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Appointment Online</span>
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/gift-card"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-[#EDE7DC] border border-[#332E29] hover:border-[#CCA300] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Gift className="w-3 h-3 text-[#CCA300]" />
                    <span>Gift Cards</span>
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-[#EDE7DC] border border-[#332E29] hover:border-[#CCA300] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-[#CCA300]" />
                    <span>Location</span>
                  </Link>
                </div>

                <p className="text-[10px] text-center text-[#736D64] pt-1">
                  130 Miracle Mile, Coral Gables, FL 33134
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
