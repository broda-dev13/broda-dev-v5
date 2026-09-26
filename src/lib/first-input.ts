const INPUTS = ["pointerdown", "keydown", "wheel", "touchstart", "scroll"] as const;

/**
 * Runs `start` once, at the visitor's first gesture (a scroll, a wheel turn,
 * a touch, a key). What only matters once the visitor moves (smooth
 * scrolling, scroll effects) waits for it, so it never competes with the
 * first paint. Returns a function that cancels the wait.
 */
export function onFirstInput(start: () => void): () => void {
  let done = false;
  const run = () => {
    if (done) return;
    done = true;
    cancel();
    start();
  };
  const cancel = () => INPUTS.forEach((e) => window.removeEventListener(e, run));
  INPUTS.forEach((e) => window.addEventListener(e, run, { passive: true }));
  return cancel;
}
