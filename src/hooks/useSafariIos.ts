import { useEffect } from "react";

/**
 * Tags `<body>` with `safari-ios` on iOS Safari only.
 *
 * iOS Safari resizes the visual viewport as its toolbars collapse, so `100vh`
 * resolves taller than the visible area and full-height heroes get clipped.
 * `src/index.scss` keys an override off this class.
 */
export const useSafariIos = () => {
  useEffect(() => {
    const ua = navigator.userAgent;

    // Chrome (CriOS) and Firefox (FxiOS) on iOS also report WebKit, so they
    // have to be excluded explicitly.
    const isIOS = /iP(hone|od|ad)/.test(ua);
    const isWebkit = /WebKit/.test(ua);
    const isChrome = /CriOS/.test(ua);
    const isFirefox = /FxiOS/.test(ua);

    document.body.classList.toggle("safari-ios", isIOS && isWebkit && !isChrome && !isFirefox);
  }, []);
};
