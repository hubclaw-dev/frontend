import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

const metrics = [
  { title: "Indicator 1", value: "154" },
  { title: "Indicator 2", value: "45 598" },
  { title: "Indicator 3", value: "15" },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">
              {m.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold tracking-tight lg:text-4xl">
              {m.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
