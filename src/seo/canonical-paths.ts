/** Canonical URL paths — use for internal links; legacy paths 301 to these. */
export const CANONICAL = {
  hrmsIndia: "/hrms-software-india",
  payrollUae: "/payroll-software-uae",
  wpsUae: "/wps-compliance-software",
  gccCompliance: "/gcc-compliance",
  greythrCompare: "/officekit-vs-greythr",
  kekaCompare: "/officekit-vs-keka",
  zohoCompare: "/officekit-vs-zoho-people",
  darwinboxCompare: "/officekit-vs-darwinbox",
} as const;

/** Legacy paths that redirect to canonical (see public/_redirects). */
export const LEGACY_REDIRECTS: Record<string, string> = {
  "/solutions/best-hrms-software-india": CANONICAL.hrmsIndia,
  "/solutions/payroll-software-uae": CANONICAL.payrollUae,
  "/solutions/wps-compliance-software": CANONICAL.wpsUae,
  "/compare/greythr-alternative": CANONICAL.greythrCompare,
  "/compare/keka-alternative": CANONICAL.kekaCompare,
  "/compare/zoho-people-alternative": CANONICAL.zohoCompare,
  "/compare/darwinbox-alternative": CANONICAL.darwinboxCompare,
};
