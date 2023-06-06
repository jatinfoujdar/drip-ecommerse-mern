import express from "express"
const app = express();
const PORT = process.env.PORT || 4000;
import authRoutes from "./Routes/authRoutes.js";
import Connection from "./Config/database.js";


// Middleware
app.use(express.json());

// Routes
app.use('/api/v1', authRoutes);
Connection();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
