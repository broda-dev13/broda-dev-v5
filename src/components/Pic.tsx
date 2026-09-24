/**
 * A picture produced by scripts/images.mjs: AVIF first, WebP fallback, one
 * file per width. `src` is the path without its width and extension, e.g.
 * "/images/zniqa/zniqa-noir".
 */
type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  widths?: number[];
  sizes?: string;
  className?: string;
  priority?: boolean;
  draggable?: boolean;
};

export function Pic({ src, alt, width, height, widths = [560, 1136], sizes = "100vw", className, priority, draggable }: Props) {
  const set = (ext: string) => widths.map((w) => `${src}-${w}.${ext} ${w}w`).join(", ");
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={`${src}-${widths[widths.length - 1]}.webp`}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        draggable={draggable}
      />
    </picture>
  );
}
