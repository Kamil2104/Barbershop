import { useState, useEffect } from "react";

import Typography from "./Typography";
import SmartLink from "./SmartLink";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      queueMicrotask(() => {
        setIsVisible(true);
        requestAnimationFrame(() => setIsEntering(true));
      });
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-10 md:right-auto md:max-w-md bg-surface-inverted text-text-inverted p-6 rounded-2xl shadow-2xl z-100 border border-white/10 backdrop-blur-md transform transition-all duration-2000 ${
        isEntering ? "translate-y-0" : "translate-y-80"
      }`}
    >
      <div className="flex flex-col gap-4">
      <div>
    <Typography variant="h4" className="text-text-inverted mb-2">
      Privacy & Booking Terms
    </Typography>
    <Typography variant="p-sm" className="text-text-muted leading-relaxed">
      We use cookies to manage your appointments via Booksy and to process 
      your contact information. By continuing, you acknowledge our 
      <SmartLink href="/privacy" className="underline mx-1 hover:text-text-inverted transition-colors">
        Privacy Policy
      </SmartLink> 
      and agree to our 
      <SmartLink href="/terms" className="underline ml-1 hover:text-text-inverted transition-colors">
        Terms of Service
      </SmartLink>, including our cancellation and late arrival rules.
    </Typography>
  </div>

        <div className="flex gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 bg-text-inverted text-surface-inverted py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-white transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-1 border border-border-subtle py-2 rounded-lg font-bold text-sm cursor-pointer hover:bg-white/10 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;