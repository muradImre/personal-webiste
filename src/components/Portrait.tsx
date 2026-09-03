import { site } from "@/content/site";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl bg-[#2a2a2c] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={site.portrait}
        alt={site.name}
        className="h-full w-full object-cover object-top"
      />
    </div>
  );
}
