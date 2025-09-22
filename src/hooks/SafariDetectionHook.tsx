import { useEffect } from "react";

export default function useSafariIos() {
  useEffect(() => {
    const ua = navigator.userAgent;

    // Detect iOS Safari specifically
    const isIOS = /iP(hone|od|ad)/.test(ua);
    const isWebkit = /WebKit/.test(ua);
    const isChrome = /CriOS/.test(ua);
    const isFirefox = /FxiOS/.test(ua);

    if (isIOS && isWebkit && !isChrome && !isFirefox) {
      document.body.classList.add("safari-ios");
    } else {
      document.body.classList.remove("safari-ios");
    }
  }, []);
}
