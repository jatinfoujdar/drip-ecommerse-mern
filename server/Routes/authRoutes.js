import express from "express";
import { signupUser, loginUser } from "../Controllers/authController.js";

const router = express.Router();

// Route for user registration
router.post("/signup", signupUser);

// Route for user login
router.post("/login", loginUser);

export default router;
