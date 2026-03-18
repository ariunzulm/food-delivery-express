import express from "express";
import usersRouter from "./routers/users.router";
import foodCatergoriesRouter from "./routers/foodCategories.router";
import foodsRouter from "./routers/foods.router";
import ordersRouter from "./routers/orders.router";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", usersRouter);
app.use("/categories", foodCatergoriesRouter);
app.use("/foods", foodsRouter);
app.use("/orders", ordersRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
