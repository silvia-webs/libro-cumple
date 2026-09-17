import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

function FutureIllustration() {
  return (
    <svg
      viewBox="0 0 280 180"
      className="mx-auto h-auto w-full max-w-[17rem]"
      fill="none"
      aria-hidden
    >
      {/* Path / road */}
      <path
        d="M40 150 C90 140 110 100 140 90 C170 80 190 55 240 40"
        stroke="#FFB6C1"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="6 8"
        opacity="0.8"
      />

      {/* Stars along the path */}
      <path
        d="M70 120 L72 126 L78 126 L73 130 L75 136 L70 132 L65 136 L67 130 L62 126 L68 126 Z"
        fill="#FF69B4"
        opacity="0.7"
      />
      <path
        d="M130 85 L132 90 L137 90 L133 93 L135 98 L130 95 L125 98 L127 93 L123 90 L128 90 Z"
        fill="#87CEEB"
        opacity="0.8"
      />
      <path
        d="M190 55 L192 60 L197 60 L193 63 L195 68 L190 65 L185 68 L187 63 L183 60 L188 60 Z"
        fill="#FF69B4"
        opacity="0.75"
      />
      <circle cx="230" cy="38" r="3" fill="#ADD8E6" opacity="0.9" />

      {/* Two figures walking ahead */}
      <g fill="#FF69B4" opacity="0.55">
        <circle cx="155" cy="108" r="10" />
        <path d="M144 145 C144 125 150 118 155 118 C160 118 166 125 166 145 Z" />
      </g>
      <g fill="#87CEEB" opacity="0.65">
        <circle cx="178" cy="105" r="10" />
        <path d="M167 142 C167 122 173 115 178 115 C183 115 189 122 189 142 Z" />
      </g>

      {/* Soft horizon glow */}
      <ellipse cx="210" cy="42" rx="28" ry="10" fill="#FFB6C1" opacity="0.25" />
    </svg>
  );
}

const FuturePage = forwardRef<HTMLDivElement>(function FuturePage(_, ref) {
  const { title, text } = bookContent.future;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-azul-pastel/40 via-blanco to-rosa-pastel/35"
    >
      <div
        className="pointer-events-none absolute -right-10 top-20 h-36 w-36 rounded-full bg-rosa-pastel/30"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-8 bottom-28 h-40 w-40 rounded-full bg-azul-cielo/20"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-7 py-14 text-center sm:px-10">
        <header>
          <h2 className="font-display text-4xl leading-tight text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <FutureIllustration />

        <p className="font-display text-3xl text-foreground/80 sm:text-4xl">
          {text}
        </p>
      </div>
    </div>
  );
});

export default FuturePage;
