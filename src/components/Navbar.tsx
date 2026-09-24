import React, { useState, useEffect } from 'react';
import { Camera, Menu, X, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../config/studioData';

interface NavbarProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Packages', href: '#packages' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-zinc-950 via-[#1a1712] to-zinc-950 text-xs py-1.5 px-4 text-center border-b border-amber-900/30 text-zinc-400 flex items-center justify-center gap-2">
        <span className="inline-flex items-center gap-1 text-amber-300/90 font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          Prototype Demo:
        </span>
        <span>Wedding Season Dates Open in {STUDIO_INFO.locationCity} & across {STUDIO_INFO.locationState}</span>
        <button 
          onClick={() => onOpenEnquiry('Early Bird Booking')}
          className="ml-2 underline text-amber-400 hover:text-amber-300 font-medium transition-colors"
        >
          Check Date
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md py-3.5 border-b border-zinc-800/80 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-700 p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                <Camera className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold tracking-[0.2em] text-white font-luxury uppercase">
                GOKUL <span className="text-amber-400 font-light">STUDIOS</span>
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-medium -mt-1">
                {STUDIO_INFO.locationCity} • Tamil Nadu
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs uppercase tracking-[0.18em] font-medium text-zinc-300 hover:text-amber-400 transition-colors duration-200 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${STUDIO_INFO.phoneRaw}`}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-full hover:bg-zinc-800/60"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{STUDIO_INFO.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-medium transition-all duration-300 group hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
            >
              <span className="w-full h-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 absolute"></span>
              <span className="relative px-5 py-2 transition-all ease-out bg-zinc-950 rounded-full group-hover:bg-opacity-0 duration-300 flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-amber-400 group-hover:text-black transition-colors" />
                <span className="text-xs uppercase tracking-widest font-semibold text-amber-300 group-hover:text-black transition-colors">
                  Enquire Now
                </span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnquiry()}
              className="text-xs px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase font-semibold tracking-wider"
            >
              Enquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900/80 text-zinc-200 hover:text-amber-400 border border-zinc-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/98 border-b border-zinc-800 px-6 py-6 mt-2 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-base tracking-widest uppercase font-medium text-zinc-300 hover:text-amber-400 py-2 border-b border-zinc-900"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`tel:${STUDIO_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-900 text-zinc-200 border border-zinc-800 text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Studio: {STUDIO_INFO.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-black text-sm uppercase tracking-widest font-bold shadow-lg shadow-amber-500/20"
              >
                Enquire for Date
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
