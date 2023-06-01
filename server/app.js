import express from "express";
const app = express();
const PORT = process.env.PORT || 4000;
import Connection from './Config/database.js';

// Middleware
// app.use(express.json());

// Routes
// app.use('/api/auth', require('./routes/auth'));
Connection()
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
