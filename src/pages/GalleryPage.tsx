import React, { useState, useEffect } from 'react';
import { galleryItems } from '../data/siteData';
import { GalleryItem } from '../types';
import { SectionHeader } from '../components/SectionHeader';
import { ScrollReveal } from '../components/ScrollReveal';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type CategoryFilter = 'All' | 'Interior & Stations' | 'Lounge & Courtyard' | 'Grooming & Treatments' | 'Products & Apothecary';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const currentPhoto: GalleryItem | null =
    selectedPhotoIndex !== null ? filteredItems[selectedPhotoIndex] : null;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredItems.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowLeft') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : 0));
      }
      if (e.key === 'ArrowRight') {
        setSelectedPhotoIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, filteredItems.length]);

  return (
    <div className="bg-[#141312] text-[#EDE7DC] pt-24 md:pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero */}
        <ScrollReveal className="max-w-4xl mb-16">
          <div className="inline-flex items-center gap-3 px-3.5 py-1 mb-6 border border-[#CCA300]/40 bg-[#1A1817]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#CCA300] font-semibold">
              Visual Archive
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#FAF4E8] tracking-tight font-light leading-[1.08] mb-6">
            Atmosphere & Details
          </h1>
          <p className="text-lg md:text-xl text-[#B8B0A2] leading-relaxed font-light">
            An editorial look inside The Well Groomed Gentleman on Miracle Mile. Explore our handcrafted barber chairs, relaxing courtyard patio, private spa suites, and curated grooming apothecary.
          </p>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-14 border-b border-[#26221F] pb-6">
          {(['All', 'Interior & Stations', 'Lounge & Courtyard', 'Grooming & Treatments', 'Products & Apothecary'] as CategoryFilter[]).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedPhotoIndex(null);
              }}
              className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-[#CCA300] text-[#141312] font-semibold shadow-sm shadow-[#CCA300]/20'
                  : 'text-[#9E978B] hover:text-[#FAF4E8] border border-[#2E2925]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.05}>
              <div
                onClick={() => setSelectedPhotoIndex(index)}
                className="group relative cursor-pointer overflow-hidden border border-[#2A2623] bg-[#181615] hover:border-[#CCA300]/60 transition-all duration-300 h-full"
              >
                <div className="aspect-[16/11] overflow-hidden bg-[#201D1B]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141312]/90 via-[#141312]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Caption & Metadata */}
                <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-none border border-[#3E3832] group-hover:border-[#CCA300] flex items-center justify-center text-[#FAF4E8] group-hover:text-[#CCA300] transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Lightbox Modal */}
        <AnimatePresence>
          {currentPhoto && selectedPhotoIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhotoIndex(null)}
              className="fixed inset-0 z-50 bg-[#0E0D0C]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="absolute top-6 right-6 p-3 text-[#B5AEA2] hover:text-[#FAF4E8] transition-colors z-20 border border-[#332E29] bg-[#181615]/80"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#B5AEA2] hover:text-[#FAF4E8] transition-colors z-20 border border-[#332E29] bg-[#181615]/80"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#B5AEA2] hover:text-[#FAF4E8] transition-colors z-20 border border-[#332E29] bg-[#181615]/80"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Lightbox Container */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
              >
                <div className="relative max-h-[75vh] overflow-hidden border border-[#2F2A26] bg-[#161413]">
                  <img
                    src={currentPhoto.image}
                    alt={currentPhoto.title}
                    className="max-h-[75vh] w-auto object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full mt-4 p-4 bg-[#181615] border border-[#2B2724] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#CCA300] font-semibold">
                      {currentPhoto.category}
                    </span>
                    <h4 className="font-serif text-xl text-[#FAF4E8]">
                      {currentPhoto.title}
                    </h4>
                    <p className="text-xs text-[#A39C90] mt-0.5 font-light">
                      {currentPhoto.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#948D81] shrink-0">
                    {selectedPhotoIndex + 1} / {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
