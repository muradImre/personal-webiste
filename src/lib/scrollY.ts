export function scrollY() {
  return document.scrollingElement?.scrollTop || window.scrollY || document.body.scrollTop || 0;
}

export function scrollToTopInstant() {
  const root = document.documentElement;
  const prev = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const scroller = document.scrollingElement ?? root;
  scroller.scrollTop = 0;
  document.body.scrollTop = 0;
  window.scrollTo(0, 0);
  root.style.scrollBehavior = prev;
}
