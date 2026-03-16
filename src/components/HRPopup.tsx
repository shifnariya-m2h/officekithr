import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
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

const APPS_SCRIPT_URL =
  import.meta.env.VITE_HR_GOOGLE_SHEET_WEBAPP_URL || "";

  console.log(import.meta.env.VITE_HR_GOOGLE_SHEET_WEBAPP_URL)

interface HRPopupProps {
  onClose: () => void;
}

export const HRPopup: React.FC<HRPopupProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP Entry Animation
    const tl = gsap.timeline();
    tl.to(overlayRef.current, {
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
    });
    tl.fromTo(
      modalRef.current,
      { opacity: 0, y: -100, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.2"
    );
  }, []);

  const handleClose = () => {
    // GSAP Exit Animation
    const tl = gsap.timeline({
      onComplete: onClose,
    });
    tl.to(modalRef.current, {
      opacity: 0,
      y: -50,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.in",
    });
    tl.to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.3,
      },
      "-=0.2"
    );
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("submitting");

  try {
    const payload = {
      ...formData,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    const body = new URLSearchParams(
      Object.entries(payload).map(([key, value]) => [key, String(value)])
    ).toString();

    const res = await fetch(APPS_SCRIPT_URL, {
      method: "POST",
      // Must be a simple request to avoid preflight with Apps Script
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body,
    });

    if (!res || res.type === "opaque") {
      setStatus("success");
      setTimeout(handleClose, 2500);
      return;
    }

    setStatus("success");
    setTimeout(handleClose, 2500);
  } catch (error) {
    console.error("Submission failed", error);
    setStatus("idle");
  }
};


  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm opacity-0"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden max-w-4xl w-full flex flex-col md:flex-row relative"
      >
        {/* Left Side: Content */}
        <div className="flex-1 p-10 md:p-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-blue-500/30 border border-blue-400/50 text-xs font-bold uppercase tracking-widest text-blue-50">
              <ShieldCheck size={14} />
              <span>Expert Support</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                Need HR Support?
              </h2>
              <p className="text-blue-100 text-xl font-medium leading-relaxed">
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
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center space-x-4 text-blue-50 group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                    <Check size={14} className="text-white" />
                  </div>
                  <span className="font-semibold text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1 p-10 md:p-14 bg-white flex flex-col">
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all duration-300"
          >
            <X size={24} />
          </button>

          {status === "success" ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-12">
              <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center animate-bounce">
                <Check size={40} strokeWidth={3} />
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl font-black text-slate-900">
                  Expert Booked!
                </h3>
                <p className="text-slate-500 text-lg">
                  We'll reach out to you within 24 hours.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex flex-col">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-800">
                  Quick Contact Form
                </h3>
                <p className="text-slate-500 text-sm">
                  Fill in the details to schedule your slot.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <div className="relative group popup-field-focus transition-all rounded-xl overflow-hidden">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <User size={18} />
                    </div>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white/80 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Work Email
                  </label>
                  <div className="relative group popup-field-focus transition-all rounded-xl overflow-hidden">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Mail size={18} />
                    </div>
                    <input
                      required
                      type="email"
                      placeholder="rahul@company.com"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white/80 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">
                    Phone Number
                  </label>
                  <div className="relative group popup-field-focus transition-all rounded-xl overflow-hidden">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-600 transition-colors">
                      <Phone size={18} />
                    </div>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98XXX XXXXX"
                      className="w-full pl-12 pr-4 py-4 border border-slate-200 bg-white/80 rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition-all text-slate-800 font-medium placeholder:text-slate-400"
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
                    className="w-full group bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-2xl shadow-[0_15px_30px_rgba(37,99,235,0.25)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.35)] transition-all flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {status === "submitting" ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Book Free Consultation</span>
                        <Send
                          size={18}
                          className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex flex-col items-center space-y-4">
                  <p className="text-center text-slate-400 text-xs font-semibold">
                    Trusted by 5,000+ businesses across India
                  </p>

                  <div className="flex items-center space-x-1 py-1 px-3 bg-slate-50 rounded-full border border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Powered by
                    </span>
                    <a
                      href="https://officekithr.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-black text-blue-600 hover:text-blue-800 transition-colors flex items-center uppercase tracking-widest"
                    >
                      officekithr{" "}
                      <ExternalLink size={10} className="ml-0.5" />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
