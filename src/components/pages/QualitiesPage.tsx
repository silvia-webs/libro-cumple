import { forwardRef } from "react";
import HeartConfetti from "@/components/ui/HeartConfetti";
import { bookContent } from "@/data/bookContent";

const QualitiesPage = forwardRef<HTMLDivElement>(
  function QualitiesPage(_, ref) {
    const { title, subtitle, buttonLabel, qualities } = bookContent.qualities;
    const featured =
      qualities.find((quality) => quality.id === 29) ?? qualities.at(-1);
    const others = qualities.filter((quality) => quality.id !== featured?.id);

    return (
      <div
        ref={ref}
        className="page relative h-full w-full overflow-hidden bg-linear-to-b from-blanco via-rosa-pastel/20 to-azul-pastel/30"
      >
        <div className="absolute inset-0 my-auto z-10 flex flex-col px-3 pb-4 pt-5 sm:px-5 sm:pt-7">
          <header className="shrink-0 text-center">
            <h2 className="font-display text-4xl mt-6 text-rosa-medio sm:text-5xl">
              {title}
              <p className="font-sans text-base leading-snug text-foreground/80 sm:text-lg">
                {subtitle}
              </p>
            </h2>
          </header>

          <div className="grid h-auto my-auto grid-cols-4 grid-rows-9 items-center gap-1.5 sm:gap-2">
            {featured ? (
              <p className="col-span-2 col-start-2 row-span-2 row-start-4 flex items-center justify-center text-center font-display text-4xl leading-none text-rosa-medio sm:text-5xl">
                {featured.label}
              </p>
            ) : null}

            {others.map((quality) => (
              <span
                key={quality.id}
                className="flex h-full min-h-0 items-center justify-center rounded-full bg-blanco px-1.5 py-1 text-center font-sans text-[11px] leading-tight text-foreground shadow-sm ring-1 ring-rosa-medio/20 sm:text-sm"
              >
                {quality.label}
              </span>
            ))}
            <div data-no-flip className="w-full grid justify-center col-span-4 ">
              <HeartConfetti label={buttonLabel} />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default QualitiesPage;
