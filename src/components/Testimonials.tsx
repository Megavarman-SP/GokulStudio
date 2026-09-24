import React from 'react';
import { Star, Quote, Heart, MapPin } from 'lucide-react';
import { TESTIMONIALS_LIST } from '../config/studioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0c] relative border-t border-zinc-900 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            <Heart className="w-3.5 h-3.5" />
            <span>Words from Families We’ve Documented</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
            TRUSTED BY <br />
            <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
              BRIDES & FAMILIES.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Real stories and emotional reviews from clients who welcomed us into their sacred celebrations.
          </p>

          <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium block">
            * DEMO CLIENT TESTIMONIALS (Easy to replace with actual studio client reviews)
          </span>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_LIST.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-2xl glass-panel border border-zinc-800 flex flex-col justify-between hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-amber-400/30 group-hover:text-amber-400/60 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base font-serif italic text-zinc-200 leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-zinc-900 flex items-center gap-4">
                <img
                  src={t.avatarUrl}
                  alt={t.clientName}
                  className="w-12 h-12 rounded-full object-cover border border-amber-400/40"
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {t.clientName}
                  </h4>
                  <div className="text-xs text-amber-400/80 font-medium">
                    {t.eventType}
                  </div>
                  <div className="text-[11px] text-zinc-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-500" />
                    <span>{t.eventLocation}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
