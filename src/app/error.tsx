"use client";

import { useEffect } from "react";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="px-5 py-16 md:px-10">
      <p className="text-sm text-muted">Error</p>
      <h1 className="display mt-4 text-[clamp(3.4rem,10vw,8rem)]">Something went wrong.</h1>
      <p className="mt-6 max-w-md text-[18px] leading-8 text-ink-soft">
        That page failed to load. Try again, or go back and open another one.
      </p>
      <p className="mt-8">
        <button type="button" className="pill pill-line" onClick={() => retry()}>
          Try again
        </button>
      </p>
    </div>
  );
}
