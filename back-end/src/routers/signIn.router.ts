import express from "express";
import { signIn } from "../controllers/authentification/signIn";
import { resetPassword } from "../controllers/authentification/resetPassword";
const router = express.Router();

router.post("/", signIn);
router.post("/", resetPassword);
export default router;
