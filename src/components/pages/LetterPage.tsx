import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const LetterPage = forwardRef<HTMLDivElement>(function LetterPage(_, ref) {
  const { body, signature } = bookContent.letter;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/20 to-azul-pastel/25"
    >
      <div
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-rosa-pastel/40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-36 rounded-full bg-azul-pastel/35"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col px-7 py-10 sm:px-10 sm:py-12">
        <header className="mb-6 text-center">
          <p className="font-sans text-xs tracking-[0.22em] text-rosa-medio/80 uppercase">
            Con cariño
          </p>
          <h2 className="mt-2 font-display text-4xl text-rosa-medio sm:text-5xl">
            Una carta para ti
          </h2>
          <div
            className="mx-auto mt-3 h-px w-14 bg-linear-to-r from-transparent via-rosa-medio/45 to-transparent"
            aria-hidden
          />
        </header>

        <div className="flex min-h-0 flex-1 flex-col justify-between gap-8">
          <p className="font-sans text-[1.05rem] leading-[1.75] text-foreground/85 sm:text-lg sm:leading-relaxed">
            {body}
          </p>

          <footer className="text-right">
            <p className="font-display text-2xl text-rosa-medio sm:text-3xl">
              {signature}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
});

export default LetterPage;
