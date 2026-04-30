"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

export default function PhotoGallery({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [openAt, setOpenAt] = useState<number | null>(null);

  const close = useCallback(() => setOpenAt(null), []);
  const next = useCallback(
    () => setOpenAt((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setOpenAt((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (openAt === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openAt, close, next, prev]);

  if (photos.length === 0) return null;

  // Show 4-tile preview grid; last tile overlays "+N more" if there are extras
  const previews = photos.slice(0, 4);
  const overflow = Math.max(0, photos.length - 4);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {previews.map((src, i) => {
          const isLast = i === previews.length - 1;
          const showOverlay = isLast && overflow > 0;
          return (
            <button
              key={src}
              type="button"
              onClick={() => setOpenAt(i)}
              className="relative aspect-[4/3] rounded overflow-hidden bg-cream group cursor-pointer"
              aria-label={`Open photo ${i + 1} of ${photos.length}`}
            >
              <Image
                src={src}
                alt={`${alt} — photo ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform group-hover:scale-105"
                unoptimized
              />
              {showOverlay && (
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                  <span className="text-white font-serif text-2xl md:text-3xl">
                    +{overflow} more
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {photos.length > 4 && (
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => setOpenAt(0)}
            className="text-xs uppercase tracking-[0.15em] text-accent hover:text-ink transition-colors border-b border-accent pb-0.5"
          >
            View all {photos.length} photos →
          </button>
        </div>
      )}

      {/* LIGHTBOX */}
      {openAt !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} photo viewer`}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-6 right-6 text-white text-3xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10"
            aria-label="Close"
          >
            ×
          </button>

          {/* Counter */}
          <div className="absolute top-6 left-6 text-white text-sm tracking-wide z-10">
            {openAt + 1} / {photos.length}
          </div>

          {/* Prev arrow */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white text-2xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10"
              aria-label="Previous photo"
            >
              ‹
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-12 my-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[openAt]}
              alt={`${alt} — photo ${openAt + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
              unoptimized
              priority
            />
          </div>

          {/* Next arrow */}
          {photos.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white text-2xl w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center z-10"
              aria-label="Next photo"
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  );
}
