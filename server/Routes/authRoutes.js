import express from "express";
import { signupUser, loginUser , logoutUser} from "../Controllers/authController.js"

const router = express.Router();

// Route for user signup
router.post("/signup", signupUser);

// Route for user login
router.post("/login", loginUser);

// Route for user logout
router.post("/logout", logoutUser);

export default router;
