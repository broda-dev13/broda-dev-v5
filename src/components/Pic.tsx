import LADDER from "@/lib/image-widths.json";

/**
 * A picture produced by scripts/images.mjs: AVIF first, WebP fallback, one
 * file per width. `src` is the path without its width and extension, e.g.
 * "/images/zniqa/zniqa-noir"; `width` is the source's own width. The set
 * lists every file images.mjs made for it (each width of the ladder below
 * the source's, then the source's), so none is left unused and `sizes`
 * alone decides: a phone takes the 320 or 800, a large screen the 1600.
 */
type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  priority?: boolean;
  draggable?: boolean;
};

export function Pic({ src, alt, width, height, sizes = "100vw", className, priority, draggable }: Props) {
  const widths = [...LADDER.filter((w) => w < width), width];
  const set = (ext: string) => widths.map((w) => `${src}-${w}.${ext} ${w}w`).join(", ");
  // Browsers without srcset get a middle size, not the largest.
  const fallback = widths.filter((w) => w <= 1136).pop() ?? width;
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={`${src}-${fallback}.webp`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? undefined : "async"}
        fetchPriority={priority ? "high" : undefined}
        draggable={draggable}
      />
    </picture>
  );
}
