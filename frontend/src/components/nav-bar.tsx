import Link from "next/link";
import { Home, Gift, User, Settings } from "lucide-react";

export function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-[#755E99]/20 bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60">
      <div className="flex items-center justify-around h-16">
        <Link
          href="/"
          className="flex flex-col items-center justify-center flex-1 h-full text-[#755E99] hover:text-[#BC81DA] transition-colors"
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link
          href="/rewards"
          className="flex flex-col items-center justify-center flex-1 h-full text-[#755E99] hover:text-[#BC81DA] transition-colors"
        >
          <Gift className="w-6 h-6" />
          <span className="text-xs mt-1">Rewards</span>
        </Link>
        <Link
          href="/profile"
          className="flex flex-col items-center justify-center flex-1 h-full text-[#755E99] hover:text-[#BC81DA] transition-colors"
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1">Profile</span>
        </Link>
        <Link
          href="/settings"
          className="flex flex-col items-center justify-center flex-1 h-full text-[#755E99] hover:text-[#BC81DA] transition-colors"
        >
          <Settings className="w-6 h-6" />
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </nav>
  );
}
