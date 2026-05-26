import type { ReactNode } from "react";

type AiOptimizedSectionProps = {
  id: string;
  heading: string;
  children: ReactNode;
  className?: string;
};

/**
 * Semantic content section optimised for AI/LLM retrieval.
 * Uses explicit aria labels, semantic HTML, and structured data markers.
 */
export function AiOptimizedSection({
  id,
  heading,
  children,
  className = "",
}: AiOptimizedSectionProps) {
  return (
    <section
      id={id}
      className={`py-12 ${className}`}
      aria-labelledby={`${id}-title`}
      itemScope
      itemType="https://schema.org/Article"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2
          id={`${id}-title`}
          className="text-2xl font-semibold text-foreground mb-6"
          itemProp="headline"
        >
          {heading}
        </h2>
        <div
          className="text-muted-foreground leading-relaxed space-y-4"
          itemProp="articleBody"
        >
          {children}
        </div>
      </div>
    </section>
  );
}

type AiDefinitionBlockProps = {
  term: string;
  definition: string;
  className?: string;
};

/**
 * Definition block with structured <dl> for featured snippet extraction.
 */
export function AiDefinitionBlock({
  term,
  definition,
  className = "",
}: AiDefinitionBlockProps) {
  return (
    <dl
      className={`rounded-xl border border-primary/15 bg-primary/5 p-6 ${className}`}
      itemScope
      itemType="https://schema.org/DefinedTerm"
    >
      <dt className="font-semibold text-foreground text-lg mb-2" itemProp="name">
        {term}
      </dt>
      <dd className="text-muted-foreground leading-relaxed" itemProp="description">
        {definition}
      </dd>
    </dl>
  );
}

type AiKeyFactsProps = {
  facts: { label: string; value: string }[];
};

/**
 * Key-value facts block for featured snippet extraction and LLM retrieval.
 */
export function AiKeyFacts({ facts }: AiKeyFactsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
      {facts.map((fact) => (
        <article
          key={fact.label}
          className="rounded-lg border border-border bg-card p-4"
          role="listitem"
        >
          <dt className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
            {fact.label}
          </dt>
          <dd className="text-foreground font-medium">{fact.value}</dd>
        </article>
      ))}
    </div>
  );
}
