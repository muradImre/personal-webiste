export function ProjectCover({
  title,
  tone,
  image,
  showTitle = true,
  className = "",
}: {
  title: string;
  tone: string;
  image?: string;
  showTitle?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] shadow-[0_0_0_0_rgba(28,29,32,0)] transition-shadow duration-150 ease-out group-hover:shadow-[0_22px_48px_rgba(28,29,32,0.32)] group-active:shadow-[0_22px_48px_rgba(28,29,32,0.32)] group-[.is-up]:shadow-[0_22px_48px_rgba(28,29,32,0.32)] ${className}`}
      style={{ background: tone }}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" draggable={false} className="absolute inset-0 h-full w-full object-cover object-center" />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_42%)]" />
      )}
      {showTitle ? (
        <p className="display absolute inset-x-4 bottom-3.5 z-10 text-center text-[21px] leading-6 text-white/90 sm:text-[23px]">
          {title}
        </p>
      ) : null}
    </div>
  );
}
