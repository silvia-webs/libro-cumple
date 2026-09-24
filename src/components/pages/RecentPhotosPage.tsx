"use client";

import Image from "next/image";
import { forwardRef, useState } from "react";
import MediaLightbox from "@/components/ui/MediaLightbox";
import { bookContent, type MediaItem } from "@/data/bookContent";

const POLAROID_LAYOUT = [
  { top: "2%", left: "4%", rotate: "-11deg", z: 3 },
  { top: "0%", left: "52%", rotate: "9deg", z: 4 },
  { top: "28%", left: "28%", rotate: "-3deg", z: 6 },
  { top: "32%", left: "-2%", rotate: "8deg", z: 2 },
  { top: "30%", left: "60%", rotate: "-13deg", z: 5 },
  { top: "58%", left: "10%", rotate: "12deg", z: 7 },
  { top: "56%", left: "50%", rotate: "-6deg", z: 8 },
] as const;

const RecentPhotosPage = forwardRef<HTMLDivElement>(function RecentPhotosPage(
  _,
  ref,
) {
  const { title, items } = bookContent.recentPhotos;
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-azul-pastel/25 via-blanco to-rosa-pastel/30"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-4 py-7 sm:px-6 sm:py-9">
        <header className="mb-2 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <div className="relative min-h-0 flex-1" data-no-flip>
          {items.map((item, index) => {
            const layout = POLAROID_LAYOUT[index] ?? POLAROID_LAYOUT[0];

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                aria-label={`Abrir ${item.alt}`}
                className="absolute w-[46%] bg-blanco p-1.5 pb-5 text-left shadow-lg transition active:scale-95"
                style={{
                  top: layout.top,
                  left: layout.left,
                  transform: `rotate(${layout.rotate})`,
                  zIndex: layout.z,
                }}
              >
                <span className="relative block aspect-square overflow-hidden bg-gris-claro">
                  {item.kind === "photo" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="42vw"
                    />
                  ) : (
                    <>
                      <video
                        src={item.src}
                        muted
                        playsInline
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                      <span
                        className="absolute inset-0 flex items-center justify-center bg-black/20"
                        aria-hidden
                      >
                        <span className="ml-0.5 block h-0 w-0 border-y-8 border-l-14 border-y-transparent border-l-blanco" />
                      </span>
                    </>
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {selected ? (
        <MediaLightbox item={selected} onClose={() => setSelected(null)} />
      ) : null}
    </div>
  );
});

export default RecentPhotosPage;
