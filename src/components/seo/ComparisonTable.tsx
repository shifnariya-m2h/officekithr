export type ComparisonTableRow = {
  /** Row label — "aspect" or "feature" in source configs. */
  label: string;
  officekit: string;
  competitor: string;
};

type ComparisonTableProps = {
  competitorName: string;
  rows: ComparisonTableRow[];
  /** Column header for the first column. */
  labelHeader?: string;
  className?: string;
};

/** Shared feature/pricing comparison table for vs pages. */
export function ComparisonTable({
  competitorName,
  rows,
  labelHeader = "Aspect",
  className = "",
}: ComparisonTableProps) {
  return (
    <div className={`overflow-x-auto rounded-xl border border-border ${className}`}>
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-muted/50">
            <th scope="col" className="p-4 font-semibold text-foreground">
              {labelHeader}
            </th>
            <th scope="col" className="p-4 font-semibold text-foreground">
              OfficeKit HR
            </th>
            <th scope="col" className="p-4 font-semibold text-foreground">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-border">
              <th scope="row" className="p-4 font-medium text-foreground align-top">
                {row.label}
              </th>
              <td className="p-4 text-muted-foreground align-top">{row.officekit}</td>
              <td className="p-4 text-muted-foreground align-top">{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Normalize comparison rows from either `aspect` or `feature` keyed configs. */
export function normalizeComparisonRows(
  rows: { aspect?: string; feature?: string; officekit: string; competitor: string }[]
): ComparisonTableRow[] {
  return rows.map((row) => ({
    label: row.aspect ?? row.feature ?? "",
    officekit: row.officekit,
    competitor: row.competitor,
  }));
}
