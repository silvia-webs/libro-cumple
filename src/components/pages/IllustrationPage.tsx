import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

function MomentIllustration() {
  return (
    <svg
      viewBox="0 0 280 200"
      className="mx-auto h-auto w-full max-w-[16rem]"
      fill="none"
      aria-hidden
    >
      {/* Soft ground glow */}
      <ellipse cx="140" cy="175" rx="90" ry="14" fill="#ADD8E6" opacity="0.35" />

      {/* Two simplified silhouettes facing each other */}
      <g fill="#FF69B4" opacity="0.55">
        <circle cx="100" cy="72" r="18" />
        <path d="M78 148 C78 112 90 98 100 98 C110 98 122 112 122 148 Z" />
      </g>
      <g fill="#87CEEB" opacity="0.65">
        <circle cx="180" cy="70" r="18" />
        <path d="M158 148 C158 110 170 96 180 96 C190 96 202 110 202 148 Z" />
      </g>

      {/* Hearts between them */}
      <path
        d="M140 88 C140 88 132 80 126 84 C120 88 122 96 140 110 C158 96 160 88 154 84 C148 80 140 88 140 88 Z"
        fill="#FF69B4"
        opacity="0.85"
      />
      <path
        d="M118 58 C118 58 113 54 110 56 C107 58 108 63 118 70 C128 63 129 58 126 56 C123 54 118 58 118 58 Z"
        fill="#FFB6C1"
        opacity="0.7"
      />
      <path
        d="M168 52 C168 52 163 48 160 50 C157 52 158 57 168 64 C178 57 179 52 176 50 C173 48 168 52 168 52 Z"
        fill="#ADD8E6"
        opacity="0.8"
      />

      {/* Small sparkles */}
      <circle cx="70" cy="50" r="2.5" fill="#FF69B4" opacity="0.5" />
      <circle cx="210" cy="48" r="2.5" fill="#87CEEB" opacity="0.55" />
      <circle cx="140" cy="40" r="2" fill="#FFB6C1" opacity="0.6" />
    </svg>
  );
}

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
          <MomentIllustration />
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
