'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from '@/components/Lightbox';

export default function Gallery({ photos }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const navigateLightbox = (newIndex) => {
    setLightboxIndex(newIndex);
  };

  return (
    <>
      {/* CSS Column Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 [column-fill:_balance]">
        {photos.map((photo, index) => {
          // Dynamic aspect ratio styling
          const aspectClass = photo.aspect === '4/5'
            ? 'aspect-[4/5]'
            : photo.aspect === '3/4'
            ? 'aspect-[3/4]'
            : photo.aspect === '2/3'
            ? 'aspect-[2/3]'
            : photo.aspect === '1/1'
            ? 'aspect-square'
            : 'aspect-[3/2]';

          return (
            <div
              key={photo.id}
              className="break-inside-avoid mb-6 group cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-[#1D1D20] border border-black/10 dark:border-cv-dark/50 group-hover:border-cv-orange/70 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1">
                {/* Photo Container */}
                <div className={`relative w-full ${aspectClass} overflow-hidden bg-storm-grey/20`}>
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading={index < 4 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient Scrim & Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-cv-orange font-bold mb-1">
                      {photo.location}
                    </span>
                    <h3 className="text-sm font-bold text-white leading-tight mb-1">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-cv-light/80 line-clamp-2">
                      {photo.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-storm-grey font-mono pt-2 border-t border-white/10">
                      <span>{photo.year}</span>
                      <span className="text-cv-orange font-sans font-semibold group-hover:translate-x-0.5 transition-transform">
                        Enlarge &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={photos}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={navigateLightbox}
        />
      )}
    </>
  );
}
