import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COOKIE_CONSENT_EVENT, getConsent, setConsent } from "@/lib/consent";
import { loadAnalytics } from "@/lib/analytics";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const existing = getConsent();
    if (existing === "accepted") {
      loadAnalytics();
      return;
    }
    if (existing === "rejected") return;
    setVisible(true);
  }, []);

  const accept = () => {
    setConsent("accepted");
    loadAnalytics();
    window.dispatchEvent(new CustomEvent(COOKIE_CONSENT_EVENT));
    setVisible(false);
  };

  const reject = () => {
    setConsent("rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-background shadow-lg p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <p id="cookie-consent-title" className="font-semibold text-foreground">
            Cookie preferences
          </p>
          <p
            id="cookie-consent-desc"
            className="text-sm text-muted-foreground mt-1"
          >
            We use cookies for analytics and ads to improve our site. See our{" "}
            <Link to="/cookie-policy" className="text-primary underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="text-primary underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={reject}
            className="px-4 py-2 text-sm font-medium rounded-lg border border-border hover:bg-muted"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={accept}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-[#0055ff] text-white hover:bg-[#0044cc]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
