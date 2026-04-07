import { getOrders } from "@/app/_lib/servers/get-Orders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { getUsers } from "@/app/_lib/servers/get-users";
import { FoodOrderItem, Order } from "@/app/_lib/types/ordersTypes";
import { User } from "@/app/_lib/types/usersTypes";

const tableColumns = [
  "№",
  "Customer",
  "Food",
  "Ordered Date",
  "Total",
  "Delivery Address",
  "Delivery Status",
];

const OrdersPage = async () => {
  const users = await getUsers();

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow>
          {tableColumns.map((title) => {
            return (
              <TableHead
                className="font-extrabold, text-lg text-orange-700"
                key={title}
              >
                {title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {users?.users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.foodOrder.map((order) =>
                  order.foodOrderItems.map(
                    (item) => item.quantity.toString().split(" ")[0],
                  ),
                )}
              </TableCell>
              <TableCell>
                {user.foodOrder.map((order) =>
                  new Date(order.createdAt).toLocaleString(),
                )}
              </TableCell>
              <TableCell>
                {user.foodOrder.map((order) => {
                  return <div key={order.id}>$ {order.totalPrice}</div>;
                })}
              </TableCell>
              <TableCell>
                {user.foodOrder.map((order) => {
                  return <div key={order.id}>{order.id} address</div>;
                })}
              </TableCell>
              <TableCell>
                <OrderStatusDropDown orders={user.foodOrder} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default OrdersPage;
type OrderStatusDropDownProps = {
  orders: Order[];
};
export const OrderStatusDropDown = ({ orders }: OrderStatusDropDownProps) => {
  const status = ["PENDING", "DELIVERED", "CANCELED"];
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
