import { Link } from "react-router-dom";

type LinkItem = { label: string; href: string };

type RelatedLinksProps = {
  links: LinkItem[];
  heading?: string;
};

/** Internal links for crawl paths and LLM entity graph. */
export function RelatedLinks({
  links,
  heading = "Related pages",
}: RelatedLinksProps) {
  if (!links.length) return null;

  return (
    <nav
      className="py-10 border-t border-border"
      aria-label={heading}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">{heading}</h2>
        <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
          {links.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="inline-flex items-center rounded-full border border-border px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
