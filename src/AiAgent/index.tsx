import { useState } from "react";
import "./ChatModal.css";
import Lottie from "lottie-react";
import robotAnimation from "../../public/lottie/Robot-Bot3D.json";

export default function AiAgentWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating AI Agent Button */}
      {!open && (
        <div className="ai-agent-btn" onClick={() => setOpen(true)}>
          <div className="icon-container">
            <Lottie animationData={robotAnimation} loop style={{ width: 36, height: 36 }} />
          </div>
          <span>AI Agent</span>
        </div>
      )}

      {/* OVERLAY */}
      {open && <div className="modal-overlay" onClick={() => setOpen(false)} />}

      {/* Popup Modal — always mounted so iframe pre-loads, hidden when closed */}
      <div className="chat-modal" style={{ display: open ? "flex" : "none" }}>
        <button className="close-btn" onClick={() => setOpen(false)}>✖</button>

        <iframe
          src="https://www.jotform.com/app/253280741778465"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px"
          }}
          allow="microphone"
        ></iframe>
      </div>
    </>
  );
}