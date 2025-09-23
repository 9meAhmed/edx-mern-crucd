import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import errorHandler from "./middlewares/errorHandler.js";
import createUserTable from "./data/createUserTable.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

createUserTable();

// Routes
app.use("/api", userRoutes);

// Error handling middleware
app.use(errorHandler);

// Server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
