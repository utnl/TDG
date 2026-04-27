"use client";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactPopup({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="popup-wrap"
      id="popup-form"
      style={{ display: isOpen ? "flex" : "none" }}
      onClick={handleBackdropClick}
    >
      <div className="popup-inner">
        <div className="close-popup" onClick={onClose}>
          ×
        </div>
        <h2>
          Get in <em>touch</em>
        </h2>
        {submitted ? (
          <p style={{ color: "#151515", padding: "20px 0" }}>
            Thank you! We&apos;ll get back to you soon.
          </p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="popup-name">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="popup-email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="popup-email"
                name="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div className="form-field">
              <label htmlFor="popup-message">Write a note... (optional)</label>
              <textarea
                id="popup-message"
                name="message"
                placeholder="Write a note... (optional)"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
            </div>

            <button type="submit" className="button">
              Send a message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
