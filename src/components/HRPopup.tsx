import React, { useCallback, useEffect, useId, useRef, useState } from "react";
import {
  Check,
  ExternalLink,
  Mail,
  Phone,
  Send,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { trackDemoConversion } from "@/lib/analytics";
import { POPUP_LEAD_SOURCE, submitLead } from "@/lib/api/leads";

interface HRPopupProps {
  onClose: () => void;
}

const BENEFITS = [
  "AI-powered recruitment & FaceKit attendance",
  "Complete HRMS, payroll & compliance",
  "Chatbot support & employee lifecycle management",
] as const;

export const HRPopup: React.FC<HRPopupProps> = ({ onClose }) => {
  const titleId = useId();
  const descId = useId();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setVisible(false);
    window.setTimeout(onClose, 280);
  }, [onClose]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateViewport = (event?: MediaQueryListEvent) => {
      const mobile = event ? event.matches : mediaQuery.matches;
      setIsMobile(mobile);
      if (mobile) onClose();
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);
    return () => mediaQuery.removeEventListener("change", updateViewport);
  }, [onClose]);

  useEffect(() => {
    if (isMobile) return;

    const t = requestAnimationFrame(() => setVisible(true));
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("hr-popup-open");

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(t);
      document.body.style.overflow = prevOverflow;
      document.documentElement.classList.remove("hr-popup-open");
      window.removeEventListener("keydown", onKey);
    };
  }, [handleClose, isMobile]);

  if (isMobile) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        companyName: "",
        source: POPUP_LEAD_SOURCE,
      });

      if (!res.ok) {
        throw new Error(`Submit failed: ${res.status}`);
      }

      setStatus("success");
      trackDemoConversion("hr_popup");
      window.setTimeout(handleClose, 2500);
    } catch (error) {
      console.error("Submission failed", error);
      setStatus("idle");
    }
  };

  return (
    <div
      role="presentation"
      className={`fixed inset-0 z-[10050] flex items-end justify-center sm:items-center bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 p-0 sm:p-4 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className={`relative flex w-full max-w-4xl flex-col overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-300 max-h-[100dvh] sm:max-h-[min(92dvh,820px)] rounded-t-2xl sm:rounded-3xl ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-4 sm:translate-y-0 scale-[0.98] sm:scale-95"
        }`}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={handleClose}
          aria-label="Close consultation offer"
          className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md ring-1 ring-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:right-4 sm:top-4"
        >
          <X size={22} aria-hidden />
        </button>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch] md:flex-row md:overflow-hidden">
          {/* Promo panel — compact on mobile, fixed column on desktop */}
          <div className="relative shrink-0 overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 p-5 pb-6 text-white sm:p-8 md:flex md:max-w-[48%] md:flex-col md:p-10 lg:p-12">
            <div
              className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-blue-400/20 blur-3xl"
              aria-hidden
            />

            <div className="relative z-10 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 rounded-lg border border-blue-400/50 bg-blue-500/30 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-50 sm:text-xs">
                <ShieldCheck size={14} aria-hidden />
                <span>Expert Support</span>
              </div>

              <div className="space-y-2 pr-10 sm:space-y-3 sm:pr-12">
                <h2
                  id={titleId}
                  className="text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  Need HR Support?
                </h2>
                <p
                  id={descId}
                  className="text-sm font-medium leading-relaxed text-blue-100 sm:text-base md:text-lg"
                >
                  Free 30-minute consultation with our HR experts
                </p>
              </div>

              <p className="hidden text-sm leading-relaxed text-blue-50/90 sm:block md:text-base">
                Get expert guidance on compliance, payroll, recruitment, and HR
                operations. No cost. No obligation.
              </p>

              <ul className="space-y-2.5 sm:space-y-3 md:space-y-4">
                {BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-blue-50 sm:gap-3"
                  >
                    <div
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20 sm:h-6 sm:w-6"
                      aria-hidden
                    >
                      <Check size={12} className="text-white sm:h-3.5 sm:w-3.5" />
                    </div>
                    <span className="text-xs font-semibold leading-snug sm:text-sm md:text-base">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form panel */}
          <div className="flex min-h-0 flex-1 flex-col bg-white p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 sm:p-8 md:overflow-y-auto md:p-10 lg:p-12">
            {status === "success" ? (
              <div
                className="flex flex-1 flex-col items-center justify-center py-10 text-center sm:py-12"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 sm:h-20 sm:w-20">
                  <Check size={36} strokeWidth={3} aria-hidden />
                </div>
                <div className="mt-5 space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">
                    Request received
                  </h3>
                  <p className="text-base text-slate-600 sm:text-lg">
                    We will reach out within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-1 flex-col">
                <div className="mb-5 pr-10 sm:mb-6 sm:pr-12">
                  <h3 className="text-lg font-bold text-slate-800 sm:text-xl">
                    Quick Contact Form
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    Fill in the details to schedule your slot.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4 sm:gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="popup-name"
                      className="ml-1 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-xs"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 sm:left-4"
                        aria-hidden
                      >
                        <User size={17} />
                      </div>
                      <input
                        id="popup-name"
                        name="name"
                        required
                        type="text"
                        autoComplete="name"
                        placeholder="e.g. Rahul Sharma"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 sm:py-3.5 sm:pl-12 sm:text-base"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="popup-email"
                      className="ml-1 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-xs"
                    >
                      Work Email
                    </label>
                    <div className="relative">
                      <div
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 sm:left-4"
                        aria-hidden
                      >
                        <Mail size={17} />
                      </div>
                      <input
                        id="popup-email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        placeholder="rahul@company.com"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 sm:py-3.5 sm:pl-12 sm:text-base"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="popup-phone"
                      className="ml-1 text-[11px] font-bold uppercase tracking-widest text-slate-600 sm:text-xs"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <div
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 sm:left-4"
                        aria-hidden
                      >
                        <Phone size={17} />
                      </div>
                      <input
                        id="popup-phone"
                        name="phone"
                        required
                        type="tel"
                        autoComplete="tel"
                        placeholder="+91 98XXX XXXXX"
                        className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-3 text-sm text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 sm:py-3.5 sm:pl-12 sm:text-base"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="pt-1 sm:pt-2">
                    <button
                      disabled={status === "submitting"}
                      type="submit"
                      className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 py-3.5 text-sm font-bold text-white transition-colors hover:bg-blue-700 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:gap-3 sm:py-4 sm:text-base"
                    >
                      {status === "submitting" ? (
                        <>
                          <span className="sr-only">Submitting</span>
                          <div
                            className="h-5 w-5 animate-spin rounded-full border-4 border-white/30 border-t-white sm:h-6 sm:w-6"
                            aria-hidden
                          />
                        </>
                      ) : (
                        <>
                          <span>Book Free Consultation</span>
                          <Send size={17} aria-hidden />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-[11px] text-slate-500 sm:text-xs">
                    Trusted by growing businesses across India and the GCC
                  </p>

                  <div className="flex items-center justify-center gap-1 rounded-full border border-slate-100 bg-slate-50 px-3 py-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                      Powered by
                    </span>
                    <a
                      href="https://www.officekithr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-[10px] font-black uppercase tracking-widest text-blue-600 hover:text-blue-800"
                    >
                      officekithr{" "}
                      <ExternalLink size={10} className="ml-0.5" aria-hidden />
                    </a>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
