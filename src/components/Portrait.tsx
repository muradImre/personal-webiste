"use client";

export function Portrait({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-[1.75rem] bg-[#8d8e90] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/me.jpg"
        alt="Murad Imre"
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
