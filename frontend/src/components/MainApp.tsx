"use client";

import { useTelegram } from "@/hooks/useTelegram";
import { LoadingSpinner } from "./LoadingSpinner";
import { Navigation } from "./Navigation";

export function MainApp() {
  const { user, isLoading, isDevelopment } = useTelegram();

  if (isLoading && !isDevelopment) {
    return <LoadingSpinner />;
  }

  if (!user && !isDevelopment) {
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
    <div className="flex flex-col min-h-[100dvh] app-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={user?.photo_url || "https://via.placeholder.com/32"}
              alt={user?.first_name || "User"}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium truncate">
              {user?.first_name || "Development Mode"}
            </span>
          </div>
          {isDevelopment && (
            <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-800 rounded">
              Dev Mode
            </span>
          )}
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
                  <h3 className="font-medium">Sample User {item}</h3>
                  <p className="text-sm text-gray-500">2h ago</p>
                </div>
              </div>
              <p className="text-gray-700">
                This is a sample post that you can see in development mode.
              </p>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
