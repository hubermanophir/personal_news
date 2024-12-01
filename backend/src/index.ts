import express from "express";
import router from "./routes/index";
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./models/User";
const app = express();
const PORT = 4000;

dotenv.config();
// Middleware
app.use(express.json());

// Routes
app.use("/api/v2", router);

mongoose
  .connect(process.env.MONGO_DB_URI || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
