import { Star, Award, Shield } from "lucide-react";

/** Third-party trust signals for E-E-A-T and CRO. */
export function TrustBadges({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-6 md:gap-10 ${className}`}
      aria-label="Trust and review signals"
    >
      <div className="flex items-center gap-2 text-sm">
        <div className="flex" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="font-semibold text-foreground">4.8/5</span>
        <span className="text-muted-foreground">G2 &amp; Capterra</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Award className="h-5 w-5 text-[#0055ff]" aria-hidden />
        <span>
          <strong className="text-foreground">500+</strong> companies
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield className="h-5 w-5 text-[#0055ff]" aria-hidden />
        <span>India + GCC payroll native</span>
      </div>
    </div>
  );
}
