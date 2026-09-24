import React from 'react';
import { Camera, Heart, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { DEMO_STATS, STUDIO_INFO } from '../config/studioData';

export const TrustStats: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-6 h-6 text-amber-400" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      default:
        return <Camera className="w-6 h-6 text-amber-400" />;
    }
  };

  const pillars = [
    {
      title: "Master Candid Timing",
      desc: "Capturing unscripted smiles, secret glances, and joyous tears without awkward staging."
    },
    {
      title: "Archival Color Grading",
      desc: "Every frame color-balanced for rich silk tones, radiant skin tones, and enduring warmth."
    },
    {
      title: "Cinema 4K Optics & Audio",
      desc: "Ultra-sharp cinema lenses paired with studio-grade audio capture for crystal vows."
    },
    {
      title: "Handcrafted Luxury Albums",
      desc: "Archival waterproof paper, flush-mount leather binding, and acrylic crystal covers."
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-950 relative border-t border-b border-zinc-900 overflow-hidden">
      {/* Background Decorative Accents */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 bg-amber-700/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Story Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            <span className="w-6 h-px bg-amber-400" />
            <span>The Gokul Studios Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white uppercase leading-tight">
            YOUR STORY. <br />
            <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
              OUR LENS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-light">
            Based in <strong className="text-white font-medium">{STUDIO_INFO.locationCity}, {STUDIO_INFO.locationState}</strong>, 
            Gokul Studios is dedicated to transforming ephemeral human emotions into timeless, museum-grade visual heirlooms. 
            We approach every wedding, ritual, and family celebration with profound respect for culture, cinematic artistry, and discreet observation.
          </p>
        </div>

        {/* Demo Stats Grid - Clearly structured for easy client update */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] uppercase tracking-widest text-zinc-500 font-medium">
              * DEMO METRICS (Ready to be updated with studio's exact figures)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEMO_STATS.map((stat) => (
              <div
                key={stat.id}
                className="glass-panel p-8 rounded-2xl relative overflow-hidden group hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(stat.iconName)}
                </div>

                <div className="text-4xl sm:text-5xl font-light text-white font-editorial mb-2 tracking-tight group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-semibold uppercase tracking-wider text-zinc-200 mb-1">
                  {stat.label}
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-light">
                  {stat.description}
                </p>

                {/* Subtle corner glow */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-400/20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Pillars / Studio Values */}
        <div className="bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 border border-zinc-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-semibold">
                Why Families Choose Us
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white leading-snug">
                Cinematic Artistry Meets Unwavering Precision.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                From pre-event lighting planning to white-glove album delivery, every milestone receives our uncompromising standard of excellence.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 transition-colors">
                  <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400 shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white tracking-wide mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
