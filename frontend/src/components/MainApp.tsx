"use client";

import { useEffect, useState } from "react";
import type { WebAppUser } from "@/types/telegram";
import { LoadingSpinner } from "./LoadingSpinner";
import { Navigation } from "./Navigation";

export function MainApp() {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<WebAppUser | null>(null);
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      setWebApp(tg);

      if (tg.initDataUnsafe?.user) {
        setUser(tg.initDataUnsafe.user);
      }

      // Initialize
      tg.ready();
      tg.expand();

      // Set theme
      document.documentElement.style.backgroundColor =
        tg.themeParams.bg_color || "#ffffff";

      setIsReady(true);
    }
  }, []);

  if (!isReady) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-4">
        <div className="text-center">
          <p className="text-lg font-medium">Please open in Telegram</p>
          <p className="mt-2 text-sm text-gray-500">
            This app only works through Telegram
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex items-center gap-3">
          {user.photo_url && (
            <img
              src={user.photo_url}
              alt={user.first_name}
              className="w-8 h-8 rounded-full"
            />
          )}
          <span className="font-medium truncate">{user.first_name}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white rounded-lg shadow-sm p-4 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="font-medium">User {item}</h3>
                  <p className="text-sm text-gray-500">2h ago</p>
                </div>
              </div>
              <p className="text-gray-700">Sample post content {item}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Navigation */}
      <Navigation />
    </div>
  );
}
