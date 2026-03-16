import express from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { createOrder } from "../controllers/orders/create-orders";

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", createOrder);
// router.delete("/users/:id", deleteUserById);

export default router;
