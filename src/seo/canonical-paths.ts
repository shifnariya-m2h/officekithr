/** Canonical URL paths — use for internal links; legacy paths 301 to these. */
export const CANONICAL = {
  hrmsIndia: "/hrms-software-india",
  payrollUae: "/payroll-software-uae",
  wpsUae: "/wps-compliance-software",
  greythrCompare: "/officekit-vs-greythr",
} as const;

/** Legacy paths that redirect to canonical (see public/_redirects). */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/solutions/best-hrms-software-india": CANONICAL.hrmsIndia,
  "/solutions/payroll-software-uae": CANONICAL.payrollUae,
  "/solutions/wps-compliance-software": CANONICAL.wpsUae,
  "/compare/greythr-alternative": CANONICAL.greythrCompare,
};
