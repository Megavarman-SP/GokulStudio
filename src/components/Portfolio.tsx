import React, { useState } from 'react';
import { Camera, Eye, MapPin } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../config/studioData';
import { EventCategory } from '../types';
import { LightboxModal } from './LightboxModal';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: EventCategory[] = [
    'All',
    'Weddings',
    'Pre-Wedding',
    'Cinematic',
    'Portraits',
    'Baby & Kids',
    'Events',
  ];

  const filteredItems = activeCategory === 'All'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Curated Portfolio Gallery</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
            MOMENTS ETCHED <br />
            <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
              IN TIME & LIGHT.
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Explore our curated showcase of South Indian weddings, romantic pre-weddings, intimate portraits, and cinematic celebrations.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-amber-400 text-zinc-950 shadow-lg shadow-amber-400/20 scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer aspect-[4/5] sm:aspect-[3/4]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-75"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Hover Badge Info */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-900 bg-amber-400 px-3 py-1 rounded-full shadow-md">
                  {item.category}
                </span>
              </div>

              {/* Bottom Details Revealed on Hover */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-amber-200 transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                {item.featuredStory && (
                  <p className="text-xs text-zinc-400 line-clamp-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {item.featuredStory}
                  </p>
                )}

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-4 h-4" />
                  <span>View Full Photograph</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <LightboxModal
          item={filteredItems[lightboxIndex]}
          onClose={closeLightbox}
          onNext={handleNext}
          onPrev={handlePrev}
          hasPrev={filteredItems.length > 1}
          hasNext={filteredItems.length > 1}
        />
      )}
    </section>
  );
};
