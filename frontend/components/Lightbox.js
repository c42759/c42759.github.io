'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Lightbox({ photos, currentIndex, onClose, onNavigate }) {
  const currentPhoto = photos[currentIndex];
  const total = photos.length;

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [onClose, handlePrev, handleNext]);

  // Touch swipe support for mobile
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handlePrev, handleNext]);

  if (!currentPhoto) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentPhoto.title || 'Photo Lightbox'}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1D20]/95 backdrop-blur-xl transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Header Controls */}
      <div
        className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex items-center justify-between z-20 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center space-x-3">
          <span className="px-3 py-1 rounded-full bg-storm-grey/20 border border-storm-grey/40 text-cv-light font-mono text-xs font-semibold">
            {currentIndex + 1} / {total}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-storm-grey">
            [Esc to close &bull; &larr; &rarr; to navigate]
          </span>
        </div>

        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="p-2.5 rounded-full bg-white/10 hover:bg-cv-orange hover:text-white text-cv-light transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cv-orange"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Previous Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous photo"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-cv-orange text-white backdrop-blur-md border border-white/10 hover:border-cv-orange transition-all duration-200 shadow-xl focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next photo"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-cv-orange text-white backdrop-blur-md border border-white/10 hover:border-cv-orange transition-all duration-200 shadow-xl focus:outline-none"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[82vh] w-full h-full flex flex-col items-center justify-center p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={currentPhoto.src}
            alt={currentPhoto.title || 'Gallery Photograph'}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="object-contain rounded-xl select-none"
            priority
          />
        </div>

        {/* Bottom Caption Overlay */}
        <div className="w-full max-w-2xl mt-4 px-4 py-3 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-1">
            <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
              {currentPhoto.title}
            </h3>
            {currentPhoto.location && (
              <>
                <span className="text-storm-grey">&bull;</span>
                <span className="text-xs text-cv-peach font-mono">
                  {currentPhoto.location}
                </span>
              </>
            )}
            {currentPhoto.year && (
              <span className="text-xs text-storm-grey font-mono">
                ({currentPhoto.year})
              </span>
            )}
          </div>
          {currentPhoto.description && (
            <p className="text-xs text-cv-light/80 line-clamp-2">
              {currentPhoto.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
