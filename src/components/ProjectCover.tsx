export function ProjectCover({
  title,
  tone,
  image,
  className = "",
}: {
  title: string;
  tone: string;
  image?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] shadow-[0_0_0_0_rgba(28,29,32,0)] transition-[transform,shadow] duration-300 ease-[cubic-bezier(0.22,1.2,0.36,1)] group-hover:z-10 group-hover:scale-[1.08] group-hover:shadow-[0_22px_48px_rgba(28,29,32,0.32)] ${className}`}
      style={{ background: tone }}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.14),transparent_42%)]" />
          <p className="display absolute right-5 bottom-4 left-5 text-[clamp(1.6rem,4vw,3rem)] text-white/90">
            {title}
          </p>
        </>
      )}
    </div>
  );
}
