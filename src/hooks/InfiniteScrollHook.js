import { useState, useEffect } from "react";

export const useInfiniteScroll = dependencies => {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, dependencies);

    ref && observer.observe(ref);

    return () => {
      ref && observer.unobserve(ref);
    };
  }, [ref, dependencies]);

  return [setRef, visible];
};
