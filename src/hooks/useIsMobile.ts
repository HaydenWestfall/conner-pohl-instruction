import { useEffect, useState } from "react";

/**
 * Tracks whether the viewport is narrower than `breakpoint` (px).
 *
 * Uses `matchMedia` rather than a `resize` listener: the browser only notifies
 * on an actual threshold crossing instead of firing on every pixel of a drag,
 * so this does not re-render the tree throughout a window resize.
 */
export const useIsMobile = (breakpoint: number): boolean => {
  const query = `(max-width: ${breakpoint - 1}px)`;
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = (event: MediaQueryListEvent) => setIsMobile(event.matches);

    // Re-sync in case the viewport changed between first render and this effect.
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
};
