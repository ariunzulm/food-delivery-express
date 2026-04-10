"use client";

import { updateOrders } from "@/app/_lib/servers/update-order";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { useState } from "react";

type OrderStatusProps = {
  orderId: number;
  orderStatus: string;
};

export const OrderStatus = ({ orderId, orderStatus }: OrderStatusProps) => {
  const [status, setStatus] = useState(orderStatus);
  const router = useRouter();
  const onHandleChange = async (status: string) => {
    setStatus(status);

    await updateOrders(orderId, status);
    router.refresh();
  };
  const onCancel = () => {
    setStatus(orderStatus);
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div
          key={orderId}
          className="border border-gray-200 rounded p-2 flex justify-between text-sm"
        >
          {status}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit p-2">
        <DropdownMenuGroup>
          <DropdownMenuLabel>Status</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={status === "PENDING"}
            onCheckedChange={() => onHandleChange("PENDING")}
          >
            PENDING
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "DELIVERED"}
            onCheckedChange={() => onHandleChange("DELIVERED")}
          >
            DELIVERED
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={status === "CANCELED"}
            onCheckedChange={() => onHandleChange("CANCELED")}
          >
            CANCELED
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>

        <Button variant="outline" onClick={onCancel} className="w-full">
          Cancel
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
