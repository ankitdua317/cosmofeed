import Caret from "@/icons/Caret";
import {
  PropsWithChildren,
  TouchEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";

interface Props {
  pages: number;
  carouselClassName?: string;
  handlerClassName?: string;
  title?: string;
  isAutoplay?: boolean;
  autoplayTime?: number;
}

const Carousal = ({
  pages,
  carouselClassName,
  handlerClassName,
  title,
  children,
  isAutoplay = false,
  autoplayTime = 2000,
}: PropsWithChildren<Props>) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStarted, setTouchStarted] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const onTouchStart: TouchEventHandler = (event) => {
    setTouchStarted(event.changedTouches[0].pageX);
  };

  const updateCurrentPage = (index: number) => {
    setCurrentPage(index);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => (prev === pages - 1 ? 0 : prev + 1));
  };

  const handlePrevClick = () => {
    setCurrentPage((prev) => (prev === 0 ? pages - 1 : prev - 1));
  };

  const onTouchMove: TouchEventHandler = (event) => {
    if (touchStarted != null && carouselRef.current) {
      const currentPosition = event.changedTouches[0].pageX;
      const delta = touchStarted - currentPosition;
      if (delta < 0 && currentPage > 0) {
        carouselRef.current.style.transform = `translateX(calc(-${
          (100 / pages) * currentPage
        }% + ${delta * -1}px))`;
      } else if (delta > 0 && currentPage < pages - 1) {
        carouselRef.current.style.transform = `translateX(calc(-${
          (100 / pages) * currentPage
        }% - ${delta}px)`;
      }
    }
  };

  const onTouchEnd: TouchEventHandler = (event) => {
    if (touchStarted != null && carouselRef.current) {
      const currentPosition = event.changedTouches[0].pageX;
      const delta = touchStarted - currentPosition;
      if (delta > 50) {
        updateCurrentPage(
          currentPage < pages - 1 ? currentPage + 1 : currentPage
        );
      } else if (delta < -50) {
        updateCurrentPage(currentPage > 0 ? currentPage - 1 : currentPage);
      } else {
        carouselRef.current.style.transform = `translateX(-${
          (100 / pages) * currentPage
        }%)`;
      }
    }
    setTouchStarted(null);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoplay) {
      timer = setInterval(() => {
        setCurrentPage((prev) => (prev === pages - 1 ? 0 : prev + 1));
      }, autoplayTime);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isAutoplay, autoplayTime, pages]);

  return (
    <>
      <section
        className={`flex items-center justify-between my-4 ${handlerClassName}`}
      >
        <h5 className="text-black font-semibold">{title}</h5>
        <div className="flex">
          <button className="mr-4 p-4" onClick={handlePrevClick}>
            <Caret className="rotate-180" />
          </button>
          <button className="p-4" onClick={handleNextClick}>
            <Caret />
          </button>
        </div>
      </section>
      <section
        className={`flex transition-transform duration-300 ease-linear overflow-hidden mb-16 ${carouselClassName}`}
        style={{
          width: `${pages * 100}%`,
          transform: `translateX(-${(100 / pages) * currentPage}%)`,
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={carouselRef}
      >
        {children}
      </section>
    </>
  );
};

export default Carousal;
