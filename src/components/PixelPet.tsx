"use client";

import { useEffect } from "react";

/**
 * Loads the vanilla JS pixel pet (pet.js + pet.css) into the Next.js app.
 * Touch devices are skipped automatically inside pet.js.
 */
export default function PixelPet() {
  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    const existingLink = document.getElementById("pixel-pet-css");
    if (!existingLink) {
      const link = document.createElement("link");
      link.id = "pixel-pet-css";
      link.rel = "stylesheet";
      link.href = "/pet/pet.css";
      document.head.appendChild(link);
    }

    const boot = () => {
      if (typeof window.initPixelPet === "function") {
        window.initPixelPet();
      }
    };

    if (document.getElementById("pixel-pet-script")) {
      boot();
      return;
    }

    const script = document.createElement("script");
    script.id = "pixel-pet-script";
    script.src = "/pet/pet.js";
    script.async = true;
    script.onload = boot;
    document.body.appendChild(script);

    return () => {
      window.__pixelPet?.destroy?.();
    };
  }, []);

  return null;
}

declare global {
  interface Window {
    __pixelPet?: { destroy: () => void };
    initPixelPet?: (config?: Record<string, unknown>) => unknown;
    PixelPet?: unknown;
  }
}
