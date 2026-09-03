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

export function Article({ children }: { children: React.ReactNode }) {
  return (
    <article className="mx-auto w-full max-w-[96rem] px-5 pb-16 md:px-12">{children}</article>
  );
}

export function ArticleHead({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="grid gap-6 pt-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)] xl:items-end xl:gap-16">
      <div>
        {kicker ? <p className="mb-4 text-sm text-muted">{kicker}</p> : null}
        <h1 className="display text-[clamp(2.8rem,8vw,6.2rem)]">{title}</h1>
      </div>
      {children ? <div>{children}</div> : null}
    </header>
  );
}

export function BackLink({ href, label }: { href: string; label: string }) {
  return (
    <p className="pt-2">
      <Link href={href} className="text-sm text-muted no-underline hover:text-ink">
        ← {label}
      </Link>
    </p>
  );
}
