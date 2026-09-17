import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

/** Approx. coords for Universidad El Bosque, Bogotá */
const MAP_LAT = 4.710989;
const MAP_LNG = -74.032222;
const MAP_DELTA = 0.012;

const MapPage = forwardRef<HTMLDivElement>(function MapPage(_, ref) {
  const { title, placeLabel, query } = bookContent.map;
  const bbox = [
    MAP_LNG - MAP_DELTA,
    MAP_LAT - MAP_DELTA,
    MAP_LNG + MAP_DELTA,
    MAP_LAT + MAP_DELTA,
  ].join("%2C");

  const embedSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${MAP_LAT}%2C${MAP_LNG}`;
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

        <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl shadow-lg ring-1 ring-rosa-medio/15">
          <iframe
            title={`Mapa de ${query}`}
            src={embedSrc}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-[120%]"
            aria-hidden
          >
            <span className="block h-4 w-4 rounded-full bg-red-500 shadow-md ring-2 ring-blanco" />
            <span className="mx-auto mt-[-2px] block h-3 w-0.5 bg-red-500" />
          </div>
        </div>

        <p className="mt-4 shrink-0 text-center font-sans text-base text-foreground/80 sm:text-lg">
          <a
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
