/**
 * The khatam, an eight-pointed star made of two squares of half-side `a`,
 * one turned 45°. Its outline has 16 vertices: the square corners at radius
 * a·√2 (every 45°) and the edge crossings at radius a / cos 22.5° (halfway
 * between). Returns an SVG path centred on (cx, cy).
 */
export function khatamPath(cx: number, cy: number, a: number): string {
  const outer = a * Math.SQRT2;
  const inner = a / Math.cos(Math.PI / 8);
  const points: string[] = [];
  for (let i = 0; i < 16; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const angle = (i * Math.PI) / 8 - Math.PI / 2;
    points.push(`${(cx + r * Math.cos(angle)).toFixed(3)} ${(cy + r * Math.sin(angle)).toFixed(3)}`);
  }
  return `M${points.join("L")}Z`;
}
