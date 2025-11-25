import React from "react";

const WhatsAppButton = () => {
  const phone = "917994470903"; 
  const message = "Hi";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={openWhatsApp}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "90px", 
        cursor: "pointer",
        backgroundColor: "#25D366",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        zIndex: 9998,  
      }}
    >
      <i className="bi bi-whatsapp" style={{ fontSize: 34, color: "white" }}></i>
    </div>
  );
};

export default WhatsAppButton;
