"use client";

import { usePathname } from "next/navigation";

export function AppMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <main className={`flex-1 bg-paper ${pathname === "/" ? "" : "pt-20"}`}>{children}</main>
  );
}
