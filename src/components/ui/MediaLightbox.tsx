"use client";

import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { MediaItem } from "@/data/bookContent";

type MediaLightboxProps = {
  item: MediaItem;
  onClose: () => void;
};

export default function MediaLightbox({ item, onClose }: MediaLightboxProps) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      data-no-flip
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-blanco/90 text-lg text-foreground shadow-md"
      >
        ×
      </button>

      <div
        className="relative max-h-[82dvh] w-full max-w-lg overflow-hidden rounded-2xl bg-blanco p-3 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        {item.kind === "photo" ? (
          <div className="relative aspect-4/5 w-full overflow-hidden bg-gris-claro">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        ) : (
          <video
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[74dvh] w-full rounded-lg bg-black"
          >
            Tu navegador no puede reproducir este video.
          </video>
        )}
        <p className="mt-2 text-center font-sans text-sm text-foreground/70">
          {item.alt}
        </p>
      </div>
    </div>,
    document.body,
  );
}
