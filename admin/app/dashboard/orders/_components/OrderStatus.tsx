import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@/app/_lib/types/ordersTypes";

type OrderStatusProps = {
  orders: Order[];
  user: number;
};

export const OrderStatus = ({ orders, user }: OrderStatusProps) => {
  const status = ["PENDING", "DELIVERED", "CANCELED"];
  console.log(orders, "g");
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger>
          {orders.map((order) => (
            <div
              key={order.id}
              className="border border-gray-200 rounded p-2 flex justify-between text-sm"
            >
              {order.status}
            </div>
          ))}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-fit p-2">
          <DialogDescription className="space-y-2">
            {status.map((st, i) => (
              <div key={i} className="p-1 text-sm">
                {st}
              </div>
            ))}
          </DialogDescription>
          <DialogFooter className="text-sm">
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DropdownMenuContent>
      </DropdownMenu>
    </Dialog>
  );
};
