import express from "express"
const app = express();
const PORT = process.env.PORT || 5000;
import authRoutes from "./Routes/authRoutes.js";

// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
