"use client";

import dynamic from "next/dynamic";
import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from "react";

import AudioPage from "@/components/pages/AudioPage";
import ChangesPage from "@/components/pages/ChangesPage";
import CoverPage from "@/components/pages/CoverPage";
import EarlyPhotosPage from "@/components/pages/EarlyPhotosPage";
import FuturePage from "@/components/pages/FuturePage";
import IllustrationPage from "@/components/pages/IllustrationPage";
import LetterPage from "@/components/pages/LetterPage";
import MapPage from "@/components/pages/MapPage";
import QualitiesPage from "@/components/pages/QualitiesPage";
import RecentPhotosPage from "@/components/pages/RecentPhotosPage";
import StoryPage from "@/components/pages/StoryPage";
import TimelinePage from "@/components/pages/TimelinePage";

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
          <IllustrationPage />
          <StoryPage />
          <MapPage />
          <TimelinePage />
          <ChangesPage />
          <RecentPhotosPage />
          <QualitiesPage />
          <FuturePage />
          <AudioPage />
        </FlipBook>
      )}
    </div>
  );
}
