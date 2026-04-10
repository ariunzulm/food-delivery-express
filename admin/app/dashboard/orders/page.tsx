import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { OrderStatus } from "./_components/OrderStatus";
import { getOrders } from "@/app/_lib/servers/get-Orders";
import { Input } from "@/components/ui/input";

const tableColumns = [
  "",
  "№",
  "Customer",
  "Food",
  "Ordered Date",
  "Total",
  "Delivery Address",
  "Delivery Status",
];

const OrdersPage = async () => {
  const orders = await getOrders();
  console.log(orders);

  return (
    <Table className="max-w-250 mx-auto p-10">
      <TableHeader>
        <TableRow>
          {tableColumns.map((title) => {
            return (
              <TableHead
                className=" text-lg cursor-pointer px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all duration-150 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-700 dark:hover:text-zinc-300"
                key={title}
              >
                {title}
              </TableHead>
            );
          })}
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders?.map((order, index) => {
          return (
            <TableRow key={index}>
              <TableCell>
                <Input type="checkbox" className="w-4" />
              </TableCell>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>Food detail</TableCell>
              <TableCell>{order.totalPrice}</TableCell>
              <TableCell>
                {new Date(order.createdAt).toLocaleString()}
              </TableCell>
              <TableCell>{order.user.phoneNumber}</TableCell>
              <TableCell>
                <OrderStatus orderId={order.id} orderStatus={order.status} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
export default OrdersPage;
