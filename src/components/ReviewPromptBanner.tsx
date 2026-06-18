import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  REVIEW_PLATFORMS,
  REVIEW_PROMPT_DAYS_AFTER_ONBOARDING,
} from "@/data/review-platforms";
import { safeLocalGet, safeSessionGet, safeSessionSet } from "@/lib/safe-storage";

const STORAGE_KEY = "officekit_review_prompt_dismissed";
const ONBOARDING_KEY = "officekit_onboarding_completed_at";

function daysSince(isoDate: string): number {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  return Math.floor((now - then) / (1000 * 60 * 60 * 24));
}

function shouldShowPrompt(): boolean {
  if (typeof window === "undefined") return false;
  if (safeSessionGet(STORAGE_KEY)) return false;

  const onboardingAt = safeLocalGet(ONBOARDING_KEY);
  if (!onboardingAt) return false;

  if (daysSince(onboardingAt) < REVIEW_PROMPT_DAYS_AFTER_ONBOARDING) return false;

  return true;
}

/**
 * Post-onboarding review prompt — shown after REVIEW_PROMPT_DAYS_AFTER_ONBOARDING
 * days from `officekit_onboarding_completed_at` in localStorage.
 * Set that key from the product when onboarding completes.
 */
export function ReviewPromptBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (shouldShowPrompt()) setVisible(true);
  }, []);

  if (!visible) return null;

  const dismiss = () => {
    safeSessionSet(STORAGE_KEY, "1");
    setVisible(false);
  };

  const g2Url = REVIEW_PLATFORMS.g2.submitUrl ?? REVIEW_PLATFORMS.g2.profileUrl;
  const capterraUrl =
    REVIEW_PLATFORMS.capterra.submitUrl ?? REVIEW_PLATFORMS.capterra.profileUrl;

  return (
    <div
      role="region"
      aria-label="Review request"
      className="fixed bottom-20 left-4 right-4 z-40 mx-auto max-w-lg rounded-xl border border-border bg-card p-4 shadow-lg md:bottom-6 md:left-auto md:right-6"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 text-sm">
          <p className="font-semibold text-foreground">Enjoying OfficeKit HR?</p>
          <p className="mt-1 text-muted-foreground">
            Share your experience on G2 or Capterra — it helps other HR teams find us.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {g2Url ? (
              <Button asChild size="sm" variant="outline" className="h-8">
                <a href={g2Url} target="_blank" rel="noopener noreferrer">
                  Review on G2
                  <ExternalLink className="ml-1 h-3 w-3" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button asChild size="sm" variant="outline" className="h-8">
                <Link to="/reviews">G2 reviews (coming soon)</Link>
              </Button>
            )}
            {capterraUrl ? (
              <Button asChild size="sm" variant="outline" className="h-8">
                <a href={capterraUrl} target="_blank" rel="noopener noreferrer">
                  Review on Capterra
                  <ExternalLink className="ml-1 h-3 w-3" aria-hidden />
                </a>
              </Button>
            ) : (
              <Button asChild size="sm" variant="outline" className="h-8">
                <Link to="/reviews">Capterra reviews (coming soon)</Link>
              </Button>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss review prompt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
