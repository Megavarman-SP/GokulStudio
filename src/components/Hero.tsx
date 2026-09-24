import React, { useState, useEffect } from 'react';
import { Film, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { STUDIO_INFO } from '../config/studioData';

interface HeroProps {
  onOpenEnquiry: (service?: string) => void;
  onViewWork: () => void;
}

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=90",
    tag: "Royal Wedding Stories",
    subtitle: "Sacred South Indian Muhurtham & Rituals"
  },
  {
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=90",
    tag: "Cinematic 4K Films",
    subtitle: "Emotions Crafted with Hollywood Color Mastery"
  },
  {
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=2000&q=90",
    tag: "Pre-Wedding Editorial",
    subtitle: "Bespoke Couple Sessions Across Scenic Landscapes"
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnquiry, onViewWork }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Slides with Ken Burns / Fade Transition */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-105 transition-transform duration-[7000ms]' : 'opacity-0 scale-100'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.tag}
            className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.1]"
          />
          {/* Subtle cinematic overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80" />
          <div className="absolute inset-0 cinematic-vignette opacity-80" />
        </div>
      ))}

      {/* Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left / Main Editorial Headline */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Location & Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-amber-500/30 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-amber-200">
                {STUDIO_INFO.locationCity}, {STUDIO_INFO.locationState} • Luxury Photography
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light uppercase tracking-tight text-white leading-[1.05]">
              WE CAPTURE <br />
              <span className="font-serif italic font-normal text-amber-200/95 tracking-normal">
                YOUR MOMENTS.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
              {STUDIO_INFO.subTagline}
            </p>

            {/* Call to Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                onClick={onViewWork}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 font-bold uppercase tracking-widest text-xs sm:text-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <span>View Our Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenEnquiry()}
                className="px-8 py-4 rounded-full glass-panel text-white hover:text-amber-300 border border-zinc-700 hover:border-amber-400/60 font-semibold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:scale-[1.02] flex items-center gap-3 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Enquire Now</span>
              </button>
            </div>

            {/* Quick Feature Pills */}
            <div className="pt-6 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Candid & Traditional</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>4K Cinematic Films</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Aerial Drone Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Handcrafted Royal Albums</span>
              </div>
            </div>

          </div>

          {/* Right Floating Editorial Feature Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="glass-panel-gold p-6 rounded-2xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-amber-400 font-semibold flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5" />
                  Currently Featuring
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">0{currentSlide + 1} / 03</span>
              </div>

              <h4 className="text-xl font-serif text-white mb-2">
                {HERO_SLIDES[currentSlide].tag}
              </h4>
              <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              {/* Slider Indicator Tabs */}
              <div className="flex gap-2 pt-2">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer" onClick={onViewWork}>
        <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll to Explore</span>
        <div className="w-5 h-9 rounded-full border border-zinc-700 flex items-start justify-center p-1">
          <div className="w-1.5 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
