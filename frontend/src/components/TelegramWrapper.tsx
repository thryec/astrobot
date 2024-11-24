"use client";

import { useEffect } from "react";
import { useTelegram } from "@/hooks/useTelegram";
import { LoadingSpinner } from "./LoadingSpinner";
import { MobileLayout } from "./MobileLayout";
import { Navigation } from "./Navigation";

interface Props {
  children: React.ReactNode;
}

export const TelegramWrapper: React.FC<Props> = ({ children }) => {
  const { webApp, user, isLoading, utils } = useTelegram();

  useEffect(() => {
    if (webApp) {
      // Set background color to match Telegram theme
      document.documentElement.style.backgroundColor =
        webApp.themeParams.bg_color || "#ffffff";
      document.documentElement.style.color =
        webApp.themeParams.text_color || "#000000";

      // Handle back button
      webApp.BackButton.onClick(() => {
        utils
          .showConfirm("Are you sure you want to leave?")
          .then((confirmed) => {
            if (confirmed) webApp.close();
          });
      });
    }
  }, [webApp]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="flex min-h-[100dvh] items-center justify-center p-4 text-center">
        <div className="space-y-2">
          <p className="text-lg font-medium">Please open in Telegram</p>
          <p className="text-sm text-gray-500">
            This app only works through Telegram
          </p>
        </div>
      </div>
    );
  }

  return (
    <MobileLayout
      header={
        <div className="flex items-center justify-between">
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
        </div>
      }
      footer={<Navigation />}
    >
      {children}
    </MobileLayout>
  );
};
