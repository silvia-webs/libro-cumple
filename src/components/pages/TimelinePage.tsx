import Image from "next/image";
import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const TimelinePage = forwardRef<HTMLDivElement>(function TimelinePage(_, ref) {
  const { title, items } = bookContent.timeline;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/15 to-azul-pastel/25"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-4 py-8 sm:px-6 sm:py-10">
        <header className="mb-4 shrink-0 text-center">
          <h2 className="font-display text-3xl text-rosa-medio sm:text-4xl">
            {title}
          </h2>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-3 content-center">
          {items.map((item) => (
            <figure
              key={item.year}
              className="flex flex-col overflow-hidden rounded-xl bg-blanco p-1.5 shadow-md"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-gris-claro">
                <Image
                  src={item.photo.src}
                  alt={item.photo.alt}
                  fill
                  className="object-cover"
                  sizes="40vw"
                />
              </div>
              <figcaption className="px-1 py-2 text-center">
                <p className="font-display text-lg text-rosa-medio leading-none">
                  {item.year}
                </p>
                <p className="mt-1 font-sans text-xs text-foreground/70 sm:text-sm">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
});

export default TimelinePage;
