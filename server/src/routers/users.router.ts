import express from "express";
import { getUsers } from "../controllers/users/get-users";
import { getUserById } from "../controllers/users/get-user-by-id";
import { createUser } from "../controllers/users/create-user";
import { updateUserById } from "../controllers/users/update-user";
import { deleteUserById } from "../controllers/users/delete-user";
import { signIn } from "../controllers/authentification/signIn";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUserById);
router.delete("/:id", deleteUserById);
router.post("/signIn", signIn);

export default router;
