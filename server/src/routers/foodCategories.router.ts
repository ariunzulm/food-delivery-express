import express from "express";
import { getFoodCategories } from "../controllers/food-categories/get-food-catergories";
import { getFoodCategoryById } from "../controllers/food-categories/get-food-catogery-by-id";
import { createFoodCategory } from "../controllers/food-categories/create-food-category";
import { updateFoodCategoryById } from "../controllers/food-categories/update-food-category";
import { deleteFoodCategoryById } from "../controllers/food-categories/delete-food-category";

const router = express.Router();

router.get("/", getFoodCategories);
router.get("/:id", getFoodCategoryById);
router.post("/", createFoodCategory);
router.put("/:id", updateFoodCategoryById);
router.delete("/:id", deleteFoodCategoryById);
export default router;
