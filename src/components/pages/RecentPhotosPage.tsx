import Image from "next/image";
import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const RecentPhotosPage = forwardRef<HTMLDivElement>(function RecentPhotosPage(
  _,
  ref,
) {
  const { title, photos } = bookContent.recentPhotos;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-azul-pastel/25 via-blanco to-rosa-pastel/30"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-5 py-8 sm:px-7 sm:py-10">
        <header className="mb-4 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <div className="flex min-h-0 flex-1 flex-col justify-center gap-4">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={`mx-auto w-[88%] max-w-sm bg-blanco p-2.5 pb-4 shadow-xl ${
                index % 2 === 0 ? "-rotate-1" : "rotate-1"
              }`}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-gris-claro">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 480px) 85vw, 360px"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
});

export default RecentPhotosPage;
