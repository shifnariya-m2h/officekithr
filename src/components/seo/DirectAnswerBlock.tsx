type DirectAnswerBlockProps = {
  answer: string;
  definition?: { term: string; meaning: string };
};

/** Answer-first block for AI search extractability (GEO). */
export function DirectAnswerBlock({ answer, definition }: DirectAnswerBlockProps) {
  return (
    <section
      className="rounded-xl border border-primary/15 bg-primary/5 p-6 md:p-8"
      aria-labelledby="direct-answer-heading"
    >
      <h2 id="direct-answer-heading" className="text-lg font-semibold text-foreground mb-3">
        Quick answer
      </h2>
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{answer}</p>
      {definition && (
        <dl className="mt-6 pt-6 border-t border-border/60">
          <dt className="font-medium text-foreground">{definition.term}</dt>
          <dd className="mt-1 text-muted-foreground leading-relaxed">{definition.meaning}</dd>
        </dl>
      )}
    </section>
  );
}
