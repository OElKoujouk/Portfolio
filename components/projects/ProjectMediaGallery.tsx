"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ImageIcon, PlayCircle, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

// Type pour les médias déjà résolus dans une langue
interface ResolvedDemoMedia {
  type: "image" | "video";
  src: string;
  title?: string;
  description?: string;
}

interface ProjectMediaGalleryProps {
  items: ResolvedDemoMedia[];
  projectTitle: string;
}

export default function ProjectMediaGallery({ items, projectTitle }: ProjectMediaGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { locale } = useLanguage();

  const activeItem = useMemo(() => items[activeIndex], [items, activeIndex]);
  const isImageMedia = activeItem?.type === "image";

  // Reset playing state when slide changes
  useEffect(() => {
    setIsPlaying(false);
  }, [activeIndex]);

  // Helper pour extraire l'ID YouTube (supporte embed, watch, youtu.be)
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const isLocalVideo = (src: string) => src.startsWith('/');

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

  // Bloquer le scroll quand la galerie est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Gestion du Swipe tactile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) showNext();
    if (isRightSwipe) showPrev();
  };

  // Handlers spécifiques pour la vidéo avec stopPropagation pour éviter le double déclenchement
  const onTouchStartVideo = (e: React.TouchEvent) => {
    e.stopPropagation();
    onTouchStart(e);
  };

  const onTouchMoveVideo = (e: React.TouchEvent) => {
    e.stopPropagation();
    onTouchMove(e);
  };

  const onTouchEndVideo = (e: React.TouchEvent) => {
    e.stopPropagation();
    onTouchEnd();
  };

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

  // Traductions inline
  const t = {
    gallery: locale === "fr" ? "Galerie média" : "Media Gallery",
    galleryDesc: locale === "fr" ? "Parcourez les captures et walkthroughs en mode plein écran." : "Browse captures and walkthroughs in fullscreen mode.",
    openGallery: locale === "fr" ? "Ouvrir la galerie complète" : "Open full gallery",
    video: locale === "fr" ? "Vidéo" : "Video",
    image: "Image",
    viewFullscreen: locale === "fr" ? "Voir en plein écran" : "View fullscreen",
    close: locale === "fr" ? "Fermer" : "Close"
  };

  return (
    <>
      <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-white/5 p-5 text-sm text-gray-200 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-accent-blue">{t.gallery}</p>
          <p className="mt-1 text-sm text-gray-300">{t.galleryDesc}</p>
        </div>
        <button
          type="button"
          onClick={() => openGallery(0)}
          className="inline-flex items-center justify-center rounded-full border border-accent-blue/70 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-accent-blue transition hover:border-accent-blue hover:bg-accent-blue/10"
        >
          {t.openGallery}
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        {items.map((media, index) => (
          <button
            type="button"
            key={media.src}
            onClick={() => openGallery(index)}
            className="group space-y-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 p-4 text-left transition hover:border-accent-blue/60 hover:shadow-lg hover:shadow-accent-blue/10"
          >
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 p-3">
              {media.type === "image" ? (
                <div className="relative h-52 w-full overflow-hidden rounded-xl">
                  <Image
                    src={media.src}
                    alt={media.title || projectTitle}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-contain transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="relative h-52 w-full overflow-hidden rounded-xl">
                  {isLocalVideo(media.src) ? (
                    <>
                      <video
                        src={`${media.src}#t=0.1`}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        preload="metadata"
                        muted
                        playsInline
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <PlayCircle className="h-12 w-12 text-white opacity-80 drop-shadow-lg transition duration-300 group-hover:scale-110 group-hover:opacity-100" />
                      </div>
                    </>
                  ) : (
                    <iframe
                      src={media.src}
                      title={media.title || "Demo video"}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-gray-400">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[0.65rem] text-white">
                {media.type === "video" ? <PlayCircle className="h-3.5 w-3.5" /> : <ImageIcon className="h-3.5 w-3.5" />}
                {media.type === "video" ? t.video : t.image}
              </span>
              <span className="text-accent-blue opacity-0 transition group-hover:opacity-100">{t.viewFullscreen}</span>
            </div>
            {media.title && <h3 className="text-base font-semibold text-white">{media.title}</h3>}
            {media.description && <p className="text-sm text-gray-300">{media.description}</p>}
          </button>
        ))}
      </div>

      {isOpen && activeItem && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/98 md:bg-black/90 backdrop-blur-2xl touch-none md:p-10"
          role="dialog"
          aria-modal="true"
          // onClick suppression: on ne ferme plus en cliquant sur le fond
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Bouton Fermer */}
          <button
            type="button"
            aria-label={isPlaying ? "Stop video" : t.close}
            onClick={() => {
              if (isPlaying) {
                setIsPlaying(false);
              } else {
                closeGallery();
              }
            }}
            className="absolute right-4 top-4 z-[110] p-2 text-white/80 transition active:scale-95 active:text-white md:right-8 md:top-8 md:rounded-full md:bg-black/40 md:p-3 md:text-white md:border md:border-white/10 md:hover:bg-white/20"
          >
            {isPlaying ? (
              <ChevronLeft className="h-8 w-8 drop-shadow-md md:h-6 md:w-6 md:drop-shadow-none" />
            ) : (
              <X className="h-8 w-8 drop-shadow-md md:h-6 md:w-6 md:drop-shadow-none" />
            )}
          </button>

          {/* Navigation Gauche (Desktop) */}
          <button
            type="button"
            aria-label="Previous"
            onClick={showPrev}
            className="hidden md:block absolute left-8 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-black/20 p-4 text-white/50 backdrop-blur-sm transition hover:bg-black/50 hover:text-white"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Navigation Droite (Desktop) */}
          <button
            type="button"
            aria-label="Next"
            onClick={showNext}
            className="hidden md:block absolute right-8 top-1/2 z-[110] -translate-y-1/2 rounded-full bg-black/20 p-4 text-white/50 backdrop-blur-sm transition hover:bg-black/50 hover:text-white"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Conteneur Principal */}
          <div className="relative flex h-full w-full max-w-7xl flex-col items-center justify-center md:gap-4 pointer-events-none md:pointer-events-auto">

            {/* Wrapper pour Desktop (Style Carte) / Mobile (Plein écran) */}
            <div className="relative h-full w-full flex flex-col items-center justify-center pointer-events-auto md:h-auto md:w-full md:overflow-hidden md:rounded-3xl md:border md:border-white/10 md:bg-slate-900/50 md:shadow-2xl">

              <div className="relative h-full w-full md:h-[70vh] md:max-h-[800px]">
                {isImageMedia ? (
                  <Image
                    src={activeItem.src}
                    alt={activeItem.title || projectTitle}
                    fill
                    sizes="100vw"
                    className="select-none object-contain md:p-8"
                    draggable={false}
                    priority
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center p-0 md:p-4">
                    <div
                      className="relative w-full h-full md:h-auto md:aspect-video md:max-h-[70vh] bg-black md:rounded-xl md:shadow-2xl overflow-hidden"
                      onTouchStart={onTouchStartVideo}
                      onTouchMove={onTouchMoveVideo}
                      onTouchEnd={onTouchEndVideo}
                    >
                      {!isPlaying ? (
                        <button
                          onClick={() => setIsPlaying(true)}
                          className="group relative h-full w-full cursor-pointer"
                        >
                          {/* Miniature : YouTube ou Local (on essaie de générer une preview si possible, sinon noir avec bouton play) */}
                          {getYouTubeId(activeItem.src) ? (
                            <Image
                              src={`https://img.youtube.com/vi/${getYouTubeId(activeItem.src)}/maxresdefault.jpg`}
                              alt={activeItem.title || "Video thumbnail"}
                              fill
                              className="object-cover opacity-60 transition duration-500 group-hover:opacity-80"
                            />
                          ) : (
                            // Fallback pour vidéo locale : on peut mettre une <video> muette figée à la première frame ou juste un fond noir
                            <video
                              src={`${activeItem.src}#t=0.1`}
                              className="absolute inset-0 h-full w-full object-cover opacity-60"
                              preload="metadata"
                              playsInline
                              muted
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="h-20 w-20 text-white opacity-90 transition duration-300 group-hover:scale-110 group-hover:opacity-100 drop-shadow-lg" />
                          </div>
                        </button>
                      ) : (
                        isLocalVideo(activeItem.src) ? (
                          <video
                            src={activeItem.src}
                            className="absolute inset-0 h-full w-full"
                            controls
                            autoPlay
                            playsInline
                          />
                        ) : (
                          <iframe
                            src={`${activeItem.src}${activeItem.src.includes('?') ? '&' : '?'}autoplay=1&playsinline=1`}
                            title={activeItem.title || projectTitle}
                            className="absolute inset-0 h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Légende en bas - PLEINE LARGEUR */}
              <div className={`absolute bottom-0 left-0 right-0 z-[110] bg-gradient-to-t from-black/80 via-black/40 to-transparent pb-8 pt-16 px-6 text-center md:relative md:bg-none md:p-6 md:border-t md:border-white/10 md:bg-slate-900/50 w-full md:text-left md:flex md:items-center md:justify-between md:gap-8 ${isPlaying ? 'hidden md:flex' : 'block'}`}>
                <div className="space-y-2 w-full">
                  {activeItem.title && <h3 className="text-xl font-bold text-white md:text-2xl">{activeItem.title}</h3>}
                  {activeItem.description && <p className="text-sm text-gray-300 md:text-base">{activeItem.description}</p>}
                </div>

                <div className="mt-4 md:mt-0 flex-shrink-0 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium tracking-[0.2em] text-white/70 backdrop-blur-sm md:self-start">
                  {activeIndex + 1} / {items.length}
                </div>
              </div>

            </div>
          </div>
        </div>,
        document.body
      )}

    </>
  );
}
