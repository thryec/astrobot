import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NatalChart() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-[#755E99]/20">
      <CardHeader>
        <CardTitle className="text-[#BC81DA]">Your Natal Chart</CardTitle>
        <CardDescription className="text-[#755E99]">
          Based on your birth details
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-[#755E99]">
          Your natal chart will appear here after you submit your birth details.
        </div>
      </CardContent>
    </Card>
  );
}
