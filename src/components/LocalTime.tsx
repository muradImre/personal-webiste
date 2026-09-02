"use client";

import { useEffect, useState } from "react";

export function LocalTime({ timeZone }: { timeZone: string }) {
  const [label, setLabel] = useState("");

  useEffect(() => {
    function tick() {
      setLabel(
        new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
        }).format(new Date()),
      );
    }

    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  if (!label) return <span className="tabular-nums">—</span>;
  return <span className="tabular-nums">{label}</span>;
}
