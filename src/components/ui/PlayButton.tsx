"use client";

import { useEffect, useRef, useState } from "react";

type PlayButtonProps = {
  src: string;
  label: string;
};

export default function PlayButton({ src, label }: PlayButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    const onEnded = () => setPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, [src]);

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }

    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? "Pausar mensaje de voz" : label}
      aria-pressed={playing}
      className="flex h-24 w-24 items-center justify-center rounded-full bg-rosa-medio text-blanco shadow-xl transition active:scale-95"
    >
      {playing ? (
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-8 w-2.5 rounded-sm bg-blanco" />
          <span className="h-8 w-2.5 rounded-sm bg-blanco" />
        </span>
      ) : (
        <span
          className="ml-1 block h-0 w-0 border-y-[14px] border-l-[22px] border-y-transparent border-l-blanco"
          aria-hidden
        />
      )}
    </button>
  );
}
