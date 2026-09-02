import Link from "next/link";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="px-5 pt-6 pb-4 md:px-12">
      {kicker ? <p className="text-sm text-muted">{kicker}</p> : null}
      <h1 className="display mt-4 max-w-[16ch] text-[clamp(3.4rem,10vw,8rem)]">{title}</h1>
      {children ? (
        <div className="mt-6 max-w-xl text-[18px] leading-8 text-ink-soft">{children}</div>
      ) : null}
    </header>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="px-5 pt-2 md:px-12">
      <Link href={href} className="text-sm text-muted no-underline hover:text-ink">
        ← {label}
      </Link>
    </p>
  );
}
