"use client";

import { useEffect, useRef, useState } from "react";
import { bookContent } from "@/data/bookContent";

type GiftPhase = "wrapped" | "opening" | "open";

export default function GiftWrap({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<GiftPhase>("wrapped");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const openingTimer = useRef<number | null>(null);

  useEffect(() => {
    const audio = new Audio(bookContent.audio.audioSrc);
    audio.loop = true;
    audio.preload = "auto";
    audioRef.current = audio;

    return () => {
      if (openingTimer.current) window.clearTimeout(openingTimer.current);
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  async function unwrap() {
    if (phase !== "wrapped") return;
    setPhase("opening");

    try {
      await audioRef.current?.play();
    } catch {
      // Autoplay can still fail if the gesture is lost; the tap itself is the unlock.
    }

    openingTimer.current = window.setTimeout(() => {
      setPhase("open");
    }, 900);
  }

  return (
    <div className="relative h-full w-full">
      {children}

      {phase !== "open" ? (
        <button
          type="button"
          onClick={unwrap}
          aria-label={bookContent.gift.hint}
          className={`gift-wrap absolute inset-0 z-50 overflow-hidden rounded-2xl ${
            phase === "opening" ? "gift-wrap--opening" : ""
          }`}
        >
          <span className="gift-wrap__paper gift-wrap__paper--left" aria-hidden />
          <span className="gift-wrap__paper gift-wrap__paper--right" aria-hidden />
          <span className="gift-wrap__ribbon gift-wrap__ribbon--v" aria-hidden />
          <span className="gift-wrap__ribbon gift-wrap__ribbon--h" aria-hidden />

          <span className="gift-wrap__copy relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-8 text-center">
            <GiftBox />
            <span className="flex max-w-[16rem] flex-col gap-2">
              <span className="font-display text-4xl leading-tight text-blanco sm:text-5xl">
                {bookContent.gift.title}
              </span>
              <span className="font-sans text-base leading-snug text-blanco/90 sm:text-lg">
                {bookContent.gift.hint}
              </span>
            </span>
          </span>
        </button>
      ) : null}
    </div>
  );
}

function GiftBox() {
  return (
    <svg
      viewBox="0 0 140 130"
      className="gift-wrap__box h-28 w-28 drop-shadow-lg sm:h-32 sm:w-32"
      aria-hidden
    >
      <rect x="22" y="48" width="96" height="70" rx="8" fill="#FF69B4" />
      <rect x="22" y="48" width="96" height="18" rx="6" fill="#FFB6C1" />
      <rect x="62" y="48" width="16" height="70" fill="#87CEEB" opacity="0.95" />
      <rect x="22" y="70" width="96" height="12" fill="#ADD8E6" opacity="0.85" />
      <path
        d="M54 48 C44 28 62 22 70 40 C78 22 96 28 86 48 Z"
        fill="#87CEEB"
      />
      <circle cx="70" cy="46" r="7" fill="#FFFFFF" />
    </svg>
  );
}
