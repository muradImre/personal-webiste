"use client";

import { useLayoutEffect } from "react";

export function RoutePainted({ children }: { children: React.ReactNode }) {
  useLayoutEffect(() => {
    window.dispatchEvent(
      new CustomEvent("route-painted", { detail: window.location.pathname }),
    );
  }, [children]);

  return children;
}
