import Image from "next/image";
import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const EarlyPhotosPage = forwardRef<HTMLDivElement>(function EarlyPhotosPage(
  _,
  ref,
) {
  const { title, photos, caption } = bookContent.earlyPhotos;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/15 to-azul-pastel/30"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-5 py-8 sm:px-7 sm:py-10">
        <header className="mb-4 shrink-0 text-center">
          <h2 className="font-display text-3xl text-rosa-medio sm:text-4xl">
            {title}
          </h2>
        </header>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-3">
          {photos.map((photo) => (
            <figure
              key={photo.src}
              className="mx-auto w-full max-w-sm shrink overflow-hidden rounded-sm bg-blanco p-2 pb-3 shadow-lg"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gris-claro">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 90vw, 380px"
                />
              </div>
            </figure>
          ))}
        </div>

        <p className="mt-4 shrink-0 text-center font-display text-xl text-foreground/75 sm:text-2xl">
          {caption}
        </p>
      </div>
    </div>
  );
});

export default EarlyPhotosPage;
