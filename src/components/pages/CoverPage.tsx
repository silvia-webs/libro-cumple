import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

function CoverDecor() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 320 520"
      fill="none"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Soft blobs */}
      <circle cx="40" cy="80" r="56" fill="#FFB6C1" opacity="0.35" />
      <circle cx="290" cy="120" r="48" fill="#ADD8E6" opacity="0.4" />
      <circle cx="60" cy="440" r="64" fill="#87CEEB" opacity="0.28" />
      <circle cx="270" cy="400" r="52" fill="#FFB6C1" opacity="0.3" />

      {/* Stars */}
      <path
        d="M48 160 L52 172 L64 172 L54 180 L58 192 L48 184 L38 192 L42 180 L32 172 L44 172 Z"
        fill="#FF69B4"
        opacity="0.55"
      />
      <path
        d="M268 200 L271 210 L281 210 L273 216 L276 226 L268 220 L260 226 L263 216 L255 210 L265 210 Z"
        fill="#87CEEB"
        opacity="0.7"
      />
      <path
        d="M86 360 L89 368 L97 368 L90 373 L93 381 L86 376 L79 381 L82 373 L75 368 L83 368 Z"
        fill="#FF69B4"
        opacity="0.45"
      />
      <path
        d="M240 60 L243 68 L251 68 L244 73 L247 81 L240 76 L233 81 L236 73 L229 68 L237 68 Z"
        fill="#ADD8E6"
        opacity="0.65"
      />

      {/* Simple flowers */}
      <g opacity="0.55" transform="translate(250 300)">
        <circle cx="0" cy="-10" r="7" fill="#FFB6C1" />
        <circle cx="9" cy="-3" r="7" fill="#FFB6C1" />
        <circle cx="6" cy="8" r="7" fill="#FFB6C1" />
        <circle cx="-6" cy="8" r="7" fill="#FFB6C1" />
        <circle cx="-9" cy="-3" r="7" fill="#FFB6C1" />
        <circle cx="0" cy="0" r="5" fill="#FF69B4" />
      </g>
      <g opacity="0.5" transform="translate(55 250)">
        <circle cx="0" cy="-9" r="6" fill="#ADD8E6" />
        <circle cx="8" cy="-3" r="6" fill="#ADD8E6" />
        <circle cx="5" cy="7" r="6" fill="#ADD8E6" />
        <circle cx="-5" cy="7" r="6" fill="#ADD8E6" />
        <circle cx="-8" cy="-3" r="6" fill="#ADD8E6" />
        <circle cx="0" cy="0" r="4" fill="#87CEEB" />
      </g>
      <g opacity="0.4" transform="translate(160 90) scale(0.75)">
        <circle cx="0" cy="-9" r="6" fill="#FFB6C1" />
        <circle cx="8" cy="-3" r="6" fill="#FFB6C1" />
        <circle cx="5" cy="7" r="6" fill="#FFB6C1" />
        <circle cx="-5" cy="7" r="6" fill="#FFB6C1" />
        <circle cx="-8" cy="-3" r="6" fill="#FFB6C1" />
        <circle cx="0" cy="0" r="4" fill="#FF69B4" />
      </g>
    </svg>
  );
}

const CoverPage = forwardRef<HTMLDivElement>(function CoverPage(_, ref) {
  const { title, subtitle, footer } = bookContent.cover;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-rosa-pastel/50 via-blanco to-azul-pastel/45"
    >
      <CoverDecor />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-between px-8 py-12 text-center sm:py-16">
        <p className="font-sans text-sm tracking-[0.2em] text-rosa-medio/80 uppercase">
          Para ti
        </p>

        <div className="flex flex-col items-center gap-3">
          <h1 className="font-display text-6xl leading-none text-rosa-medio sm:text-7xl">
            {title}
          </h1>
          <p className="font-display text-3xl text-foreground/85 sm:text-4xl">
            {subtitle}
          </p>
          <div
            className="mt-2 h-px w-16 bg-linear-to-r from-transparent via-rosa-medio/50 to-transparent"
            aria-hidden
          />
        </div>

        <p className="max-w-[16rem] font-sans text-lg leading-snug text-foreground/75 sm:text-xl">
          {footer}
        </p>
      </div>
    </div>
  );
});

export default CoverPage;
