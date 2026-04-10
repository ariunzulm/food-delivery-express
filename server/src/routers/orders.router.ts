import express from "express";
import { getOrders } from "../controllers/orders/get-orders";
import { createNewOrder } from "../controllers/orders/create-orders";
import { deleteOrderById } from "../controllers/orders/delete-order";
import { updatedOrderById } from "../controllers/orders/update-order";
import { getOrderByUser } from "../controllers/orders/get-order-by-id-User";

import adminMiddleware from "../controllers/middleware/admin-Middleware";
import { getOrderById } from "../controllers/orders/get-order-by-id";
import { authMiddleware } from "../controllers/middleware/auth-Middleware";

const router = express.Router();

// router.get("/", authMiddleware, getOrders);
router.get("/", getOrders);
router.get("/:id", authMiddleware, adminMiddleware, getOrderById);
router.post("/", authMiddleware, createNewOrder);

router.delete("/:id", authMiddleware, adminMiddleware, deleteOrderById);
router.put("/:id", authMiddleware, adminMiddleware, updatedOrderById);

router.get("/:id", authMiddleware, getOrderByUser);

export default router;
