import { Navigate } from "react-router-dom";

/** Client-side 301-style redirect for legacy typo URLs (Apache/CF rules handle crawlers). */
export function LegacyRedirect({ to }: { to: string }) {
  return <Navigate to={to} replace />;
}
