"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import Image from "next/image";
import { ImageIcon, PlayCircle } from "lucide-react";
import type { DemoMedia } from "@/data/projects";

interface ProjectMediaGalleryProps {
  items: DemoMedia[];
  projectTitle: string;
}

export default function ProjectMediaGallery({ items, projectTitle }: ProjectMediaGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeItem = useMemo(() => items[activeIndex], [items, activeIndex]);
  const isImageMedia = activeItem?.type === "image";

  const openGallery = useCallback((index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") showNext();
      if (event.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeGallery, showNext, showPrev]);

  return (
    <>
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-5 text-sm text-gray-200 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">Galerie média</p>
          <p className="mt-1 text-sm text-gray-300">Parcourez les captures et walkthroughs en mode plein écran.</p>
        </div>
        <button
          type="button"
          onClick={() => openGallery(0)}
          className="inline-flex items-center justify-center rounded-full border border-accent-blue/70 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent-blue transition hover:border-accent-blue hover:bg-accent-blue/10"
        >
          Ouvrir la galerie complète
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {items.map((media, index) => (
          <button
            type="button"
            key={media.src}
            onClick={() => openGallery(index)}
            className="group space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-black/40 via-black/30 to-black/50 p-4 text-left transition hover:border-accent-blue/60 hover:shadow-lg hover:shadow-accent-blue/10"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10">
              {media.type === "image" ? (
                <div className="relative h-56 w-full">
                  <Image
                    src={media.src}
                    alt={media.title || projectTitle}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="relative h-56 w-full">
                  <iframe
                    src={media.src}
                    title={media.title || "Demo video"}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[0.65rem] text-white">
                {media.type === "video" ? <PlayCircle className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                {media.type === "video" ? "Vidéo" : "Image"}
              </span>
              <span className="text-accent-blue opacity-0 transition group-hover:opacity-100">Voir en plein écran</span>
            </div>
            {media.title && <h3 className="text-base font-semibold text-white">{media.title}</h3>}
            {media.description && <p className="text-sm text-gray-300">{media.description}</p>}
          </button>
        ))}
      </div>

      {isOpen && activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-black/95 via-black/85 to-black/95 px-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          onClick={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
        >
          <button
            type="button"
            aria-label="Fermer la galerie"
            onClick={closeGallery}
            className="absolute right-6 top-6 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white transition hover:border-white hover:bg-white/20"
          >
            Fermer
          </button>
          <button
            type="button"
            aria-label="Média précédent"
            onClick={showPrev}
            className="absolute left-10 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white transition hover:border-white hover:bg-white/20"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Média suivant"
            onClick={showNext}
            className="absolute right-10 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-white/10 px-4 py-3 text-white transition hover:border-white hover:bg-white/20"
          >
            →
          </button>

          <div className="w-full max-w-5xl space-y-4 text-gray-200">
            <div className="relative h-[75vh] w-full overflow-hidden rounded-3xl border border-white/20 bg-black/50">
              {isImageMedia ? (
                <div className="relative flex h-full w-full items-center justify-center">
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title || projectTitle}
                    width={1920}
                    height={1080}
                    sizes="100vw"
                    className="h-full w-full select-none object-contain"
                    draggable={false}
                    priority
                  />
                </div>
              ) : (
                <iframe
                  src={activeItem.src}
                  title={activeItem.title || projectTitle}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {(activeItem.title || activeItem.description) && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                {activeItem.title && <h3 className="text-lg font-semibold text-white">{activeItem.title}</h3>}
                {activeItem.description && <p className="mt-1 text-sm text-gray-300">{activeItem.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
