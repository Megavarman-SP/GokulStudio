import React from 'react';
import { Check, Sparkles, AlertCircle, ArrowRight, Crown } from 'lucide-react';
import { SAMPLE_PACKAGES } from '../config/studioData';
import { PackageItem } from '../types';

interface PackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  return (
    <section id="packages" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Options</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
            SAMPLE PACKAGES & <br />
            <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
              INVESTMENT TIERS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Every celebration has a unique scope. Explore our sample packages below or request a tailored proposal for your specific dates and events.
          </p>

          {/* Prototype Demo Warning Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium mt-2">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>PROTOTYPE DEMO: Sample pricing tiers for preview. Official quotes are custom-tailored.</span>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {SAMPLE_PACKAGES.map((pkg: PackageItem) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-amber-400/80 shadow-2xl shadow-amber-500/10 scale-[1.02] z-10'
                  : 'bg-zinc-900/40 border border-zinc-800/90 hover:border-zinc-700'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 text-zinc-950 text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                  <Crown className="w-3.5 h-3.5" />
                  <span>Most Chosen</span>
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-amber-400/90 uppercase tracking-wider font-medium">
                    {pkg.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 px-5 rounded-2xl bg-zinc-950/70 border border-zinc-800 mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-1">
                    Sample Estimate
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-light text-white font-editorial">
                      {pkg.samplePriceDisplay}
                    </span>
                    <span className="text-xs text-zinc-400 font-light">
                      / Event Day
                    </span>
                  </div>
                  <span className="text-[10px] text-zinc-500 italic mt-1 block">
                    *Sample estimate for preview
                  </span>
                </div>

                {/* Coverage Scope */}
                <div className="space-y-2 mb-6 text-xs text-zinc-300">
                  <div className="flex items-start gap-2">
                    <strong className="text-amber-300 font-semibold shrink-0">Ideal For:</strong>
                    <span>{pkg.idealFor}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <strong className="text-amber-300 font-semibold shrink-0">Coverage:</strong>
                    <span>{pkg.coverage}</span>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-3 pt-4 border-t border-zinc-800/80 mb-8">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-3">
                    What's Included
                  </span>
                  {pkg.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-zinc-950 shadow-lg shadow-amber-500/20 hover:scale-[1.02]'
                      : 'bg-zinc-800 hover:bg-amber-400 text-white hover:text-zinc-950 border border-zinc-700'
                  }`}
                >
                  <span>Request Custom Package</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[10px] text-zinc-500 text-center italic">
                  {pkg.customizableNotice}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Package Help Bar */}
        <div className="mt-12 p-6 rounded-2xl glass-panel text-center max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-serif text-white">Need a Multi-Day or Destination Wedding Quote?</h4>
            <p className="text-xs text-zinc-400">Tell us your dates, locations and guest size for a customized package proposal.</p>
          </div>
          <button
            onClick={() => onSelectPackage('Custom Multi-Day Shoot')}
            className="px-5 py-2.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-semibold uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-colors shrink-0 cursor-pointer"
          >
            Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
};
