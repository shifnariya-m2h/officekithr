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
import { env } from "@/lib/env";

const HR_POPUP_ENDPOINT = env.hrPopupApiUrl;

interface HRPopupProps {
  onClose: () => void;
}

export const HRPopup: React.FC<HRPopupProps> = ({ onClose }) => {
  const titleId = useId();
  const descId = useId();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setVisible(false);
    window.setTimeout(onClose, 280);
  }, [onClose]);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    closeBtnRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(t);
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [handleClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = {
        ...formData,
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch(HR_POPUP_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-300 ${
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
        className={`bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative transition-all duration-300 ${
          visible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95"
        }`}
      >
        <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-500/30 border border-blue-400/50 text-xs font-bold uppercase tracking-widest text-blue-50">
              <ShieldCheck size={14} aria-hidden />
              <span>Expert Support</span>
            </div>

            <div className="space-y-4">
              <h2
                id={titleId}
                className="text-4xl md:text-5xl font-black leading-tight tracking-tight"
              >
                Need HR Support?
              </h2>
              <p
                id={descId}
                className="text-blue-100 text-xl font-medium leading-relaxed"
              >
                Free 30-minute consultation with our HR experts
              </p>
            </div>

            <p className="text-blue-50/90 text-lg leading-relaxed">
              Get expert guidance on compliance, payroll, recruitment, and HR
              operations. No cost. No obligation.
            </p>

            <ul className="space-y-5">
              {[
                "AI-powered recruitment & FaceKit attendance",
                "Complete HRMS, payroll & compliance",
                "Chatbot support & employee lifecycle management",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center space-x-4 text-blue-50"
                >
                  <div
                    className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center"
                    aria-hidden
                  >
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-semibold text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1 p-10 md:p-14 bg-white flex flex-col">
          <button
            ref={closeBtnRef}
            type="button"
            onClick={handleClose}
            aria-label="Close consultation offer"
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X size={24} aria-hidden />
          </button>

          {status === "success" ? (
            <div
              className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12"
              role="status"
              aria-live="polite"
            >
              <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                <Check size={40} strokeWidth={3} aria-hidden />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900">
                  Request received
                </h3>
                <p className="text-slate-600 text-lg">
                  We will reach out within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800">
                  Quick Contact Form
                </h3>
                <p className="text-slate-600 text-sm">
                  Fill in the details to schedule your slot.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                <div className="space-y-2">
                  <label
                    htmlFor="popup-name"
                    className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1"
                  >
                    Full Name
                  </label>
                  <div className="relative group">
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      aria-hidden
                    >
                      <User size={18} />
                    </div>
                    <input
                      id="popup-name"
                      name="name"
                      required
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-slate-800"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="popup-email"
                    className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1"
                  >
                    Work Email
                  </label>
                  <div className="relative group">
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      aria-hidden
                    >
                      <Mail size={18} />
                    </div>
                    <input
                      id="popup-email"
                      name="email"
                      required
                      type="email"
                      autoComplete="email"
                      placeholder="rahul@company.com"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-slate-800"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="popup-phone"
                    className="text-xs font-bold text-slate-600 uppercase tracking-widest ml-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative group">
                    <div
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                      aria-hidden
                    >
                      <Phone size={18} />
                    </div>
                    <input
                      id="popup-phone"
                      name="phone"
                      required
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 98XXX XXXXX"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none text-slate-800"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    disabled={status === "submitting"}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl transition-colors flex items-center justify-center gap-3 disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {status === "submitting" ? (
                      <span className="sr-only">Submitting</span>
                    ) : null}
                    {status === "submitting" ? (
                      <div
                        className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"
                        aria-hidden
                      />
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send size={18} aria-hidden />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-slate-500 text-xs">
                  Trusted by growing businesses across India and the GCC
                </p>

                <div className="flex items-center justify-center gap-1 py-1 px-3 bg-slate-50 rounded-full border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    Powered by
                  </span>
                  <a
                    href="https://www.officekithr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-black text-blue-600 hover:text-blue-800 flex items-center uppercase tracking-widest"
                  >
                    officekithr <ExternalLink size={10} className="ml-0.5" aria-hidden />
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
