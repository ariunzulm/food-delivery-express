import express from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { createNewOrder } from "../controllers/orders/create-orders";
import { deleteOrderById } from "../controllers/orders/delete-order";
import { updatedOrderById } from "../controllers/orders/update-order";

const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", createNewOrder);
router.delete("/:id", deleteOrderById);
router.put("/:id", updatedOrderById);

export default router;
