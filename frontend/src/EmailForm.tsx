import React, { useState } from "react";
import axios from "axios";

export default function EmailForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/send-email", {
        subject,
        body,
        imageUrl,
      });
      alert("Email sent!");
    } catch (err) {
      console.error("Failed to send email:", err);
      alert("Error sending email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "400px" }}>
      <label>Subject:</label>
      <input value={subject} onChange={(e) => setSubject(e.target.value)} required />

      <label>Body:</label>
      <textarea value={body} onChange={(e) => setBody(e.target.value)} required rows={5} />

      <label>Image URL (optional):</label>
      <input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <button type="submit">Send</button>
    </form>
  );
}
