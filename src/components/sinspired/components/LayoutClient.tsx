"use client";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContactPopup from "./ContactPopup";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Header onContactClick={() => setIsContactOpen(true)} />
      <div id="content" className="site-content">
        <div className="ast-container">
          <div id="primary" className="content-area primary">
            {children}
          </div>
        </div>
      </div>
      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
