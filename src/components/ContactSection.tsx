import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, ChevronDown, ChevronUp, Navigation } from 'lucide-react';
import { STUDIO_INFO, FAQS_LIST } from '../config/studioData';
import { InstagramIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Studio Headquarters</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white uppercase tracking-tight">
            VISIT & CONNECT <br />
            <span className="font-serif italic font-normal text-amber-200/90 tracking-normal">
              WITH GOKUL STUDIOS.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-light">
            Conveniently located in Vaniyambadi, serving clients across Tamil Nadu, Bangalore, and destination venues.
          </p>
        </div>

        {/* Contact Hub & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-1">
                    Studio Address
                  </h4>
                  <p className="text-sm text-white font-medium mb-2">
                    {STUDIO_INFO.fullAddress}
                  </p>
                  <a
                    href={STUDIO_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold underline"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Get Google Maps Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">Direct Phone</div>
                <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {STUDIO_INFO.phoneDisplay}
                </div>
              </a>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-400">WhatsApp Chat</div>
                <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {STUDIO_INFO.whatsappDisplay}
                </div>
              </a>
            </div>

            {/* Email & Studio Timing */}
            <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Email: <strong className="text-white">{STUDIO_INFO.email}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Working Hours: <strong className="text-white">{STUDIO_INFO.workingHours}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-zinc-300">
                <InstagramIcon className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Instagram: <strong className="text-white">{STUDIO_INFO.instagramHandle}</strong></span>
              </div>
            </div>

          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 relative min-h-[360px] shadow-2xl">
            <iframe
              title="Gokul Studios Vaniyambadi Map"
              src={STUDIO_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full rounded-3xl"
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-zinc-950/90 backdrop-blur-md p-4 rounded-xl border border-zinc-700 text-xs text-zinc-300 flex items-center justify-between gap-4">
              <div>
                <strong className="text-white block font-serif text-sm">Gokul Studios Location Hub</strong>
                <span>{STUDIO_INFO.locationCity}, {STUDIO_INFO.locationState}</span>
              </div>
              <a
                href={STUDIO_INFO.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-amber-400 text-zinc-950 font-bold uppercase text-[10px] tracking-wider shrink-0 hover:bg-amber-300"
              >
                Directions
              </a>
            </div>
          </div>

        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto pt-8 border-t border-zinc-900">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              Frequently Asked Questions
            </span>
            <h3 className="text-2xl font-serif text-white">
              Everything You Need to Know
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS_LIST.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-medium text-white hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-amber-400 shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zinc-500 shrink-0 ml-4" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
