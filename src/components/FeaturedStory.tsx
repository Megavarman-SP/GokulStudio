import React from 'react';
import { Sparkles, Quote, Heart, Award, ArrowRight } from 'lucide-react';
import { FEATURED_STORY } from '../config/studioData';

interface FeaturedStoryProps {
  onOpenEnquiry: () => void;
}

export const FeaturedStory: React.FC<FeaturedStoryProps> = ({ onOpenEnquiry }) => {
  return (
    <section className="py-24 bg-[#0a0a0c] relative overflow-hidden border-t border-zinc-900">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Photo Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-zinc-700/80 shadow-2xl group">
              <img
                src={FEATURED_STORY.imageUrl}
                alt="Editorial Wedding Frame"
                className="w-full aspect-[4/5] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-1">
                  Master Highlight
                </span>
                <p className="text-sm font-serif text-white/90">
                  {FEATURED_STORY.statsHighlight}
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Image for Magazine Feel */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 z-20 w-48 lg:w-56 aspect-[3/4] rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-2xl">
              <img
                src={FEATURED_STORY.secondaryImageUrl}
                alt="Secondary Editorial Frame"
                className="w-full h-full object-cover object-center brightness-90 hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Gold Border Backdrop */}
            <div className="absolute -inset-4 border border-amber-500/20 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Narrative & Quote */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{FEATURED_STORY.tagline}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase leading-[1.1]">
              EVERY FRAME <br />
              <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
                HAS A STORY.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
              {FEATURED_STORY.subtitle}
            </p>

            {/* Styled Pull Quote */}
            <div className="p-6 rounded-2xl bg-zinc-900/80 border-l-4 border-amber-400 border-y border-r border-zinc-800 relative">
              <Quote className="w-8 h-8 text-amber-400/20 absolute top-4 right-4" />
              <p className="text-sm sm:text-base font-serif italic text-zinc-200 leading-relaxed">
                {FEATURED_STORY.quote}
              </p>
            </div>

            {/* Director Note */}
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              {FEATURED_STORY.directorNote}
            </p>

            {/* Editorial Features */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <Heart className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-1">
                  Emotion First
                </h4>
                <p className="text-[11px] text-zinc-400">
                  Unforced laughter & raw feelings preserved with authenticity.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <Award className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-1">
                  Heirloom Quality
                </h4>
                <p className="text-[11px] text-zinc-400">
                  Museum-grade albums that pass through generations.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 font-bold uppercase tracking-widest text-xs hover:shadow-lg hover:shadow-amber-400/20 transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Vision with Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
