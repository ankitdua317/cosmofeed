import React, { useCallback, useEffect, useRef } from "react";

const usePagination = (
  callback: VoidFunction,
  options?: IntersectionObserverInit
) => {
  const infiniteScrollRef: React.RefObject<HTMLDivElement> =
    useRef<HTMLDivElement>(null);

  const scrollObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting) {
        callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    const currentScrollTarget = infiniteScrollRef.current;
    const observer = new IntersectionObserver(scrollObserver, options);
    if (currentScrollTarget) {
      observer.observe(currentScrollTarget);
    }
    return () => {
      if (currentScrollTarget) {
        observer.unobserve(currentScrollTarget);
      }
    };
  }, [scrollObserver, options]);

  return { infiniteScrollRef };
};

export default usePagination;
