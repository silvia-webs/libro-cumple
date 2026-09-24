"use client";

import dynamic from "next/dynamic";
import {
  useCallback,
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
import IllustrationPage from "@/components/pages/IllustrationPage";
import LetterPage from "@/components/pages/LetterPage";
import MapPage from "@/components/pages/MapPage";
import QualitiesPage from "@/components/pages/QualitiesPage";
import RecentPhotosPage from "@/components/pages/RecentPhotosPage";
import TimelinePage from "@/components/pages/TimelinePage";

const PAGE_COUNT = 12;

/** Keep page elements stable so page-flip does not re-init on every render. */
const BOOK_PAGES = [
  <CoverPage key="p1" />,
  <LetterPage key="p2" />,
  <EarlyPhotosPage key="p3" />,
  <IllustrationPage key="p4" />,
  <MapPage key="p5" />,
  <TimelinePage key="p6" />,
  <ChangesPage key="p7" />,
  <RecentPhotosPage key="p8" />,
  <QualitiesPage key="p9" />,
  <AudioPage key="p10" />,
];

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

type PageFlipApi = {
  flipNext: (corner?: "top" | "bottom") => void;
  flipPrev: (corner?: "top" | "bottom") => void;
};

type FlipEvent = {
  data: number | string | { page: number; mode: string };
  object: PageFlipApi;
};

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
  swipeDistance?: number;
  disableFlipByClick?: boolean;
  clickEventForward?: boolean;
  useMouseEvents?: boolean;
  renderOnlyPageLengthChange?: boolean;
  className?: string;
  onFlip?: (e: FlipEvent) => void;
  onInit?: (e: FlipEvent) => void;
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
      setSize((prev) => {
        if (!prev) return { width, height };
        // Avoid remounts from mobile browser chrome show/hide.
        if (
          Math.abs(prev.width - width) < 40 &&
          Math.abs(prev.height - height) < 80
        ) {
          return prev;
        }
        return { width, height };
      });
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, size };
}

function NavButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  const isPrev = direction === "prev";

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
      aria-label={isPrev ? "Página anterior" : "Página siguiente"}
      className={`book-nav-btn absolute z-30 flex h-12 w-12 items-center justify-center rounded-full bg-blanco/90 text-rosa-medio shadow-md backdrop-blur-sm transition hover:bg-blanco active:scale-95 disabled:pointer-events-none disabled:opacity-30 ${
        isPrev
          ? "left-2 top-1/2 -translate-y-1/2 sm:left-3 max-sm:bottom-5 max-sm:left-5 max-sm:top-auto max-sm:translate-y-0"
          : "right-2 top-1/2 -translate-y-1/2 sm:right-3 max-sm:bottom-5 max-sm:right-5 max-sm:top-auto max-sm:translate-y-0"
      }`}
    >
      <span
        className={`block h-0 w-0 border-y-[7px] border-y-transparent ${
          isPrev
            ? "mr-0.5 border-r-10 border-r-rosa-medio"
            : "ml-0.5 border-l-10 border-l-rosa-medio"
        }`}
        aria-hidden
      />
    </button>
  );
}

export default function Book() {
  const { ref, size } = useElementSize<HTMLDivElement>();
  const flipApiRef = useRef<PageFlipApi | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [ready, setReady] = useState(false);

  const handleInit = useCallback((e: FlipEvent) => {
    flipApiRef.current = e.object;
    setReady(true);
  }, []);

  const handleFlip = useCallback((e: FlipEvent) => {
    flipApiRef.current = e.object;
    if (typeof e.data === "number") setPageIndex(e.data);
  }, []);

  const goPrev = useCallback(() => {
    flipApiRef.current?.flipPrev("bottom");
  }, []);

  const goNext = useCallback(() => {
    flipApiRef.current?.flipNext("bottom");
  }, []);

  // Block pageflip from eating gestures inside interactive regions.
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const blockIfNoFlip = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-no-flip]")) {
        event.stopPropagation();
      }
    };

    root.addEventListener("pointerdown", blockIfNoFlip, true);
    root.addEventListener("touchstart", blockIfNoFlip, true);
    root.addEventListener("mousedown", blockIfNoFlip, true);

    return () => {
      root.removeEventListener("pointerdown", blockIfNoFlip, true);
      root.removeEventListener("touchstart", blockIfNoFlip, true);
      root.removeEventListener("mousedown", blockIfNoFlip, true);
    };
  }, [ref]);

  return (
    <div ref={ref} className="book-viewport relative h-full w-full">
      {!size ? (
        <div
          className="flex h-full w-full items-center justify-center bg-blanco"
          aria-busy="true"
          aria-label="Cargando el libro"
        >
          <p className="font-display text-2xl text-rosa-medio">Abriendo…</p>
        </div>
      ) : (
        <>
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
            swipeDistance={30}
            mobileScrollSupport
            useMouseEvents
            clickEventForward
            disableFlipByClick
            renderOnlyPageLengthChange
            onInit={handleInit}
            onFlip={handleFlip}
          >
            {BOOK_PAGES}
          </FlipBook>

          <NavButton
            direction="prev"
            disabled={!ready || pageIndex <= 0}
            onClick={goPrev}
          />
          <NavButton
            direction="next"
            disabled={!ready || pageIndex >= PAGE_COUNT - 1}
            onClick={goNext}
          />
        </>
      )}
    </div>
  );
}
