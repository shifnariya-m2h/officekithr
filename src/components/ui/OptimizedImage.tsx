import { cn } from "@/lib/utils";

export type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  className?: string;
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  draggable?: boolean;
  /** When true, renders alt="" and aria-hidden (decorative). */
  decorative?: boolean;
};

/**
 * Responsive image with explicit dimensions to prevent CLS.
 * Use for LCP and content images with known aspect ratios.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  className,
  fetchPriority,
  loading,
  decoding = "async",
  draggable,
  decorative = false,
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={decorative ? "" : alt}
      width={width}
      height={height}
      className={cn(className)}
      fetchPriority={fetchPriority}
      loading={loading}
      decoding={decoding}
      draggable={draggable}
      aria-hidden={decorative ? true : undefined}
    />
  );
}
