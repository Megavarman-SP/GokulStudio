import React from 'react';
import { Camera, Phone, MessageSquare, MapPin, ArrowUp } from 'lucide-react';
import { STUDIO_INFO, SERVICES_LIST } from '../config/studioData';
import { InstagramIcon, YoutubeIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Col 1: Brand & Ethos */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 p-0.5">
                <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-amber-400" />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-[0.2em] text-white font-luxury uppercase block">
                  GOKUL <span className="text-amber-400 font-light">STUDIOS</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] text-zinc-500 uppercase font-medium block">
                  {STUDIO_INFO.locationCity}, Tamil Nadu
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
              Preserving sacred moments, subtle laughter, and grand cinematic milestones through bespoke photography and film production in Tamil Nadu.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-emerald-400 hover:border-emerald-400/40 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-amber-400 hover:border-amber-400/40 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={STUDIO_INFO.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-red-400 hover:border-red-400/40 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Studio</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-amber-400 transition-colors">Portfolio</a></li>
              <li><a href="#packages" className="hover:text-amber-400 transition-colors">Sample Packages</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Enquiry & Date</a></li>
            </ul>
          </div>

          {/* Col 3: Key Photography Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_LIST.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors truncate block">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Studio Location & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-white">
              Headquarters
            </h4>
            <div className="text-xs space-y-2 text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.fullAddress}</span>
              </div>
              <div className="pt-1">
                <span className="text-zinc-500 block">Studio Hours:</span>
                <span className="text-zinc-300 font-medium">{STUDIO_INFO.workingHours}</span>
              </div>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 text-[11px] font-semibold uppercase tracking-wider hover:bg-amber-400 hover:text-black transition-colors"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {STUDIO_INFO.name}. All Rights Reserved. Crafted for Client Prototype Demonstration.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-600">
              Vaniyambadi • Tirupattur • Tamil Nadu
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-zinc-900 hover:bg-amber-400 hover:text-black text-zinc-400 transition-colors"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
