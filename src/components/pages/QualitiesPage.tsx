import { forwardRef } from "react";
// import HeartConfetti from "@/components/ui/HeartConfetti";
import { bookContent } from "@/data/bookContent";

const QualitiesPage = forwardRef<HTMLDivElement>(function QualitiesPage(
  _,
  ref,
) {
  const { title, buttonLabel, qualities } = bookContent.qualities;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/20 to-azul-pastel/30"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-4 py-8 sm:px-6 sm:py-10">
        <header className="mb-3 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
          <div className="mt-3">
            {/* <HeartConfetti label={buttonLabel} /> */}
          </div>
        </header>

        <div className="flex min-h-0 flex-1 flex-wrap content-center justify-center gap-2 overflow-y-auto py-2">
          {qualities.map((quality) => (
            <span
              key={quality.id}
              className="rounded-full bg-blanco/90 px-2.5 py-1 font-sans text-xs text-foreground/80 shadow-sm sm:text-sm"
            >
              {quality.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
});

export default QualitiesPage;
