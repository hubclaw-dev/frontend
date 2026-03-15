"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";

type Bot = {
  id: number;
  name: string;
  model: string;
  status: boolean;
  tasks: number;
  cost: string;
};

const initialBots: Bot[] = [
  {
    id: 1,
    name: "@SupportBot",
    model: "GPT-4o",
    status: true,
    tasks: 412,
    cost: "$4.20",
  },
  {
    id: 2,
    name: "@SalesLeadBot",
    model: "Claude 3.5",
    status: true,
    tasks: 104,
    cost: "BYOK",
  },
  {
    id: 3,
    name: "@SalesLeadBot",
    model: "Claude 3.5",
    status: true,
    tasks: 104,
    cost: "BYOK",
  },
  {
    id: 4,
    name: "@DraftBot_Test",
    model: "Gemini 1.5",
    status: false,
    tasks: 0,
    cost: "$0.00",
  },
  {
    id: 5,
    name: "@SalesLeadBot",
    model: "Claude 3.5",
    status: true,
    tasks: 104,
    cost: "BYOK",
  },
  {
    id: 6,
    name: "@SupportBot",
    model: "GPT-4o",
    status: true,
    tasks: 412,
    cost: "$4.20",
  },
  {
    id: 7,
    name: "@DraftBot_Test",
    model: "Gemini 1.5",
    status: false,
    tasks: 0,
    cost: "$0.00",
  },
  {
    id: 8,
    name: "@SupportBot",
    model: "GPT-4o",
    status: true,
    tasks: 412,
    cost: "$4.20",
  },
];

export function ActiveBotsTable() {
  const [bots, setBots] = useState(initialBots);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const toggleStatus = (id: number) => {
    setBots((prev) =>
      prev.map((b) => (b.id === id ? { ...b, status: !b.status } : b)),
    );
  };

  const toggleSelect = (id: number) => {
    const newSelected = new Set(selected);
    if (newSelected.has(id)) newSelected.delete(id);
    else newSelected.add(id);
    setSelected(newSelected);
  };

  const allSelected = selected.size === bots.length;

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">Active bots</h2>
        <p className="text-muted-foreground text-sm">
          Filter by checking rows to update charts above.
        </p>
      </div>

      {/* Мобильная версия — карточки */}
      <div className="space-y-4 sm:hidden">
        {bots.map((bot) => (
          <div
            key={bot.id}
            className={cn(
              "space-y-3 rounded-lg border p-4",
              selected.has(bot.id) && "bg-muted/40",
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <Checkbox
                  checked={selected.has(bot.id)}
                  onCheckedChange={() => {
                    const newSel = new Set(selected);
                    if (newSel.has(bot.id)) newSel.delete(bot.id);
                    else newSel.add(bot.id);
                    setSelected(newSel);
                  }}
                />
                <div>
                  <p className="font-medium">{bot.name}</p>
                  <p className="text-muted-foreground text-sm">{bot.model}</p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Edit bot</DropdownMenuItem>
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                  <DropdownMenuItem>View logs</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Status</p>
                <Switch
                  checked={bot.status}
                  onCheckedChange={() => toggleStatus(bot.id)}
                />
              </div>
              <div>
                <p className="text-muted-foreground">Tasks</p>
                <p className="font-medium">{bot.tasks}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Cost</p>
                <p className="font-medium">{bot.cost}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Десктоп/планшет — таблица */}
      <div className="hidden overflow-hidden rounded-lg border sm:block">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">
                <Checkbox
                  checked={allSelected}
                  onCheckedChange={(checked) =>
                    setSelected(
                      checked ? new Set(bots.map((b) => b.id)) : new Set(),
                    )
                  }
                />
              </TableHead>
              <TableHead>Bot</TableHead>
              <TableHead>Model (Section)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Tasks (Target)</TableHead>
              <TableHead>Cost (Limit)</TableHead>
              <TableHead className="w-12">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bots.map((bot) => (
              <TableRow key={bot.id}>
                <TableCell>
                  <Checkbox
                    checked={selected.has(bot.id)}
                    onCheckedChange={() => {
                      const newSel = new Set(selected);
                      if (newSel.has(bot.id)) newSel.delete(bot.id);
                      else newSel.add(bot.id);
                      setSelected(newSel);
                    }}
                  />
                </TableCell>
                <TableCell className="font-medium">{bot.name}</TableCell>
                <TableCell>{bot.model}</TableCell>
                <TableCell>
                  <Switch
                    checked={bot.status}
                    onCheckedChange={() => toggleStatus(bot.id)}
                  />
                </TableCell>
                <TableCell>{bot.tasks}</TableCell>
                <TableCell>{bot.cost}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit bot</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>View logs</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground gap-2">
        <div>
          {selected.size} of {bots.length} row(s) selected.
        </div>
        <div className="flex items-center gap-4">
          Rows per page: 10
          <div>Page 1 of 2</div>
        </div>
      </div> */}
    </div>
  );
}
