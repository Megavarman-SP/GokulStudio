import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { PortfolioItem } from '../types';

interface LightboxModalProps {
  item: PortfolioItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-6 animate-in fade-in duration-300">
      
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-zinc-900/80 hover:bg-amber-400 hover:text-black text-white border border-zinc-700 transition-all cursor-pointer"
        aria-label="Close image preview"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Navigation */}
      <button
        onClick={onPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-400 hover:text-black text-white border border-zinc-700 transition-all cursor-pointer"
        aria-label="Previous photograph"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next Navigation */}
      <button
        onClick={onNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-zinc-900/80 hover:bg-amber-400 hover:text-black text-white border border-zinc-700 transition-all cursor-pointer"
        aria-label="Next photograph"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        <div className="relative max-h-[75vh] w-auto overflow-hidden rounded-xl border border-zinc-800 shadow-2xl">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {/* Caption & Metadata bar */}
        <div className="mt-4 text-center max-w-2xl px-4 space-y-1.5">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-widest text-amber-400 font-semibold">
            <span>{item.category}</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {item.location}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-serif text-white">
            {item.title}
          </h3>

          {item.featuredStory && (
            <p className="text-xs sm:text-sm text-zinc-400 italic">
              "{item.featuredStory}"
            </p>
          )}

          <div className="flex items-center justify-center gap-2 pt-2 flex-wrap">
            {item.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
