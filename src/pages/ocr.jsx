import React, { useState } from "react";

const OCR_API_KEY = "9ee7b7fb048895"; // FREE KEY (demo only)

export default function CvParser() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setText("");
    setError("");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please upload a CV file");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("apikey", OCR_API_KEY);
    formData.append("file", file);
    formData.append("language", "eng");
    formData.append("isOverlayRequired", "false");

    try {
      const response = await fetch(
        "https://api.ocr.space/parse/image",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.IsErroredOnProcessing) {
        setError(result.ErrorMessage || "OCR failed");
      } else {
        const parsedText =
          result.ParsedResults?.[0]?.ParsedText || "";
        setText(parsedText);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>📄 CV Parser (Free OCR)</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
        onChange={handleFileChange}
      />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Parsing..." : "Upload & Parse"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {text && (
        <textarea
          rows={15}
          value={text}
          readOnly
          placeholder="Extracted CV text will appear here"
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  error: {
    color: "red",
  },
};
