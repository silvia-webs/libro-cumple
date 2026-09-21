import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const IllustrationPage = forwardRef<HTMLDivElement>(function IllustrationPage(
  _,
  ref,
) {
  const { title, dateLine, subtitle } = bookContent.momentZero;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-azul-pastel/35 via-blanco to-rosa-pastel/30"
    >
      <div
        className="pointer-events-none absolute -left-10 top-16 h-32 w-32 rounded-full bg-rosa-pastel/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-8 bottom-24 h-40 w-40 rounded-full bg-azul-cielo/25"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-7 py-12 text-center sm:px-10 sm:py-14">
        <header>
          <p className="font-sans text-xs tracking-[0.22em] text-azul-cielo uppercase">
            Momento cero
          </p>
          <h2 className="mt-2 font-display text-4xl leading-tight text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <div className="w-full py-4">
          <img
            src="/images/MomentIllustration.svg"
            alt="Momento cero"
            width={280}
            height={200}
            className="mx-auto h-auto w-full max-w-[16rem]"
          />
        </div>

        <footer className="flex max-w-sm flex-col gap-3">
          <p className="font-sans text-base leading-snug text-foreground/80 sm:text-lg">
            {dateLine}
          </p>
          <div
            className="mx-auto h-px w-12 bg-linear-to-r from-transparent via-rosa-medio/50 to-transparent"
            aria-hidden
          />
          <p className="font-display text-xl leading-snug text-foreground/75 sm:text-2xl">
            {subtitle}
          </p>
        </footer>
      </div>
    </div>
  );
});

export default IllustrationPage;
