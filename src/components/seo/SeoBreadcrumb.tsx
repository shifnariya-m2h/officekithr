import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { PageJsonLd } from "@/components/PageJsonLd";
import { breadcrumbSchema } from "@/seo/schema";

type Crumb = { name: string; path: string };

type SeoBreadcrumbProps = {
  items: Crumb[];
  className?: string;
};

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. */
export function SeoBreadcrumb({ items, className }: SeoBreadcrumbProps) {
  if (!items.length) return null;

  return (
    <>
      <PageJsonLd nodes={[breadcrumbSchema(items)]} />
      <Breadcrumb className={className} aria-label="Breadcrumb">
        <BreadcrumbList>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <span key={item.path} className="contents">
                {index > 0 && (
                  <BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </BreadcrumbItem>
                )}
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link to={item.path}>{item.name}</Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </span>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </>
  );
}
