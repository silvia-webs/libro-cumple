import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

function MicAndHearts() {
  return (
    <svg
      viewBox="0 0 180 150"
      className="mx-auto h-32 w-40 sm:h-36 sm:w-44"
      aria-hidden
    >
      <path
        className="heartbeat"
        d="M38 58 C38 48 48 42 56 48 C60 51 62 54 64 58 C66 54 68 51 72 48 C80 42 90 48 90 58 C90 72 64 90 64 90 C64 90 38 72 38 58 Z"
        fill="#FF69B4"
        opacity="0.9"
      />
      <path
        className="heartbeat"
        d="M118 34 C118 26 126 21 132 26 C135 28 136 31 138 34 C140 31 141 28 144 26 C150 21 158 26 158 34 C158 45 138 60 138 60 C138 60 118 45 118 34 Z"
        fill="#FFB6C1"
        style={{ animationDelay: "0.25s" }}
      />
      <path
        className="heartbeat"
        d="M128 98 C128 92 134 88 139 92 C141 94 142 96 143 98 C144 96 145 94 147 92 C152 88 158 92 158 98 C158 106 143 116 143 116 C143 116 128 106 128 98 Z"
        fill="#87CEEB"
        style={{ animationDelay: "0.5s" }}
      />

      <rect x="76" y="42" width="28" height="40" rx="14" fill="#FF69B4" />
      <rect x="82" y="48" width="16" height="28" rx="8" fill="#FFFFFF" opacity="0.35" />
      <path
        d="M70 80 C70 96 86 108 90 108 C94 108 110 96 110 80"
        fill="none"
        stroke="#2d2d2d"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <line
        x1="90"
        y1="108"
        x2="90"
        y2="122"
        stroke="#2d2d2d"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <line
        x1="78"
        y1="122"
        x2="102"
        y2="122"
        stroke="#2d2d2d"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

const AudioPage = forwardRef<HTMLDivElement>(function AudioPage(_, ref) {
  const { title, message, credits } = bookContent.audio;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-rosa-pastel"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-rosa-pastel via-rosa-pastel to-azul-pastel/40"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-8 text-center">
        <MicAndHearts />

        <div className="flex max-w-[20rem] flex-col gap-3">
          <p className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </p>
          <p className="whitespace-pre-line font-sans text-[1.05rem] leading-[1.7] text-foreground/85 sm:text-lg">
            {message}
          </p>
        </div>

        <p className="absolute bottom-10 font-sans text-sm text-foreground/60">
          {credits}
        </p>
      </div>
    </div>
  );
});

export default AudioPage;
