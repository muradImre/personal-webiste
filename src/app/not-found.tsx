import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-16 md:px-10">
      <p className="text-sm text-muted">404</p>
      <h1 className="display mt-4 text-[clamp(3.4rem,10vw,8rem)]">Not here.</h1>
      <p className="mt-6 max-w-md text-[18px] leading-8 text-ink-soft">
        That page is missing, unlisted, or not planted yet.
      </p>
      <p className="mt-8">
        <Link href="/" className="no-underline">
          Back home
        </Link>
      </p>
    </div>
  );
}
