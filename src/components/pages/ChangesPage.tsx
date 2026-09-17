import { forwardRef } from "react";
import { bookContent } from "@/data/bookContent";

const ChangesPage = forwardRef<HTMLDivElement>(function ChangesPage(_, ref) {
  const { title, items } = bookContent.changes;

  return (
    <div
      ref={ref}
      className="page relative h-full w-full overflow-hidden bg-linear-to-b from-rosa-pastel/25 via-blanco to-azul-pastel/30"
    >
      <div className="absolute inset-0 z-10 flex flex-col px-6 py-9 sm:px-8 sm:py-11">
        <header className="mb-5 shrink-0 text-center">
          <h2 className="font-display text-4xl text-rosa-medio sm:text-5xl">
            {title}
          </h2>
        </header>

        <ul className="flex min-h-0 flex-1 flex-col justify-center gap-2.5 overflow-y-auto">
          {items.map((item) => (
            <li
              key={item.text}
              className="flex items-center gap-3 rounded-2xl bg-blanco/80 px-4 py-2.5 shadow-sm"
            >
              <span className="text-xl" aria-hidden>
                {item.icon}
              </span>
              <span className="font-sans text-base text-foreground/85 sm:text-lg">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default ChangesPage;
