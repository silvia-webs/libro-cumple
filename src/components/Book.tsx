"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

import CoverPage from "@/components/pages/CoverPage";
import EarlyPhotosPage from "@/components/pages/EarlyPhotosPage";
import LetterPage from "@/components/pages/LetterPage";

const HTMLFlipBook = dynamic(() => import("react-pageflip-enhanced"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full w-full items-center justify-center bg-blanco"
      aria-busy="true"
      aria-label="Cargando el libro"
    >
      <p className="font-display text-2xl text-rosa-medio">Abriendo…</p>
    </div>
  ),
});

type FlipBookProps = {
  children: ReactNode;
  width: number;
  height: number;
  size: "fixed" | "stretch";
  singlePage: boolean;
  usePortrait: boolean;
  showCover: boolean;
  drawShadow: boolean;
  flippingTime: number;
  mobileScrollSupport: boolean;
  autoSize?: boolean;
  className?: string;
};

function FlipBook(props: FlipBookProps) {
  const Book = HTMLFlipBook as unknown as ComponentType<FlipBookProps>;
  return <Book {...props} />;
}

function useElementSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(
    null,
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const width = Math.max(260, Math.floor(el.clientWidth));
      const height = Math.max(400, Math.floor(el.clientHeight));
      setSize((prev) =>
        prev && prev.width === width && prev.height === height
          ? prev
          : { width, height },
      );
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, size };
}

export default function Book() {
  const { ref, size } = useElementSize<HTMLDivElement>();

  return (
    <div ref={ref} className="h-full w-full">
      {!size ? (
        <div
          className="flex h-full w-full items-center justify-center bg-blanco"
          aria-busy="true"
          aria-label="Cargando el libro"
        >
          <p className="font-display text-2xl text-rosa-medio">Abriendo…</p>
        </div>
      ) : (
        <FlipBook
          key={`${size.width}x${size.height}`}
          className="book-shell"
          width={size.width}
          height={size.height}
          size="fixed"
          autoSize={false}
          singlePage
          usePortrait
          showCover={false}
          drawShadow
          flippingTime={800}
          mobileScrollSupport
        >
          <CoverPage />
          <LetterPage />
          <EarlyPhotosPage />

          <div className="page flex h-full w-full flex-col items-center justify-center gap-3 bg-azul-pastel/40 p-8">
            <p className="font-display text-4xl text-azul-cielo sm:text-5xl">
              Página 4
            </p>
            <p className="text-center text-lg text-foreground/80 sm:text-xl">
              Próximo: el día que todo empezó
            </p>
          </div>
        </FlipBook>
      )}
    </div>
  );
}
