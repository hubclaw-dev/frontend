"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/shared/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { day: "Day 1", value: 22 },
  { day: "Day 2", value: 48 },
  { day: "Day 3", value: 65 },
  { day: "Day 4", value: 52 },
  { day: "Day 5", value: 68 },
  { day: "Day 6", value: 58 },
  { day: "Day 7", value: 85 },
];

export function AnalyticsChart() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <CardTitle className="text-xl sm:text-2xl">Indicator 4</CardTitle>
        <Tabs defaultValue="7days" className="w-full sm:w-auto">
          <TabsList className="grid w-full grid-cols-3 sm:flex">
            <TabsTrigger value="30days">30 days</TabsTrigger>
            <TabsTrigger value="7days">7 days</TabsTrigger>
            <TabsTrigger value="1day">1 day</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-[280px] sm:h-[320px] lg:h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <XAxis dataKey="day" fontSize={12} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Line
                type="natural"
                dataKey="value"
                stroke="#18181b"
                strokeWidth={3}
                dot={{ fill: "#18181b", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
