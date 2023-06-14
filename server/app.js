import express from "express"
const PORT = process.env.PORT || 4000;
import authRoutes from "./Routes/authRoutes.js";
import Connection from "./Config/database.js";
import cookieParser from "cookie-parser";

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())

//morgan logger
app.use(morgan("tiny"))

// Routes
app.use('/api/v1', authRoutes);
Connection();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
