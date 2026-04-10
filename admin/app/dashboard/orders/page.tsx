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
  const orders = await getOrders();
  console.log(orders, "orders page");
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
        {/* {orders?.map((order, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{order.user.email}</TableCell>
              <TableCell>
                {order.foodOrderItems.map(
                  (order) => order.quantity.toString().split(" ")[0],
                )}
              </TableCell>
              <TableCell>
                {order.foodOrderItems.map((order) =>
                  new Date(order.createdAt).toLocaleString(),
                )}
              </TableCell>
              <TableCell>
                {<div key={order.id}>$ {order.totalPrice}</div>}
              </TableCell>
              <TableCell>
                {<div key={order.id}>{order.id} address</div>}
              </TableCell>
              <TableCell>
                <OrderStatus orders={orders} user={order.userId} />
              </TableCell>
            </TableRow>
          );
        })} */}
      </TableBody>
    </Table>
  );
};
export default OrdersPage;
