import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RelationshipPairing() {
  return (
    <Card className="mt-8 bg-white/50 backdrop-blur-sm border-[#755E99]/20">
      <CardHeader>
        <CardTitle className="text-[#BC81DA]">Relationship Pairing</CardTitle>
        <CardDescription className="text-[#755E99]">
          Compare your chart with a friend's
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center text-[#755E99]">
          Relationship pairing details will appear here when you and a friend
          have both submitted your birth details.
        </div>
      </CardContent>
    </Card>
  );
}
