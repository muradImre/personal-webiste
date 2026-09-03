"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { site } from "@/content/site";

export function AboutStamp({ className = "" }: { className?: string }) {
  const fieldRef = useRef<HTMLAnchorElement>(null);
  const magnetRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const foundField = fieldRef.current;
    const foundMagnet = magnetRef.current;
    if (!foundField || !foundMagnet) return;
    const field: HTMLAnchorElement = foundField;
    const magnet: HTMLSpanElement = foundMagnet;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (reduce.matches || !fine.matches) return;

    const FIELD = 240;
    const STRENGTH = 0.38;
    const MAX = 44;
    const LERP = 0.13;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let inside = false;
    let listening = false;
    let frame = 0;

    function settle() {
      return Math.abs(targetX - x) < 0.08 && Math.abs(targetY - y) < 0.08;
    }

    function paint() {
      x += (targetX - x) * LERP;
      y += (targetY - y) * LERP;
      const tiltX = (-y / MAX) * 12;
      const tiltY = (x / MAX) * 12;
      magnet.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
      if (settle() && targetX === 0 && targetY === 0) {
        magnet.style.transform = "";
        frame = 0;
        return;
      }
      frame = requestAnimationFrame(paint);
    }

    function kick() {
      if (!frame) frame = requestAnimationFrame(paint);
    }

    function rest() {
      inside = false;
      targetX = 0;
      targetY = 0;
      kick();
    }

    function onMove(event: PointerEvent) {
      const rect = field.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = event.clientX - cx;
      const dy = event.clientY - cy;
      const dist = Math.hypot(dx, dy);

      if (dist > FIELD) {
        if (inside) rest();
        return;
      }

      const nx = dist === 0 ? 0 : dx / dist;
      const ny = dist === 0 ? 0 : dy / dist;
      const falloff = 1 - dist / FIELD;
      const pull = Math.min(MAX, dist * STRENGTH * (0.35 + falloff * 0.65));

      if (!inside) {
        inside = true;
        targetX = nx * Math.min(MAX, pull + 16);
        targetY = ny * Math.min(MAX, pull + 16);
      } else {
        targetX = nx * pull;
        targetY = ny * pull;
      }
      kick();
    }

    function startListening() {
      if (listening) return;
      listening = true;
      window.addEventListener("pointermove", onMove, { passive: true });
    }

    function stopListening() {
      if (!listening) return;
      listening = false;
      window.removeEventListener("pointermove", onMove);
      rest();
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) startListening();
        else stopListening();
      },
      { rootMargin: `${FIELD}px` },
    );
    observer.observe(field);

    return () => {
      observer.disconnect();
      stopListening();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <Link
      ref={fieldRef}
      href="/about"
      aria-label="About"
      className={`group relative flex h-64 w-64 shrink-0 items-center justify-center md:h-72 md:w-72 [perspective:700px] ${className}`.trim()}
    >
      <span
        ref={magnetRef}
        className="relative flex h-52 w-52 items-center justify-center will-change-transform md:h-64 md:w-64"
      >
        <svg
          className="about-orbit pointer-events-none absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <defs>
            <path id="about-ring" d="M 50 50 m -39 0 a 39 39 0 1 1 78 0 a 39 39 0 1 1 -78 0" />
          </defs>
          <text fill="currentColor" fontSize="5.4" xmlSpace="preserve">
            <textPath href="#about-ring" textLength="245" lengthAdjust="spacing">
              {`About\u00A0\u2014\u00A0${site.name}\u00A0\u2014\u00A0About\u00A0\u2014\u00A0${site.name}\u00A0\u2014\u00A0`}
            </textPath>
          </text>
        </svg>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={site.portrait}
          alt=""
          className="h-[6.6rem] w-[6.6rem] rounded-full object-cover object-top shadow-[0_10px_28px_rgba(28,29,32,0.28)] transition-transform duration-200 group-hover:scale-105 group-active:scale-105 md:h-[8.1rem] md:w-[8.1rem] md:object-center"
        />
      </span>
    </Link>
  );
}
