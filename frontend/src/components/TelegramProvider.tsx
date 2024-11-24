"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { LoadingSpinner } from "./LoadingSpinner";
import { MainApp } from "./MainApp";

export function TelegramProvider() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        onLoad={() => setIsScriptLoaded(true)}
        strategy="afterInteractive"
      />
      {isScriptLoaded ? <MainApp /> : <LoadingSpinner />}
    </>
  );
}
