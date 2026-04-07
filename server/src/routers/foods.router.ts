import express from "express";
import { getFoods } from "../controllers/foods/get-foods";
import { getFoodById } from "../controllers/foods/get-food-by-id";
import { createFood } from "../controllers/foods/create-foods";
import { updateFoodById } from "../controllers/foods/update-food";
import { deleteFoodById } from "../controllers/foods/delete-foods";
import { authMiddleware } from "../controllers/middleware/auth-Middleware";

const router = express.Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", authMiddleware, createFood);
router.put("/:id", updateFoodById);
router.delete("/:id", deleteFoodById);

export default router;
