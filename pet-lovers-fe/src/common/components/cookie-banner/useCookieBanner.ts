import { useState } from "react";
import Cookies from "js-cookie";
export const useCookieBanner = () => {
  const [showBanner, setShowBanner] = useState(
    !JSON.parse(Cookies.get("cookieAccepted") || "false")
  );

  const handleAccept = () => {
    Cookies.set("cookieAccepted", JSON.stringify(true), { expires: 365 });
    setShowBanner(false);
  };
  return { showBanner, handleAccept };
};
