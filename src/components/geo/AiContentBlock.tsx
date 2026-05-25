import type { ReactNode } from "react";

type AiContentBlockProps = {
  heading: string;
  children: ReactNode;
  id?: string;
};

/** Semantic, citation-friendly content block for LLM retrieval. */
export function AiContentBlock({ heading, children, id }: AiContentBlockProps) {
  const slug = id ?? heading.toLowerCase().replace(/\s+/g, "-").slice(0, 48);
  return (
    <article
      className="prose prose-neutral max-w-none"
      aria-labelledby={`${slug}-title`}
    >
      <h2 id={`${slug}-title`} className="text-xl font-semibold text-foreground mb-3">
        {heading}
      </h2>
      <div className="text-muted-foreground leading-relaxed">{children}</div>
    </article>
  );
}

type FactGridProps = {
  facts: { heading: string; body: string }[];
};

export function AiFactGrid({ facts }: FactGridProps) {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      {facts.map((fact) => (
        <AiContentBlock key={fact.heading} heading={fact.heading}>
          <p>{fact.body}</p>
        </AiContentBlock>
      ))}
    </div>
  );
}
