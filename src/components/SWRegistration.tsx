"use client";

import { useEffect } from "react";

export function SWRegistration() {
  useEffect(() => {
    // Enable Service Worker for testing caching locally
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered:", registration);
          })
          .catch((error) => {
            console.error("SW registration failed:", error);
          });
      });
    }
  }, []);

  return null;
}
