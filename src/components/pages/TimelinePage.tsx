"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { bookContent } from "@/data/bookContent";

const TimelinePage = forwardRef<HTMLDivElement>(function TimelinePage(_, ref) {
  const { title, items } = bookContent.timeline;
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: true,
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: true,
      }),
    ],
  );
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const current = items[selected] ?? items[0];

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/15 to-azul-pastel/25"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-5 py-8 sm:px-7 sm:py-10">
        <header className="mb-4 shrink-0 text-center">
          <h2 className="font-display text-3xl text-rosa-medio sm:text-4xl">
            {title}
          </h2>
        </header>

        <div
          data-no-flip
          className="flex min-h-0 flex-1 flex-col justify-center"
        >
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {items.map((item) => (
                <div
                  key={item.photo.src}
                  className="min-w-0 shrink-0 grow-0 basis-[85%] px-2 sm:basis-[80%]"
                >
                  <figure className="overflow-hidden rounded-2xl bg-blanco p-2 shadow-lg">
                    <div className="relative aspect-3/4 w-full overflow-hidden rounded-xl bg-gris-claro">
                      <Image
                        src={item.photo.src}
                        alt={item.photo.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 480px) 85vw, 420px"
                      />
                    </div>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="font-display text-3xl leading-none text-rosa-medio">
              {current.year}
            </p>
            <p className="mt-2 font-sans text-base text-foreground/75 sm:text-lg">
              {current.caption}
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.photo.src}
                type="button"
                aria-label={`Ver foto de ${item.year}: ${item.caption}`}
                aria-current={index === selected}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2.5 rounded-full transition ${
                  index === selected
                    ? "w-6 bg-rosa-medio"
                    : "w-2.5 bg-rosa-pastel"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TimelinePage;
