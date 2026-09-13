import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  number?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  badge,
  title,
  subtitle,
  description,
  align = 'left',
  className = '',
}) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}
    >
      {/* Editorial Motif: Number & Badge with hairline */}
      <div className={`flex items-center gap-3 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        {number && (
          <span className="font-mono text-[11px] tracking-widest text-[#CCA300] font-semibold">
            {number}
          </span>
        )}
        {number && badge && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#CCA300]/60" />
        )}
        {badge && (
          <span className="text-[11px] uppercase tracking-[0.26em] text-[#CCA300] font-semibold">
            {badge}
          </span>
        )}
        <div className={`h-px bg-gradient-to-r from-[#CCA300]/50 via-[#CCA300]/20 to-transparent ${isCenter ? 'w-16 mx-auto' : 'w-24'}`} />
      </div>

      {subtitle && (
        <p className="text-xs uppercase tracking-[0.22em] text-[#9E978B] mb-2.5 font-medium">
          {subtitle}
        </p>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF4E8] tracking-tight font-normal leading-[1.14] mb-4">
        {title}
      </h2>

      {description && (
        <p className="text-[#B5AEA1] text-base md:text-lg leading-relaxed font-light">
          {description}
        </p>
      )}
    </motion.div>
  );
};
