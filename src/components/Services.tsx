import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Eye } from 'lucide-react';
import { SERVICES_LIST } from '../config/studioData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForEnquiry: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = ['All', 'Weddings', 'Pre-Wedding', 'Cinematic', 'Events', 'Baby & Kids'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_LIST
    : SERVICES_LIST.filter(service => service.category === selectedCategory);

  return (
    <section id="services" className="py-24 bg-[#0d0d0f] relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Studio Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight uppercase">
              CRAFTED FOR <br />
              <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
                EVERY CELEBRATION.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light">
              From intimate haldi laughter to grand muhurtham rituals, we provide tailored photography and film packages designed to preserve genuine emotions.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-zinc-950 shadow-md shadow-amber-400/20'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800/80 hover:border-amber-400/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-amber-500/5"
            >
              {/* Image Container with Zoom & Badge */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                
                {service.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-amber-400/90 text-zinc-950 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
                    {service.badge}
                  </div>
                )}

                <div className="absolute bottom-3 left-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-amber-300 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/20">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Service Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <h3 className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs text-amber-400/80 font-medium uppercase tracking-wider mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 border-t border-zinc-900 space-y-2">
                  <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium block mb-2">
                    Package Inclusions
                  </span>
                  <div className="space-y-1.5">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => onSelectServiceForEnquiry(service.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-400/10 hover:bg-amber-400 text-amber-300 hover:text-black border border-amber-400/30 hover:border-amber-400 text-xs uppercase tracking-widest font-bold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Enquire This</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveModalService(service)}
                    className="p-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
                    title="Quick Details"
                    aria-label="View service details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Details Quick Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-zinc-950 border border-zinc-700 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              <img
                src={activeModalService.imageUrl}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent" />
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  {activeModalService.category}
                </span>
                <h3 className="text-2xl font-serif text-white">
                  {activeModalService.title}
                </h3>
              </div>
              
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeModalService.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {activeModalService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                      <Check className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForEnquiry(title);
                  }}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-black font-bold uppercase tracking-wider text-xs shadow-lg cursor-pointer"
                >
                  Book for this Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
