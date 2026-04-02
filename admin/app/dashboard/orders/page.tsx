import { getOrders } from "@/app/lib/servers/get-Orders";
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
import { Ban, ClockArrowDown, PackageCheck } from "lucide-react";
import { getUser, getUsers } from "@/app/lib/servers/get-users";

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
  const order = await getOrders();
  console.log("users:", users);
  console.log("orders: ", order);

  return (
    <Table>
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
                <DropdownMenuIcons />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default OrdersPage;

export const DropdownMenuIcons = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div>{/* <Status /> */}Status </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <ClockArrowDown />
          PENDING
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PackageCheck />
          DELIVERED
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Ban />
          CANCELED
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const Status = async () => {
  const users = await getUsers();
  return (
    <Dialog>
      <form>
        <DialogTrigger>
          {<Button variant="outline">PENDING</Button>}
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle className="uppercase"></DialogTitle>
          </DialogHeader>
          <DialogDescription>
            {users?.users.map((user) =>
              user.foodOrder.map((order) => (
                <div
                  key={order.id}
                  className="border border-red-50 w-fit flex justify-between"
                >
                  {order.status}
                </div>
              )),
            )}
          </DialogDescription>
          <DialogFooter>
            <DialogClose>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
