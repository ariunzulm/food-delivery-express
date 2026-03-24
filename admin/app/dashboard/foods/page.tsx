import { getOrders } from "@/app/lib/servers/get-Orders";
import { getUsers } from "@/app/lib/servers/get-users";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tableColumns = [
  "№",
  "Customer",
  "Food",
  "Ordered Date",
  "Total",
  "Delivery Address",
  "Delivery Status",
];

const FoodMenuTable = async () => {
  const { users } = await getUsers();
  const order = await getOrders();
  console.log(users, "users");
  return;
  return (
    <Table className="">
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
        {users.map((user, index) => {
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {user.foodOrder.map((order) =>
                  order.foodOrderItems.map((item) => item.quantity),
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
                {user.foodOrder.map((order) => {
                  return (
                    <div
                      key={order.id}
                      className="bg-orange-700 flex px-5 rounded-lg text-white"
                    >
                      {order.status}
                    </div>
                  );
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default FoodMenuTable;
//   const pureData = users.map((user) => {
//     if (user.foodOrder.length === 0) {
//       user.foodOrder = []
//     }

//     const clean = {
//       email: user.email,
//       id: user.id,
//       totalPrice: user.foodOrder[0].totalPrice,
//       orderStatus: user.foodOrder[0].status,
//       orderDate: user.foodOrder[0].createdAt,
//       foodOrderItem: user.foodOrder[0].foodOrderItems,
//     };

//     return clean;
//   });
