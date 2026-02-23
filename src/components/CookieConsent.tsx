"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      // Show the consent banner after a slight delay for better UX
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div 
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center px-6 py-4"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <div className="max-w-5xl mx-auto bg-cream shadow-lg rounded-none border-t border-gold/30 py-4 px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-bodytext text-body-sm">We use cookies to enhance your browsing experience.</p>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={handleAccept}
                  className="bg-gold text-richblack font-body text-caption tracking-wider uppercase px-6 py-2 font-medium hover:bg-gold-light transition-colors duration-300"
                >
                  Accept
                </button>
                <button
                  onClick={() => {}} // Would open settings dialog in production
                  className="border border-gold/30 text-gold font-body text-caption tracking-wider uppercase px-6 py-2 font-medium hover:border-gold transition-colors duration-300"
                >
                  Manage
                </button>
                <button
                  onClick={handleReject}
                  className="text-bodytext/60 font-body text-caption tracking-wider uppercase hover:text-gold transition-colors duration-300"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
