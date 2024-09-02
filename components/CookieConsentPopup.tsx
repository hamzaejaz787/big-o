"use client";

import { Button } from "@/components/ui/button";
import { getLocalStorage, setLocalStorage } from "@/lib/localStorageHelper";
import Link from "next/link";
import React from "react";

const CookieConsentPopup = () => {
  const [cookieConsent, setCookieConsent] = React.useState(false);

  React.useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  React.useEffect(() => {
    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`my-6 mx-auto max-w-max md:max-w-screen-sm fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-custom-purple-400 rounded-lg shadow z-50 ${
        cookieConsent !== null && cookieConsent ? "hidden" : "flex"
      }`}
    >
      <div className="text-cente text-white-200">
        <p className="text-white">
          We use{" "}
          <Link
            href="/"
            className="font-bold text-custom-purple-50 hover:text-custom-purple-100"
          >
            <span>cookies</span>
          </Link>{" "}
          on our site.
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="px-5 py-2 rounded-md border-gray-900"
          onClick={() => setCookieConsent(false)}
        >
          Decline
        </Button>
        <Button
          className="py-2 text-white rounded-lg"
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </Button>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
