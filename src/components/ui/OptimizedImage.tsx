import { cn } from "@/lib/utils";
import { imgFetchPriority } from "@/lib/img-props";

export type OptimizedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  srcSet?: string;
  sizes?: string;
  className?: string;
  /** Maps to the native `fetchpriority` attribute on `<img>`. */
  priority?: "high" | "low" | "auto";
  /** @deprecated Use `priority` */
  fetchPriority?: "high" | "low" | "auto";
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
  draggable?: boolean;
  /** When true, renders alt="" and aria-hidden (decorative). */
  decorative?: boolean;
};

/**
 * Responsive image with explicit dimensions to prevent CLS.
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  srcSet,
  sizes,
  className,
  priority,
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
      loading={loading}
      decoding={decoding}
      draggable={draggable}
      aria-hidden={decorative ? true : undefined}
      {...imgFetchPriority(priority ?? fetchPriority)}
    />
  );
}
