import React, { useState } from 'react';
import { STUDIO_INFO } from '../config/studioData';

export const WhatsAppFloat: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(
      `Hello Gokul Studios team! I saw your portfolio website and would like to enquire about wedding/event photography availability in ${STUDIO_INFO.locationCity}.`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on Hover / Mobile Visible */}
      <div
        className={`bg-zinc-900/95 text-zinc-200 border border-emerald-500/40 text-xs px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 hidden sm:flex items-center gap-2 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with <strong>Gokul Studios</strong></span>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group p-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_4px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.7)] hover:scale-110 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Chat with Gokul Studios on WhatsApp"
      >
        {/* Ripple ping effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-30 animate-ping -z-10" />
        
        {/* WhatsApp Icon */}
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.275-.1-.476-.15-.677.15-.201.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.897-.8-1.503-1.789-1.68-2.09-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.3.301-.5.1-.2.05-.376-.025-.526-.075-.15-.677-1.634-.928-2.238-.245-.589-.494-.509-.677-.518-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.803.376-.275.3-1.054 1.03-1.054 2.51 0 1.481 1.079 2.91 1.23 3.111.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351z"/>
          <path d="M12.004 2C6.486 2 2 6.486 2 12c0 1.884.524 3.649 1.436 5.16L2 22l4.98-1.385C8.423 21.493 10.154 22 12.004 22 17.522 22 22 17.514 22 12S17.522 2 12.004 2zm0 18.2c-1.632 0-3.155-.472-4.444-1.287l-.319-.199-2.964.825.824-2.887-.209-.333C4.015 15.006 3.5 13.543 3.5 12c0-4.687 3.813-8.5 8.504-8.5 4.686 0 8.496 3.813 8.496 8.5 0 4.686-3.81 8.5-8.496 8.5z"/>
        </svg>
      </button>
    </div>
  );
};
