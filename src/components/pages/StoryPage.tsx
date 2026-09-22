import Image from "next/image";
import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const StoryPage = forwardRef<HTMLDivElement>(function StoryPage(_, ref) {
  const { title, body, photo } = bookContent.story;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-azul-pastel/20 to-rosa-pastel/25"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-7 py-10 sm:px-9 sm:py-12">
        <header className="mb-5 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-6">
          <figure className="relative h-80 w-60 shrink-0 overflow-hidden rounded-3xl shadow-lg ring-4 ring-blanco sm:h-44 sm:w-44">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover"
              sizes="176px"
            />
          </figure>

          <p className="max-w-prose text-center font-sans text-[1.05rem] leading-[1.75] text-foreground/85 sm:text-lg">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
});

export default StoryPage;
