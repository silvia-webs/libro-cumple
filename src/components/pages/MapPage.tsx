import Image from "next/image";
import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

/** Approx. coords for Universidad El Bosque, Bogotá */
const MAP_LAT = 4.710989;
const MAP_LNG = -74.032222;

const MapPage = forwardRef<HTMLDivElement>(function MapPage(_, ref) {
  const { title, placeLabel } = bookContent.map;
  const mapsLink = `https://www.openstreetmap.org/?mlat=${MAP_LAT}&mlon=${MAP_LNG}#map=16/${MAP_LAT}/${MAP_LNG}`;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-azul-pastel/30 via-blanco to-rosa-pastel/20"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-5 py-9 sm:px-7 sm:py-11">
        <header className="mb-4 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <a
          data-no-flip
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Abrir mapa de ${placeLabel}`}
          className="relative min-h-0 flex-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-rosa-medio/15"
        >
          <Image
            src="/images/el-bosque-uni.png"
            alt={`Mapa de ${placeLabel}`}
            fill
            className="object-center"
            priority={false}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black/5"
            aria-hidden
          />
        </a>

        <p className="mt-4 shrink-0 text-center font-sans text-base text-foreground/80 sm:text-lg">
          <a
            data-no-flip
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-rosa-medio/40 underline-offset-4"
          >
            {placeLabel}
          </a>
        </p>
      </div>
    </div>
  );
});

export default MapPage;
