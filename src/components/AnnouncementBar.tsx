import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import { SITE_ANNOUNCEMENT } from "@/data/site-announcement";
import { safeSessionGet, safeSessionSet } from "@/lib/safe-storage";
import { useState } from "react";

type AnnouncementBarProps = {
  visible: boolean;
  onDismiss: () => void;
};

function LiveBlinkIcon() {
  return (
    <span
      className="relative inline-flex h-2 w-2 shrink-0"
      aria-hidden
    >
      <span className="absolute inline-flex h-full w-full animate-live-ring rounded-full bg-red-500" />
      <span className="relative inline-flex h-2 w-2 animate-live-pulse rounded-full bg-red-500" />
    </span>
  );
}

export function useAnnouncementBar() {
  const [visible, setVisible] = useState(() => {
    if (!SITE_ANNOUNCEMENT.enabled) return false;
    return !safeSessionGet(SITE_ANNOUNCEMENT.storageKey);
  });

  const dismiss = () => {
    safeSessionSet(SITE_ANNOUNCEMENT.storageKey, "1");
    setVisible(false);
  };

  return { visible, dismiss };
}

export function AnnouncementBar({ visible, onDismiss }: AnnouncementBarProps) {
  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Product announcement"
      className="fixed inset-x-0 top-0 z-[60] h-10 bg-gradient-to-r from-[#0a0f3d] via-[#101443] to-[#0a0f3d] border-b border-white/10"
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-center gap-2 px-10 sm:gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/40 bg-red-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-red-300 sm:text-xs">
          <LiveBlinkIcon />
          Live
        </span>

        <p className="min-w-0 truncate text-center text-xs text-white/90 sm:text-sm">
          <span className="font-semibold text-white">AI Face Scan is here</span>
          <span className="hidden sm:inline">
            {" "}
            — touchless attendance, free for up to 25 users
          </span>
        </p>

        <Link
          to={SITE_ANNOUNCEMENT.href}
          className="hidden shrink-0 items-center gap-1 text-xs font-medium text-blue-300 transition-colors hover:text-white sm:inline-flex sm:text-sm"
        >
          Try Face Kit
          <ArrowRight className="h-3.5 w-3.5" aria-hidden />
        </Link>

        <button
          type="button"
          onClick={onDismiss}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-white/60 transition-colors hover:text-white"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}

/** Sync nav offset when announcement is toggled from site config only. */
export function useAnnouncementNavOffset() {
  const { visible, dismiss } = useAnnouncementBar();
  return { announcementVisible: visible, dismissAnnouncement: dismiss };
}
