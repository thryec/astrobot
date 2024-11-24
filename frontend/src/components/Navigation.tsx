"use client";

import { Home, Gift, User, Settings } from "lucide-react";

export function Navigation() {
  return (
    <nav className="sticky bottom-0 bg-white border-t border-gray-200">
      <div className="flex justify-around py-2 px-4 safe-bottom">
        {[
          { icon: Home, label: "Home" },
          { icon: Gift, label: "Rewards" },
          { icon: User, label: "Profile" },
          { icon: Settings, label: "Settings" },
        ].map(({ icon: Icon, label }) => (
          <button key={label} className="flex flex-col items-center p-2">
            <Icon className="w-6 h-6 text-gray-600" />
            <span className="text-xs mt-1">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
