"use client";

import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { status } from "./page";
import { useState } from "react";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function StatusTableViewOptions<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const [selectedStatus, setSelectedStatus] = useState<any[]>([
    "Completed",
    "Pending",
  ]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="ml-auto hidden h-8 lg:flex"
        >
          <MixerHorizontalIcon className="mr-2 h-4 w-4" />
          Status
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        <DropdownMenuLabel>Toggle Status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {status.map((singleStatus: any) => {
          return (
            <DropdownMenuCheckboxItem
              key={singleStatus}
              checked={selectedStatus.includes(singleStatus)}
              onCheckedChange={(clickedStatus)=> {
                if(selectedStatus.includes(clickedStatus))
                {
                    selectedStatus.filter((filteredValue:any)=> {
                        filteredValue !== clickedStatus
                    })

                    
                }
              }}
            >
              {singleStatus}
            </DropdownMenuCheckboxItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
