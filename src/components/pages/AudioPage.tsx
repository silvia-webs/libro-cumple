import { forwardRef } from "react";
import PlayButton from "@/components/ui/PlayButton";
import { bookContent } from "@/data/bookContent";

const AudioPage = forwardRef<HTMLDivElement>(function AudioPage(_, ref) {
  const { playLabel, message, credits, audioSrc } = bookContent.audio;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-rosa-pastel"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-rosa-pastel via-rosa-pastel to-azul-pastel/40"
        aria-hidden
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
        <PlayButton src={audioSrc} label={playLabel} />

        <div className="flex flex-col gap-2">
          <p className="font-display text-3xl text-rosa-medio sm:text-4xl">
            {playLabel}
          </p>
          <p className="font-sans text-lg text-foreground/80 sm:text-xl">
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
