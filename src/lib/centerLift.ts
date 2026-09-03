export function paintCenterLift(scroller: HTMLElement, sticky?: { id: string | null }) {
  const cards = scroller.querySelectorAll<HTMLElement>(".lift-card");
  if (cards.length === 0) return;

  const scrollerRect = scroller.getBoundingClientRect();
  const mid = scrollerRect.left + scrollerRect.width / 2;
  let best: HTMLElement | null = null;
  let bestDist = Infinity;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    const dist = Math.abs(center - mid);
    if (dist < bestDist) {
      bestDist = dist;
      best = card;
    }
  });

  if (sticky && best) {
    const current = sticky.id
      ? [...cards].find((card) => card.dataset.liftId === sticky.id) ?? null
      : null;
    if (current && current !== best) {
      const currentRect = current.getBoundingClientRect();
      const currentDist = Math.abs(currentRect.left + currentRect.width / 2 - mid);
      // Stay on the current card until another is clearly closer.
      if (currentDist - bestDist < 36) {
        best = current;
      }
    }
    sticky.id = best.dataset.liftId ?? null;
  }

  cards.forEach((card) => card.classList.toggle("is-up", card === best));
}

export function bindCenterLift(scroller: HTMLElement) {
  const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sticky = { id: null as string | null };

  scroller.querySelectorAll<HTMLElement>(".lift-card").forEach((card, index) => {
    if (!card.dataset.liftId) card.dataset.liftId = String(index);
  });

  let frame = 0;

  function paint() {
    frame = 0;
    if (fineHover.matches || reduce.matches) {
      scroller.querySelectorAll(".lift-card").forEach((card) => card.classList.remove("is-up"));
      sticky.id = null;
      return;
    }
    paintCenterLift(scroller, sticky);
  }

  function onScroll() {
    if (frame) return;
    frame = requestAnimationFrame(paint);
  }

  paint();
  scroller.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  fineHover.addEventListener("change", paint);
  reduce.addEventListener("change", paint);

  return () => {
    if (frame) cancelAnimationFrame(frame);
    scroller.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    fineHover.removeEventListener("change", paint);
    reduce.removeEventListener("change", paint);
  };
}
