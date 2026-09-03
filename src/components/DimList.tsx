"use client";

import { useEffect, useRef } from "react";

export function DimList({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const found = ref.current;
    if (!found) return;
    const ul: HTMLUListElement = found;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function setHot(hot: HTMLAnchorElement | null) {
      const items = [...ul.querySelectorAll<HTMLAnchorElement>(":scope > li > a")];
      ul.classList.toggle("is-pressing", Boolean(hot));
      items.forEach((a) => a.classList.toggle("is-hot", a === hot));
    }

    function down(event: PointerEvent) {
      if (reduce.matches) return;
      const a = (event.target as HTMLElement).closest("a");
      if (!a || !ul.contains(a)) return;
      setHot(a);
    }

    function up() {
      setHot(null);
    }

    function onReduceChange() {
      if (reduce.matches) setHot(null);
    }

    ul.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    reduce.addEventListener("change", onReduceChange);

    return () => {
      ul.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
      reduce.removeEventListener("change", onReduceChange);
    };
  }, []);

  return (
    <ul ref={ref} className={`dim-siblings ${className}`.trim()}>
      {children}
    </ul>
  );
}
