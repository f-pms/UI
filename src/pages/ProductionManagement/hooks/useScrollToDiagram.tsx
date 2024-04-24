import { useCallback, useEffect, useRef } from 'react';

export const useScrollToDiagram = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scrollToDiagram = useCallback(() => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, []);

  useEffect(() => {
    scrollToDiagram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ref,
    scrollToDiagram,
  };
};
