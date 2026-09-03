import Script from "next/script";

/**
 * Privacy-friendly pageviews via Plausible.
 * Loads only when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set (e.g. muradimre.com).
 * Script is deferred — it does not block first paint.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
