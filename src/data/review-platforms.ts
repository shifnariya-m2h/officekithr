/**
 * Third-party review platform URLs — single source of truth.
 * TODO: Replace placeholder URLs once G2/Capterra listings are live.
 */
export const REVIEW_PLATFORMS = {
  g2: {
    name: "G2",
    /** TODO: Set live profile URL from marketing (e.g. https://www.g2.com/products/officekit-hr/reviews) */
    profileUrl: null as string | null,
    /** TODO: Set review submission URL for customer outreach */
    submitUrl: null as string | null,
  },
  capterra: {
    name: "Capterra",
    /** TODO: Set live profile URL from marketing */
    profileUrl: null as string | null,
    /** TODO: Set review submission URL for customer outreach */
    submitUrl: null as string | null,
  },
} as const;

/** Days after onboarding before showing the in-app review prompt. */
export const REVIEW_PROMPT_DAYS_AFTER_ONBOARDING = 90;
