"use client";

import { useEffect, useState } from "react";
import type { TelegramWebApp, WebAppUser } from "@/types/telegram";

export const useTelegram = () => {
  const [webApp, setWebApp] = useState<TelegramWebApp | null>(null);
  const [user, setUser] = useState<WebAppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initTelegram = () => {
      const tg = window.Telegram?.WebApp;
      if (tg) {
        setWebApp(tg);
        if (tg.initDataUnsafe?.user) {
          setUser(tg.initDataUnsafe.user);
        }
        tg.ready();
        setIsLoading(false);
      } else {
        // Retry if script isn't loaded yet
        setTimeout(initTelegram, 100);
      }
    };

    initTelegram();
  }, []);

  return {
    webApp,
    user,
    isLoading,
  };
};
