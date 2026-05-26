import { useState, useEffect, type ComponentType, type CSSProperties } from "react";
import "./ChatModal.css";

type LottieProps = {
  animationData: object;
  loop?: boolean;
  style?: CSSProperties;
};

export default function AiAgentWidget() {
  const [open, setOpen] = useState(false);
  const [LottiePlayer, setLottiePlayer] = useState<ComponentType<LottieProps> | null>(null);
  const [robotAnimation, setRobotAnimation] = useState<object | null>(null);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    Promise.all([
      import("lottie-react"),
      import("../../public/lottie/Robot-Bot3D.json"),
    ]).then(([lottie, data]) => {
      if (cancelled) return;
      setLottiePlayer(() => lottie.default);
      setRobotAnimation(data.default);
    });
    return () => {
      cancelled = true;
    };
  }, [open]);

  return (
    <>
      {!open && (
        <button
          type="button"
          className="ai-agent-btn"
          onClick={() => setOpen(true)}
          aria-label="Open AI Agent chat"
        >
          <div className="icon-container">
            {LottiePlayer && robotAnimation ? (
              <LottiePlayer
                animationData={robotAnimation}
                loop
                style={{ width: 36, height: 36 }}
              />
            ) : (
              <span aria-hidden>🤖</span>
            )}
          </div>
          <span>AI Agent</span>
        </button>
      )}

      {open && (
        <div
          className="modal-overlay"
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        />
      )}

      <div className="chat-modal" style={{ display: open ? "flex" : "none" }}>
        <button
          type="button"
          className="close-btn"
          onClick={() => setOpen(false)}
          aria-label="Close AI Agent"
        >
          ✖
        </button>

        {open && (
          <iframe
            title="OfficeKit AI Agent"
            src="https://www.jotform.com/app/253280741778465"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "8px",
            }}
            allow="microphone"
            loading="lazy"
          />
        )}
      </div>
    </>
  );
}
