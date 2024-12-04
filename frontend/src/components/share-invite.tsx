"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ShareInvite() {
  const [inviteLink, setInviteLink] = useState("");
  const { toast } = useToast();

  const generateInviteLink = () => {
    // In a real application, this would generate a unique link
    const newLink = `https://web3astrology.com/invite/${Math.random().toString(36).substr(2, 9)}`;
    setInviteLink(newLink);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    toast({
      title: "Invite link copied",
      description: "You can now share this link with your friends.",
    });
  };

  return (
    <Card className="mt-8 bg-white/50 backdrop-blur-sm border-[#755E99]/20">
      <CardHeader>
        <CardTitle className="text-[#BC81DA]">Invite Friends</CardTitle>
        <CardDescription className="text-[#755E99]">
          Generate a link to share with your friends
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={generateInviteLink}
          className="mb-4 bg-[#755E99] hover:bg-[#755E99]/80 text-white"
        >
          Generate Invite Link
        </Button>
        {inviteLink && (
          <div className="flex space-x-2">
            <Input
              value={inviteLink}
              readOnly
              className="bg-white/50 border-[#755E99]/20"
            />
            <Button
              onClick={copyToClipboard}
              className="bg-[#BC81DA] hover:bg-[#BC81DA]/80 text-white"
            >
              Copy
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
